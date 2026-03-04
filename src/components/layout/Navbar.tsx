"use client"
import Link from "next/link"
import { ShoppingCart, User } from "lucide-react"
import { useSession, signOut } from "next-auth/react"
export default function Navbar() {
  const { data: session } = useSession()
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold">AESTHETICA</Link>
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/" className="text-sm font-medium">Home</Link>
            <Link href="/category/womens" className="text-sm font-medium">Women</Link>
            <Link href="/category/mens" className="text-sm font-medium">Men</Link>
            <Link href="/category/jewelry" className="text-sm font-medium">Jewelry</Link>
            <Link href="/category/home" className="text-sm font-medium">Home Decor</Link>
          </div>
          <div className="flex items-center space-x-4">
            {session ? (
              <button onClick={() => signOut()} className="text-sm">Logout</button>
            ) : (
              <Link href="/login"><User className="h-6 w-6" /></Link>
            )}
            <Link href="/cart"><ShoppingCart className="h-6 w-6" /></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
