"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calculator, BookOpen, Users, FileText, PenTool, Menu, Download } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { MobileSidebar } from "@/components/mobile-sidebar"
import { InstallPrompt } from "@/components/install-prompt"
import { CalculadoraSection } from "@/components/calculadora-section"
import { ManualSection } from "@/components/manual-section"
import { EjemplosResueltosSection } from "@/components/ejemplos-resueltos-section"
import { EjemplosPropuestosSection } from "@/components/ejemplos-propuestos-section"
import { IntegrantesSection } from "@/components/integrantes-section"
import { DownloadSection } from "@/components/download-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("calculadora")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const sections = [
    { id: "calculadora", title: "Calculadora", icon: Calculator, component: CalculadoraSection },
    { id: "manual", title: "Manual de Usuario", icon: BookOpen, component: ManualSection },
    { id: "ejemplos-resueltos", title: "Ejemplos Resueltos", icon: FileText, component: EjemplosResueltosSection },
    { id: "ejemplos-propuestos", title: "Ejemplos Propuestos", icon: PenTool, component: EjemplosPropuestosSection },
    { id: "descargar", title: "Descargar App", icon: Download, component: DownloadSection },
    { id: "integrantes", title: "Integrantes", icon: Users, component: IntegrantesSection },
  ]

  const ActiveComponent = sections.find((section) => section.id === activeSection)?.component || CalculadoraSection

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="flex min-h-screen bg-blue-50">
      {/* Sidebar Desktop */}
      <div className="hidden lg:block">
        <Sidebar sections={sections} activeSection={activeSection} onSectionChange={handleSectionChange} />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        sections={sections}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8">
        {/* Mobile Header */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
            {/* Logo móvil en el centro */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-medium to-blue-navy rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">AC</span>
              </div>
              <div className="text-center">
                <h1 className="text-lg font-bold text-blue-medium">AmortCalc</h1>
              </div>
            </div>
            <div className="w-10" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <motion.header
            className="mb-6 lg:mb-8 hidden lg:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-medium to-blue-navy rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">AC</span>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                  Calculadora de Amortización de Deudas
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                  Herramienta completa para el cálculo y análisis de amortización de préstamos
                </p>
              </div>
            </div>
          </motion.header>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Install Prompt */}
      <InstallPrompt />

      {/* Overlay para móvil */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  )
}
