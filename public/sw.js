const CACHE_NAME = "amortcalc-v1.2"
const STATIC_CACHE = "amortcalc-static-v1.2"
const DYNAMIC_CACHE = "amortcalc-dynamic-v1.2"

// Archivos esenciales para cachear
const STATIC_FILES = [
  "/",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  "/_next/static/css/app/layout.css",
  "/_next/static/chunks/webpack.js",
  "/_next/static/chunks/main.js",
  "/_next/static/chunks/pages/_app.js",
  "/offline.html",
]

// Instalar Service Worker
self.addEventListener("install", (event) => {
  console.log("SW: Instalando Service Worker...")
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log("SW: Cacheando archivos estáticos")
        return cache.addAll(STATIC_FILES.map((url) => new Request(url, { cache: "reload" })))
      })
      .catch((error) => {
        console.error("SW: Error al cachear archivos:", error)
      }),
  )
  self.skipWaiting()
})

// Activar Service Worker
self.addEventListener("activate", (event) => {
  console.log("SW: Activando Service Worker...")
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log("SW: Eliminando cache antiguo:", cacheName)
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
  self.clients.claim()
})

// Interceptar requests
self.addEventListener("fetch", (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Solo manejar requests del mismo origen
  if (url.origin !== location.origin) {
    return
  }

  // Estrategia Cache First para archivos estáticos
  if (
    request.destination === "script" ||
    request.destination === "style" ||
    request.destination === "image" ||
    request.url.includes("_next/static")
  ) {
    event.respondWith(
      caches
        .match(request)
        .then((response) => {
          if (response) {
            return response
          }
          return fetch(request).then((fetchResponse) => {
            const responseClone = fetchResponse.clone()
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(request, responseClone)
            })
            return fetchResponse
          })
        })
        .catch(() => {
          // Si es una imagen, devolver placeholder
          if (request.destination === "image") {
            return new Response(
              '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999">Sin imagen</text></svg>',
              {
                headers: { "Content-Type": "image/svg+xml" },
              },
            )
          }
        }),
    )
    return
  }

  // Estrategia Network First para páginas HTML
  if (request.destination === "document" || request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone()
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone)
          })
          return response
        })
        .catch(() => {
          return caches.match(request).then((response) => {
            if (response) {
              return response
            }
            // Página offline de fallback
            return caches.match("/offline.html")
          })
        }),
    )
    return
  }

  // Para otros requests, intentar red primero, luego cache
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          const responseClone = response.clone()
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone)
          })
        }
        return response
      })
      .catch(() => {
        return caches.match(request)
      }),
  )
})

// Manejar mensajes del cliente
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})

// Notificación de actualización disponible
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "GET_VERSION") {
    event.ports[0].postMessage({ version: CACHE_NAME })
  }
})
