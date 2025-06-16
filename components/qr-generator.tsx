"use client"

import { useEffect, useState } from "react"

interface QRGeneratorProps {
  text: string
  size?: number
  className?: string
}

export function QRGenerator({ text, size = 200, className = "" }: QRGeneratorProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string>("")

  useEffect(() => {
    generateQR(text, size)
  }, [text, size])

  const generateQR = async (text: string, size: number) => {
    try {
      // Crear QR usando API pública de QR Server
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}&format=png&margin=10&color=1E3A8A&bgcolor=FFFFFF`
      setQrDataUrl(qrUrl)
    } catch (error) {
      console.error("Error generando QR:", error)
      // Fallback: generar QR simple con canvas
      generateSimpleQR(text, size)
    }
  }

  const generateSimpleQR = (text: string, size: number) => {
    // Crear un QR simple usando canvas (fallback)
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = size
    canvas.height = size

    // Fondo blanco
    ctx.fillStyle = "#FFFFFF"
    ctx.fillRect(0, 0, size, size)

    // Crear patrón simple de QR
    ctx.fillStyle = "#1E3A8A"
    const cellSize = size / 25

    // Esquinas (marcadores de posición)
    const drawCorner = (x: number, y: number) => {
      ctx.fillRect(x * cellSize, y * cellSize, 7 * cellSize, 7 * cellSize)
      ctx.fillStyle = "#FFFFFF"
      ctx.fillRect((x + 1) * cellSize, (y + 1) * cellSize, 5 * cellSize, 5 * cellSize)
      ctx.fillStyle = "#1E3A8A"
      ctx.fillRect((x + 2) * cellSize, (y + 2) * cellSize, 3 * cellSize, 3 * cellSize)
    }

    drawCorner(0, 0) // Esquina superior izquierda
    drawCorner(18, 0) // Esquina superior derecha
    drawCorner(0, 18) // Esquina inferior izquierda

    // Patrón de datos simulado
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; j++) {
        if ((i < 9 && j < 9) || (i < 9 && j > 15) || (i > 15 && j < 9) || i === 6 || j === 6) {
          continue
        }
        if ((i + j + text.length) % 3 === 0) {
          ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize)
        }
      }
    }

    setQrDataUrl(canvas.toDataURL())
  }

  if (!qrDataUrl) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg ${className}`}
        style={{ width: size, height: size }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-medium mx-auto mb-2"></div>
          <p className="text-gray-500 text-sm">Generando QR...</p>
        </div>
      </div>
    )
  }

  return (
    <img
      src={qrDataUrl || "/placeholder.svg"}
      alt={`Código QR para: ${text}`}
      width={size}
      height={size}
      className={`rounded-lg shadow-lg ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
