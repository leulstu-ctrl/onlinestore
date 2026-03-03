import { prisma } from "@/lib/prisma"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function CategoryPage({ params }: { params: { id: string } }) {
  const categoryMap: Record<string, string> = { 'womens': "Women's Clothing", 'mens': "Men's Clothing", 'jewelry': "Jewelry", 'home': "Smart Home Decor" }
  const categoryName = categoryMap[params.id]
  if (!categoryName) notFound()

  const category = await prisma.category.findUnique({ where: { name: categoryName }, include: { products: true, } })
  if (!category) notFound()

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">{category.name}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-10 gap-x-6">
          {category.products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full bg-gray-200 lg:h-80 relative">
                 <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
              </div>
              <div className="mt-4 flex justify-between">
                <div><h3 className="text-sm">{product.name}</h3></div>
                <p className="text-sm font-medium">\${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
