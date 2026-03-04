import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import type { Category as CategoryType } from '../data/products';

const categoryMap: Record<string, string> = {
  'womens': "Women's Clothing",
  'mens': "Men's Clothing",
  'jewelry': "Jewelry",
  'home': "Smart Home Decor"
};

export default function Category() {
  const { id } = useParams<{ id: string }>();

  if (!id || !categoryMap[id]) {
    return <div className="p-16 text-center text-2xl font-bold">Category not found</div>;
  }

  const categoryName = categoryMap[id];
  const categoryProducts = products.filter(p => p.categoryId === id as CategoryType);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">{categoryName}</h1>
        {categoryProducts.length === 0 ? (
          <p className="text-gray-500">No products found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-10 gap-x-6">
            {categoryProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group relative">
                <div className="w-full bg-gray-200 h-80 relative overflow-hidden">
                   <img src={product.imageUrl} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
