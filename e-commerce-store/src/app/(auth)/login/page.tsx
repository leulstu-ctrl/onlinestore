"use client"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
export default function LoginPage() {
  const router = useRouter(); const [email, setEmail] = useState(""); const [password, setPassword] = useState("")
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); await signIn("credentials", { redirect: false, email, password }); router.push("/"); router.refresh()
  }
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="border p-2 w-full" placeholder="Email" />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="border p-2 w-full" placeholder="Password" />
        <button className="bg-indigo-600 text-white p-2 w-full">Sign In</button>
      </form>
    </div>
  )
}
