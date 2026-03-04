import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import dotenv from 'dotenv'

dotenv.config()
const connectionString = process.env.DATABASE_URL
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  const categories = ["Women's Clothing", "Men's Clothing", 'Jewelry', 'Smart Home Decor']
  const categoryRecords = []
  for (const name of categories) {
    categoryRecords.push(await prisma.category.upsert({ where: { name }, update: {}, create: { name } }))
  }
  const [womens, mens, jewelry, smartHome] = categoryRecords
  const products = [
    { name: 'Elegant Dress', description: 'A light summer dress', price: 45.99, imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1', categoryId: womens.id },
    { name: 'Denim Jacket', description: 'Classic rugged denim jacket', price: 65.50, imageUrl: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8', categoryId: mens.id },
    { name: 'Diamond Studs', description: 'Simple, elegant diamond earrings', price: 499.99, imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908', categoryId: jewelry.id },
    { name: 'Smart Clock', description: 'Minimalist smart clock that syncs with your calendar', price: 89.99, imageUrl: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c', categoryId: smartHome.id },
  ]

  // Clear existing to avoid duplicates when running seed again
  await prisma.product.deleteMany({})

  for (const product of products) await prisma.product.create({ data: product })
}
main().catch(console.error).finally(() => { prisma.$disconnect(); pool.end() })
