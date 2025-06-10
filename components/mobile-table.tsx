"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface FilaAmortizacion {
  periodo: number
  saldoInicial: number
  interes: number
  amortizacion: number
  cuota: number
  saldoFinal: number
}

interface MobileTableProps {
  data: FilaAmortizacion[]
}

export function MobileTable({ data }: MobileTableProps) {
  return (
    <div className="space-y-3 sm:hidden">
      {data.map((fila, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * index }}
        >
          <Card className="shadow-sm">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-blue-navy">Período {fila.periodo}</h4>
                <span className="text-lg font-bold text-blue-medium">${fila.cuota.toFixed(0)}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-blue-medium">Saldo Inicial</p>
                  <p className="font-medium text-blue-navy">${fila.saldoInicial.toFixed(0)}</p>
                </div>
                <div>
                  <p className="text-blue-medium">Saldo Final</p>
                  <p className="font-medium text-blue-navy">${fila.saldoFinal.toFixed(0)}</p>
                </div>
                <div>
                  <p className="text-red-bright">Interés</p>
                  <p className="font-medium text-red-dark">${fila.interes.toFixed(0)}</p>
                </div>
                <div>
                  <p className="text-green-600">Amortización</p>
                  <p className="font-medium text-green-700">${fila.amortizacion.toFixed(0)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
