"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CheckoutForm({ total }: { total: number }) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [phone, setPhone] = useState("0992910265")
  const [address, setAddress] = useState({ firstName: "", lastName: "", address: "", city: "" })

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }

  if (step === 3) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm border border-green-200 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
        <p className="text-gray-600 mb-6">Payment of ${total.toFixed(2)} via Ebirr to 0992910265 was successful.</p>
        <button onClick={() => router.push("/")} className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">Return Home</button>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-8">
        <div className={`flex flex-col items-center ${step === 1 ? 'text-indigo-600' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 ${step === 1 ? 'bg-indigo-100' : 'bg-gray-100'}`}>1</div>
          <span className="text-sm font-medium">Shipping</span>
        </div>
        <div className="flex-1 h-px bg-gray-200 mx-4"></div>
        <div className={`flex flex-col items-center ${step === 2 ? 'text-indigo-600' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 ${step === 2 ? 'bg-indigo-100' : 'bg-gray-100'}`}>2</div>
          <span className="text-sm font-medium">Payment</span>
        </div>
        <div className="flex-1 h-px bg-gray-200 mx-4"></div>
        <div className={`flex flex-col items-center text-gray-400`}>
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold mb-2">3</div>
          <span className="text-sm font-medium">Confirmation</span>
        </div>
      </div>

      {step === 1 && (
        <form onSubmit={handleNextStep}>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input required type="text" value={address.firstName} onChange={e => setAddress({...address, firstName: e.target.value})} className="border p-2 w-full rounded focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input required type="text" value={address.lastName} onChange={e => setAddress({...address, lastName: e.target.value})} className="border p-2 w-full rounded focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input required type="text" value={address.address} onChange={e => setAddress({...address, address: e.target.value})} className="border p-2 w-full rounded focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input required type="text" value={address.city} onChange={e => setAddress({...address, city: e.target.value})} className="border p-2 w-full rounded focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded mt-6 hover:bg-indigo-700">Continue to Payment</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handlePayment}>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Ebirr Payment</h2>
          <div className="bg-indigo-50 p-4 rounded-md mb-6">
            <p className="text-sm text-indigo-800 mb-4">Please confirm your phone number to receive a payment prompt.</p>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ebirr Phone Number</label>
            <input required type="text" value={phone} onChange={e => setPhone(e.target.value)} className="border p-2 w-full font-mono rounded focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="flex gap-4">
            <button type="button" onClick={() => setStep(1)} className="w-1/3 bg-gray-100 text-gray-700 py-3 rounded hover:bg-gray-200">Back</button>
            <button type="submit" className="w-2/3 bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">Pay ${total.toFixed(2)}</button>
          </div>
        </form>
      )}
    </div>
  )
}
