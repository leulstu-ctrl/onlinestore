export type Category = 'womens' | 'mens' | 'jewelry' | 'home';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: Category;
}

export const products: Product[] = [
  { id: '1', name: 'Elegant Dress', description: 'A light summer dress', price: 45.99, imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1', categoryId: 'womens' },
  { id: '2', name: 'Denim Jacket', description: 'Classic rugged denim jacket', price: 65.50, imageUrl: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8', categoryId: 'mens' },
  { id: '3', name: 'Diamond Studs', description: 'Simple, elegant diamond earrings', price: 499.99, imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908', categoryId: 'jewelry' },
  { id: '4', name: 'Smart Clock', description: 'Minimalist smart clock that syncs with your calendar', price: 89.99, imageUrl: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c', categoryId: 'home' },
  { id: '5', name: 'Silk Blouse', description: 'Premium silk blouse for formal wear', price: 75.00, imageUrl: 'https://images.unsplash.com/photo-1485230895905-ef203e8dc0c3', categoryId: 'womens' },
  { id: '6', name: 'Leather Boots', description: 'Handcrafted leather boots', price: 120.00, imageUrl: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f', categoryId: 'mens' },
  { id: '7', name: 'Gold Necklace', description: '18k gold chain with pendant', price: 299.99, imageUrl: 'https://images.unsplash.com/photo-1599643478524-fb66f7ca2759', categoryId: 'jewelry' },
  { id: '8', name: 'Smart Thermostat', description: 'Energy saving smart thermostat', price: 199.99, imageUrl: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f', categoryId: 'home' }
];
