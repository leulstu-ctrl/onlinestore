import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return <div className="p-16 text-center text-2xl font-bold">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative h-[500px] bg-gray-100 overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col justify-center">
        <nav className="text-sm text-gray-500 mb-4 capitalize">
          <Link to="/" className="hover:text-gray-900">Home</Link> /{' '}
          <Link to={`/category/${product.categoryId}`} className="hover:text-gray-900">{product.categoryId}</Link> /{' '}
          <span className="text-gray-900">{product.name}</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-2xl mt-4 text-gray-900">${product.price.toFixed(2)}</p>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <h3 className="text-sm font-medium text-gray-900">Description</h3>
          <div className="mt-4 prose prose-sm text-gray-500">
            {product.description}
          </div>
        </div>

        <div className="mt-8 flex items-center space-x-4">
          <div className="flex items-center border border-gray-300 rounded">
            <button
              className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >-</button>
            <span className="px-4 py-2 text-gray-900 font-medium">{quantity}</span>
            <button
              className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setQuantity(quantity + 1)}
            >+</button>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
            disabled={added}
          >
            {added ? 'Added to Cart ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
