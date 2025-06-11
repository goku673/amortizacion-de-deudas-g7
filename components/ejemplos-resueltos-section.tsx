"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, CheckCircle, DollarSign, Calendar } from "lucide-react"

export function EjemplosResueltosSection() {
  const ejemplos = [
    {
      titulo: "Préstamo Personal - Método Francés",
      datos: {
        monto: 50000,
        plazo: 12,
        tasa: 18,
        periodicidad: "mensual",
        metodo: "Francés",
      },
      solucion: {
        cuota: 4992.66,
        totalIntereses: 9911.92,
        totalPagado: 59911.92,
      },
      explicacion:
        "En este ejemplo, el cliente paga una cuota fija mensual de $4,992.66. Los primeros pagos contienen más intereses, mientras que los últimos más capital.",
    },
    {
      titulo: "Préstamo Hipotecario - Método Alemán",
      datos: {
        monto: 200000,
        plazo: 8,
        tasa: 12,
        periodicidad: "trimestral",
        metodo: "Alemán",
      },
      solucion: {
        amortizacion: 25000,
        primeraQuota: 31000,
        ultimaQuota: 25750,
        totalIntereses: 54000,
      },
      explicacion:
        "Con el método alemán, la amortización es constante ($25,000 trimestrales). Las cuotas disminuyen gradualmente de $31,000 a $25,750.",
    },
    {
      titulo: "Préstamo Empresarial - Método Francés",
      datos: {
        monto: 100000,
        plazo: 6,
        tasa: 15,
        periodicidad: "semestral",
        metodo: "Francés",
      },
      solucion: {
        cuotaPeriodica: 7500,
        pagoFinal: 107500,
        totalIntereses: 45000,
        totalPagado: 145000,
      },
      explicacion:
        "Durante 5 semestres se pagan solo intereses ($7,500). En el último período se paga el capital completo más intereses ($107,500).",
    },
    {
      titulo: "Préstamo con Gracia Total",
      datos: {
        monto: 75000,
        plazo: 10,
        tasa: 16,
        periodicidad: "trimestral",
        metodo: "Francés",
        gracia: 2,
        tipoGracia: "total",
      },
      solucion: {
        cuota: 12187.5,
        totalIntereses: 22500,
        totalPagado: 97500,
      },
      explicacion:
        "Los primeros 2 trimestres no se paga nada (gracia total). A partir del 3er trimestre se pagan 8 cuotas fijas de $12,187.50.",
    },
    {
      titulo: "Préstamo con Gracia Parcial",
      datos: {
        monto: 60000,
        plazo: 8,
        tasa: 20,
        periodicidad: "cuatrimestral",
        metodo: "Francés",
        gracia: 2,
        tipoGracia: "parcial",
      },
      solucion: {
        cuotaGracia: 2500,
        cuotaNormal: 13416.67,
        totalIntereses: 15500,
        totalPagado: 75500,
      },
      explicacion:
        "Durante 2 cuatrimestres se pagan solo intereses ($2,500). Luego 6 cuotas normales de $13,416.67 que incluyen capital e intereses.",
    },
  ]

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="border-0 shadow-xl bg-red-bright text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-2xl">
              <FileText className="h-8 w-8" />
              <span>Ejemplos Resueltos</span>
            </CardTitle>
          </CardHeader>
        </Card>
      </motion.div>

      <div className="space-y-6">
        {ejemplos.map((ejemplo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index + 0.2 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-800">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span>
                    Ejemplo {index + 1}: {ejemplo.titulo}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {/* Datos del problema */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-blue-medium" />
                      <span>Datos</span>
                    </h4>
                    <div className="bg-blue-50 p-4 rounded-lg space-y-2 border-l-4 border-blue-medium">
                      <p>
                        <strong>Monto:</strong> ${ejemplo.datos.monto.toLocaleString()}
                      </p>
                      <p>
                        <strong>Plazo:</strong> {ejemplo.datos.plazo} períodos
                      </p>
                      <p>
                        <strong>Tasa:</strong> {ejemplo.datos.tasa}% anual
                      </p>
                      <p>
                        <strong>Periodicidad:</strong> {ejemplo.datos.periodicidad}
                      </p>
                      <p>
                        <strong>Método:</strong> {ejemplo.datos.metodo}
                      </p>
                      {ejemplo.datos.gracia && (
                        <>
                          <p>
                            <strong>Gracia:</strong> {ejemplo.datos.gracia} períodos
                          </p>
                          <p>
                            <strong>Tipo:</strong> {ejemplo.datos.tipoGracia}
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Solución */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-red-dark" />
                      <span>Solución</span>
                    </h4>
                    <div className="bg-red-50 p-4 rounded-lg space-y-2 border-l-4 border-red-dark">
                      {Object.entries(ejemplo.solucion).map(([key, value]) => (
                        <p key={key}>
                          <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}:</strong>
                          {typeof value === "number" ? ` $${value.toLocaleString()}` : ` ${value}`}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Explicación */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Explicación</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">{ejemplo.explicacion}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
