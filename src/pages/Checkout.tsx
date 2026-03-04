import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

type Step = 'shipping' | 'payment' | 'confirmation';

export default function Checkout() {
  const [step, setStep] = useState<Step>('shipping');
  const [shipping, setShipping] = useState({ name: '', address: '', city: '', phone: '' });
  const [ebirrPhone, setEbirrPhone] = useState('0992910265');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (items.length === 0 && step !== 'confirmation') {
    return (
      <div className="p-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <button onClick={() => navigate('/')} className="text-blue-600 hover:underline">Return Home</button>
      </div>
    );
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        clearCart();
        setStep('confirmation');
      }, 1500);
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {/* Progress Steps */}
      <div className="flex mb-12 border-b border-gray-200">
        <div className={`flex-1 pb-4 border-b-2 text-center font-medium ${step === 'shipping' ? 'border-black text-black' : step === 'payment' || step === 'confirmation' ? 'border-green-500 text-green-500' : 'border-transparent text-gray-500'}`}>
          1. Shipping
        </div>
        <div className={`flex-1 pb-4 border-b-2 text-center font-medium ${step === 'payment' ? 'border-black text-black' : step === 'confirmation' ? 'border-green-500 text-green-500' : 'border-transparent text-gray-500'}`}>
          2. Payment (Ebirr)
        </div>
        <div className={`flex-1 pb-4 border-b-2 text-center font-medium ${step === 'confirmation' ? 'border-black text-black' : 'border-transparent text-gray-500'}`}>
          3. Confirmation
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        {step === 'shipping' && (
          <form onSubmit={handleShippingSubmit} className="space-y-6">
            <h2 className="text-xl font-bold">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-2 border" value={shipping.name} onChange={e => setShipping({...shipping, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-2 border" value={shipping.phone} onChange={e => setShipping({...shipping, phone: e.target.value})} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-2 border" value={shipping.address} onChange={e => setShipping({...shipping, address: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-2 border" value={shipping.city} onChange={e => setShipping({...shipping, city: e.target.value})} />
              </div>
            </div>
            <button type="submit" className="w-full bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors mt-8">
              Continue to Payment
            </button>
          </form>
        )}

        {step === 'payment' && (
          <form onSubmit={handlePaymentSubmit} className="space-y-6">
            <h2 className="text-xl font-bold">Payment via Ebirr</h2>
            <div className="bg-blue-50 text-blue-800 p-4 rounded text-sm mb-6">
              Please transfer exactly <strong>${total.toFixed(2)}</strong> to complete your order.
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Ebirr Phone Number</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">📞</span>
                <input
                  required type="tel"
                  className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 px-4 py-2 border focus:border-black focus:ring-black"
                  value={ebirrPhone}
                  onChange={e => setEbirrPhone(e.target.value)}
                  readOnly={true}
                  disabled={true}
                  title="Mocking Ebirr Phone Number as requested"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">To mock this transaction, the payment number is set to your requested number: 0992910265.</p>
            </div>

            {paymentSuccess && (
              <div className="bg-green-50 text-green-800 p-4 rounded text-sm flex items-center">
                <span className="text-green-500 font-bold mr-2">✓</span> Payment Verified Successfully!
              </div>
            )}

            <div className="flex space-x-4 mt-8">
              <button type="button" onClick={() => setStep('shipping')} disabled={isProcessing} className="w-1/3 border border-gray-300 px-8 py-3 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50">
                Back
              </button>
              <button type="submit" disabled={isProcessing || paymentSuccess} className="w-2/3 bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 flex justify-center items-center">
                {isProcessing ? 'Verifying Ebirr...' : 'Confirm Payment'}
              </button>
            </div>
          </form>
        )}

        {step === 'confirmation' && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Order Confirmed!</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Thank you {shipping.name || user?.name || 'Customer'}! Your order has been placed successfully via Ebirr. We will ship it to {shipping.city} shortly.
            </p>
            <button onClick={() => navigate('/')} className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
