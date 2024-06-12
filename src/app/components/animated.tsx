// Importaciones necesarias
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const Animated = () => {
  const [showText, setShowText] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false)
    }, 3000) // Cambia el tiempo aquí según tus necesidades (3000 ms = 3 segundos)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex justify-center items-center h-screen text-2xl">
      <AnimatePresence>
        {showText ? (
          <motion.span
            key="text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            Esta es una <strong className="font-bold">palabra</strong> que
            cambiará.
          </motion.span>
        ) : (
          <motion.span
            key="svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            Esta es una{" "}
            <strong className="font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block w-6 h-6"
              >
                <path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"></path>
                <polyline points="3 6 12 13 21 6"></polyline>
                <line x1="12" y1="13" x2="12" y2="21"></line>
              </svg>
            </strong>
            que ha cambiado.
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
