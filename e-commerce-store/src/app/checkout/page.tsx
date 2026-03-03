import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth/options"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import CheckoutForm from "./CheckoutForm"
export default async function CheckoutPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user) redirect("/login")
  const userId = (session.user as { id: string }).id
  const cart = await prisma.cart.findUnique({ where: { userId }, include: { items: { include: { product: { include: { category: true } } } } } })
  if (!cart || cart.items.length === 0) redirect("/")
  const subtotal = cart.items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <CheckoutForm total={subtotal + 5} />
    </div>
  )
}
