"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, CheckCircle, DollarSign, Calendar } from "lucide-react"

export function EjemplosResueltosSection() {
  const ejemplos = [
    {
      titulo: "Préstamo con Gracia Parcial - Método Francés",
      datos: {
        monto: 10000,
        plazo: 12,
        tasaMensual: 1.5,
        periodicidad: "mensual",
        metodo: "Francés",
        gracia: 2,
        tipoGracia: "parcial",
      },
      solucion: {
        cuotaGracia: "Bs. 150,00",
        cuotaNormal: "Bs. 1.075,94",
        totalInteresesGracia: "Bs. 300,00",
        totalInteresesResto: "Bs. 849,34",
        totalIntereses: "Bs. 1.149,34",
        totalPagado: "Bs. 11.059,40",
      },
      explicacion:
        "Juanito solicita un préstamo por Bs. 10.000 para equipar su pequeño negocio. Durante los primeros 2 meses (gracia parcial) solo paga intereses de Bs. 150,00 cada mes. A partir del mes 3, paga cuotas fijas de Bs. 1.075,94 que incluyen capital e intereses.",
    },
    {
      titulo: "Préstamo Educativo - Método Francés",
      datos: {
        monto: 45000,
        plazo: 8,
        tasa: 18,
        periodicidad: "trimestral",
        metodo: "Francés",
      },
      solucion: {
        cuotaPeriodica: "$6.822,43",
        totalIntereses: "$9.579,48",
        totalAmortizacion: "$45.000,00",
        totalPagado: "$54.579,48",
      },
      explicacion:
        "Un estudiante solicita un préstamo educativo de $45,000 para financiar una maestría. El banco le otorga el préstamo con tasa del 18% nominal anual convertible trimestralmente (4.5% trimestral), a pagar en 8 cuotas trimestrales iguales usando el método francés.",
    },
    {
      titulo: "Equipo de Laboratorio - Comparación de Métodos",
      datos: {
        valorInicial: 52000,
        bonoExclusivo: 3000,
        valorNeto: 49000,
        cuotaInicial: 14700,
        saldoFinanciar: 34300,
        plazo: 6,
        tasa: 9,
        periodicidad: "anual",
        gracia: 1,
      },
      solucion: {
        metodoSAC: {
          amortizacionConstante: "Bs. 5.716,67",
          primeraCuota: "Bs. 8.803,67",
          ultimaCuota: "Bs. 6.231,17",
          totalIntereses: "Bs. 10.804,50",
        },
        metodoPRICE: {
          cuotaFija: "Bs. 12.821,43",
          totalIntereses: "Bs. 42.628,58",
          totalPagado: "Bs. 76.928,58",
        },
      },
      explicacion:
        "Una empresa desea adquirir equipo de laboratorio valorizado en 52,000 Bs. El proveedor le ofrece un bono exclusivo de 3,000 Bs, y la empresa está dispuesta a pagar una cuota inicial del 30% del valor neto. El saldo será financiado durante 6 años, con pagos anuales y una tasa de interés del 9% anual, con un período de gracia de 1 año durante el cual se pagarán solo intereses. Se comparan ambos métodos: SAC y PRICE.",
    },
    {
      titulo: "Máquina Industrial - Comparación SAC vs PRICE con Gracia",
      datos: {
        costoInicial: 60000,
        cuotaInicial: 12000, // 20%
        bonoExclusivo: 5000,
        deudaTotal: 44000, // 80% - bono
        plazo: 7,
        tasa: 10,
        periodicidad: "anual",
        gracia: 2,
        tipoGracia: "parcial",
      },
      solucion: {
        metodoSAC: {
          amortizacionConstante: "Bs. 8.800,00",
          cuotaGracia: "Bs. 4.400,00",
          primeraCuotaNormal: "Bs. 13.200,00",
          ultimaCuota: "Bs. 9.680,00",
          totalIntereses: "Bs. 22.000,00",
        },
        metodoPRICE: {
          cuotaGracia: "Bs. 4.400,00",
          cuotaFija: "Bs. 11.607,09",
          totalIntereses: "Bs. 22.835,44",
          totalPagado: "Bs. 66.835,44",
        },
      },
      explicacion:
        "Una empresa desea adquirir una máquina industrial cuyo costo es de Bs. 60.000. Las condiciones incluyen: cuota inicial del 20% (Bs. 12.000), bono exclusivo de Bs. 5.000, financiamiento del saldo de Bs. 44.000 a 7 años con tasa del 10% anual y 2 períodos de gracia donde solo se pagan intereses.",
    },
    {
      titulo: "Préstamo Comercial con Gracia Total - Método Alemán",
      datos: {
        monto: 80000,
        plazo: 10,
        tasa: 12,
        periodicidad: "trimestral",
        metodo: "Alemán (SAC)",
        gracia: 3,
        tipoGracia: "total",
      },
      solucion: {
        tasaTrimestral: "3,00%",
        amortizacionConstante: "Bs. 11.428,57",
        primeraCuotaNormal: "Bs. 13.828,57",
        quintaCuota: "Bs. 12.485,71",
        ultimaCuota: "Bs. 11.771,43",
        totalIntereses: "Bs. 20.571,43",
        totalPagado: "Bs. 100.571,43",
      },
      explicacion:
        "Una empresa comercial solicita un préstamo de Bs. 80.000 para expandir su inventario. El banco le otorga el préstamo con las siguientes condiciones: tasa del 12% anual convertible trimestralmente (3% trimestral), plazo de 10 trimestres, método de amortización alemán (SAC), y 3 períodos de gracia total donde no se paga nada. Durante la gracia, los intereses se capitalizan al saldo principal.",
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
                <div className="space-y-6">
                  {/* Enunciado */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Enunciado del Problema</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">{ejemplo.explicacion}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Datos del problema */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
                        <DollarSign className="h-5 w-5 text-blue-medium" />
                        <span>Datos</span>
                      </h4>
                      <div className="bg-blue-50 p-4 rounded-lg space-y-2 border-l-4 border-blue-medium">
                        {ejemplo.datos.valorInicial ? (
                          // Datos del ejercicio de equipo de laboratorio
                          <>
                            <p>
                              <strong>Valor inicial:</strong> Bs. {ejemplo.datos.valorInicial.toLocaleString()}
                            </p>
                            <p>
                              <strong>Bono exclusivo:</strong> Bs. {ejemplo.datos.bonoExclusivo.toLocaleString()}
                            </p>
                            <p>
                              <strong>Valor neto:</strong> Bs. {ejemplo.datos.valorNeto.toLocaleString()}
                            </p>
                            <p>
                              <strong>Cuota inicial (30%):</strong> Bs. {ejemplo.datos.cuotaInicial.toLocaleString()}
                            </p>
                            <p>
                              <strong>Saldo a financiar:</strong> Bs. {ejemplo.datos.saldoFinanciar.toLocaleString()}
                            </p>
                            <p>
                              <strong>Plazo:</strong> {ejemplo.datos.plazo} años
                            </p>
                            <p>
                              <strong>Tasa:</strong> {ejemplo.datos.tasa}% anual
                            </p>
                            <p>
                              <strong>Gracia:</strong> {ejemplo.datos.gracia} año (solo intereses)
                            </p>
                          </>
                        ) : ejemplo.datos.costoInicial ? (
                          // Datos del ejercicio de máquina industrial
                          <>
                            <p>
                              <strong>Costo inicial:</strong> Bs. {ejemplo.datos.costoInicial.toLocaleString()}
                            </p>
                            <p>
                              <strong>Cuota inicial (20%):</strong> Bs. {ejemplo.datos.cuotaInicial.toLocaleString()}
                            </p>
                            <p>
                              <strong>Bono exclusivo:</strong> Bs. {ejemplo.datos.bonoExclusivo.toLocaleString()}
                            </p>
                            <p>
                              <strong>Deuda total:</strong> Bs. {ejemplo.datos.deudaTotal.toLocaleString()}
                            </p>
                            <p>
                              <strong>Plazo:</strong> {ejemplo.datos.plazo} años
                            </p>
                            <p>
                              <strong>Tasa:</strong> {ejemplo.datos.tasa}% anual
                            </p>
                            <p>
                              <strong>Gracia:</strong> {ejemplo.datos.gracia} años ({ejemplo.datos.tipoGracia})
                            </p>
                          </>
                        ) : (
                          // Datos de otros ejercicios
                          <>
                            <p>
                              <strong>Monto:</strong>{" "}
                              {ejemplo.datos.monto
                                ? `Bs. ${ejemplo.datos.monto.toLocaleString()}`
                                : `$${ejemplo.datos.monto || "N/A"}`}
                            </p>
                            <p>
                              <strong>Plazo:</strong> {ejemplo.datos.plazo} períodos
                            </p>
                            {ejemplo.datos.tasaMensual && (
                              <p>
                                <strong>Tasa mensual:</strong> {ejemplo.datos.tasaMensual}%
                              </p>
                            )}
                            {ejemplo.datos.tasa && (
                              <p>
                                <strong>Tasa:</strong> {ejemplo.datos.tasa}% anual
                              </p>
                            )}
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
                        {ejemplo.solucion.metodoSAC && ejemplo.solucion.metodoPRICE ? (
                          // Solución de ejercicios con comparación de métodos
                          <>
                            <div className="mb-3">
                              <p className="font-semibold text-gray-800">Método SAC:</p>
                              {Object.entries(ejemplo.solucion.metodoSAC).map(([key, value]) => (
                                <p key={key} className="ml-2">
                                  <strong>
                                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
                                  </strong>{" "}
                                  {value}
                                </p>
                              ))}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">Método PRICE:</p>
                              {Object.entries(ejemplo.solucion.metodoPRICE).map(([key, value]) => (
                                <p key={key} className="ml-2">
                                  <strong>
                                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
                                  </strong>{" "}
                                  {value}
                                </p>
                              ))}
                            </div>
                          </>
                        ) : (
                          // Solución de otros ejercicios
                          Object.entries(ejemplo.solucion).map(([key, value]) => (
                            <p key={key}>
                              <strong>
                                {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
                              </strong>{" "}
                              {value}
                            </p>
                          ))
                        )}
                      </div>
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
