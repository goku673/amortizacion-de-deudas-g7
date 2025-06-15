"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Section {
  id: string
  title: string
  icon: LucideIcon
}

interface MobileSidebarProps {
  sections: Section[]
  activeSection: string
  onSectionChange: (section: string) => void
  isOpen: boolean
  onClose: () => void
}

export function MobileSidebar({ sections, activeSection, onSectionChange, isOpen, onClose }: MobileSidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl border-r border-gray-200 z-50 lg:hidden"
          initial={{ x: -320 }}
          animate={{ x: 0 }}
          exit={{ x: -320 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              {/* Logo y título */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-medium to-blue-navy rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">AC</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-blue-medium">AmortCalc</h2>
                  <p className="text-xs text-gray-500">Sistema de Amortización</p>
                </div>
              </div>

              <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Línea decorativa */}
            <div className="w-full h-px bg-gradient-to-r from-blue-light via-blue-medium to-blue-navy opacity-30 mb-6"></div>

            <nav className="space-y-2">
              {sections.map((section, index) => {
                const Icon = section.icon
                const isActive = activeSection === section.id

                return (
                  <motion.button
                    key={section.id}
                    onClick={() => onSectionChange(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-4 rounded-lg text-left transition-all duration-200 ${
                      isActive
                        ? "bg-blue-medium text-white shadow-lg"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-navy"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon size={22} />
                    <span className="font-medium text-base">{section.title}</span>
                  </motion.button>
                )
              })}
            </nav>

            {/* Footer del sidebar móvil */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-3"></div>
                <p className="text-xs text-gray-500">Grupo 7 - Sistemas Económicos</p>
                <p className="text-xs text-gray-400">UMSS 2025</p>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
