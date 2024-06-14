"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormStatus, useFormState } from "react-dom"
import { useForm } from "react-hook-form"

const schema = z.object({
  email: z.string().trim().email(),
  name: z.string().trim().min(1),
  message: z.string().trim().min(1),
})

type SchemaType = z.infer<typeof schema>

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const handleOnSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch(
        "https://app.loops.so/api/v1/transactional",
        {
          method: "POST",
          body: JSON.stringify({
            data,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: process.env.LOOPS_ID!,
          },
        }
      )
      console.log(data)
      if (response.ok) {
        const result = await response.json()
        console.log(result)
      } else {
        console.error("Error al enviar el correo")
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error)
    }
  })

  return (
    <section id="contacto" className="h-[100vh] flex flex-col justify-center">
      <div className="p-20 w-1/2 flex flex-col gap-12 mx-auto text-white shadow-lg shadow-black/20 rounded-xl bg-white/5 ring-1 ring-black/5">
        <h2 className="text-xl text-center font-bold">
          ¿Tienes un nuevo proyecto en mente?
        </h2>
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col justify-center gap-5"
        >
          <div className="flex justify-between gap-2.5 ">
            <fieldset className="flex flex-col gap-2.5">
              <label className="font-semibold" htmlFor="name">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Manuel..."
                className="rounded-md px-2.5 py-2 outline-purple-800 border-blue-700 border-[1px] text-black"
                {...register("name")}
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2.5">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder="uWj6N@example.com"
                className="rounded-md px-2.5 py-2 outline-purple-800 border-blue-700 border-[1px] text-black"
                {...register("email")}
              />
            </fieldset>
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <label className="font-semibold" htmlFor="message">
              Mensaje
            </label>
            <textarea
              className="h-48 resize-none rounded-md px-2.5 py-2 outline-purple-800 border-blue-700 border-[1px] text-black"
              placeholder="Me pongo en contacto por..."
              {...register("message")}
            />
          </div>
          <button className=" text-white text-sm bg-blue-400 hover:bg-blue-600 transition-all duration-300 ease-in-out rounded-md px-2 py-3 outline-purple-800">
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default Form
