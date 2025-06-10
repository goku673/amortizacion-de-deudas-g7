"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PenTool, HelpCircle, DollarSign, Target } from "lucide-react"

export function EjemplosPropuestosSection() {
  const ejercicios = [
    {
      titulo: "Préstamo Automotriz",
      enunciado:
        "Una persona desea comprar un automóvil y solicita un préstamo de $80,000 a pagar en 24 meses con una tasa de interés del 22% anual. El banco ofrece el método francés con pagos mensuales.",
      preguntas: [
        "¿Cuál será la cuota mensual fija?",
        "¿Cuánto pagará en total por intereses?",
        "¿Cuál será el saldo después del pago número 12?",
        "¿Cuánto capital habrá amortizado en los primeros 6 meses?",
      ],
      datos: {
        monto: 80000,
        plazo: 24,
        tasa: 22,
        periodicidad: "mensual",
        metodo: "francés",
      },
    },
    {
      titulo: "Préstamo Comercial con Gracia",
      enunciado:
        "Una empresa solicita un préstamo de $150,000 para capital de trabajo. Las condiciones son: 18 meses de plazo, 24% de tasa anual, pagos bimestrales, método alemán, con 2 períodos de gracia parcial.",
      preguntas: [
        "¿Cuánto pagará durante los períodos de gracia?",
        "¿Cuál será la primera cuota normal?",
        "¿Cuál será la última cuota?",
        "¿Cuál es el total de intereses a pagar?",
      ],
      datos: {
        monto: 150000,
        plazo: 9,
        tasa: 24,
        periodicidad: "bimestral",
        metodo: "alemán",
        gracia: 2,
        tipoGracia: "parcial",
      },
    },
    {
      titulo: "Inversión con Pago Americano",
      enunciado:
        "Un inversionista solicita $200,000 para un proyecto que generará ingresos al final. Acepta pagar con método americano a 5 años, con pagos semestrales y una tasa del 18% anual.",
      preguntas: [
        "¿Cuánto pagará cada semestre?",
        "¿Cuánto pagará en el último período?",
        "¿Cuál es el costo total del financiamiento?",
        "¿Qué porcentaje del monto original representan los intereses?",
      ],
      datos: {
        monto: 200000,
        plazo: 10,
        tasa: 18,
        periodicidad: "semestral",
        metodo: "americano",
      },
    },
    {
      titulo: "Préstamo Hipotecario Comparativo",
      enunciado:
        "Una familia quiere comprar una casa y puede elegir entre dos opciones de financiamiento para $300,000: Opción A: Método francés, 20 años, 15% anual, pagos mensuales. Opción B: Método alemán, 20 años, 16% anual, pagos mensuales.",
      preguntas: [
        "¿Cuál es la cuota inicial de cada opción?",
        "¿Cuál es la cuota final de cada opción?",
        "¿Cuál opción genera menos intereses totales?",
        "¿Cuál es la diferencia en el total pagado entre ambas opciones?",
      ],
      datos: {
        opcionA: { monto: 300000, plazo: 240, tasa: 15, metodo: "francés" },
        opcionB: { monto: 300000, plazo: 240, tasa: 16, metodo: "alemán" },
      },
    },
    {
      titulo: "Refinanciamiento de Deuda",
      enunciado:
        "Una empresa tiene una deuda de $120,000 que vence en 8 trimestres con método francés al 20% anual. Después de pagar 3 cuotas, decide refinanciar el saldo restante a 12 trimestres con método alemán al 18% anual.",
      preguntas: [
        "¿Cuál era la cuota original?",
        "¿Cuál es el saldo después de 3 pagos?",
        "¿Cuál será la nueva cuota inicial después del refinanciamiento?",
        "¿Cuánto ahorrará en intereses con el refinanciamiento?",
      ],
      datos: {
        original: { monto: 120000, plazo: 8, tasa: 20, metodo: "francés" },
        refinanciado: { plazo: 12, tasa: 18, metodo: "alemán" },
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
                  ingresa los parámetros correctos y responde las preguntas planteadas. Compara diferentes escenarios
                  cuando sea necesario.
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

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {/* Datos */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                        <DollarSign className="h-5 w-5 text-blue-navy" />
                        <span>Datos Proporcionados</span>
                      </h4>
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-navy">
                        {typeof ejercicio.datos.monto === "number" ? (
                          <div className="space-y-2">
                            <p>
                              <strong>Monto:</strong> ${ejercicio.datos.monto.toLocaleString()}
                            </p>
                            <p>
                              <strong>Plazo:</strong> {ejercicio.datos.plazo} períodos
                            </p>
                            <p>
                              <strong>Tasa:</strong> {ejercicio.datos.tasa}% anual
                            </p>
                            <p>
                              <strong>Periodicidad:</strong> {ejercicio.datos.periodicidad}
                            </p>
                            <p>
                              <strong>Método:</strong> {ejercicio.datos.metodo}
                            </p>
                            {ejercicio.datos.gracia && (
                              <>
                                <p>
                                  <strong>Gracia:</strong> {ejercicio.datos.gracia} períodos
                                </p>
                                <p>
                                  <strong>Tipo:</strong> {ejercicio.datos.tipoGracia}
                                </p>
                              </>
                            )}
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {Object.entries(ejercicio.datos).map(([key, value]) => (
                              <div key={key}>
                                <p className="font-medium text-gray-800">{key.toUpperCase()}:</p>
                                <div className="ml-4 space-y-1">
                                  {Object.entries(value as any).map(([subKey, subValue]) => (
                                    <p key={subKey}>
                                      <strong>{subKey}:</strong> {subValue}
                                      {subKey === "monto"
                                        ? ` (${typeof subValue === "number" ? "$" + subValue.toLocaleString() : subValue})`
                                        : ""}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
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
