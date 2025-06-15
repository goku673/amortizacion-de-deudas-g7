"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PenTool, HelpCircle, DollarSign, Target } from "lucide-react"

export function EjemplosPropuestosSection() {
  const ejercicios = [
    {
      titulo: "Préstamo para Motocicleta - Método Francés",
      enunciado:
        "Carlos quiere comprar una motocicleta nueva y pide un préstamo de Bs. 14.000 al banco. Le ofrecen un plan de amortización francés con una tasa de interés del 18% anual (1.5% mensual), pagadero en 12 meses.",
      preguntas: [
        "¿Cuál será la cuota mensual fija?",
        "¿Cuánto pagará en total por intereses?",
        "¿Cuál será el saldo después del pago número 6?",
        "¿Cuánto capital habrá amortizado en los primeros 3 meses?",
        "¿Cuál es el total pagado al final del préstamo?",
      ],
      datos: {
        monto: 14000,
        plazo: 12,
        tasaMensual: 1.5,
        periodicidad: "mensual",
        metodo: "francés",
      },
      resultadosEsperados: {
        cuotaPeriodica: "Bs. 1.285,26",
        totalIntereses: "Bs. 1.402,00",
        totalAmortizacion: "Bs. 14.000,00",
        totalPagado: "Bs. 15.402,00",
      },
    },
    {
      titulo: "Crédito Hipotecario - Método Alemán",
      enunciado:
        "Una familia adquiere un crédito hipotecario de $120,000 para la compra de su primera vivienda. El préstamo se acuerda bajo las siguientes condiciones: Se pagará en 10 cuotas semestrales durante 5 años, el banco utiliza el método de amortización constante (SAC), la tasa de interés es del 10% anual convertible semestralmente, y el primer pago se realiza al final del primer semestre.",
      preguntas: [
        "¿Cuál será el valor de la amortización constante por cuota?",
        "¿Cuál será la primera cuota (más alta)?",
        "¿Cuál será la última cuota (más baja)?",
        "¿Cuánto pagará en total por intereses?",
        "¿Cuál es el total pagado al final del préstamo?",
      ],
      datos: {
        monto: 120000,
        plazo: 10,
        tasa: 10,
        periodicidad: "semestral",
        metodo: "alemán",
      },
      resultadosEsperados: {
        amortizacionConstante: "$12.000,00",
        primeraCuota: "$18.000,00",
        ultimaCuota: "$12.600,00",
        totalIntereses: "$33.000,00",
        totalPagado: "$153.000,00",
      },
    },
    {
      titulo: "Préstamo Profesional - Método Francés",
      enunciado:
        "Un profesional independiente solicita un préstamo de $90,000 para modernizar su estudio. El préstamo debe ser pagado en 6 cuotas bimestrales iguales al final de cada bimestre. La entidad financiera acuerda una tasa de interés del 12% anual, convertible bimestralmente. El préstamo se amortizará utilizando el método Francés.",
      preguntas: [
        "¿Cuál será la cuota fija bimestral?",
        "¿Cuánto pagará en el primer bimestre por intereses?",
        "¿Cuánto capital habrá amortizado después de 3 pagos?",
        "¿Cuánto pagará en total por intereses?",
        "¿Cuál es el total pagado al final del préstamo?",
      ],
      datos: {
        monto: 90000,
        plazo: 6,
        tasa: 12,
        periodicidad: "bimestral",
        metodo: "francés",
      },
      resultadosEsperados: {
        cuotaPeriodica: "$18.099,00",
        primerInteres: "$1.800,00",
        totalIntereses: "$18.594,00",
        totalAmortizacion: "$90.000,00",
        totalPagado: "$108.594,00",
      },
    },
    {
      titulo: "Vagoneta Toyota Prado - SAC vs PRICE con Gracia",
      enunciado:
        "Se ofrece una vagoneta Toyota Prado 2017 con precio de $47.900. Las condiciones son: cuota inicial del 25%, bono exclusivo de $2.500, financiamiento del saldo hasta 7 años plazo con intereses del 8% capitalizable semestralmente. El pago será en 14 cuotas semestrales con 4 períodos de gracia.",
      preguntas: [
        "¿Cuál es el saldo a financiar después de la cuota inicial y el bono?",
        "¿Cuál será la cuota durante los períodos de gracia?",
        "En el método SAC: ¿Cuál es la amortización constante?",
        "En el método PRICE: ¿Cuál es la cuota fija después de la gracia?",
        "¿Cuál método resulta más económico en total?",
      ],
      datos: {
        precioInicial: 47900,
        cuotaInicial: 11975, // 25%
        bonoExclusivo: 2500,
        saldoFinanciar: 34050,
        plazo: 14,
        tasa: 8,
        periodicidad: "semestral",
        gracia: 4,
        metodo: "comparación SAC vs PRICE",
      },
      resultadosEsperados: {
        saldoFinanciar: "$34.050,00",
        cuotaGracia: "$1.362,00",
        amortizacionSAC: "$3.405,00",
        cuotaPRICE: "$4.198,06",
        totalSAC: "$46.989,00",
        totalPRICE: "$47.428,57",
      },
    },
    {
      titulo: "Préstamo Agrícola con Gracia Total - Método Francés",
      enunciado:
        "Un agricultor solicita un préstamo de Bs. 150.000 para comprar maquinaria agrícola y semillas. Debido a la naturaleza estacional de su negocio, el banco le otorga condiciones especiales: tasa de interés del 15% anual convertible cuatrimestralmente, plazo de 12 cuatrimestres (4 años), método francés, y 4 períodos de gracia total donde no realizará ningún pago. Durante la gracia, los intereses se capitalizan al saldo principal.",
      preguntas: [
        "¿Cuál es la tasa cuatrimestral efectiva?",
        "¿Cuál será el saldo de la deuda después de los 4 períodos de gracia?",
        "¿Cuál será la cuota fija cuatrimestral después de la gracia?",
        "¿Cuánto pagará en total por intereses durante todo el préstamo?",
        "¿Cuál es el total pagado al final del préstamo?",
      ],
      datos: {
        monto: 150000,
        plazo: 12,
        tasa: 15,
        periodicidad: "cuatrimestral",
        metodo: "francés",
        gracia: 4,
        tipoGracia: "total",
      },
      resultadosEsperados: {
        tasaCuatrimestral: "5,00%",
        saldoDespuesGracia: "Bs. 182.476,28",
        cuotaFija: "Bs. 27.892,15",
        totalIntereses: "Bs. 73.137,20",
        totalPagado: "Bs. 223.137,20",
      },
    },
  ]

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="border-0 shadow-xl bg-blue-light text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-2xl">
              <PenTool className="h-8 w-8" />
              <span>Ejemplos Propuestos</span>
            </CardTitle>
          </CardHeader>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card className="shadow-lg bg-yellow-50 border-l-4 border-yellow-500">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <Target className="h-6 w-6 text-yellow-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Instrucciones</h3>
                <p className="text-gray-700">
                  Resuelve cada ejercicio utilizando la calculadora de amortización. Analiza los datos proporcionados,
                  ingresa los parámetros correctos y responde las preguntas planteadas. Compara tus resultados con los
                  valores esperados.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="space-y-6">
        {ejercicios.map((ejercicio, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index + 0.3 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-800">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                  <span>
                    Ejercicio {index + 1}: {ejercicio.titulo}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Enunciado */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Enunciado</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">{ejercicio.enunciado}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Datos */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                        <DollarSign className="h-5 w-5 text-blue-navy" />
                        <span>Datos del Préstamo</span>
                      </h4>
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-navy">
                        <div className="space-y-2">
                          <p>
                            <strong>Monto:</strong>{" "}
                            {ejercicio.datos.monto
                              ? `${ejercicio.datos.monto >= 100000 ? "$" : "Bs. "}${ejercicio.datos.monto.toLocaleString()}`
                              : ejercicio.datos.precioInicial
                                ? `$${ejercicio.datos.precioInicial.toLocaleString()}`
                                : "N/A"}
                          </p>
                          <p>
                            <strong>Plazo:</strong> {ejercicio.datos.plazo} períodos
                          </p>
                          {ejercicio.datos.tasaMensual && (
                            <p>
                              <strong>Tasa mensual:</strong> {ejercicio.datos.tasaMensual}%
                            </p>
                          )}
                          {ejercicio.datos.tasa && (
                            <p>
                              <strong>Tasa anual:</strong> {ejercicio.datos.tasa}%
                            </p>
                          )}
                          <p>
                            <strong>Periodicidad:</strong> {ejercicio.datos.periodicidad}
                          </p>
                          <p>
                            <strong>Método:</strong> {ejercicio.datos.metodo}
                          </p>
                          {ejercicio.datos.gracia && (
                            <>
                              <p>
                                <strong>Períodos de gracia:</strong> {ejercicio.datos.gracia}
                              </p>
                              <p>
                                <strong>Tipo de gracia:</strong> {ejercicio.datos.tipoGracia}
                              </p>
                            </>
                          )}
                          {ejercicio.datos.precioInicial && (
                            <>
                              <p>
                                <strong>Precio inicial:</strong> ${ejercicio.datos.precioInicial.toLocaleString()}
                              </p>
                              <p>
                                <strong>Cuota inicial:</strong> ${ejercicio.datos.cuotaInicial.toLocaleString()}
                              </p>
                              <p>
                                <strong>Bono exclusivo:</strong> ${ejercicio.datos.bonoExclusivo.toLocaleString()}
                              </p>
                              <p>
                                <strong>Saldo a financiar:</strong> ${ejercicio.datos.saldoFinanciar.toLocaleString()}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Preguntas */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Preguntas a Resolver</h4>
                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-bright">
                        <ol className="space-y-2">
                          {ejercicio.preguntas.map((pregunta, pIndex) => (
                            <motion.li key={pIndex} className="flex items-start space-x-2" whileHover={{ x: 5 }}>
                              <span className="bg-red-bright text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                                {pIndex + 1}
                              </span>
                              <span className="text-gray-700">{pregunta}</span>
                            </motion.li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    {/* Resultados Esperados */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Resultados Esperados</h4>
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <div className="space-y-2">
                          {Object.entries(ejercicio.resultadosEsperados).map(([key, value]) => (
                            <p key={key}>
                              <strong>
                                {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
                              </strong>{" "}
                              {value}
                            </p>
                          ))}
                        </div>
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
