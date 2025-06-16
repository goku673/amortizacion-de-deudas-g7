"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Smartphone, Globe, CheckCircle, QrCode, Share, Copy } from "lucide-react"
import { QRGenerator } from "@/components/qr-generator"
import { PWAInstallButton } from "@/components/pwa-install-button"

export function DownloadSection() {
  const [currentUrl, setCurrentUrl] = useState("")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setCurrentUrl(window.location.origin)
  }, [])

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Error copiando URL:", error)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "AmortCalc - Calculadora de Amortización",
          text: "Calculadora completa para amortización de préstamos",
          url: currentUrl,
        })
      } catch (error) {
        console.error("Error compartiendo:", error)
      }
    } else {
      handleCopyUrl()
    }
  }

  const downloadOptions = [
    {
      title: "Instalar como App (PWA)",
      description: "Instala directamente desde el navegador. Funciona offline y se actualiza automáticamente.",
      icon: Smartphone,
      color: "bg-blue-light",
      borderColor: "border-blue-light",
      features: [
        "✓ Funciona sin internet",
        "✓ Instalación rápida",
        "✓ Actualizaciones automáticas",
        "✓ Icono en escritorio",
      ],
    },
    {
      title: "Usar en Navegador",
      description: "Accede directamente desde cualquier navegador web moderno.",
      icon: Globe,
      color: "bg-blue-medium",
      borderColor: "border-blue-medium",
      features: [
        "✓ Sin instalación",
        "✓ Acceso inmediato",
        "✓ Compatible con todos los dispositivos",
        "✓ Siempre actualizado",
      ],
    },
    {
      title: "Compartir App",
      description: "Comparte AmortCalc con tus compañeros y colegas.",
      icon: Share,
      color: "bg-red-bright",
      borderColor: "border-red-bright",
      features: ["✓ Enlace directo", "✓ Código QR", "✓ Compartir por WhatsApp", "✓ Enviar por email"],
    },
  ]

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="border-0 shadow-xl bg-blue-navy text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-2xl">
              <Download className="h-8 w-8" />
              <span>Descargar AmortCalc</span>
            </CardTitle>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Información de la app */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card className="shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-light">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🚀 Lleva AmortCalc contigo a cualquier lugar</h3>
              <p className="text-gray-600 max-w-3xl mx-auto mb-6">
                Descarga e instala nuestra calculadora de amortización para usarla sin conexión a internet. Disponible
                como aplicación web progresiva (PWA) que funciona como una app nativa.
              </p>

              {/* Características principales */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="flex items-center justify-center space-x-2 text-green-600 bg-white p-3 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Funciona sin internet</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-green-600 bg-white p-3 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Instalación rápida</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-green-600 bg-white p-3 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Totalmente gratuita</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-green-600 bg-white p-3 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Actualizaciones automáticas</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Botón de instalación principal */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card className="shadow-lg border-2 border-blue-light">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-gray-800">🎯 Instalación Recomendada</h3>
              <p className="text-gray-600">Instala AmortCalc como una aplicación nativa en tu dispositivo</p>
              <PWAInstallButton className="text-lg px-8 py-4" />
              <p className="text-sm text-gray-500">
                Compatible con Chrome, Edge, Safari y Firefox en móviles y escritorio
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Opciones de acceso */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {downloadOptions.map((option, index) => {
          const Icon = option.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.4 }}
            >
              <Card className={`shadow-lg hover:shadow-xl transition-all h-full border-l-4 ${option.borderColor}`}>
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">{option.description}</p>

                  {/* Características */}
                  <div className="space-y-2">
                    {option.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Botón de acción */}
                  <div className="pt-4">
                    {index === 0 && <PWAInstallButton variant="secondary" className="w-full justify-center" />}
                    {index === 1 && (
                      <button className="w-full py-3 px-4 bg-blue-medium hover:bg-blue-navy text-white rounded-lg font-medium transition-colors">
                        Ya estás usándola
                      </button>
                    )}
                    {index === 2 && (
                      <button
                        onClick={handleShare}
                        className="w-full py-3 px-4 bg-red-bright hover:bg-red-dark text-white rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                      >
                        <Share className="h-4 w-4" />
                        <span>Compartir</span>
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Código QR funcional */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-800 flex items-center space-x-2">
              <QrCode className="h-6 w-6 text-blue-medium" />
              <span>Acceso Rápido con QR</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">📱 Escanea con tu móvil</h4>
                <p className="text-gray-600 mb-4">
                  Escanea este código QR con la cámara de tu teléfono para acceder directamente a AmortCalc e instalarla
                  en tu dispositivo móvil.
                </p>

                {/* URL y botones */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600 flex-1 font-mono">{currentUrl}</span>
                    <button
                      onClick={handleCopyUrl}
                      className="p-2 text-blue-medium hover:text-blue-navy transition-colors"
                      title="Copiar URL"
                    >
                      {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={handleShare}
                      className="flex-1 py-2 px-4 bg-blue-light text-white rounded-lg font-medium hover:bg-blue-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <Share className="h-4 w-4" />
                      <span>Compartir</span>
                    </button>
                    <button
                      onClick={handleCopyUrl}
                      className="py-2 px-4 border-2 border-blue-light text-blue-light rounded-lg font-medium hover:bg-blue-light hover:text-white transition-colors"
                    >
                      {copied ? "¡Copiado!" : "Copiar"}
                    </button>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  <p>
                    <strong>Versión:</strong> 1.2.0
                  </p>
                  <p>
                    <strong>Tamaño:</strong> ~2MB
                  </p>
                  <p>
                    <strong>Compatibilidad:</strong> iOS 11.3+, Android 5.0+
                  </p>
                </div>
              </div>

              {/* QR Code real */}
              <div className="flex justify-center">
                {currentUrl && (
                  <div className="text-center">
                    <QRGenerator text={currentUrl} size={200} className="mx-auto mb-4" />
                    <p className="text-sm text-gray-500">Código QR para AmortCalc</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Instrucciones detalladas */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        <Card className="shadow-lg border-l-4 border-blue-medium">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-gray-800">📋 Instrucciones de Instalación</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                  <Smartphone className="h-5 w-5 text-blue-light" />
                  <span>Instalación PWA (Recomendado)</span>
                </h4>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="bg-blue-light text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span>Abre AmortCalc en tu navegador (Chrome, Edge, Safari, Firefox)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-blue-light text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span>Busca el ícono de "Instalar" en la barra de direcciones o usa el botón azul de arriba</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-blue-light text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span>Haz clic en "Instalar" y confirma la instalación</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-blue-light text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                      4
                    </span>
                    <span>¡Listo! AmortCalc se instalará como una app nativa con icono en tu escritorio</span>
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                  <QrCode className="h-5 w-5 text-red-bright" />
                  <span>Instalación con QR (Móvil)</span>
                </h4>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="bg-red-bright text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span>Abre la cámara de tu teléfono o una app de escaneo QR</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-red-bright text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span>Escanea el código QR de arriba</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-red-bright text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span>Toca el enlace que aparece para abrir AmortCalc</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-red-bright text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                      4
                    </span>
                    <span>Sigue las instrucciones de instalación PWA en tu móvil</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Compatibilidad */}
            <div className="mt-6 p-4 bg-blue-navy text-white rounded-lg">
              <h5 className="font-semibold mb-3">🌐 Compatibilidad</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">📱 Móviles:</p>
                  <ul className="space-y-1 opacity-90">
                    <li>• iOS 11.3+ (Safari)</li>
                    <li>• Android 5.0+ (Chrome, Firefox)</li>
                    <li>• Samsung Internet 4.0+</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">💻 Escritorio:</p>
                  <ul className="space-y-1 opacity-90">
                    <li>• Chrome 73+</li>
                    <li>• Edge 79+</li>
                    <li>• Firefox 90+</li>
                    <li>• Safari 14+</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
