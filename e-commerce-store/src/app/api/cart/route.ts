import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth/options"
import { prisma } from "@/lib/prisma"
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    const userId = (session.user as { id: string }).id
    const { productId, quantity } = await req.json()
    if (!productId) return NextResponse.json({ message: "Product ID required" }, { status: 400 })
    let cart = await prisma.cart.findUnique({ where: { userId } })
    if (!cart) cart = await prisma.cart.create({ data: { userId } })
    const existing = await prisma.cartItem.findUnique({ where: { cartId_productId: { cartId: cart.id, productId } } })
    if (existing) {
      await prisma.cartItem.update({ where: { id: existing.id }, data: { quantity: existing.quantity + (quantity || 1) } })
    } else {
      await prisma.cartItem.create({ data: { cartId: cart.id, productId, quantity: quantity || 1 } })
    }
    return NextResponse.json({ message: "Added" }, { status: 200 })
  } catch {
    return NextResponse.json({ message: "Error" }, { status: 500 })
  }
}
