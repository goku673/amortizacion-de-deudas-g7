"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Mail, Phone, MapPin, GraduationCap } from "lucide-react"

export function IntegrantesSection() {
  const integrantes = [
    {
      nombre: "Ana García Rodríguez",
      rol: "Líder del Proyecto",
      carrera: "Ingeniería Financiera",
      semestre: "8vo Semestre",
      email: "ana.garcia@universidad.edu",
      telefono: "+52 555 123 4567",
      ubicacion: "Ciudad de México, México",
      especialidad: "Análisis Financiero y Modelado Matemático",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      nombre: "Carlos Mendoza Silva",
      rol: "Desarrollador Frontend",
      carrera: "Ingeniería en Sistemas",
      semestre: "7mo Semestre",
      email: "carlos.mendoza@universidad.edu",
      telefono: "+52 555 234 5678",
      ubicacion: "Guadalajara, México",
      especialidad: "Desarrollo Web y Interfaces de Usuario",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      nombre: "María Elena Vásquez",
      rol: "Analista Matemática",
      carrera: "Matemáticas Aplicadas",
      semestre: "8vo Semestre",
      email: "maria.vasquez@universidad.edu",
      telefono: "+52 555 345 6789",
      ubicacion: "Monterrey, México",
      especialidad: "Cálculo Actuarial y Estadística Financiera",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      nombre: "Roberto Jiménez López",
      rol: "Especialista en UX/UI",
      carrera: "Diseño Digital",
      semestre: "6to Semestre",
      email: "roberto.jimenez@universidad.edu",
      telefono: "+52 555 456 7890",
      ubicacion: "Puebla, México",
      especialidad: "Experiencia de Usuario y Diseño de Interfaces",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      nombre: "Sofía Hernández Cruz",
      rol: "Documentación y Testing",
      carrera: "Ingeniería Industrial",
      semestre: "7mo Semestre",
      email: "sofia.hernandez@universidad.edu",
      telefono: "+52 555 567 8901",
      ubicacion: "Tijuana, México",
      especialidad: "Gestión de Procesos y Control de Calidad",
      avatar: "/placeholder.svg?height=120&width=120",
    },
  ]

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="border-0 shadow-xl bg-red-dark text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-2xl">
              <Users className="h-8 w-8" />
              <span>Integrantes del Equipo</span>
            </CardTitle>
          </CardHeader>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card className="shadow-lg bg-blue-50 border-l-4 border-blue-light">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Proyecto: Calculadora de Amortización de Deudas</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Este proyecto fue desarrollado como parte del curso de Matemáticas Financieras, con el objetivo de crear
                una herramienta práctica y educativa para el cálculo y análisis de diferentes métodos de amortización de
                préstamos.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {integrantes.map((integrante, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index + 0.3 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <CardHeader className="text-center pb-4">
                <motion.div
                  className="mx-auto mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={integrante.avatar || "/placeholder.svg"}
                    alt={integrante.nombre}
                    className="w-24 h-24 rounded-full mx-auto border-4 border-gradient-to-r from-blue-500 to-red-500 shadow-lg"
                  />
                </motion.div>
                <CardTitle className="text-xl text-gray-800">{integrante.nombre}</CardTitle>
                <p className="text-blue-600 font-semibold">{integrante.rol}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <GraduationCap className="h-4 w-4 text-blue-light" />
                    <div>
                      <p className="font-medium">{integrante.carrera}</p>
                      <p className="text-sm">{integrante.semestre}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="h-4 w-4 text-red-bright" />
                    <p className="text-sm">{integrante.email}</p>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="h-4 w-4 text-blue-medium" />
                    <p className="text-sm">{integrante.telefono}</p>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4 text-red-dark" />
                    <p className="text-sm">{integrante.ubicacion}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Especialidad</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{integrante.especialidad}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-800">Información del Proyecto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Detalles Académicos</h4>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Universidad:</strong> Universidad Tecnológica Nacional
                  </p>
                  <p>
                    <strong>Facultad:</strong> Ingeniería y Ciencias Aplicadas
                  </p>
                  <p>
                    <strong>Materia:</strong> Matemáticas Financieras
                  </p>
                  <p>
                    <strong>Profesor:</strong> Dr. Fernando Martínez González
                  </p>
                  <p>
                    <strong>Período:</strong> Semestre Agosto-Diciembre 2024
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Tecnologías Utilizadas</h4>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Frontend:</strong> Next.js, React, TypeScript
                  </p>
                  <p>
                    <strong>Estilos:</strong> Tailwind CSS, Framer Motion
                  </p>
                  <p>
                    <strong>Componentes:</strong> shadcn/ui
                  </p>
                  <p>
                    <strong>Matemáticas:</strong> Cálculos financieros personalizados
                  </p>
                  <p>
                    <strong>Fecha de entrega:</strong> Diciembre 2024
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
