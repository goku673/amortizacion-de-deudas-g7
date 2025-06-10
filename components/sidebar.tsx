"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface Section {
  id: string
  title: string
  icon: LucideIcon
}

interface SidebarProps {
  sections: Section[]
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Sidebar({ sections, activeSection, onSectionChange }: SidebarProps) {
  return (
    <motion.aside
      className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl border-r border-gray-200 z-10"
      initial={{ x: -264 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="p-6">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-blue-medium">AmortCalc</h2>
          <p className="text-sm text-gray-500 mt-1">Sistema de Amortización</p>
        </motion.div>

        <nav className="space-y-2">
          {sections.map((section, index) => {
            const Icon = section.icon
            const isActive = activeSection === section.id

            return (
              <motion.button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  isActive
                    ? "bg-blue-medium text-white shadow-lg"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-navy"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index + 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon size={20} />
                <span className="font-medium">{section.title}</span>
              </motion.button>
            )
          })}
        </nav>
      </div>
    </motion.aside>
  )
}
