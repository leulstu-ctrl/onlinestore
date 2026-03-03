import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth/options"
import { prisma } from "@/lib/prisma"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function CartPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user) redirect("/login?callbackUrl=/cart")
  const userId = (session.user as { id: string }).id
  const cart = await prisma.cart.findUnique({ where: { userId }, include: { items: { include: { product: true } } } })

  if (!cart || cart.items.length === 0) return <div>Cart is empty</div>

  const subtotal = cart.items.reduce((total, item) => total + (item.product.price * item.quantity), 0)

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-2 gap-8">
         <ul>
           {cart.items.map((item) => (
             <li key={item.id} className="flex gap-4 mb-4">
                <Image src={item.product.imageUrl} alt={item.product.name} width={100} height={100} />
                <div><p>{item.product.name}</p><p>\${item.product.price}</p><p>Qty: {item.quantity}</p></div>
             </li>
           ))}
         </ul>
         <div>
            <p>Total: \${subtotal + 5}</p>
            <Link href="/checkout" className="bg-indigo-600 text-white px-4 py-2 mt-4 inline-block">Checkout</Link>
         </div>
      </div>
    </div>
  )
}
