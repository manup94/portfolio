"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormState } from "react-dom"
import { useForm } from "react-hook-form"
import { useRef } from "react"
import { ContactForm } from "@/app/actions"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

const schema = z.object({
  emailContact: z
    .string()
    .trim()
    .email({ message: "Introduce un email válido" }),
  name: z.string().trim().min(1, { message: "Este campo es requerido" }),
  message: z.string().trim().min(1, { message: "Este campo es requerido" }),
})

type SchemaType = z.infer<typeof schema>

export function Form() {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, formAction] = useFormState(ContactForm, {
    message: "",
  })
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      emailContact: "",
      message: "",
    },
  })
  return (
    <section id="contacto" className="h-[100vh] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {!isSubmitSuccessful ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="lg:p-20 p-4 md:w-1/2 w-11/12 flex flex-col gap-12 mx-auto text-white shadow-lg shadow-black/20 rounded-xl bg-white/5 ring-1 ring-black/5"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">¿Tienes algún proyecto?</h2>
              <p className="text-neutral-300">Trabajemos juntos</p>
            </div>
            <form
              ref={formRef}
              action={formAction}
              onSubmit={(evt) => {
                evt.preventDefault()
                handleSubmit(() => {
                  formAction(new FormData(formRef.current!))
                })(evt)
              }}
              className="flex flex-col justify-center gap-5"
            >
              <div className="xl:flex justify-between">
                <motion.fieldset
                  initial={{ height: "70px" }}
                  animate={{ height: errors.name ? "90px" : "70px" }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-1 xl:mb-0 mb-5"
                >
                  <div className="flex flex-col xl:gap-2.5 gap-1 z-30">
                    <label className="font-semibold" htmlFor="name">
                      Nombre
                    </label>
                    <input
                      type="text"
                      data-error={!!errors.name?.message}
                      placeholder="Manuel..."
                      className="rounded-md bg-white px-2.5 py-2 outline-purple-800 border-blue-700 border-[1px] text-black data-[error=true]:outline-red-600"
                      {...register("name")}
                    />
                  </div>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-red-500 z-10"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </motion.fieldset>
                <motion.fieldset
                  initial={{ height: "70px" }}
                  animate={{ height: errors.name ? "90px" : "70px" }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-1"
                >
                  <div className="flex flex-col xl:gap-2.5 gap-1  z-30">
                    <label className="font-semibold" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="uWj6N@example.com"
                      data-error={!!errors.emailContact?.message}
                      className="rounded-md px-2.5 py-2 bg-white outline-purple-800 border-blue-700 border-[1px] text-black data-[error=true]:outline-red-600"
                      {...register("emailContact")}
                    />
                  </div>
                  {errors.emailContact && (
                    <motion.p
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-red-500"
                    >
                      {errors.emailContact.message}
                    </motion.p>
                  )}
                </motion.fieldset>
              </div>
              <motion.div
                initial={{ height: "auto" }}
                animate={{ height: errors.message ? "auto" : "auto" }}
                transition={{ duration: 0.3 }}
                className="flex w-full flex-col gap-1"
              >
                <label className="font-semibold" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  className="h-40 resize-none rounded-md px-2.5 py-2 outline-purple-800 border-blue-700 border-[1px] text-black data-[error=true]:outline-red-600"
                  placeholder="Me pongo en contacto por..."
                  data-error={!!errors.message?.message}
                  {...register("message")}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.div
                      key={errors.message.message}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: errors.message ? "auto" : 0,
                        opacity: errors.message ? 1 : 0,
                      }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="text-red-500"
                      >
                        {errors.message.message}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <button
                id="form-btn"
                type="submit"
                className="text-white text-sm bg-blue-400 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 ease-in-out rounded-md px-2 py-3 outline-purple-800"
              >
                Enviar
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="thank-you"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="lg:p-20 p-4 md:w-1/2 w-11/12 justify-center items-center flex flex-col gap-12 mx-auto text-white shadow-lg shadow-black/20 rounded-xl bg-white/5 ring-1 ring-black/5"
          >
            <h2 className="text-center font-bold text-xl">
              Gracias por contactar. En breve recibirá una respuesta.
            </h2>
            <Image width={100} height={100} alt="Rocket" src="/rocket.svg" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
