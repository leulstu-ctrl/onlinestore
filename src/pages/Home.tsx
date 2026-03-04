import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Home() {
  const newArrivals = products.slice(0, 8);

  return (
    <div className="bg-white">
      <div className="relative bg-gray-900 h-[60vh] flex items-center justify-center">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Minimalist Elegance</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">Curated fashion, jewelry, and smart home decor.</p>
          <div className="space-x-4">
            <Link to="/category/womens" className="inline-block bg-white text-gray-900 px-6 py-3 font-medium hover:bg-gray-100 transition-colors">
              Shop Women
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-10 gap-x-6">
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
