"use server"

export async function contactUs(
  prevState: {
    message: string
  },
  formData: FormData
) {
  try {
    const response = await fetch(`https://app.loops.so/api/v1/transactional`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: process.env.LOOPS_ID!,
      },
      body: JSON.stringify(formData),
    })

    const responseData = await response.json()
    if (!response.ok) {
      return { message: "Failed to send email" }
    }
    return {
      message: responseData.message,
    }
  } catch (e) {
    return { message: "Failed to send email" }
  }
}
