import { prisma } from "@/lib/prisma"
import Image from "next/image"
import { notFound } from "next/navigation"
import AddToCartButton from "./AddToCartButton"
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({ where: { id: params.id }, include: { category: true } })
  if (!product) notFound()
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-2 gap-8">
      <div className="relative h-[500px]"><Image src={product.imageUrl} alt={product.name} fill className="object-cover" /></div>
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl mt-4">${product.price.toFixed(2)}</p>
        <p className="mt-4">{product.description}</p>
        <AddToCartButton productId={product.id} />
      </div>
    </div>
  )
}
