import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AmortCalc - Calculadora de Amortización",
  description: "Calculadora completa para amortización de préstamos - Grupo 7 UMSS",
  generator: "Grupo 7 - Sistemas Económicos",
  manifest: "/manifest.json",
  keywords: ["amortización", "préstamos", "calculadora", "finanzas", "UMSS", "sistemas económicos"],
  authors: [{ name: "Grupo 7 - Sistemas Económicos UMSS" }],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AmortCalc",
    startupImage: "/icon-512.png",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "AmortCalc",
    title: "Calculadora de Amortización - AmortCalc",
    description: "Herramienta completa para cálculo de amortización de préstamos desarrollada por Grupo 7 UMSS",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "AmortCalc Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "AmortCalc - Calculadora de Amortización",
    description: "Calculadora de Amortización de Préstamos - Grupo 7 UMSS",
    images: ["/icon-512.png"],
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "application-name": "AmortCalc",
    "msapplication-TileColor": "#1E90FF",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-192.png" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="theme-color" content="#1E90FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AmortCalc" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#1E90FF" />
        <meta name="msapplication-TileImage" content="/icon-144.png" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('✅ SW registrado correctamente:', registration.scope);
                      
                      // Verificar actualizaciones
                      registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        if (newWorker) {
                          newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                              console.log('🔄 Nueva versión disponible');
                              // Aquí podrías mostrar una notificación de actualización
                            }
                          });
                        }
                      });
                    })
                    .catch(function(registrationError) {
                      console.log('❌ Error registrando SW:', registrationError);
                    });
                });
              }
              
              // Prevenir zoom en iOS
              document.addEventListener('gesturestart', function (e) {
                e.preventDefault();
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
