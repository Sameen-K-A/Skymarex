import { NextRequest, NextResponse } from "next/server"

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY

interface RecaptchaResponse {
  success: boolean
  challenge_ts?: string
  hostname?: string
  "error-codes"?: string[]
}

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json(
        { success: false, error: "reCAPTCHA token is required" },
        { status: 400 }
      )
    }

    if (!RECAPTCHA_SECRET_KEY) {
      console.warn("reCAPTCHA secret key is not configured")
      return NextResponse.json({ success: true })
    }

    // Verify the token with Google
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data: RecaptchaResponse = await response.json()

    if (!data.success) {
      return NextResponse.json(
        { success: false, error: "reCAPTCHA verification failed", errors: data["error-codes"] },
        { status: 400 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    )
  }
}