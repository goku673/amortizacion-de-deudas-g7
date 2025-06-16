"use client"

import { useState, useEffect } from "react"
import { Download, Check, Smartphone } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed"
    platform: string
  }>
  prompt(): Promise<void>
}

interface PWAInstallButtonProps {
  className?: string
  variant?: "primary" | "secondary"
}

export function PWAInstallButton({ className = "", variant = "primary" }: PWAInstallButtonProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstallable, setIsInstallable] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isInstalling, setIsInstalling] = useState(false)

  useEffect(() => {
    // Verificar si ya está instalado
    const checkIfInstalled = () => {
      if (window.matchMedia("(display-mode: standalone)").matches) {
        setIsInstalled(true)
        return true
      }
      if (window.navigator.standalone === true) {
        setIsInstalled(true)
        return true
      }
      return false
    }

    if (checkIfInstalled()) return

    // Escuchar evento de instalación
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setIsInstallable(true)
    }

    const handleAppInstalled = () => {
      setIsInstalled(true)
      setIsInstallable(false)
      setDeferredPrompt(null)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    setIsInstalling(true)

    try {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice

      if (outcome === "accepted") {
        console.log("PWA instalada correctamente")
        setIsInstalled(true)
      } else {
        console.log("Instalación cancelada por el usuario")
      }
    } catch (error) {
      console.error("Error durante la instalación:", error)
    } finally {
      setIsInstalling(false)
      setDeferredPrompt(null)
      setIsInstallable(false)
    }
  }

  const getButtonContent = () => {
    if (isInstalled) {
      return {
        icon: <Check className="h-5 w-5" />,
        text: "App Instalada",
        disabled: true,
      }
    }

    if (isInstalling) {
      return {
        icon: <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current" />,
        text: "Instalando...",
        disabled: true,
      }
    }

    if (isInstallable) {
      return {
        icon: <Download className="h-5 w-5" />,
        text: "Instalar App",
        disabled: false,
      }
    }

    return {
      icon: <Smartphone className="h-5 w-5" />,
      text: "No disponible",
      disabled: true,
    }
  }

  const { icon, text, disabled } = getButtonContent()

  const baseClasses = "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200"
  const variantClasses = {
    primary: disabled
      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
      : "bg-blue-light hover:bg-blue-medium text-white shadow-lg hover:shadow-xl",
    secondary: disabled
      ? "border-2 border-gray-300 text-gray-500 cursor-not-allowed"
      : "border-2 border-blue-light text-blue-light hover:bg-blue-light hover:text-white",
  }

  return (
    <button
      onClick={handleInstall}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {icon}
      <span>{text}</span>
    </button>
  )
}
