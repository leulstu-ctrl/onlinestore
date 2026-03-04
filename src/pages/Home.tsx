import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Home() {
  // Since we only have two products now, display all of them
  const newArrivals = products;

  return (
    <div className="bg-white">
      <div className="relative bg-pink-100 h-[60vh] flex items-center justify-center border-b border-pink-200">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-800 mb-4">Ultimate Beauty & Makeup</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">Full package makeup delivered across Ethiopia with zero delivery cost.</p>
          <div className="space-x-4">
            <a href="#shop" className="inline-block bg-pink-600 text-white rounded-md px-6 py-3 font-medium shadow hover:bg-pink-700 transition-colors">
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <div id="shop" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-pink-800">Our Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
          {newArrivals.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group relative">
              <div className="w-full bg-gray-200 h-80 relative overflow-hidden">
                 <img src={product.imageUrl} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500 capitalize">{product.categoryId}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">ETB {product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
