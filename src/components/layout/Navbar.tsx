import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { items } = useCart();

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold text-pink-700">BEAUTY HUB</Link>
          <div className="hidden sm:flex sm:space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-pink-600 transition-colors">Home</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-pink-600 transition-colors">Contact Us</Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">{user.name}</span>
                <button onClick={logout} className="text-sm text-gray-500 hover:text-gray-900">Logout</button>
              </div>
            ) : (
              <Link to="/login"><User className="h-6 w-6 text-gray-600 hover:text-gray-900" /></Link>
            )}
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
