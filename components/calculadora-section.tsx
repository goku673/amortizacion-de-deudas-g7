"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, TrendingUp, DollarSign, Calendar } from "lucide-react"
import { MobileTable } from "@/components/mobile-table"

interface FilaAmortizacion {
  periodo: number
  saldoInicial: number
  interes: number
  amortizacion: number
  cuota: number
  saldoFinal: number
}

interface Resumen {
  totalIntereses: number
  totalAmortizacion: number
  totalPagado: number
  cuota: number | string
}

export function CalculadoraSection() {
  const [monto, setMonto] = useState(30000)
  const [plazo, setPlazo] = useState(6)
  const [tasaAnual, setTasaAnual] = useState(14)
  const [periodicidad, setPeriodicidad] = useState("trimestral")
  const [metodo, setMetodo] = useState("frances")
  const [periodoGracia, setPeriodoGracia] = useState(0)
  const [tipoGracia, setTipoGracia] = useState("total")
  const [tablaAmortizacion, setTablaAmortizacion] = useState<FilaAmortizacion[]>([])
  const [resumen, setResumen] = useState<Resumen>({
    totalIntereses: 0,
    totalAmortizacion: 0,
    totalPagado: 0,
    cuota: 0,
  })

  // Calcular tasa periódica efectiva
  const calcularTasaPeriodica = () => {
    const periodosPorAno: { [key: string]: number } = {
      mensual: 12,
      bimestral: 6,
      trimestral: 4,
      cuatrimestral: 3,
      semestral: 2,
      anual: 1,
    }

    const periodos = periodosPorAno[periodicidad] || 4
    return tasaAnual / 100 / periodos
  }

  // Calcular cuota según método seleccionado
  const calcularCuota = () => {
    const tasa = calcularTasaPeriodica()
    const periodosPago = plazo - periodoGracia

    if (metodo === "frances") {
      if (periodosPago <= 0) return 0
      return (monto * tasa) / (1 - Math.pow(1 + tasa, -periodosPago))
    } else if (metodo === "aleman") {
      return monto / periodosPago
    } else if (metodo === "americano") {
      return monto * tasa
    }
    return 0
  }

  // Generar tabla de amortización
  const generarTablaAmortizacion = () => {
    const tasa = calcularTasaPeriodica()
    const cuota = calcularCuota()
    let saldo = monto
    const tabla: FilaAmortizacion[] = []
    let totalIntereses = 0
    let totalAmortizacion = 0

    for (let i = 0; i < plazo; i++) {
      const fila: FilaAmortizacion = {
        periodo: i + 1,
        saldoInicial: saldo,
        interes: 0,
        amortizacion: 0,
        cuota: 0,
        saldoFinal: saldo,
      }

      // Período de gracia
      if (i < periodoGracia) {
        if (tipoGracia === "total") {
          fila.interes = 0
          fila.cuota = 0
          fila.amortizacion = 0
        } else {
          fila.interes = saldo * tasa
          fila.cuota = fila.interes
          fila.amortizacion = 0
          totalIntereses += fila.interes
        }
      } else {
        // Períodos normales
        fila.interes = saldo * tasa

        if (metodo === "frances") {
          fila.cuota = cuota
          fila.amortizacion = cuota - fila.interes
        } else if (metodo === "aleman") {
          fila.amortizacion = cuota
          fila.cuota = fila.amortizacion + fila.interes
        } else if (metodo === "americano") {
          if (i === plazo - 1) {
            fila.amortizacion = saldo
            fila.cuota = fila.amortizacion + fila.interes
          } else {
            fila.amortizacion = 0
            fila.cuota = fila.interes
          }
        }

        totalIntereses += fila.interes
        totalAmortizacion += fila.amortizacion
      }

      fila.saldoInicial = saldo
      saldo -= fila.amortizacion || 0
      fila.saldoFinal = saldo

      tabla.push(fila)
    }

    setTablaAmortizacion(tabla)
    setResumen({
      totalIntereses,
      totalAmortizacion,
      totalPagado: totalAmortizacion + totalIntereses,
      cuota: metodo !== "americano" ? cuota : "Variable",
    })
  }

  useEffect(() => {
    generarTablaAmortizacion()
  }, [monto, plazo, tasaAnual, periodicidad, metodo, periodoGracia, tipoGracia])

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="border-0 shadow-xl bg-blue-navy text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-2xl">
              <Calculator className="h-8 w-8" />
              <span>Calculadora de Amortización</span>
            </CardTitle>
          </CardHeader>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-800">Parámetros del Préstamo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="monto">Monto del préstamo</Label>
                  <Input
                    id="monto"
                    type="number"
                    value={monto}
                    onChange={(e) => setMonto(Number.parseFloat(e.target.value))}
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="plazo">Plazo (períodos)</Label>
                  <Input
                    id="plazo"
                    type="number"
                    value={plazo}
                    onChange={(e) => setPlazo(Number.parseInt(e.target.value))}
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tasa">Tasa de interés anual (%)</Label>
                  <Input
                    id="tasa"
                    type="number"
                    step="0.01"
                    value={tasaAnual}
                    onChange={(e) => setTasaAnual(Number.parseFloat(e.target.value))}
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Periodicidad</Label>
                  <Select value={periodicidad} onValueChange={setPeriodicidad}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mensual">Mensual</SelectItem>
                      <SelectItem value="bimestral">Bimestral</SelectItem>
                      <SelectItem value="trimestral">Trimestral</SelectItem>
                      <SelectItem value="cuatrimestral">Cuatrimestral</SelectItem>
                      <SelectItem value="semestral">Semestral</SelectItem>
                      <SelectItem value="anual">Anual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Método de amortización</Label>
                  <Select value={metodo} onValueChange={setMetodo}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="frances">Francés (Cuota fija)</SelectItem>
                      <SelectItem value="aleman">Alemán (Amortización constante)</SelectItem>
                      <SelectItem value="americano">Americano (Pago final)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gracia">Períodos de gracia</Label>
                  <Input
                    id="gracia"
                    type="number"
                    value={periodoGracia}
                    onChange={(e) => setPeriodoGracia(Number.parseInt(e.target.value))}
                    min="0"
                    max={plazo - 1}
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>
              </div>

              {periodoGracia > 0 && (
                <div className="space-y-2">
                  <Label>Tipo de gracia</Label>
                  <Select value={tipoGracia} onValueChange={setTipoGracia}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="total">Total (no se paga nada)</SelectItem>
                      <SelectItem value="parcial">Parcial (solo intereses)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-800">Resumen Financiero</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <motion.div
                  className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-light"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="h-5 w-5 text-blue-light" />
                    <span className="text-sm font-medium text-blue-navy">Cuota Periódica</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-navy">
                    ${typeof resumen.cuota === "number" ? resumen.cuota.toFixed(2) : resumen.cuota}
                  </p>
                </motion.div>

                <motion.div
                  className="bg-red-100 p-4 rounded-lg border-l-4 border-red-bright"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-red-bright" />
                    <span className="text-sm font-medium text-red-dark">Total Intereses</span>
                  </div>
                  <p className="text-2xl font-bold text-red-dark">${resumen.totalIntereses.toFixed(2)}</p>
                </motion.div>

                <motion.div
                  className="bg-green-100 p-4 rounded-lg border-l-4 border-blue-medium"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-blue-medium" />
                    <span className="text-sm font-medium text-blue-navy">Total Amortización</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-navy">${resumen.totalAmortizacion.toFixed(2)}</p>
                </motion.div>

                <motion.div
                  className="bg-purple-100 p-4 rounded-lg border-l-4 border-red-dark"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="h-5 w-5 text-red-dark" />
                    <span className="text-sm font-medium text-blue-navy">Total Pagado</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-navy">${resumen.totalPagado.toFixed(2)}</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-800">Tabla de Amortización</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Tabla Desktop */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-navy text-white">
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Período</th>
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">
                      S. Inicial
                    </th>
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Interés</th>
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Amort.</th>
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Cuota</th>
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">S. Final</th>
                  </tr>
                </thead>
                <tbody>
                  {tablaAmortizacion.map((fila, index) => (
                    <motion.tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium">
                        {fila.periodo}
                      </td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 text-xs sm:text-sm">
                        ${fila.saldoInicial.toFixed(0)}
                      </td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 text-xs sm:text-sm text-red-600">
                        ${fila.interes.toFixed(0)}
                      </td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 text-xs sm:text-sm text-green-600">
                        ${fila.amortizacion.toFixed(0)}
                      </td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 text-xs sm:text-sm font-semibold">
                        ${fila.cuota.toFixed(0)}
                      </td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 text-xs sm:text-sm">
                        ${fila.saldoFinal.toFixed(0)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Vista Mobile */}
            <MobileTable data={tablaAmortizacion} />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
