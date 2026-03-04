export type Category = 'makeup-standard' | 'makeup-premium' | 'beauty-tools';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: Category;
}

export const products: Product[] = [
  {
    "id": "1",
    "name": "Full Package Makeup (Standard)",
    "description": "A complete, full package makeup set delivered in Ethiopia with zero cost of delivery. Perfect for your everyday beauty routine with high-quality, elegant finishes.",
    "price": 2999,
    "imageUrl": "https://loremflickr.com/800/800/makeup,beauty,face?lock=101",
    "categoryId": "makeup-standard"
  },
  {
    "id": "2",
    "name": "Full Package Makeup (Premium)",
    "description": "The ultimate full package makeup set delivered in Ethiopia with zero cost of delivery. Includes an exclusive bag gift. Achieve a flawless, professional look with our top-tier beauty selection.",
    "price": 3999,
    "imageUrl": "https://loremflickr.com/800/800/makeup,beauty,premium?lock=102",
    "categoryId": "makeup-premium"
  }
];
