"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, X, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed"
    platform: string
  }>
  prompt(): Promise<void>
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowInstallPrompt(true)
    }

    const installedHandler = () => {
      setIsInstalled(true)
      setShowInstallPrompt(false)
    }

    window.addEventListener("beforeinstallprompt", handler)
    window.addEventListener("appinstalled", installedHandler)

    // Verificar si ya está instalado
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler)
      window.removeEventListener("appinstalled", installedHandler)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    }
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    // Guardar en localStorage para no mostrar por un tiempo
    localStorage.setItem("installPromptDismissed", Date.now().toString())
  }

  // No mostrar si ya está instalado o fue rechazado recientemente
  useEffect(() => {
    const dismissed = localStorage.getItem("installPromptDismissed")
    if (dismissed) {
      const dismissedTime = Number.parseInt(dismissed)
      const dayInMs = 24 * 60 * 60 * 1000
      if (Date.now() - dismissedTime < dayInMs) {
        setShowInstallPrompt(false)
      }
    }
  }, [])

  if (isInstalled) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Card className="bg-green-100 border-green-500">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-green-700">
              <Smartphone className="h-5 w-5" />
              <span className="text-sm font-medium">¡App instalada correctamente!</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <AnimatePresence>
      {showInstallPrompt && deferredPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto"
        >
          <Card className="bg-blue-navy text-white shadow-2xl">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-light p-2 rounded-lg">
                    <Download className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">¡Instala AmortCalc!</h3>
                    <p className="text-blue-100 text-sm mb-3">
                      Instala la app en tu dispositivo para usarla sin conexión a internet
                    </p>
                    <div className="flex space-x-2">
                      <button
                        onClick={handleInstall}
                        className="bg-blue-light hover:bg-blue-medium px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Instalar
                      </button>
                      <button
                        onClick={handleDismiss}
                        className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Ahora no
                      </button>
                    </div>
                  </div>
                </div>
                <button onClick={handleDismiss} className="text-blue-100 hover:text-white p-1">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
