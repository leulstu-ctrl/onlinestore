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
  {
    "id": "1",
    "name": "Handcrafted Tunic",
    "description": "A beautiful handcrafted tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2066,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800&h=800&random=0",
    "categoryId": "womens"
  },
  {
    "id": "2",
    "name": "Premium Blazer",
    "description": "A beautiful premium blazer designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3531,
    "imageUrl": "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=800&h=800&random=1",
    "categoryId": "mens"
  },
  {
    "id": "3",
    "name": "Premium Studs",
    "description": "A beautiful premium studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 14517,
    "imageUrl": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800&h=800&random=2",
    "categoryId": "jewelry"
  },
  {
    "id": "4",
    "name": "Bespoke Mirror",
    "description": "A beautiful bespoke mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5157,
    "imageUrl": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800&h=800&random=3",
    "categoryId": "home"
  },
  {
    "id": "5",
    "name": "Luxurious Dress",
    "description": "A beautiful luxurious dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3096,
    "imageUrl": "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800&h=800&random=4",
    "categoryId": "womens"
  },
  {
    "id": "6",
    "name": "Essential Jacket",
    "description": "A beautiful essential jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2859,
    "imageUrl": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800&h=800&random=5",
    "categoryId": "mens"
  },
  {
    "id": "7",
    "name": "Handcrafted Watch",
    "description": "A beautiful handcrafted watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6220,
    "imageUrl": "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=800&h=800&random=6",
    "categoryId": "jewelry"
  },
  {
    "id": "8",
    "name": "Classic Clock",
    "description": "A beautiful classic clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6517,
    "imageUrl": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800&h=800&random=7",
    "categoryId": "home"
  },
  {
    "id": "9",
    "name": "Luxurious Dress",
    "description": "A beautiful luxurious dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1985,
    "imageUrl": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800&h=800&random=8",
    "categoryId": "womens"
  },
  {
    "id": "10",
    "name": "Classic Coat",
    "description": "A beautiful classic coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 826,
    "imageUrl": "https://images.unsplash.com/photo-1516826957135-700edeb5f9fa?auto=format&fit=crop&q=80&w=800&h=800&random=9",
    "categoryId": "mens"
  },
  {
    "id": "11",
    "name": "Sleek Watch",
    "description": "A beautiful sleek watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2862,
    "imageUrl": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800&h=800&random=10",
    "categoryId": "jewelry"
  },
  {
    "id": "12",
    "name": "Chic Mirror",
    "description": "A beautiful chic mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6404,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=11",
    "categoryId": "home"
  },
  {
    "id": "13",
    "name": "Handcrafted Blouse",
    "description": "A beautiful handcrafted blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2725,
    "imageUrl": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800&h=800&random=12",
    "categoryId": "womens"
  },
  {
    "id": "14",
    "name": "Luxurious Jacket",
    "description": "A beautiful luxurious jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1628,
    "imageUrl": "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?auto=format&fit=crop&q=80&w=800&h=800&random=13",
    "categoryId": "mens"
  },
  {
    "id": "15",
    "name": "Luxurious Bangle",
    "description": "A beautiful luxurious bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 11267,
    "imageUrl": "https://images.unsplash.com/photo-1599643478524-fb66f7ca2759?auto=format&fit=crop&q=80&w=800&h=800&random=14",
    "categoryId": "jewelry"
  },
  {
    "id": "16",
    "name": "Modern Vase",
    "description": "A beautiful modern vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5264,
    "imageUrl": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800&h=800&random=15",
    "categoryId": "home"
  },
  {
    "id": "17",
    "name": "Casual Dress",
    "description": "A beautiful casual dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3470,
    "imageUrl": "https://images.unsplash.com/photo-1485230895905-ef203e8dc0c3?auto=format&fit=crop&q=80&w=800&h=800&random=16",
    "categoryId": "womens"
  },
  {
    "id": "18",
    "name": "Handcrafted Blazer",
    "description": "A beautiful handcrafted blazer designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2410,
    "imageUrl": "https://images.unsplash.com/photo-1516826957135-700edeb5f9fa?auto=format&fit=crop&q=80&w=800&h=800&random=17",
    "categoryId": "mens"
  },
  {
    "id": "19",
    "name": "Bespoke Studs",
    "description": "A beautiful bespoke studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 8242,
    "imageUrl": "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800&h=800&random=18",
    "categoryId": "jewelry"
  },
  {
    "id": "20",
    "name": "Essential Rug",
    "description": "A beautiful essential rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2973,
    "imageUrl": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800&h=800&random=19",
    "categoryId": "home"
  },
  {
    "id": "21",
    "name": "Minimalist Blouse",
    "description": "A beautiful minimalist blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3684,
    "imageUrl": "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&q=80&w=800&h=800&random=20",
    "categoryId": "womens"
  },
  {
    "id": "22",
    "name": "Smart Jacket",
    "description": "A beautiful smart jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 702,
    "imageUrl": "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?auto=format&fit=crop&q=80&w=800&h=800&random=21",
    "categoryId": "mens"
  },
  {
    "id": "23",
    "name": "Premium Bracelet",
    "description": "A beautiful premium bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3937,
    "imageUrl": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800&h=800&random=22",
    "categoryId": "jewelry"
  },
  {
    "id": "24",
    "name": "Vintage Cushion",
    "description": "A beautiful vintage cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3714,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=23",
    "categoryId": "home"
  },
  {
    "id": "25",
    "name": "Classic Tunic",
    "description": "A beautiful classic tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1435,
    "imageUrl": "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800&h=800&random=24",
    "categoryId": "womens"
  },
  {
    "id": "26",
    "name": "Luxurious Coat",
    "description": "A beautiful luxurious coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3142,
    "imageUrl": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800&h=800&random=25",
    "categoryId": "mens"
  },
  {
    "id": "27",
    "name": "Modern Earrings",
    "description": "A beautiful modern earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 13104,
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800&h=800&random=26",
    "categoryId": "jewelry"
  },
  {
    "id": "28",
    "name": "Bespoke Vase",
    "description": "A beautiful bespoke vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7767,
    "imageUrl": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800&h=800&random=27",
    "categoryId": "home"
  },
  {
    "id": "29",
    "name": "Sleek Sweater",
    "description": "A beautiful sleek sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 737,
    "imageUrl": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800&h=800&random=28",
    "categoryId": "womens"
  },
  {
    "id": "30",
    "name": "Casual Boots",
    "description": "A beautiful casual boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2516,
    "imageUrl": "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?auto=format&fit=crop&q=80&w=800&h=800&random=29",
    "categoryId": "mens"
  },
  {
    "id": "31",
    "name": "Smart Ring",
    "description": "A beautiful smart ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2060,
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800&h=800&random=30",
    "categoryId": "jewelry"
  },
  {
    "id": "32",
    "name": "Chic Vase",
    "description": "A beautiful chic vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3706,
    "imageUrl": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800&h=800&random=31",
    "categoryId": "home"
  },
  {
    "id": "33",
    "name": "Minimalist Tunic",
    "description": "A beautiful minimalist tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 984,
    "imageUrl": "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&q=80&w=800&h=800&random=32",
    "categoryId": "womens"
  },
  {
    "id": "34",
    "name": "Smart Boots",
    "description": "A beautiful smart boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2232,
    "imageUrl": "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=800&h=800&random=33",
    "categoryId": "mens"
  },
  {
    "id": "35",
    "name": "Sleek Bangle",
    "description": "A beautiful sleek bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2103,
    "imageUrl": "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800&h=800&random=34",
    "categoryId": "jewelry"
  },
  {
    "id": "36",
    "name": "Modern Thermostat",
    "description": "A beautiful modern thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4334,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=35",
    "categoryId": "home"
  },
  {
    "id": "37",
    "name": "Classic Sweater",
    "description": "A beautiful classic sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 475,
    "imageUrl": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800&h=800&random=36",
    "categoryId": "womens"
  },
  {
    "id": "38",
    "name": "Sleek Coat",
    "description": "A beautiful sleek coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2437,
    "imageUrl": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800&h=800&random=37",
    "categoryId": "mens"
  },
  {
    "id": "39",
    "name": "Premium Bangle",
    "description": "A beautiful premium bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 9986,
    "imageUrl": "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800&h=800&random=38",
    "categoryId": "jewelry"
  },
  {
    "id": "40",
    "name": "Sleek Rug",
    "description": "A beautiful sleek rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1773,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=39",
    "categoryId": "home"
  },
  {
    "id": "41",
    "name": "Modern Coat",
    "description": "A beautiful modern coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2854,
    "imageUrl": "https://images.unsplash.com/photo-1485230895905-ef203e8dc0c3?auto=format&fit=crop&q=80&w=800&h=800&random=40",
    "categoryId": "womens"
  },
  {
    "id": "42",
    "name": "Classic Coat",
    "description": "A beautiful classic coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2172,
    "imageUrl": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800&h=800&random=41",
    "categoryId": "mens"
  },
  {
    "id": "43",
    "name": "Classic Pendant",
    "description": "A beautiful classic pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 12907,
    "imageUrl": "https://images.unsplash.com/photo-1599643478524-fb66f7ca2759?auto=format&fit=crop&q=80&w=800&h=800&random=42",
    "categoryId": "jewelry"
  },
  {
    "id": "44",
    "name": "Premium Vase",
    "description": "A beautiful premium vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6395,
    "imageUrl": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800&h=800&random=43",
    "categoryId": "home"
  },
  {
    "id": "45",
    "name": "Sleek Coat",
    "description": "A beautiful sleek coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1147,
    "imageUrl": "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&q=80&w=800&h=800&random=44",
    "categoryId": "womens"
  },
  {
    "id": "46",
    "name": "Elegant Boots",
    "description": "A beautiful elegant boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2411,
    "imageUrl": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800&h=800&random=45",
    "categoryId": "mens"
  },
  {
    "id": "47",
    "name": "Chic Studs",
    "description": "A beautiful chic studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 8364,
    "imageUrl": "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800&h=800&random=46",
    "categoryId": "jewelry"
  },
  {
    "id": "48",
    "name": "Smart Mirror",
    "description": "A beautiful smart mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1954,
    "imageUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800&h=800&random=47",
    "categoryId": "home"
  },
  {
    "id": "49",
    "name": "Classic Blouse",
    "description": "A beautiful classic blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2732,
    "imageUrl": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800&h=800&random=48",
    "categoryId": "womens"
  },
  {
    "id": "50",
    "name": "Luxurious Boots",
    "description": "A beautiful luxurious boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1840,
    "imageUrl": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800&h=800&random=49",
    "categoryId": "mens"
  },
  {
    "id": "51",
    "name": "Premium Bracelet",
    "description": "A beautiful premium bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 9954,
    "imageUrl": "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800&h=800&random=50",
    "categoryId": "jewelry"
  },
  {
    "id": "52",
    "name": "Casual Lamp",
    "description": "A beautiful casual lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5755,
    "imageUrl": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800&h=800&random=51",
    "categoryId": "home"
  },
  {
    "id": "53",
    "name": "Vintage Dress",
    "description": "A beautiful vintage dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 517,
    "imageUrl": "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800&h=800&random=52",
    "categoryId": "womens"
  },
  {
    "id": "54",
    "name": "Smart Coat",
    "description": "A beautiful smart coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1314,
    "imageUrl": "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=800&h=800&random=53",
    "categoryId": "mens"
  },
  {
    "id": "55",
    "name": "Minimalist Watch",
    "description": "A beautiful minimalist watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5321,
    "imageUrl": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800&h=800&random=54",
    "categoryId": "jewelry"
  },
  {
    "id": "56",
    "name": "Casual Vase",
    "description": "A beautiful casual vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3816,
    "imageUrl": "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800&h=800&random=55",
    "categoryId": "home"
  },
  {
    "id": "57",
    "name": "Luxurious Coat",
    "description": "A beautiful luxurious coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 409,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800&h=800&random=56",
    "categoryId": "womens"
  },
  {
    "id": "58",
    "name": "Handcrafted Trousers",
    "description": "A beautiful handcrafted trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1710,
    "imageUrl": "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=800&h=800&random=57",
    "categoryId": "mens"
  },
  {
    "id": "59",
    "name": "Sleek Watch",
    "description": "A beautiful sleek watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 8416,
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800&h=800&random=58",
    "categoryId": "jewelry"
  },
  {
    "id": "60",
    "name": "Classic Vase",
    "description": "A beautiful classic vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5424,
    "imageUrl": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800&h=800&random=59",
    "categoryId": "home"
  },
  {
    "id": "61",
    "name": "Vintage Coat",
    "description": "A beautiful vintage coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 416,
    "imageUrl": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800&h=800&random=60",
    "categoryId": "womens"
  },
  {
    "id": "62",
    "name": "Smart Trousers",
    "description": "A beautiful smart trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 696,
    "imageUrl": "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=800&h=800&random=61",
    "categoryId": "mens"
  },
  {
    "id": "63",
    "name": "Modern Earrings",
    "description": "A beautiful modern earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5738,
    "imageUrl": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800&h=800&random=62",
    "categoryId": "jewelry"
  },
  {
    "id": "64",
    "name": "Minimalist Mirror",
    "description": "A beautiful minimalist mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4435,
    "imageUrl": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800&h=800&random=63",
    "categoryId": "home"
  },
  {
    "id": "65",
    "name": "Handcrafted Tunic",
    "description": "A beautiful handcrafted tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2031,
    "imageUrl": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800&h=800&random=64",
    "categoryId": "womens"
  },
  {
    "id": "66",
    "name": "Luxurious Shirt",
    "description": "A beautiful luxurious shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3526,
    "imageUrl": "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=800&h=800&random=65",
    "categoryId": "mens"
  },
  {
    "id": "67",
    "name": "Elegant Studs",
    "description": "A beautiful elegant studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 13876,
    "imageUrl": "https://images.unsplash.com/photo-1573408301145-b98c4af05b8ea?auto=format&fit=crop&q=80&w=800&h=800&random=66",
    "categoryId": "jewelry"
  },
  {
    "id": "68",
    "name": "Handcrafted Speaker",
    "description": "A beautiful handcrafted speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2056,
    "imageUrl": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800&h=800&random=67",
    "categoryId": "home"
  },
  {
    "id": "69",
    "name": "Sleek Dress",
    "description": "A beautiful sleek dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 519,
    "imageUrl": "https://images.unsplash.com/photo-1485230895905-ef203e8dc0c3?auto=format&fit=crop&q=80&w=800&h=800&random=68",
    "categoryId": "womens"
  },
  {
    "id": "70",
    "name": "Vintage Boots",
    "description": "A beautiful vintage boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 643,
    "imageUrl": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800&h=800&random=69",
    "categoryId": "mens"
  },
  {
    "id": "71",
    "name": "Classic Studs",
    "description": "A beautiful classic studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 10707,
    "imageUrl": "https://images.unsplash.com/photo-1573408301145-b98c4af05b8ea?auto=format&fit=crop&q=80&w=800&h=800&random=70",
    "categoryId": "jewelry"
  },
  {
    "id": "72",
    "name": "Chic Speaker",
    "description": "A beautiful chic speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2140,
    "imageUrl": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800&h=800&random=71",
    "categoryId": "home"
  },
  {
    "id": "73",
    "name": "Classic Tunic",
    "description": "A beautiful classic tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2820,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800&h=800&random=72",
    "categoryId": "womens"
  },
  {
    "id": "74",
    "name": "Smart Boots",
    "description": "A beautiful smart boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 438,
    "imageUrl": "https://images.unsplash.com/photo-1516826957135-700edeb5f9fa?auto=format&fit=crop&q=80&w=800&h=800&random=73",
    "categoryId": "mens"
  },
  {
    "id": "75",
    "name": "Chic Earrings",
    "description": "A beautiful chic earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4690,
    "imageUrl": "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800&h=800&random=74",
    "categoryId": "jewelry"
  },
  {
    "id": "76",
    "name": "Classic Lamp",
    "description": "A beautiful classic lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4121,
    "imageUrl": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800&h=800&random=75",
    "categoryId": "home"
  },
  {
    "id": "77",
    "name": "Minimalist Sweater",
    "description": "A beautiful minimalist sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1653,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800&h=800&random=76",
    "categoryId": "womens"
  },
  {
    "id": "78",
    "name": "Casual Jacket",
    "description": "A beautiful casual jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 590,
    "imageUrl": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800&h=800&random=77",
    "categoryId": "mens"
  },
  {
    "id": "79",
    "name": "Handcrafted Studs",
    "description": "A beautiful handcrafted studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4960,
    "imageUrl": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800&h=800&random=78",
    "categoryId": "jewelry"
  },
  {
    "id": "80",
    "name": "Chic Lamp",
    "description": "A beautiful chic lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5749,
    "imageUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800&h=800&random=79",
    "categoryId": "home"
  },
  {
    "id": "81",
    "name": "Handcrafted Tunic",
    "description": "A beautiful handcrafted tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3999,
    "imageUrl": "https://images.unsplash.com/photo-1434389678369-1845bf733b41?auto=format&fit=crop&q=80&w=800&h=800&random=80",
    "categoryId": "womens"
  },
  {
    "id": "82",
    "name": "Elegant Blazer",
    "description": "A beautiful elegant blazer designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3498,
    "imageUrl": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800&h=800&random=81",
    "categoryId": "mens"
  },
  {
    "id": "83",
    "name": "Handcrafted Earrings",
    "description": "A beautiful handcrafted earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 9923,
    "imageUrl": "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800&h=800&random=82",
    "categoryId": "jewelry"
  },
  {
    "id": "84",
    "name": "Essential Rug",
    "description": "A beautiful essential rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2473,
    "imageUrl": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800&h=800&random=83",
    "categoryId": "home"
  },
  {
    "id": "85",
    "name": "Luxurious Dress",
    "description": "A beautiful luxurious dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 864,
    "imageUrl": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800&h=800&random=84",
    "categoryId": "womens"
  },
  {
    "id": "86",
    "name": "Handcrafted Trousers",
    "description": "A beautiful handcrafted trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3778,
    "imageUrl": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800&h=800&random=85",
    "categoryId": "mens"
  },
  {
    "id": "87",
    "name": "Cozy Studs",
    "description": "A beautiful cozy studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 13353,
    "imageUrl": "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800&h=800&random=86",
    "categoryId": "jewelry"
  },
  {
    "id": "88",
    "name": "Chic Cushion",
    "description": "A beautiful chic cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6158,
    "imageUrl": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800&h=800&random=87",
    "categoryId": "home"
  },
  {
    "id": "89",
    "name": "Essential Skirt",
    "description": "A beautiful essential skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2674,
    "imageUrl": "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&q=80&w=800&h=800&random=88",
    "categoryId": "womens"
  },
  {
    "id": "90",
    "name": "Chic Suit",
    "description": "A beautiful chic suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 949,
    "imageUrl": "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=800&h=800&random=89",
    "categoryId": "mens"
  },
  {
    "id": "91",
    "name": "Elegant Bracelet",
    "description": "A beautiful elegant bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 9842,
    "imageUrl": "https://images.unsplash.com/photo-1599643478524-fb66f7ca2759?auto=format&fit=crop&q=80&w=800&h=800&random=90",
    "categoryId": "jewelry"
  },
  {
    "id": "92",
    "name": "Premium Speaker",
    "description": "A beautiful premium speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6605,
    "imageUrl": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800&h=800&random=91",
    "categoryId": "home"
  },
  {
    "id": "93",
    "name": "Elegant Skirt",
    "description": "A beautiful elegant skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1062,
    "imageUrl": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800&h=800&random=92",
    "categoryId": "womens"
  },
  {
    "id": "94",
    "name": "Handcrafted Sweater",
    "description": "A beautiful handcrafted sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3403,
    "imageUrl": "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?auto=format&fit=crop&q=80&w=800&h=800&random=93",
    "categoryId": "mens"
  },
  {
    "id": "95",
    "name": "Minimalist Bangle",
    "description": "A beautiful minimalist bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 8536,
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800&h=800&random=94",
    "categoryId": "jewelry"
  },
  {
    "id": "96",
    "name": "Vintage Cushion",
    "description": "A beautiful vintage cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4907,
    "imageUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800&h=800&random=95",
    "categoryId": "home"
  },
  {
    "id": "97",
    "name": "Chic Sweater",
    "description": "A beautiful chic sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 847,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800&h=800&random=96",
    "categoryId": "womens"
  },
  {
    "id": "98",
    "name": "Vintage Shirt",
    "description": "A beautiful vintage shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 829,
    "imageUrl": "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=800&h=800&random=97",
    "categoryId": "mens"
  },
  {
    "id": "99",
    "name": "Modern Ring",
    "description": "A beautiful modern ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 11151,
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800&h=800&random=98",
    "categoryId": "jewelry"
  },
  {
    "id": "100",
    "name": "Vintage Vase",
    "description": "A beautiful vintage vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5041,
    "imageUrl": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800&h=800&random=99",
    "categoryId": "home"
  },
  {
    "id": "101",
    "name": "Chic Dress",
    "description": "A beautiful chic dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3468,
    "imageUrl": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800&h=800&random=100",
    "categoryId": "womens"
  },
  {
    "id": "102",
    "name": "Cozy Trousers",
    "description": "A beautiful cozy trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2114,
    "imageUrl": "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=800&h=800&random=101",
    "categoryId": "mens"
  },
  {
    "id": "103",
    "name": "Luxurious Ring",
    "description": "A beautiful luxurious ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3043,
    "imageUrl": "https://images.unsplash.com/photo-1573408301145-b98c4af05b8ea?auto=format&fit=crop&q=80&w=800&h=800&random=102",
    "categoryId": "jewelry"
  },
  {
    "id": "104",
    "name": "Bespoke Cushion",
    "description": "A beautiful bespoke cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5308,
    "imageUrl": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800&h=800&random=103",
    "categoryId": "home"
  },
  {
    "id": "105",
    "name": "Elegant Jacket",
    "description": "A beautiful elegant jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2809,
    "imageUrl": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800&h=800&random=104",
    "categoryId": "womens"
  },
  {
    "id": "106",
    "name": "Premium Trousers",
    "description": "A beautiful premium trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3700,
    "imageUrl": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800&h=800&random=105",
    "categoryId": "mens"
  },
  {
    "id": "107",
    "name": "Vintage Watch",
    "description": "A beautiful vintage watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7408,
    "imageUrl": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800&h=800&random=106",
    "categoryId": "jewelry"
  },
  {
    "id": "108",
    "name": "Minimalist Mirror",
    "description": "A beautiful minimalist mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6785,
    "imageUrl": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800&h=800&random=107",
    "categoryId": "home"
  },
  {
    "id": "109",
    "name": "Chic Tunic",
    "description": "A beautiful chic tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3267,
    "imageUrl": "https://images.unsplash.com/photo-1434389678369-1845bf733b41?auto=format&fit=crop&q=80&w=800&h=800&random=108",
    "categoryId": "womens"
  },
  {
    "id": "110",
    "name": "Minimalist Sweater",
    "description": "A beautiful minimalist sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1015,
    "imageUrl": "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=800&h=800&random=109",
    "categoryId": "mens"
  },
  {
    "id": "111",
    "name": "Smart Pendant",
    "description": "A beautiful smart pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2193,
    "imageUrl": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800&h=800&random=110",
    "categoryId": "jewelry"
  },
  {
    "id": "112",
    "name": "Cozy Lamp",
    "description": "A beautiful cozy lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4700,
    "imageUrl": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800&h=800&random=111",
    "categoryId": "home"
  },
  {
    "id": "113",
    "name": "Smart Blouse",
    "description": "A beautiful smart blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1386,
    "imageUrl": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800&h=800&random=112",
    "categoryId": "womens"
  },
  {
    "id": "114",
    "name": "Premium Suit",
    "description": "A beautiful premium suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1456,
    "imageUrl": "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?auto=format&fit=crop&q=80&w=800&h=800&random=113",
    "categoryId": "mens"
  },
  {
    "id": "115",
    "name": "Smart Earrings",
    "description": "A beautiful smart earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6992,
    "imageUrl": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800&h=800&random=114",
    "categoryId": "jewelry"
  },
  {
    "id": "116",
    "name": "Casual Vase",
    "description": "A beautiful casual vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2651,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=115",
    "categoryId": "home"
  },
  {
    "id": "117",
    "name": "Bespoke Scarf",
    "description": "A beautiful bespoke scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3284,
    "imageUrl": "https://images.unsplash.com/photo-1485230895905-ef203e8dc0c3?auto=format&fit=crop&q=80&w=800&h=800&random=116",
    "categoryId": "womens"
  },
  {
    "id": "118",
    "name": "Smart Jacket",
    "description": "A beautiful smart jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2095,
    "imageUrl": "https://images.unsplash.com/photo-1516826957135-700edeb5f9fa?auto=format&fit=crop&q=80&w=800&h=800&random=117",
    "categoryId": "mens"
  },
  {
    "id": "119",
    "name": "Sleek Pendant",
    "description": "A beautiful sleek pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7511,
    "imageUrl": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800&h=800&random=118",
    "categoryId": "jewelry"
  },
  {
    "id": "120",
    "name": "Sleek Clock",
    "description": "A beautiful sleek clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6782,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=119",
    "categoryId": "home"
  },
  {
    "id": "121",
    "name": "Cozy Sweater",
    "description": "A beautiful cozy sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2821,
    "imageUrl": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800&h=800&random=120",
    "categoryId": "womens"
  },
  {
    "id": "122",
    "name": "Vintage Jacket",
    "description": "A beautiful vintage jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1390,
    "imageUrl": "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=800&h=800&random=121",
    "categoryId": "mens"
  },
  {
    "id": "123",
    "name": "Minimalist Watch",
    "description": "A beautiful minimalist watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2078,
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800&h=800&random=122",
    "categoryId": "jewelry"
  },
  {
    "id": "124",
    "name": "Bespoke Vase",
    "description": "A beautiful bespoke vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3159,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=123",
    "categoryId": "home"
  },
  {
    "id": "125",
    "name": "Luxurious Blouse",
    "description": "A beautiful luxurious blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 960,
    "imageUrl": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800&h=800&random=124",
    "categoryId": "womens"
  },
  {
    "id": "126",
    "name": "Bespoke Boots",
    "description": "A beautiful bespoke boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1212,
    "imageUrl": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800&h=800&random=125",
    "categoryId": "mens"
  },
  {
    "id": "127",
    "name": "Classic Ring",
    "description": "A beautiful classic ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4295,
    "imageUrl": "https://images.unsplash.com/photo-1573408301145-b98c4af05b8ea?auto=format&fit=crop&q=80&w=800&h=800&random=126",
    "categoryId": "jewelry"
  },
  {
    "id": "128",
    "name": "Premium Thermostat",
    "description": "A beautiful premium thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1612,
    "imageUrl": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800&h=800&random=127",
    "categoryId": "home"
  },
  {
    "id": "129",
    "name": "Essential Tunic",
    "description": "A beautiful essential tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3952,
    "imageUrl": "https://images.unsplash.com/photo-1434389678369-1845bf733b41?auto=format&fit=crop&q=80&w=800&h=800&random=128",
    "categoryId": "womens"
  },
  {
    "id": "130",
    "name": "Classic Blazer",
    "description": "A beautiful classic blazer designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1683,
    "imageUrl": "https://images.unsplash.com/photo-1516826957135-700edeb5f9fa?auto=format&fit=crop&q=80&w=800&h=800&random=129",
    "categoryId": "mens"
  },
  {
    "id": "131",
    "name": "Elegant Pendant",
    "description": "A beautiful elegant pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6713,
    "imageUrl": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800&h=800&random=130",
    "categoryId": "jewelry"
  },
  {
    "id": "132",
    "name": "Essential Lamp",
    "description": "A beautiful essential lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7141,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=131",
    "categoryId": "home"
  },
  {
    "id": "133",
    "name": "Classic Coat",
    "description": "A beautiful classic coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2931,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800&h=800&random=132",
    "categoryId": "womens"
  },
  {
    "id": "134",
    "name": "Handcrafted Trousers",
    "description": "A beautiful handcrafted trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 828,
    "imageUrl": "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=800&h=800&random=133",
    "categoryId": "mens"
  },
  {
    "id": "135",
    "name": "Vintage Bracelet",
    "description": "A beautiful vintage bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4425,
    "imageUrl": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800&h=800&random=134",
    "categoryId": "jewelry"
  },
  {
    "id": "136",
    "name": "Vintage Thermostat",
    "description": "A beautiful vintage thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4794,
    "imageUrl": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800&h=800&random=135",
    "categoryId": "home"
  },
  {
    "id": "137",
    "name": "Classic Skirt",
    "description": "A beautiful classic skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 423,
    "imageUrl": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800&h=800&random=136",
    "categoryId": "womens"
  },
  {
    "id": "138",
    "name": "Cozy Sweater",
    "description": "A beautiful cozy sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1130,
    "imageUrl": "https://images.unsplash.com/photo-1516826957135-700edeb5f9fa?auto=format&fit=crop&q=80&w=800&h=800&random=137",
    "categoryId": "mens"
  },
  {
    "id": "139",
    "name": "Chic Watch",
    "description": "A beautiful chic watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5866,
    "imageUrl": "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800&h=800&random=138",
    "categoryId": "jewelry"
  },
  {
    "id": "140",
    "name": "Cozy Cushion",
    "description": "A beautiful cozy cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6664,
    "imageUrl": "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800&h=800&random=139",
    "categoryId": "home"
  },
  {
    "id": "141",
    "name": "Classic Dress",
    "description": "A beautiful classic dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2750,
    "imageUrl": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800&h=800&random=140",
    "categoryId": "womens"
  },
  {
    "id": "142",
    "name": "Luxurious Boots",
    "description": "A beautiful luxurious boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2018,
    "imageUrl": "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=800&h=800&random=141",
    "categoryId": "mens"
  },
  {
    "id": "143",
    "name": "Modern Bangle",
    "description": "A beautiful modern bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 13115,
    "imageUrl": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800&h=800&random=142",
    "categoryId": "jewelry"
  },
  {
    "id": "144",
    "name": "Vintage Rug",
    "description": "A beautiful vintage rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5613,
    "imageUrl": "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800&h=800&random=143",
    "categoryId": "home"
  },
  {
    "id": "145",
    "name": "Classic Blouse",
    "description": "A beautiful classic blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1115,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800&h=800&random=144",
    "categoryId": "womens"
  },
  {
    "id": "146",
    "name": "Cozy Coat",
    "description": "A beautiful cozy coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2814,
    "imageUrl": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800&h=800&random=145",
    "categoryId": "mens"
  },
  {
    "id": "147",
    "name": "Modern Earrings",
    "description": "A beautiful modern earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 14081,
    "imageUrl": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800&h=800&random=146",
    "categoryId": "jewelry"
  },
  {
    "id": "148",
    "name": "Handcrafted Clock",
    "description": "A beautiful handcrafted clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4712,
    "imageUrl": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800&h=800&random=147",
    "categoryId": "home"
  },
  {
    "id": "149",
    "name": "Smart Skirt",
    "description": "A beautiful smart skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2354,
    "imageUrl": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800&h=800&random=148",
    "categoryId": "womens"
  },
  {
    "id": "150",
    "name": "Vintage Shirt",
    "description": "A beautiful vintage shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 884,
    "imageUrl": "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=800&h=800&random=149",
    "categoryId": "mens"
  },
  {
    "id": "151",
    "name": "Handcrafted Earrings",
    "description": "A beautiful handcrafted earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 12995,
    "imageUrl": "https://images.unsplash.com/photo-1573408301145-b98c4af05b8ea?auto=format&fit=crop&q=80&w=800&h=800&random=150",
    "categoryId": "jewelry"
  },
  {
    "id": "152",
    "name": "Sleek Cushion",
    "description": "A beautiful sleek cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6740,
    "imageUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800&h=800&random=151",
    "categoryId": "home"
  },
  {
    "id": "153",
    "name": "Vintage Jacket",
    "description": "A beautiful vintage jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 662,
    "imageUrl": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800&h=800&random=152",
    "categoryId": "womens"
  },
  {
    "id": "154",
    "name": "Smart Boots",
    "description": "A beautiful smart boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1214,
    "imageUrl": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800&h=800&random=153",
    "categoryId": "mens"
  },
  {
    "id": "155",
    "name": "Luxurious Ring",
    "description": "A beautiful luxurious ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3323,
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800&h=800&random=154",
    "categoryId": "jewelry"
  },
  {
    "id": "156",
    "name": "Bespoke Lamp",
    "description": "A beautiful bespoke lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4778,
    "imageUrl": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800&h=800&random=155",
    "categoryId": "home"
  },
  {
    "id": "157",
    "name": "Cozy Scarf",
    "description": "A beautiful cozy scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2322,
    "imageUrl": "https://images.unsplash.com/photo-1434389678369-1845bf733b41?auto=format&fit=crop&q=80&w=800&h=800&random=156",
    "categoryId": "womens"
  },
  {
    "id": "158",
    "name": "Casual Trousers",
    "description": "A beautiful casual trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1611,
    "imageUrl": "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=800&h=800&random=157",
    "categoryId": "mens"
  },
  {
    "id": "159",
    "name": "Vintage Bracelet",
    "description": "A beautiful vintage bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 10530,
    "imageUrl": "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800&h=800&random=158",
    "categoryId": "jewelry"
  },
  {
    "id": "160",
    "name": "Cozy Clock",
    "description": "A beautiful cozy clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7443,
    "imageUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800&h=800&random=159",
    "categoryId": "home"
  },
  {
    "id": "161",
    "name": "Cozy Sweater",
    "description": "A beautiful cozy sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1262,
    "imageUrl": "https://images.unsplash.com/photo-1434389678369-1845bf733b41?auto=format&fit=crop&q=80&w=800&h=800&random=160",
    "categoryId": "womens"
  },
  {
    "id": "162",
    "name": "Minimalist Suit",
    "description": "A beautiful minimalist suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1387,
    "imageUrl": "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=800&h=800&random=161",
    "categoryId": "mens"
  },
  {
    "id": "163",
    "name": "Elegant Ring",
    "description": "A beautiful elegant ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4320,
    "imageUrl": "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800&h=800&random=162",
    "categoryId": "jewelry"
  },
  {
    "id": "164",
    "name": "Vintage Mirror",
    "description": "A beautiful vintage mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4121,
    "imageUrl": "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800&h=800&random=163",
    "categoryId": "home"
  },
  {
    "id": "165",
    "name": "Casual Scarf",
    "description": "A beautiful casual scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2991,
    "imageUrl": "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&q=80&w=800&h=800&random=164",
    "categoryId": "womens"
  },
  {
    "id": "166",
    "name": "Essential Shirt",
    "description": "A beautiful essential shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 921,
    "imageUrl": "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=800&h=800&random=165",
    "categoryId": "mens"
  },
  {
    "id": "167",
    "name": "Sleek Necklace",
    "description": "A beautiful sleek necklace designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7988,
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800&h=800&random=166",
    "categoryId": "jewelry"
  },
  {
    "id": "168",
    "name": "Premium Cushion",
    "description": "A beautiful premium cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4039,
    "imageUrl": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800&h=800&random=167",
    "categoryId": "home"
  },
  {
    "id": "169",
    "name": "Sleek Blouse",
    "description": "A beautiful sleek blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1715,
    "imageUrl": "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800&h=800&random=168",
    "categoryId": "womens"
  },
  {
    "id": "170",
    "name": "Essential Jacket",
    "description": "A beautiful essential jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3682,
    "imageUrl": "https://images.unsplash.com/photo-1516826957135-700edeb5f9fa?auto=format&fit=crop&q=80&w=800&h=800&random=169",
    "categoryId": "mens"
  },
  {
    "id": "171",
    "name": "Premium Bracelet",
    "description": "A beautiful premium bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 12348,
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800&h=800&random=170",
    "categoryId": "jewelry"
  },
  {
    "id": "172",
    "name": "Elegant Rug",
    "description": "A beautiful elegant rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5166,
    "imageUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800&h=800&random=171",
    "categoryId": "home"
  },
  {
    "id": "173",
    "name": "Minimalist Coat",
    "description": "A beautiful minimalist coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3595,
    "imageUrl": "https://images.unsplash.com/photo-1434389678369-1845bf733b41?auto=format&fit=crop&q=80&w=800&h=800&random=172",
    "categoryId": "womens"
  },
  {
    "id": "174",
    "name": "Cozy Shirt",
    "description": "A beautiful cozy shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 670,
    "imageUrl": "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=800&h=800&random=173",
    "categoryId": "mens"
  },
  {
    "id": "175",
    "name": "Sleek Bracelet",
    "description": "A beautiful sleek bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 14781,
    "imageUrl": "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800&h=800&random=174",
    "categoryId": "jewelry"
  },
  {
    "id": "176",
    "name": "Casual Speaker",
    "description": "A beautiful casual speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3986,
    "imageUrl": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800&h=800&random=175",
    "categoryId": "home"
  },
  {
    "id": "177",
    "name": "Cozy Sweater",
    "description": "A beautiful cozy sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2347,
    "imageUrl": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800&h=800&random=176",
    "categoryId": "womens"
  },
  {
    "id": "178",
    "name": "Classic Jacket",
    "description": "A beautiful classic jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3254,
    "imageUrl": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800&h=800&random=177",
    "categoryId": "mens"
  },
  {
    "id": "179",
    "name": "Premium Bangle",
    "description": "A beautiful premium bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5956,
    "imageUrl": "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=800&h=800&random=178",
    "categoryId": "jewelry"
  },
  {
    "id": "180",
    "name": "Handcrafted Vase",
    "description": "A beautiful handcrafted vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6414,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=179",
    "categoryId": "home"
  },
  {
    "id": "181",
    "name": "Vintage Jacket",
    "description": "A beautiful vintage jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1829,
    "imageUrl": "https://images.unsplash.com/photo-1434389678369-1845bf733b41?auto=format&fit=crop&q=80&w=800&h=800&random=180",
    "categoryId": "womens"
  },
  {
    "id": "182",
    "name": "Modern Blazer",
    "description": "A beautiful modern blazer designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3219,
    "imageUrl": "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=800&h=800&random=181",
    "categoryId": "mens"
  },
  {
    "id": "183",
    "name": "Handcrafted Necklace",
    "description": "A beautiful handcrafted necklace designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 12227,
    "imageUrl": "https://images.unsplash.com/photo-1573408301145-b98c4af05b8ea?auto=format&fit=crop&q=80&w=800&h=800&random=182",
    "categoryId": "jewelry"
  },
  {
    "id": "184",
    "name": "Elegant Mirror",
    "description": "A beautiful elegant mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4821,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=183",
    "categoryId": "home"
  },
  {
    "id": "185",
    "name": "Luxurious Coat",
    "description": "A beautiful luxurious coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1715,
    "imageUrl": "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800&h=800&random=184",
    "categoryId": "womens"
  },
  {
    "id": "186",
    "name": "Sleek Suit",
    "description": "A beautiful sleek suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 850,
    "imageUrl": "https://images.unsplash.com/photo-1516826957135-700edeb5f9fa?auto=format&fit=crop&q=80&w=800&h=800&random=185",
    "categoryId": "mens"
  },
  {
    "id": "187",
    "name": "Elegant Bangle",
    "description": "A beautiful elegant bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7045,
    "imageUrl": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800&h=800&random=186",
    "categoryId": "jewelry"
  },
  {
    "id": "188",
    "name": "Sleek Thermostat",
    "description": "A beautiful sleek thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6675,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=187",
    "categoryId": "home"
  },
  {
    "id": "189",
    "name": "Luxurious Blouse",
    "description": "A beautiful luxurious blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2885,
    "imageUrl": "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800&h=800&random=188",
    "categoryId": "womens"
  },
  {
    "id": "190",
    "name": "Sleek Shirt",
    "description": "A beautiful sleek shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1985,
    "imageUrl": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800&h=800&random=189",
    "categoryId": "mens"
  },
  {
    "id": "191",
    "name": "Smart Watch",
    "description": "A beautiful smart watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7915,
    "imageUrl": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800&h=800&random=190",
    "categoryId": "jewelry"
  },
  {
    "id": "192",
    "name": "Minimalist Rug",
    "description": "A beautiful minimalist rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6156,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=191",
    "categoryId": "home"
  },
  {
    "id": "193",
    "name": "Vintage Blouse",
    "description": "A beautiful vintage blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1429,
    "imageUrl": "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800&h=800&random=192",
    "categoryId": "womens"
  },
  {
    "id": "194",
    "name": "Premium Sweater",
    "description": "A beautiful premium sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1307,
    "imageUrl": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800&h=800&random=193",
    "categoryId": "mens"
  },
  {
    "id": "195",
    "name": "Classic Bangle",
    "description": "A beautiful classic bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2236,
    "imageUrl": "https://images.unsplash.com/photo-1573408301145-b98c4af05b8ea?auto=format&fit=crop&q=80&w=800&h=800&random=194",
    "categoryId": "jewelry"
  },
  {
    "id": "196",
    "name": "Luxurious Thermostat",
    "description": "A beautiful luxurious thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7127,
    "imageUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800&h=800&random=195",
    "categoryId": "home"
  },
  {
    "id": "197",
    "name": "Chic Tunic",
    "description": "A beautiful chic tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2920,
    "imageUrl": "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800&h=800&random=196",
    "categoryId": "womens"
  },
  {
    "id": "198",
    "name": "Handcrafted Sweater",
    "description": "A beautiful handcrafted sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2726,
    "imageUrl": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800&h=800&random=197",
    "categoryId": "mens"
  },
  {
    "id": "199",
    "name": "Sleek Pendant",
    "description": "A beautiful sleek pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5294,
    "imageUrl": "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=800&h=800&random=198",
    "categoryId": "jewelry"
  },
  {
    "id": "200",
    "name": "Chic Mirror",
    "description": "A beautiful chic mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6408,
    "imageUrl": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800&h=800&random=199",
    "categoryId": "home"
  },
  {
    "id": "201",
    "name": "Elegant Blouse",
    "description": "A beautiful elegant blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3188,
    "imageUrl": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800&h=800&random=200",
    "categoryId": "womens"
  },
  {
    "id": "202",
    "name": "Handcrafted Coat",
    "description": "A beautiful handcrafted coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 825,
    "imageUrl": "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=800&h=800&random=201",
    "categoryId": "mens"
  },
  {
    "id": "203",
    "name": "Cozy Studs",
    "description": "A beautiful cozy studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 12515,
    "imageUrl": "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800&h=800&random=202",
    "categoryId": "jewelry"
  },
  {
    "id": "204",
    "name": "Elegant Mirror",
    "description": "A beautiful elegant mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4891,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=203",
    "categoryId": "home"
  },
  {
    "id": "205",
    "name": "Essential Skirt",
    "description": "A beautiful essential skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2215,
    "imageUrl": "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&q=80&w=800&h=800&random=204",
    "categoryId": "womens"
  },
  {
    "id": "206",
    "name": "Essential Boots",
    "description": "A beautiful essential boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2059,
    "imageUrl": "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=800&h=800&random=205",
    "categoryId": "mens"
  },
  {
    "id": "207",
    "name": "Essential Necklace",
    "description": "A beautiful essential necklace designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7562,
    "imageUrl": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800&h=800&random=206",
    "categoryId": "jewelry"
  },
  {
    "id": "208",
    "name": "Luxurious Vase",
    "description": "A beautiful luxurious vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1005,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=207",
    "categoryId": "home"
  },
  {
    "id": "209",
    "name": "Minimalist Scarf",
    "description": "A beautiful minimalist scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3074,
    "imageUrl": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800&h=800&random=208",
    "categoryId": "womens"
  },
  {
    "id": "210",
    "name": "Cozy Shirt",
    "description": "A beautiful cozy shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2596,
    "imageUrl": "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=800&h=800&random=209",
    "categoryId": "mens"
  },
  {
    "id": "211",
    "name": "Elegant Earrings",
    "description": "A beautiful elegant earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7457,
    "imageUrl": "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=800&h=800&random=210",
    "categoryId": "jewelry"
  },
  {
    "id": "212",
    "name": "Chic Speaker",
    "description": "A beautiful chic speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7294,
    "imageUrl": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800&h=800&random=211",
    "categoryId": "home"
  },
  {
    "id": "213",
    "name": "Cozy Skirt",
    "description": "A beautiful cozy skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2124,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800&h=800&random=212",
    "categoryId": "womens"
  },
  {
    "id": "214",
    "name": "Bespoke Shirt",
    "description": "A beautiful bespoke shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2254,
    "imageUrl": "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=800&h=800&random=213",
    "categoryId": "mens"
  },
  {
    "id": "215",
    "name": "Minimalist Pendant",
    "description": "A beautiful minimalist pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2037,
    "imageUrl": "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800&h=800&random=214",
    "categoryId": "jewelry"
  },
  {
    "id": "216",
    "name": "Handcrafted Mirror",
    "description": "A beautiful handcrafted mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6337,
    "imageUrl": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800&h=800&random=215",
    "categoryId": "home"
  },
  {
    "id": "217",
    "name": "Minimalist Jacket",
    "description": "A beautiful minimalist jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1268,
    "imageUrl": "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&q=80&w=800&h=800&random=216",
    "categoryId": "womens"
  },
  {
    "id": "218",
    "name": "Handcrafted Jacket",
    "description": "A beautiful handcrafted jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2455,
    "imageUrl": "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=800&h=800&random=217",
    "categoryId": "mens"
  },
  {
    "id": "219",
    "name": "Modern Studs",
    "description": "A beautiful modern studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3418,
    "imageUrl": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800&h=800&random=218",
    "categoryId": "jewelry"
  },
  {
    "id": "220",
    "name": "Smart Rug",
    "description": "A beautiful smart rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3188,
    "imageUrl": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800&h=800&random=219",
    "categoryId": "home"
  },
  {
    "id": "221",
    "name": "Sleek Skirt",
    "description": "A beautiful sleek skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 904,
    "imageUrl": "https://images.unsplash.com/photo-1434389678369-1845bf733b41?auto=format&fit=crop&q=80&w=800&h=800&random=220",
    "categoryId": "womens"
  },
  {
    "id": "222",
    "name": "Sleek Boots",
    "description": "A beautiful sleek boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3680,
    "imageUrl": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800&h=800&random=221",
    "categoryId": "mens"
  },
  {
    "id": "223",
    "name": "Classic Bracelet",
    "description": "A beautiful classic bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 12081,
    "imageUrl": "https://images.unsplash.com/photo-1573408301145-b98c4af05b8ea?auto=format&fit=crop&q=80&w=800&h=800&random=222",
    "categoryId": "jewelry"
  },
  {
    "id": "224",
    "name": "Luxurious Rug",
    "description": "A beautiful luxurious rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1344,
    "imageUrl": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800&h=800&random=223",
    "categoryId": "home"
  },
  {
    "id": "225",
    "name": "Sleek Skirt",
    "description": "A beautiful sleek skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1348,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800&h=800&random=224",
    "categoryId": "womens"
  },
  {
    "id": "226",
    "name": "Sleek Boots",
    "description": "A beautiful sleek boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1442,
    "imageUrl": "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=800&h=800&random=225",
    "categoryId": "mens"
  },
  {
    "id": "227",
    "name": "Chic Ring",
    "description": "A beautiful chic ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 8805,
    "imageUrl": "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800&h=800&random=226",
    "categoryId": "jewelry"
  },
  {
    "id": "228",
    "name": "Premium Rug",
    "description": "A beautiful premium rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7379,
    "imageUrl": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800&h=800&random=227",
    "categoryId": "home"
  },
  {
    "id": "229",
    "name": "Luxurious Scarf",
    "description": "A beautiful luxurious scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2869,
    "imageUrl": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800&h=800&random=228",
    "categoryId": "womens"
  },
  {
    "id": "230",
    "name": "Modern Suit",
    "description": "A beautiful modern suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 775,
    "imageUrl": "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?auto=format&fit=crop&q=80&w=800&h=800&random=229",
    "categoryId": "mens"
  },
  {
    "id": "231",
    "name": "Vintage Earrings",
    "description": "A beautiful vintage earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4382,
    "imageUrl": "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=800&h=800&random=230",
    "categoryId": "jewelry"
  },
  {
    "id": "232",
    "name": "Luxurious Speaker",
    "description": "A beautiful luxurious speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4728,
    "imageUrl": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800&h=800&random=231",
    "categoryId": "home"
  },
  {
    "id": "233",
    "name": "Minimalist Sweater",
    "description": "A beautiful minimalist sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3465,
    "imageUrl": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800&h=800&random=232",
    "categoryId": "womens"
  },
  {
    "id": "234",
    "name": "Handcrafted Shirt",
    "description": "A beautiful handcrafted shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1688,
    "imageUrl": "https://images.unsplash.com/photo-1516826957135-700edeb5f9fa?auto=format&fit=crop&q=80&w=800&h=800&random=233",
    "categoryId": "mens"
  },
  {
    "id": "235",
    "name": "Elegant Watch",
    "description": "A beautiful elegant watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4794,
    "imageUrl": "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800&h=800&random=234",
    "categoryId": "jewelry"
  },
  {
    "id": "236",
    "name": "Casual Mirror",
    "description": "A beautiful casual mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1402,
    "imageUrl": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800&h=800&random=235",
    "categoryId": "home"
  },
  {
    "id": "237",
    "name": "Chic Coat",
    "description": "A beautiful chic coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1943,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800&h=800&random=236",
    "categoryId": "womens"
  },
  {
    "id": "238",
    "name": "Sleek Jacket",
    "description": "A beautiful sleek jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3014,
    "imageUrl": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800&h=800&random=237",
    "categoryId": "mens"
  },
  {
    "id": "239",
    "name": "Modern Bracelet",
    "description": "A beautiful modern bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3622,
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800&h=800&random=238",
    "categoryId": "jewelry"
  },
  {
    "id": "240",
    "name": "Chic Cushion",
    "description": "A beautiful chic cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1023,
    "imageUrl": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800&h=800&random=239",
    "categoryId": "home"
  },
  {
    "id": "241",
    "name": "Modern Blouse",
    "description": "A beautiful modern blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3754,
    "imageUrl": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800&h=800&random=240",
    "categoryId": "womens"
  },
  {
    "id": "242",
    "name": "Minimalist Boots",
    "description": "A beautiful minimalist boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3822,
    "imageUrl": "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?auto=format&fit=crop&q=80&w=800&h=800&random=241",
    "categoryId": "mens"
  },
  {
    "id": "243",
    "name": "Handcrafted Bracelet",
    "description": "A beautiful handcrafted bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2273,
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800&h=800&random=242",
    "categoryId": "jewelry"
  },
  {
    "id": "244",
    "name": "Handcrafted Rug",
    "description": "A beautiful handcrafted rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6292,
    "imageUrl": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800&h=800&random=243",
    "categoryId": "home"
  },
  {
    "id": "245",
    "name": "Bespoke Skirt",
    "description": "A beautiful bespoke skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1329,
    "imageUrl": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800&h=800&random=244",
    "categoryId": "womens"
  },
  {
    "id": "246",
    "name": "Essential Jacket",
    "description": "A beautiful essential jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 765,
    "imageUrl": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800&h=800&random=245",
    "categoryId": "mens"
  },
  {
    "id": "247",
    "name": "Chic Watch",
    "description": "A beautiful chic watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 11139,
    "imageUrl": "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800&h=800&random=246",
    "categoryId": "jewelry"
  },
  {
    "id": "248",
    "name": "Smart Mirror",
    "description": "A beautiful smart mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4572,
    "imageUrl": "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800&h=800&random=247",
    "categoryId": "home"
  },
  {
    "id": "249",
    "name": "Handcrafted Coat",
    "description": "A beautiful handcrafted coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 945,
    "imageUrl": "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&q=80&w=800&h=800&random=248",
    "categoryId": "womens"
  },
  {
    "id": "250",
    "name": "Elegant Sweater",
    "description": "A beautiful elegant sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2360,
    "imageUrl": "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=800&h=800&random=249",
    "categoryId": "mens"
  },
  {
    "id": "251",
    "name": "Handcrafted Pendant",
    "description": "A beautiful handcrafted pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 14262,
    "imageUrl": "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=800&h=800&random=250",
    "categoryId": "jewelry"
  },
  {
    "id": "252",
    "name": "Luxurious Mirror",
    "description": "A beautiful luxurious mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6128,
    "imageUrl": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800&h=800&random=251",
    "categoryId": "home"
  },
  {
    "id": "253",
    "name": "Casual Scarf",
    "description": "A beautiful casual scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 607,
    "imageUrl": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800&h=800&random=252",
    "categoryId": "womens"
  },
  {
    "id": "254",
    "name": "Minimalist Trousers",
    "description": "A beautiful minimalist trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3286,
    "imageUrl": "https://images.unsplash.com/photo-1516826957135-700edeb5f9fa?auto=format&fit=crop&q=80&w=800&h=800&random=253",
    "categoryId": "mens"
  },
  {
    "id": "255",
    "name": "Essential Studs",
    "description": "A beautiful essential studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6766,
    "imageUrl": "https://images.unsplash.com/photo-1573408301145-b98c4af05b8ea?auto=format&fit=crop&q=80&w=800&h=800&random=254",
    "categoryId": "jewelry"
  },
  {
    "id": "256",
    "name": "Vintage Cushion",
    "description": "A beautiful vintage cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6060,
    "imageUrl": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800&h=800&random=255",
    "categoryId": "home"
  },
  {
    "id": "257",
    "name": "Bespoke Skirt",
    "description": "A beautiful bespoke skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1110,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800&h=800&random=256",
    "categoryId": "womens"
  },
  {
    "id": "258",
    "name": "Smart Trousers",
    "description": "A beautiful smart trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3367,
    "imageUrl": "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=800&h=800&random=257",
    "categoryId": "mens"
  },
  {
    "id": "259",
    "name": "Bespoke Pendant",
    "description": "A beautiful bespoke pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 11045,
    "imageUrl": "https://images.unsplash.com/photo-1573408301145-b98c4af05b8ea?auto=format&fit=crop&q=80&w=800&h=800&random=258",
    "categoryId": "jewelry"
  },
  {
    "id": "260",
    "name": "Modern Vase",
    "description": "A beautiful modern vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3013,
    "imageUrl": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800&h=800&random=259",
    "categoryId": "home"
  },
  {
    "id": "261",
    "name": "Cozy Tunic",
    "description": "A beautiful cozy tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1665,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800&h=800&random=260",
    "categoryId": "womens"
  },
  {
    "id": "262",
    "name": "Handcrafted Sweater",
    "description": "A beautiful handcrafted sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1275,
    "imageUrl": "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=800&h=800&random=261",
    "categoryId": "mens"
  },
  {
    "id": "263",
    "name": "Smart Ring",
    "description": "A beautiful smart ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 11182,
    "imageUrl": "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=800&h=800&random=262",
    "categoryId": "jewelry"
  },
  {
    "id": "264",
    "name": "Modern Thermostat",
    "description": "A beautiful modern thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3741,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=263",
    "categoryId": "home"
  },
  {
    "id": "265",
    "name": "Luxurious Sweater",
    "description": "A beautiful luxurious sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1638,
    "imageUrl": "https://images.unsplash.com/photo-1485230895905-ef203e8dc0c3?auto=format&fit=crop&q=80&w=800&h=800&random=264",
    "categoryId": "womens"
  },
  {
    "id": "266",
    "name": "Smart Jacket",
    "description": "A beautiful smart jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3668,
    "imageUrl": "https://images.unsplash.com/photo-1516826957135-700edeb5f9fa?auto=format&fit=crop&q=80&w=800&h=800&random=265",
    "categoryId": "mens"
  },
  {
    "id": "267",
    "name": "Modern Watch",
    "description": "A beautiful modern watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 11734,
    "imageUrl": "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800&h=800&random=266",
    "categoryId": "jewelry"
  },
  {
    "id": "268",
    "name": "Essential Thermostat",
    "description": "A beautiful essential thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5571,
    "imageUrl": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800&h=800&random=267",
    "categoryId": "home"
  },
  {
    "id": "269",
    "name": "Bespoke Skirt",
    "description": "A beautiful bespoke skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1179,
    "imageUrl": "https://images.unsplash.com/photo-1434389678369-1845bf733b41?auto=format&fit=crop&q=80&w=800&h=800&random=268",
    "categoryId": "womens"
  },
  {
    "id": "270",
    "name": "Smart Jacket",
    "description": "A beautiful smart jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3575,
    "imageUrl": "https://images.unsplash.com/photo-1516826957135-700edeb5f9fa?auto=format&fit=crop&q=80&w=800&h=800&random=269",
    "categoryId": "mens"
  },
  {
    "id": "271",
    "name": "Handcrafted Earrings",
    "description": "A beautiful handcrafted earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 12655,
    "imageUrl": "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=800&h=800&random=270",
    "categoryId": "jewelry"
  },
  {
    "id": "272",
    "name": "Vintage Speaker",
    "description": "A beautiful vintage speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1226,
    "imageUrl": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800&h=800&random=271",
    "categoryId": "home"
  },
  {
    "id": "273",
    "name": "Smart Skirt",
    "description": "A beautiful smart skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1469,
    "imageUrl": "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&q=80&w=800&h=800&random=272",
    "categoryId": "womens"
  },
  {
    "id": "274",
    "name": "Elegant Boots",
    "description": "A beautiful elegant boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3363,
    "imageUrl": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800&h=800&random=273",
    "categoryId": "mens"
  },
  {
    "id": "275",
    "name": "Essential Bracelet",
    "description": "A beautiful essential bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 12282,
    "imageUrl": "https://images.unsplash.com/photo-1599643478524-fb66f7ca2759?auto=format&fit=crop&q=80&w=800&h=800&random=274",
    "categoryId": "jewelry"
  },
  {
    "id": "276",
    "name": "Luxurious Thermostat",
    "description": "A beautiful luxurious thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5991,
    "imageUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800&h=800&random=275",
    "categoryId": "home"
  },
  {
    "id": "277",
    "name": "Elegant Scarf",
    "description": "A beautiful elegant scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1995,
    "imageUrl": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800&h=800&random=276",
    "categoryId": "womens"
  },
  {
    "id": "278",
    "name": "Elegant Coat",
    "description": "A beautiful elegant coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3301,
    "imageUrl": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800&h=800&random=277",
    "categoryId": "mens"
  },
  {
    "id": "279",
    "name": "Modern Bracelet",
    "description": "A beautiful modern bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6429,
    "imageUrl": "https://images.unsplash.com/photo-1573408301145-b98c4af05b8ea?auto=format&fit=crop&q=80&w=800&h=800&random=278",
    "categoryId": "jewelry"
  },
  {
    "id": "280",
    "name": "Sleek Speaker",
    "description": "A beautiful sleek speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6268,
    "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=800&random=279",
    "categoryId": "home"
  },
  {
    "id": "281",
    "name": "Elegant Blouse",
    "description": "A beautiful elegant blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1322,
    "imageUrl": "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800&h=800&random=280",
    "categoryId": "womens"
  },
  {
    "id": "282",
    "name": "Casual Coat",
    "description": "A beautiful casual coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1386,
    "imageUrl": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800&h=800&random=281",
    "categoryId": "mens"
  },
  {
    "id": "283",
    "name": "Luxurious Necklace",
    "description": "A beautiful luxurious necklace designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2842,
    "imageUrl": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800&h=800&random=282",
    "categoryId": "jewelry"
  },
  {
    "id": "284",
    "name": "Vintage Clock",
    "description": "A beautiful vintage clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6648,
    "imageUrl": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800&h=800&random=283",
    "categoryId": "home"
  },
  {
    "id": "285",
    "name": "Chic Blouse",
    "description": "A beautiful chic blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 823,
    "imageUrl": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800&h=800&random=284",
    "categoryId": "womens"
  },
  {
    "id": "286",
    "name": "Cozy Suit",
    "description": "A beautiful cozy suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2664,
    "imageUrl": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800&h=800&random=285",
    "categoryId": "mens"
  },
  {
    "id": "287",
    "name": "Essential Earrings",
    "description": "A beautiful essential earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4541,
    "imageUrl": "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800&h=800&random=286",
    "categoryId": "jewelry"
  },
  {
    "id": "288",
    "name": "Vintage Clock",
    "description": "A beautiful vintage clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4494,
    "imageUrl": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800&h=800&random=287",
    "categoryId": "home"
  },
  {
    "id": "289",
    "name": "Minimalist Coat",
    "description": "A beautiful minimalist coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3269,
    "imageUrl": "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&q=80&w=800&h=800&random=288",
    "categoryId": "womens"
  },
  {
    "id": "290",
    "name": "Sleek Suit",
    "description": "A beautiful sleek suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 809,
    "imageUrl": "https://images.unsplash.com/photo-1516826957135-700edeb5f9fa?auto=format&fit=crop&q=80&w=800&h=800&random=289",
    "categoryId": "mens"
  },
  {
    "id": "291",
    "name": "Sleek Watch",
    "description": "A beautiful sleek watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4354,
    "imageUrl": "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800&h=800&random=290",
    "categoryId": "jewelry"
  },
  {
    "id": "292",
    "name": "Essential Thermostat",
    "description": "A beautiful essential thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5057,
    "imageUrl": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800&h=800&random=291",
    "categoryId": "home"
  },
  {
    "id": "293",
    "name": "Cozy Coat",
    "description": "A beautiful cozy coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2297,
    "imageUrl": "https://images.unsplash.com/photo-1485230895905-ef203e8dc0c3?auto=format&fit=crop&q=80&w=800&h=800&random=292",
    "categoryId": "womens"
  },
  {
    "id": "294",
    "name": "Smart Shirt",
    "description": "A beautiful smart shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2362,
    "imageUrl": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800&h=800&random=293",
    "categoryId": "mens"
  },
  {
    "id": "295",
    "name": "Luxurious Pendant",
    "description": "A beautiful luxurious pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 8599,
    "imageUrl": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800&h=800&random=294",
    "categoryId": "jewelry"
  },
  {
    "id": "296",
    "name": "Casual Lamp",
    "description": "A beautiful casual lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4363,
    "imageUrl": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800&h=800&random=295",
    "categoryId": "home"
  },
  {
    "id": "297",
    "name": "Vintage Coat",
    "description": "A beautiful vintage coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 827,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800&h=800&random=296",
    "categoryId": "womens"
  },
  {
    "id": "298",
    "name": "Luxurious Boots",
    "description": "A beautiful luxurious boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2304,
    "imageUrl": "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=800&h=800&random=297",
    "categoryId": "mens"
  },
  {
    "id": "299",
    "name": "Luxurious Bracelet",
    "description": "A beautiful luxurious bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5468,
    "imageUrl": "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=800&h=800&random=298",
    "categoryId": "jewelry"
  },
  {
    "id": "300",
    "name": "Essential Thermostat",
    "description": "A beautiful essential thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6233,
    "imageUrl": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800&h=800&random=299",
    "categoryId": "home"
  },
  {
    "id": "301",
    "name": "Cozy Sweater",
    "description": "A beautiful cozy sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3279,
    "imageUrl": "https://images.unsplash.com/photo-1485230895905-ef203e8dc0c3?auto=format&fit=crop&q=80&w=800&h=800&random=300",
    "categoryId": "womens"
  },
  {
    "id": "302",
    "name": "Luxurious Shirt",
    "description": "A beautiful luxurious shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2702,
    "imageUrl": "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?auto=format&fit=crop&q=80&w=800&h=800&random=301",
    "categoryId": "mens"
  },
  {
    "id": "303",
    "name": "Minimalist Watch",
    "description": "A beautiful minimalist watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3574,
    "imageUrl": "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800&h=800&random=302",
    "categoryId": "jewelry"
  },
  {
    "id": "304",
    "name": "Casual Lamp",
    "description": "A beautiful casual lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7798,
    "imageUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800&h=800&random=303",
    "categoryId": "home"
  },
  {
    "id": "305",
    "name": "Chic Coat",
    "description": "A beautiful chic coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3417,
    "imageUrl": "https://images.unsplash.com/photo-1485230895905-ef203e8dc0c3?auto=format&fit=crop&q=80&w=800&h=800&random=304",
    "categoryId": "womens"
  },
  {
    "id": "306",
    "name": "Sleek Shirt",
    "description": "A beautiful sleek shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2008,
    "imageUrl": "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=800&h=800&random=305",
    "categoryId": "mens"
  },
  {
    "id": "307",
    "name": "Chic Bangle",
    "description": "A beautiful chic bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6409,
    "imageUrl": "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=800&h=800&random=306",
    "categoryId": "jewelry"
  },
  {
    "id": "308",
    "name": "Minimalist Mirror",
    "description": "A beautiful minimalist mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7078,
    "imageUrl": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800&h=800&random=307",
    "categoryId": "home"
  },
  {
    "id": "309",
    "name": "Chic Tunic",
    "description": "A beautiful chic tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2276,
    "imageUrl": "https://images.unsplash.com/photo-1485230895905-ef203e8dc0c3?auto=format&fit=crop&q=80&w=800&h=800&random=308",
    "categoryId": "womens"
  },
  {
    "id": "310",
    "name": "Bespoke Jacket",
    "description": "A beautiful bespoke jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 917,
    "imageUrl": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800&h=800&random=309",
    "categoryId": "mens"
  },
  {
    "id": "311",
    "name": "Handcrafted Watch",
    "description": "A beautiful handcrafted watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 11652,
    "imageUrl": "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800&h=800&random=310",
    "categoryId": "jewelry"
  },
  {
    "id": "312",
    "name": "Premium Cushion",
    "description": "A beautiful premium cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6619,
    "imageUrl": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800&h=800&random=311",
    "categoryId": "home"
  },
  {
    "id": "313",
    "name": "Chic Dress",
    "description": "A beautiful chic dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1008,
    "imageUrl": "https://images.unsplash.com/photo-1485230895905-ef203e8dc0c3?auto=format&fit=crop&q=80&w=800&h=800&random=312",
    "categoryId": "womens"
  },
  {
    "id": "314",
    "name": "Essential Suit",
    "description": "A beautiful essential suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3441,
    "imageUrl": "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=800&h=800&random=313",
    "categoryId": "mens"
  },
  {
    "id": "315",
    "name": "Bespoke Earrings",
    "description": "A beautiful bespoke earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7894,
    "imageUrl": "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800&h=800&random=314",
    "categoryId": "jewelry"
  },
  {
    "id": "316",
    "name": "Modern Clock",
    "description": "A beautiful modern clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4630,
    "imageUrl": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800&h=800&random=315",
    "categoryId": "home"
  },
  {
    "id": "317",
    "name": "Vintage Skirt",
    "description": "A beautiful vintage skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 895,
    "imageUrl": "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800&h=800&random=316",
    "categoryId": "womens"
  },
  {
    "id": "318",
    "name": "Handcrafted Boots",
    "description": "A beautiful handcrafted boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3397,
    "imageUrl": "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=800&h=800&random=317",
    "categoryId": "mens"
  },
  {
    "id": "319",
    "name": "Classic Pendant",
    "description": "A beautiful classic pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2252,
    "imageUrl": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800&h=800&random=318",
    "categoryId": "jewelry"
  },
  {
    "id": "320",
    "name": "Elegant Speaker",
    "description": "A beautiful elegant speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5125,
    "imageUrl": "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800&h=800&random=319",
    "categoryId": "home"
  }
];
