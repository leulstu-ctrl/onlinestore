"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function RegisterPage() {
  const router = useRouter(); const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [name, setName] = useState("")
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("/api/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, password }) })
    router.push("/login")
  }
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" value={name} onChange={e=>setName(e.target.value)} className="border p-2 w-full" placeholder="Name" />
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="border p-2 w-full" placeholder="Email" />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="border p-2 w-full" placeholder="Password" />
        <button className="bg-indigo-600 text-white p-2 w-full">Register</button>
      </form>
    </div>
  )
}
