"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
export default function AddToCartButton({ productId }: { productId: string }) {
  const { data: session } = useSession(); const router = useRouter()
  return <button onClick={async () => {
    if (!session) return router.push("/login")
    await fetch("/api/cart", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ productId, quantity: 1 }) })
    router.push("/cart")
  }} className="bg-indigo-600 text-white px-8 py-3 rounded-md w-full mt-4">Add to bag</button>
}
