"use client"
import LocationIcon from "../icons/location"
import BikeIcon from "../icons/moto"
import Badget from "./experience/badget"
import TecnologyIcon from "../icons/tecnology"
import VideoGamesIcon from "../icons/videogames"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const Hero = () => {
  const text = "Manuel ".split("")
  return (
    <section
      id="hero"
      className="flex flex-col mx-auto text-left md:w-2/3 w-11/12 max-w-2xl md:h-[80vh] h-[70vh] justify-center text-white"
    >
      <h1 className="md:text-5xl text-3xl font-bold">
        ✌🏼¡Hola!, soy{" "}
        {text.map((el, i) => (
          <motion.span
            className="bg-gradient-to-tr from-blue-500 to-sky-300 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
          }}
          style={{
            display: "inline-block",
            border: "1px solid black",
          }}
        >
          .
        </motion.span>
      </h1>
      <h2 className="md:text-4xl text-xl font-semibold">
        Desarrollador Frontend
      </h2>
      <span className="md:text-xl text-lg">
        +1 Año de experiencia en equipos multidisciplinarios y Freelance, mi
        enfoque equilibra la estética visual y la funcionalidad para ofrecer
        experiencias de usuario excepcionales.
      </span>
      <div className="flex md:mx-0 mx-auto flex-wrap gap-x-3">
        <Badget text="Sevilla" icon={<LocationIcon />} />
        <Badget text="Tecnologia" icon={<TecnologyIcon />} />
        <Badget text="Videojuegos" icon={<VideoGamesIcon />} />
        <Badget text="Motociclismo" icon={<BikeIcon />} />
      </div>
    </section>
  )
}

export default Hero
