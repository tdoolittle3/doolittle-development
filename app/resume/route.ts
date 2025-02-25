import { redirect } from "next/navigation"

export async function GET() {
  // Redirect to the home page with the QR parameter
  redirect("/?from=qr")
}

