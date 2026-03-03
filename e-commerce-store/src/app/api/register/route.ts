import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"
export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json()
    if (!email || !password) return NextResponse.json({ message: "Missing fields" }, { status: 400 })
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) return NextResponse.json({ message: "Exists" }, { status: 400 })
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({ data: { email, password: hashedPassword, name, cart: { create: {} } } })
    return NextResponse.json({ message: "Registered", userId: user.id }, { status: 201 })
  } catch {
    return NextResponse.json({ message: "Error" }, { status: 500 })
  }
}
