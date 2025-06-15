"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Info, Calculator, TrendingUp, AlertCircle, Play, Palette } from "lucide-react"

export function ManualSection() {
  const sections = [
    {
      title: "¿Qué es la Amortización?",
      icon: Info,
      color: "bg-blue-light", // Azul claro
      borderColor: "border-blue-light",
      iconColor: "text-blue-light",
      bgColor: "bg-blue-50",
      content:
        "La amortización es el proceso de pago gradual de una deuda a través de pagos periódicos que incluyen tanto capital como intereses. Cada pago reduce el saldo pendiente del préstamo.",
    },
    {
      title: "Métodos de Amortización",
      icon: Calculator,
      color: "bg-red-bright", // Rojo brillante
      borderColor: "border-red-bright",
      iconColor: "text-red-bright",
      bgColor: "bg-red-50",
      content: [
        {
          name: "Método Francés",
          description:
            "Cuotas fijas durante todo el período. Al inicio se pagan más intereses y menos capital, gradualmente se invierte la proporción.",
        },
        {
          name: "Método Alemán",
          description:
            "Amortización constante del capital. Las cuotas son decrecientes ya que los intereses disminuyen con el saldo.",
        },
      ],
    },
    {
      title: "Períodos de Gracia",
      icon: AlertCircle,
      color: "bg-blue-navy", // Azul marino
      borderColor: "border-blue-navy",
      iconColor: "text-blue-navy",
      bgColor: "bg-blue-50",
      content: [
        {
          name: "Gracia Total",
          description: "No se paga nada durante el período de gracia. El saldo permanece igual.",
        },
        {
          name: "Gracia Parcial",
          description: "Solo se pagan intereses durante el período de gracia. El capital no se reduce.",
        },
      ],
    },
    {
      title: "Cómo Usar la Calculadora",
      icon: TrendingUp,
      color: "bg-red-dark", // Rojo oscuro
      borderColor: "border-red-dark",
      iconColor: "text-red-dark",
      bgColor: "bg-red-50",
      content:
        "1. Ingrese el monto del préstamo\n2. Defina el plazo en períodos\n3. Establezca la tasa de interés anual\n4. Seleccione la periodicidad de pago\n5. Elija el método de amortización\n6. Configure períodos de gracia si aplica\n7. Revise los resultados en la tabla",
    },
  ]

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="border-0 shadow-xl bg-blue-medium text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-2xl">
              <BookOpen className="h-8 w-8" />
              <span>Manual de Usuario</span>
            </CardTitle>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Video Tutorial Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card className="shadow-lg bg-blue-navy text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-xl">
              <Play className="h-6 w-6" />
              <span>Video Tutorial</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-blue-100">
                Aprende a usar la calculadora de amortización paso a paso con nuestro video tutorial completo.
              </p>

              {/* Video de YouTube */}
              <div className="relative w-full h-0 pb-[56.25%] bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/xXoG6wPM83c"
                  title="Tutorial de Calculadora de Amortización - Sistema AmorCal"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-800 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-white mb-2">Duración</h4>
                  <p className="text-blue-200">1 minuto</p>
                </div>
                <div className="bg-blue-800 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-white mb-2">Autor</h4>
                  <p className="text-blue-200">Freddy Zapata</p>
                </div>
                <div className="bg-blue-800 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-white mb-2">Idioma</h4>
                  <p className="text-blue-200">Español</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Paleta de Colores */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Palette className="h-6 w-6 text-blue-medium" />
              <span>Paleta de Colores del Sistema</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-blue-light w-full h-16 rounded-lg shadow-md mb-3" />
                <h4 className="font-semibold text-gray-800 text-sm">Azul Claro</h4>
                <p className="text-xs text-gray-600 font-mono">#1E90FF</p>
                <p className="text-xs text-gray-500 mt-1">Primario</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-blue-medium w-full h-16 rounded-lg shadow-md mb-3" />
                <h4 className="font-semibold text-gray-800 text-sm">Azul Medio</h4>
                <p className="text-xs text-gray-600 font-mono">#4169E1</p>
                <p className="text-xs text-gray-500 mt-1">Headers</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-red-bright w-full h-16 rounded-lg shadow-md mb-3" />
                <h4 className="font-semibold text-gray-800 text-sm">Rojo Brillante</h4>
                <p className="text-xs text-gray-600 font-mono">#FF0000</p>
                <p className="text-xs text-gray-500 mt-1">Alertas</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-red-dark w-full h-16 rounded-lg shadow-md mb-3" />
                <h4 className="font-semibold text-gray-800 text-sm">Rojo Oscuro</h4>
                <p className="text-xs text-gray-600 font-mono">#DC143C</p>
                <p className="text-xs text-gray-500 mt-1">Énfasis</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-blue-navy w-full h-16 rounded-lg shadow-md mb-3" />
                <h4 className="font-semibold text-gray-800 text-sm">Azul Marino</h4>
                <p className="text-xs text-gray-600 font-mono">#1E3A8A</p>
                <p className="text-xs text-gray-500 mt-1">Contraste</p>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Secciones del Manual */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {sections.map((section, index) => {
          const Icon = section.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.4 }}
            >
              <Card className={`shadow-lg hover:shadow-xl transition-shadow h-full border-l-4 ${section.borderColor}`}>
                <CardHeader className={section.bgColor}>
                  <CardTitle className="flex items-center space-x-2 text-gray-800">
                    <Icon className={`h-6 w-6 ${section.iconColor}`} />
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  {typeof section.content === "string" ? (
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{section.content}</p>
                  ) : (
                    <div className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className={`border-l-4 ${section.borderColor} pl-4`}
                          whileHover={{ x: 5 }}
                        >
                          <h4 className="font-semibold text-gray-800 mb-2">{item.name}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Fórmulas Importantes */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <Card className="shadow-lg border-l-4 border-blue-light">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-gray-800">Fórmulas Importantes</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-medium rounded"></div>
                  <span>Método Francés</span>
                </h4>
                <div className="bg-white p-4 rounded-lg border border-blue-medium">
                  <p className="text-sm text-gray-600 mb-2">Cuota fija:</p>
                  <p className="font-mono text-lg text-blue-navy">C = P × i / (1 - (1 + i)^-n)</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-dark rounded"></div>
                  <span>Método Alemán</span>
                </h4>
                <div className="bg-white p-4 rounded-lg border border-red-dark">
                  <p className="text-sm text-gray-600 mb-2">Amortización constante:</p>
                  <p className="font-mono text-lg text-blue-navy">A = P / n</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-navy text-white rounded-lg">
              <p className="font-semibold mb-2">Donde:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <p>
                  <strong>C</strong> = Cuota periódica
                </p>
                <p>
                  <strong>P</strong> = Principal (monto del préstamo)
                </p>
                <p>
                  <strong>i</strong> = Tasa de interés periódica
                </p>
                <p>
                  <strong>n</strong> = Número de períodos
                </p>
                <p>
                  <strong>A</strong> = Amortización del capital
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Consejos y Recomendaciones */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        <Card className="shadow-lg border-l-4 border-red-bright">
          <CardHeader className="bg-red-50">
            <CardTitle className="text-gray-800 flex items-center space-x-2">
              <AlertCircle className="h-6 w-6 text-red-bright" />
              <span>Consejos y Recomendaciones</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 text-lg">💡 Consejos Prácticos</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-light rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Compara diferentes métodos antes de decidir</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-medium rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Considera el impacto de los períodos de gracia</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-dark rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Revisa la tabla completa antes de tomar decisiones</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 text-lg">⚠️ Consideraciones</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-bright rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Las tasas pueden variar según el mercado</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-navy rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Verifica los cálculos con tu institución financiera</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-light rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Considera costos adicionales no incluidos</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
