"use server"

import { z } from "zod"

export async function ContactForm(
  prevState: {
    message: string
  },
  formData: FormData
) {
  const schema = z.object({
    emailContact: z.string().email(),
    name: z.string(),
    message: z.string(),
  })
  const parse = schema.safeParse({
    name: formData.get("name"),
    emailContact: formData.get("emailContact"),
    message: formData.get("message"),
  })

  if (!parse.success) {
    return { message: "Failed to request access" }
  }

  const data = parse.data

  try {
    const response = await fetch(`https://app.loops.so/api/v1/transactional`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${process.env.API_KEY}`,
      },
      body: JSON.stringify({
        email: "mperezpradosjose@gmail.com",
        transactionalId: "clxdnvjuz00meq5wmqy62rwgc",
        dataVariables: {
          name: data.name,
          email: data.emailContact,
          message: data.message,
        },
        attachments: [],
        ...data,
      }),
    })
    const responseData = await response.json()
    console.log(responseData)
    if (!response.ok) {
      return { message: "Failed to contact" }
    }

    return {
      message: responseData.message,
    }
  } catch (e) {
    return { message: "Failed to contact" }
  }
}
