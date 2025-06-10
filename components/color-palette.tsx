"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette } from "lucide-react"

export function ColorPalette() {
  const colors = [
    {
      name: "Azul Claro",
      hex: "#1E90FF",
      class: "bg-blue-light",
      usage: "Primario, botones principales, enlaces",
    },
    {
      name: "Azul Medio",
      hex: "#4169E1",
      class: "bg-blue-medium",
      usage: "Botones secundarios, headers",
    },
    {
      name: "Rojo Brillante",
      hex: "#FF0000",
      class: "bg-red-bright",
      usage: "Alertas, errores, valores negativos",
    },
    {
      name: "Rojo Oscuro",
      hex: "#DC143C",
      class: "bg-red-dark",
      usage: "Estados hover, énfasis",
    },
    {
      name: "Azul Marino",
      hex: "#1E3A8A",
      class: "bg-blue-navy",
      usage: "Texto principal, elementos de contraste",
    },
  ]

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gray-800">
          <Palette className="h-6 w-6 text-blue-600" />
          <span>Paleta de Colores</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {colors.map((color, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className={`${color.class} w-full h-20 rounded-lg shadow-md mb-3`} />
              <h4 className="font-semibold text-gray-800 text-sm">{color.name}</h4>
              <p className="text-xs text-gray-600 font-mono">{color.hex}</p>
              <p className="text-xs text-gray-500 mt-1">{color.usage}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
