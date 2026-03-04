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
    "name": "Essential Tunic",
    "description": "A beautiful essential tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3146,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=1",
    "categoryId": "womens"
  },
  {
    "id": "2",
    "name": "Handcrafted Shirt",
    "description": "A beautiful handcrafted shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1132,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=2",
    "categoryId": "mens"
  },
  {
    "id": "3",
    "name": "Luxurious Bangle",
    "description": "A beautiful luxurious bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 8917,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=3",
    "categoryId": "jewelry"
  },
  {
    "id": "4",
    "name": "Casual Lamp",
    "description": "A beautiful casual lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1299,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=4",
    "categoryId": "home"
  },
  {
    "id": "5",
    "name": "Chic Scarf",
    "description": "A beautiful chic scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1745,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=5",
    "categoryId": "womens"
  },
  {
    "id": "6",
    "name": "Luxurious Blazer",
    "description": "A beautiful luxurious blazer designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2907,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=6",
    "categoryId": "mens"
  },
  {
    "id": "7",
    "name": "Cozy Bracelet",
    "description": "A beautiful cozy bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 12272,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=7",
    "categoryId": "jewelry"
  },
  {
    "id": "8",
    "name": "Premium Speaker",
    "description": "A beautiful premium speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1051,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=8",
    "categoryId": "home"
  },
  {
    "id": "9",
    "name": "Luxurious Blouse",
    "description": "A beautiful luxurious blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2624,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=9",
    "categoryId": "womens"
  },
  {
    "id": "10",
    "name": "Classic Sweater",
    "description": "A beautiful classic sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2175,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=10",
    "categoryId": "mens"
  },
  {
    "id": "11",
    "name": "Cozy Ring",
    "description": "A beautiful cozy ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 13140,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=11",
    "categoryId": "jewelry"
  },
  {
    "id": "12",
    "name": "Premium Lamp",
    "description": "A beautiful premium lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5598,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=12",
    "categoryId": "home"
  },
  {
    "id": "13",
    "name": "Bespoke Jacket",
    "description": "A beautiful bespoke jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2702,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=13",
    "categoryId": "womens"
  },
  {
    "id": "14",
    "name": "Bespoke Boots",
    "description": "A beautiful bespoke boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3739,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=14",
    "categoryId": "mens"
  },
  {
    "id": "15",
    "name": "Bespoke Bangle",
    "description": "A beautiful bespoke bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 8044,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=15",
    "categoryId": "jewelry"
  },
  {
    "id": "16",
    "name": "Elegant Mirror",
    "description": "A beautiful elegant mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5474,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=16",
    "categoryId": "home"
  },
  {
    "id": "17",
    "name": "Handcrafted Sweater",
    "description": "A beautiful handcrafted sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2986,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=17",
    "categoryId": "womens"
  },
  {
    "id": "18",
    "name": "Luxurious Suit",
    "description": "A beautiful luxurious suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1253,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=18",
    "categoryId": "mens"
  },
  {
    "id": "19",
    "name": "Bespoke Studs",
    "description": "A beautiful bespoke studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 13519,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=19",
    "categoryId": "jewelry"
  },
  {
    "id": "20",
    "name": "Smart Speaker",
    "description": "A beautiful smart speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3990,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=20",
    "categoryId": "home"
  },
  {
    "id": "21",
    "name": "Elegant Blouse",
    "description": "A beautiful elegant blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1143,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=21",
    "categoryId": "womens"
  },
  {
    "id": "22",
    "name": "Essential Coat",
    "description": "A beautiful essential coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 566,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=22",
    "categoryId": "mens"
  },
  {
    "id": "23",
    "name": "Smart Bracelet",
    "description": "A beautiful smart bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6540,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=23",
    "categoryId": "jewelry"
  },
  {
    "id": "24",
    "name": "Casual Rug",
    "description": "A beautiful casual rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2782,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=24",
    "categoryId": "home"
  },
  {
    "id": "25",
    "name": "Elegant Skirt",
    "description": "A beautiful elegant skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3339,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=25",
    "categoryId": "womens"
  },
  {
    "id": "26",
    "name": "Vintage Coat",
    "description": "A beautiful vintage coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1801,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=26",
    "categoryId": "mens"
  },
  {
    "id": "27",
    "name": "Premium Bracelet",
    "description": "A beautiful premium bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 10037,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=27",
    "categoryId": "jewelry"
  },
  {
    "id": "28",
    "name": "Modern Cushion",
    "description": "A beautiful modern cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4987,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=28",
    "categoryId": "home"
  },
  {
    "id": "29",
    "name": "Sleek Skirt",
    "description": "A beautiful sleek skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2189,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=29",
    "categoryId": "womens"
  },
  {
    "id": "30",
    "name": "Casual Trousers",
    "description": "A beautiful casual trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1053,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=30",
    "categoryId": "mens"
  },
  {
    "id": "31",
    "name": "Minimalist Pendant",
    "description": "A beautiful minimalist pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 11732,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=31",
    "categoryId": "jewelry"
  },
  {
    "id": "32",
    "name": "Vintage Clock",
    "description": "A beautiful vintage clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2518,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=32",
    "categoryId": "home"
  },
  {
    "id": "33",
    "name": "Handcrafted Dress",
    "description": "A beautiful handcrafted dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2927,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=33",
    "categoryId": "womens"
  },
  {
    "id": "34",
    "name": "Elegant Sweater",
    "description": "A beautiful elegant sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1476,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=34",
    "categoryId": "mens"
  },
  {
    "id": "35",
    "name": "Handcrafted Earrings",
    "description": "A beautiful handcrafted earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2129,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=35",
    "categoryId": "jewelry"
  },
  {
    "id": "36",
    "name": "Modern Cushion",
    "description": "A beautiful modern cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3862,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=36",
    "categoryId": "home"
  },
  {
    "id": "37",
    "name": "Modern Skirt",
    "description": "A beautiful modern skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 712,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=37",
    "categoryId": "womens"
  },
  {
    "id": "38",
    "name": "Modern Blazer",
    "description": "A beautiful modern blazer designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1176,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=38",
    "categoryId": "mens"
  },
  {
    "id": "39",
    "name": "Vintage Bangle",
    "description": "A beautiful vintage bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2699,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=39",
    "categoryId": "jewelry"
  },
  {
    "id": "40",
    "name": "Chic Thermostat",
    "description": "A beautiful chic thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2926,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=40",
    "categoryId": "home"
  },
  {
    "id": "41",
    "name": "Essential Scarf",
    "description": "A beautiful essential scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1714,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=41",
    "categoryId": "womens"
  },
  {
    "id": "42",
    "name": "Minimalist Boots",
    "description": "A beautiful minimalist boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3280,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=42",
    "categoryId": "mens"
  },
  {
    "id": "43",
    "name": "Chic Watch",
    "description": "A beautiful chic watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 8504,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=43",
    "categoryId": "jewelry"
  },
  {
    "id": "44",
    "name": "Luxurious Lamp",
    "description": "A beautiful luxurious lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3776,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=44",
    "categoryId": "home"
  },
  {
    "id": "45",
    "name": "Sleek Scarf",
    "description": "A beautiful sleek scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2188,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=45",
    "categoryId": "womens"
  },
  {
    "id": "46",
    "name": "Elegant Shirt",
    "description": "A beautiful elegant shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 750,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=46",
    "categoryId": "mens"
  },
  {
    "id": "47",
    "name": "Minimalist Ring",
    "description": "A beautiful minimalist ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4465,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=47",
    "categoryId": "jewelry"
  },
  {
    "id": "48",
    "name": "Essential Mirror",
    "description": "A beautiful essential mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3038,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=48",
    "categoryId": "home"
  },
  {
    "id": "49",
    "name": "Chic Jacket",
    "description": "A beautiful chic jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2483,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=49",
    "categoryId": "womens"
  },
  {
    "id": "50",
    "name": "Essential Coat",
    "description": "A beautiful essential coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3913,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=50",
    "categoryId": "mens"
  },
  {
    "id": "51",
    "name": "Sleek Pendant",
    "description": "A beautiful sleek pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 10158,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=51",
    "categoryId": "jewelry"
  },
  {
    "id": "52",
    "name": "Elegant Vase",
    "description": "A beautiful elegant vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7916,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=52",
    "categoryId": "home"
  },
  {
    "id": "53",
    "name": "Casual Sweater",
    "description": "A beautiful casual sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2308,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=53",
    "categoryId": "womens"
  },
  {
    "id": "54",
    "name": "Elegant Trousers",
    "description": "A beautiful elegant trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2906,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=54",
    "categoryId": "mens"
  },
  {
    "id": "55",
    "name": "Smart Bangle",
    "description": "A beautiful smart bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5476,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=55",
    "categoryId": "jewelry"
  },
  {
    "id": "56",
    "name": "Casual Speaker",
    "description": "A beautiful casual speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7644,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=56",
    "categoryId": "home"
  },
  {
    "id": "57",
    "name": "Sleek Jacket",
    "description": "A beautiful sleek jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1114,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=57",
    "categoryId": "womens"
  },
  {
    "id": "58",
    "name": "Classic Boots",
    "description": "A beautiful classic boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3409,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=58",
    "categoryId": "mens"
  },
  {
    "id": "59",
    "name": "Handcrafted Bracelet",
    "description": "A beautiful handcrafted bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7297,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=59",
    "categoryId": "jewelry"
  },
  {
    "id": "60",
    "name": "Handcrafted Lamp",
    "description": "A beautiful handcrafted lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1674,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=60",
    "categoryId": "home"
  },
  {
    "id": "61",
    "name": "Modern Jacket",
    "description": "A beautiful modern jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2938,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=61",
    "categoryId": "womens"
  },
  {
    "id": "62",
    "name": "Essential Coat",
    "description": "A beautiful essential coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2494,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=62",
    "categoryId": "mens"
  },
  {
    "id": "63",
    "name": "Bespoke Bangle",
    "description": "A beautiful bespoke bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5854,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=63",
    "categoryId": "jewelry"
  },
  {
    "id": "64",
    "name": "Bespoke Lamp",
    "description": "A beautiful bespoke lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4106,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=64",
    "categoryId": "home"
  },
  {
    "id": "65",
    "name": "Bespoke Dress",
    "description": "A beautiful bespoke dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1335,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=65",
    "categoryId": "womens"
  },
  {
    "id": "66",
    "name": "Cozy Sweater",
    "description": "A beautiful cozy sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2448,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=66",
    "categoryId": "mens"
  },
  {
    "id": "67",
    "name": "Luxurious Studs",
    "description": "A beautiful luxurious studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4386,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=67",
    "categoryId": "jewelry"
  },
  {
    "id": "68",
    "name": "Vintage Thermostat",
    "description": "A beautiful vintage thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7368,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=68",
    "categoryId": "home"
  },
  {
    "id": "69",
    "name": "Bespoke Blouse",
    "description": "A beautiful bespoke blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1578,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=69",
    "categoryId": "womens"
  },
  {
    "id": "70",
    "name": "Chic Shirt",
    "description": "A beautiful chic shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1288,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=70",
    "categoryId": "mens"
  },
  {
    "id": "71",
    "name": "Minimalist Ring",
    "description": "A beautiful minimalist ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 13430,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=71",
    "categoryId": "jewelry"
  },
  {
    "id": "72",
    "name": "Bespoke Thermostat",
    "description": "A beautiful bespoke thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7069,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=72",
    "categoryId": "home"
  },
  {
    "id": "73",
    "name": "Minimalist Jacket",
    "description": "A beautiful minimalist jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2226,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=73",
    "categoryId": "womens"
  },
  {
    "id": "74",
    "name": "Elegant Boots",
    "description": "A beautiful elegant boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2099,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=74",
    "categoryId": "mens"
  },
  {
    "id": "75",
    "name": "Luxurious Earrings",
    "description": "A beautiful luxurious earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2910,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=75",
    "categoryId": "jewelry"
  },
  {
    "id": "76",
    "name": "Cozy Thermostat",
    "description": "A beautiful cozy thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6236,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=76",
    "categoryId": "home"
  },
  {
    "id": "77",
    "name": "Sleek Jacket",
    "description": "A beautiful sleek jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2137,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=77",
    "categoryId": "womens"
  },
  {
    "id": "78",
    "name": "Handcrafted Boots",
    "description": "A beautiful handcrafted boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1566,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=78",
    "categoryId": "mens"
  },
  {
    "id": "79",
    "name": "Smart Studs",
    "description": "A beautiful smart studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7176,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=79",
    "categoryId": "jewelry"
  },
  {
    "id": "80",
    "name": "Minimalist Lamp",
    "description": "A beautiful minimalist lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6711,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=80",
    "categoryId": "home"
  },
  {
    "id": "81",
    "name": "Smart Sweater",
    "description": "A beautiful smart sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 695,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=81",
    "categoryId": "womens"
  },
  {
    "id": "82",
    "name": "Sleek Sweater",
    "description": "A beautiful sleek sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1535,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=82",
    "categoryId": "mens"
  },
  {
    "id": "83",
    "name": "Cozy Ring",
    "description": "A beautiful cozy ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 12694,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=83",
    "categoryId": "jewelry"
  },
  {
    "id": "84",
    "name": "Sleek Clock",
    "description": "A beautiful sleek clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2234,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=84",
    "categoryId": "home"
  },
  {
    "id": "85",
    "name": "Sleek Blouse",
    "description": "A beautiful sleek blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1755,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=85",
    "categoryId": "womens"
  },
  {
    "id": "86",
    "name": "Classic Blazer",
    "description": "A beautiful classic blazer designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2597,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=86",
    "categoryId": "mens"
  },
  {
    "id": "87",
    "name": "Bespoke Necklace",
    "description": "A beautiful bespoke necklace designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6121,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=87",
    "categoryId": "jewelry"
  },
  {
    "id": "88",
    "name": "Classic Thermostat",
    "description": "A beautiful classic thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1618,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=88",
    "categoryId": "home"
  },
  {
    "id": "89",
    "name": "Modern Dress",
    "description": "A beautiful modern dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3670,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=89",
    "categoryId": "womens"
  },
  {
    "id": "90",
    "name": "Classic Sweater",
    "description": "A beautiful classic sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3400,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=90",
    "categoryId": "mens"
  },
  {
    "id": "91",
    "name": "Chic Bangle",
    "description": "A beautiful chic bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 10255,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=91",
    "categoryId": "jewelry"
  },
  {
    "id": "92",
    "name": "Chic Clock",
    "description": "A beautiful chic clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2693,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=92",
    "categoryId": "home"
  },
  {
    "id": "93",
    "name": "Cozy Jacket",
    "description": "A beautiful cozy jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 699,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=93",
    "categoryId": "womens"
  },
  {
    "id": "94",
    "name": "Modern Trousers",
    "description": "A beautiful modern trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3778,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=94",
    "categoryId": "mens"
  },
  {
    "id": "95",
    "name": "Modern Pendant",
    "description": "A beautiful modern pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 8228,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=95",
    "categoryId": "jewelry"
  },
  {
    "id": "96",
    "name": "Vintage Vase",
    "description": "A beautiful vintage vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6749,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=96",
    "categoryId": "home"
  },
  {
    "id": "97",
    "name": "Smart Tunic",
    "description": "A beautiful smart tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2275,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=97",
    "categoryId": "womens"
  },
  {
    "id": "98",
    "name": "Luxurious Sweater",
    "description": "A beautiful luxurious sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2145,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=98",
    "categoryId": "mens"
  },
  {
    "id": "99",
    "name": "Sleek Bangle",
    "description": "A beautiful sleek bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 13494,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=99",
    "categoryId": "jewelry"
  },
  {
    "id": "100",
    "name": "Chic Rug",
    "description": "A beautiful chic rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2591,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=100",
    "categoryId": "home"
  },
  {
    "id": "101",
    "name": "Elegant Sweater",
    "description": "A beautiful elegant sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1111,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=101",
    "categoryId": "womens"
  },
  {
    "id": "102",
    "name": "Vintage Blazer",
    "description": "A beautiful vintage blazer designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 892,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=102",
    "categoryId": "mens"
  },
  {
    "id": "103",
    "name": "Modern Studs",
    "description": "A beautiful modern studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 13563,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=103",
    "categoryId": "jewelry"
  },
  {
    "id": "104",
    "name": "Luxurious Cushion",
    "description": "A beautiful luxurious cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3554,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=104",
    "categoryId": "home"
  },
  {
    "id": "105",
    "name": "Classic Sweater",
    "description": "A beautiful classic sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3977,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=105",
    "categoryId": "womens"
  },
  {
    "id": "106",
    "name": "Elegant Jacket",
    "description": "A beautiful elegant jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 703,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=106",
    "categoryId": "mens"
  },
  {
    "id": "107",
    "name": "Handcrafted Ring",
    "description": "A beautiful handcrafted ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 10993,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=107",
    "categoryId": "jewelry"
  },
  {
    "id": "108",
    "name": "Chic Lamp",
    "description": "A beautiful chic lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5015,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=108",
    "categoryId": "home"
  },
  {
    "id": "109",
    "name": "Luxurious Dress",
    "description": "A beautiful luxurious dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2803,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=109",
    "categoryId": "womens"
  },
  {
    "id": "110",
    "name": "Classic Sweater",
    "description": "A beautiful classic sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2113,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=110",
    "categoryId": "mens"
  },
  {
    "id": "111",
    "name": "Casual Earrings",
    "description": "A beautiful casual earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3080,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=111",
    "categoryId": "jewelry"
  },
  {
    "id": "112",
    "name": "Casual Rug",
    "description": "A beautiful casual rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2066,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=112",
    "categoryId": "home"
  },
  {
    "id": "113",
    "name": "Sleek Dress",
    "description": "A beautiful sleek dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 418,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=113",
    "categoryId": "womens"
  },
  {
    "id": "114",
    "name": "Essential Sweater",
    "description": "A beautiful essential sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2671,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=114",
    "categoryId": "mens"
  },
  {
    "id": "115",
    "name": "Bespoke Bangle",
    "description": "A beautiful bespoke bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3056,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=115",
    "categoryId": "jewelry"
  },
  {
    "id": "116",
    "name": "Smart Mirror",
    "description": "A beautiful smart mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7598,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=116",
    "categoryId": "home"
  },
  {
    "id": "117",
    "name": "Casual Skirt",
    "description": "A beautiful casual skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1690,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=117",
    "categoryId": "womens"
  },
  {
    "id": "118",
    "name": "Bespoke Coat",
    "description": "A beautiful bespoke coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3684,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=118",
    "categoryId": "mens"
  },
  {
    "id": "119",
    "name": "Handcrafted Pendant",
    "description": "A beautiful handcrafted pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5920,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=119",
    "categoryId": "jewelry"
  },
  {
    "id": "120",
    "name": "Minimalist Vase",
    "description": "A beautiful minimalist vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7332,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=120",
    "categoryId": "home"
  },
  {
    "id": "121",
    "name": "Sleek Dress",
    "description": "A beautiful sleek dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2667,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=121",
    "categoryId": "womens"
  },
  {
    "id": "122",
    "name": "Chic Shirt",
    "description": "A beautiful chic shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1050,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=122",
    "categoryId": "mens"
  },
  {
    "id": "123",
    "name": "Elegant Studs",
    "description": "A beautiful elegant studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 9550,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=123",
    "categoryId": "jewelry"
  },
  {
    "id": "124",
    "name": "Smart Speaker",
    "description": "A beautiful smart speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7960,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=124",
    "categoryId": "home"
  },
  {
    "id": "125",
    "name": "Smart Tunic",
    "description": "A beautiful smart tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3409,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=125",
    "categoryId": "womens"
  },
  {
    "id": "126",
    "name": "Classic Suit",
    "description": "A beautiful classic suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3499,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=126",
    "categoryId": "mens"
  },
  {
    "id": "127",
    "name": "Vintage Necklace",
    "description": "A beautiful vintage necklace designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 11381,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=127",
    "categoryId": "jewelry"
  },
  {
    "id": "128",
    "name": "Handcrafted Mirror",
    "description": "A beautiful handcrafted mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4097,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=128",
    "categoryId": "home"
  },
  {
    "id": "129",
    "name": "Vintage Sweater",
    "description": "A beautiful vintage sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 540,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=129",
    "categoryId": "womens"
  },
  {
    "id": "130",
    "name": "Vintage Jacket",
    "description": "A beautiful vintage jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2847,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=130",
    "categoryId": "mens"
  },
  {
    "id": "131",
    "name": "Luxurious Studs",
    "description": "A beautiful luxurious studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2232,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=131",
    "categoryId": "jewelry"
  },
  {
    "id": "132",
    "name": "Premium Vase",
    "description": "A beautiful premium vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2606,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=132",
    "categoryId": "home"
  },
  {
    "id": "133",
    "name": "Smart Coat",
    "description": "A beautiful smart coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3681,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=133",
    "categoryId": "womens"
  },
  {
    "id": "134",
    "name": "Elegant Coat",
    "description": "A beautiful elegant coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1358,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=134",
    "categoryId": "mens"
  },
  {
    "id": "135",
    "name": "Modern Ring",
    "description": "A beautiful modern ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7440,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=135",
    "categoryId": "jewelry"
  },
  {
    "id": "136",
    "name": "Classic Clock",
    "description": "A beautiful classic clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7972,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=136",
    "categoryId": "home"
  },
  {
    "id": "137",
    "name": "Sleek Coat",
    "description": "A beautiful sleek coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2634,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=137",
    "categoryId": "womens"
  },
  {
    "id": "138",
    "name": "Vintage Blazer",
    "description": "A beautiful vintage blazer designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2409,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=138",
    "categoryId": "mens"
  },
  {
    "id": "139",
    "name": "Premium Studs",
    "description": "A beautiful premium studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6143,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=139",
    "categoryId": "jewelry"
  },
  {
    "id": "140",
    "name": "Modern Cushion",
    "description": "A beautiful modern cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7142,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=140",
    "categoryId": "home"
  },
  {
    "id": "141",
    "name": "Essential Dress",
    "description": "A beautiful essential dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1127,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=141",
    "categoryId": "womens"
  },
  {
    "id": "142",
    "name": "Essential Boots",
    "description": "A beautiful essential boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1004,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=142",
    "categoryId": "mens"
  },
  {
    "id": "143",
    "name": "Vintage Bracelet",
    "description": "A beautiful vintage bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6454,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=143",
    "categoryId": "jewelry"
  },
  {
    "id": "144",
    "name": "Vintage Lamp",
    "description": "A beautiful vintage lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5679,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=144",
    "categoryId": "home"
  },
  {
    "id": "145",
    "name": "Handcrafted Jacket",
    "description": "A beautiful handcrafted jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2040,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=145",
    "categoryId": "womens"
  },
  {
    "id": "146",
    "name": "Handcrafted Suit",
    "description": "A beautiful handcrafted suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3022,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=146",
    "categoryId": "mens"
  },
  {
    "id": "147",
    "name": "Classic Pendant",
    "description": "A beautiful classic pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7377,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=147",
    "categoryId": "jewelry"
  },
  {
    "id": "148",
    "name": "Essential Rug",
    "description": "A beautiful essential rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2359,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=148",
    "categoryId": "home"
  },
  {
    "id": "149",
    "name": "Essential Coat",
    "description": "A beautiful essential coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1380,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=149",
    "categoryId": "womens"
  },
  {
    "id": "150",
    "name": "Cozy Trousers",
    "description": "A beautiful cozy trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2714,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=150",
    "categoryId": "mens"
  },
  {
    "id": "151",
    "name": "Classic Pendant",
    "description": "A beautiful classic pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6123,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=151",
    "categoryId": "jewelry"
  },
  {
    "id": "152",
    "name": "Bespoke Rug",
    "description": "A beautiful bespoke rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3126,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=152",
    "categoryId": "home"
  },
  {
    "id": "153",
    "name": "Minimalist Sweater",
    "description": "A beautiful minimalist sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3058,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=153",
    "categoryId": "womens"
  },
  {
    "id": "154",
    "name": "Minimalist Trousers",
    "description": "A beautiful minimalist trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 700,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=154",
    "categoryId": "mens"
  },
  {
    "id": "155",
    "name": "Casual Necklace",
    "description": "A beautiful casual necklace designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 11405,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=155",
    "categoryId": "jewelry"
  },
  {
    "id": "156",
    "name": "Vintage Speaker",
    "description": "A beautiful vintage speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3025,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=156",
    "categoryId": "home"
  },
  {
    "id": "157",
    "name": "Cozy Tunic",
    "description": "A beautiful cozy tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2659,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=157",
    "categoryId": "womens"
  },
  {
    "id": "158",
    "name": "Casual Suit",
    "description": "A beautiful casual suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2528,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=158",
    "categoryId": "mens"
  },
  {
    "id": "159",
    "name": "Minimalist Necklace",
    "description": "A beautiful minimalist necklace designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 9708,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=159",
    "categoryId": "jewelry"
  },
  {
    "id": "160",
    "name": "Casual Speaker",
    "description": "A beautiful casual speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3683,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=160",
    "categoryId": "home"
  },
  {
    "id": "161",
    "name": "Luxurious Blouse",
    "description": "A beautiful luxurious blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3891,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=161",
    "categoryId": "womens"
  },
  {
    "id": "162",
    "name": "Classic Blazer",
    "description": "A beautiful classic blazer designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3295,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=162",
    "categoryId": "mens"
  },
  {
    "id": "163",
    "name": "Classic Earrings",
    "description": "A beautiful classic earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 8499,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=163",
    "categoryId": "jewelry"
  },
  {
    "id": "164",
    "name": "Premium Lamp",
    "description": "A beautiful premium lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4543,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=164",
    "categoryId": "home"
  },
  {
    "id": "165",
    "name": "Essential Scarf",
    "description": "A beautiful essential scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1525,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=165",
    "categoryId": "womens"
  },
  {
    "id": "166",
    "name": "Chic Sweater",
    "description": "A beautiful chic sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3769,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=166",
    "categoryId": "mens"
  },
  {
    "id": "167",
    "name": "Elegant Watch",
    "description": "A beautiful elegant watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4430,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=167",
    "categoryId": "jewelry"
  },
  {
    "id": "168",
    "name": "Cozy Mirror",
    "description": "A beautiful cozy mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3254,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=168",
    "categoryId": "home"
  },
  {
    "id": "169",
    "name": "Bespoke Scarf",
    "description": "A beautiful bespoke scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3176,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=169",
    "categoryId": "womens"
  },
  {
    "id": "170",
    "name": "Minimalist Jacket",
    "description": "A beautiful minimalist jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3726,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=170",
    "categoryId": "mens"
  },
  {
    "id": "171",
    "name": "Handcrafted Studs",
    "description": "A beautiful handcrafted studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6581,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=171",
    "categoryId": "jewelry"
  },
  {
    "id": "172",
    "name": "Casual Vase",
    "description": "A beautiful casual vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5959,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=172",
    "categoryId": "home"
  },
  {
    "id": "173",
    "name": "Bespoke Scarf",
    "description": "A beautiful bespoke scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1624,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=173",
    "categoryId": "womens"
  },
  {
    "id": "174",
    "name": "Premium Coat",
    "description": "A beautiful premium coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 472,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=174",
    "categoryId": "mens"
  },
  {
    "id": "175",
    "name": "Classic Earrings",
    "description": "A beautiful classic earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 10523,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=175",
    "categoryId": "jewelry"
  },
  {
    "id": "176",
    "name": "Essential Mirror",
    "description": "A beautiful essential mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7041,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=176",
    "categoryId": "home"
  },
  {
    "id": "177",
    "name": "Elegant Dress",
    "description": "A beautiful elegant dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2126,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=177",
    "categoryId": "womens"
  },
  {
    "id": "178",
    "name": "Smart Sweater",
    "description": "A beautiful smart sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 776,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=178",
    "categoryId": "mens"
  },
  {
    "id": "179",
    "name": "Modern Studs",
    "description": "A beautiful modern studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 8071,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=179",
    "categoryId": "jewelry"
  },
  {
    "id": "180",
    "name": "Cozy Lamp",
    "description": "A beautiful cozy lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2458,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=180",
    "categoryId": "home"
  },
  {
    "id": "181",
    "name": "Handcrafted Dress",
    "description": "A beautiful handcrafted dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3522,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=181",
    "categoryId": "womens"
  },
  {
    "id": "182",
    "name": "Essential Sweater",
    "description": "A beautiful essential sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 533,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=182",
    "categoryId": "mens"
  },
  {
    "id": "183",
    "name": "Minimalist Earrings",
    "description": "A beautiful minimalist earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6969,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=183",
    "categoryId": "jewelry"
  },
  {
    "id": "184",
    "name": "Classic Vase",
    "description": "A beautiful classic vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2244,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=184",
    "categoryId": "home"
  },
  {
    "id": "185",
    "name": "Premium Coat",
    "description": "A beautiful premium coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1584,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=185",
    "categoryId": "womens"
  },
  {
    "id": "186",
    "name": "Smart Suit",
    "description": "A beautiful smart suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3353,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=186",
    "categoryId": "mens"
  },
  {
    "id": "187",
    "name": "Premium Studs",
    "description": "A beautiful premium studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 11729,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=187",
    "categoryId": "jewelry"
  },
  {
    "id": "188",
    "name": "Classic Speaker",
    "description": "A beautiful classic speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4364,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=188",
    "categoryId": "home"
  },
  {
    "id": "189",
    "name": "Chic Blouse",
    "description": "A beautiful chic blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2459,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=189",
    "categoryId": "womens"
  },
  {
    "id": "190",
    "name": "Smart Blazer",
    "description": "A beautiful smart blazer designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3287,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=190",
    "categoryId": "mens"
  },
  {
    "id": "191",
    "name": "Modern Ring",
    "description": "A beautiful modern ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6245,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=191",
    "categoryId": "jewelry"
  },
  {
    "id": "192",
    "name": "Smart Mirror",
    "description": "A beautiful smart mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1586,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=192",
    "categoryId": "home"
  },
  {
    "id": "193",
    "name": "Minimalist Tunic",
    "description": "A beautiful minimalist tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1929,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=193",
    "categoryId": "womens"
  },
  {
    "id": "194",
    "name": "Handcrafted Coat",
    "description": "A beautiful handcrafted coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1731,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=194",
    "categoryId": "mens"
  },
  {
    "id": "195",
    "name": "Elegant Necklace",
    "description": "A beautiful elegant necklace designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7930,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=195",
    "categoryId": "jewelry"
  },
  {
    "id": "196",
    "name": "Casual Mirror",
    "description": "A beautiful casual mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7433,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=196",
    "categoryId": "home"
  },
  {
    "id": "197",
    "name": "Essential Blouse",
    "description": "A beautiful essential blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3425,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=197",
    "categoryId": "womens"
  },
  {
    "id": "198",
    "name": "Classic Coat",
    "description": "A beautiful classic coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1074,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=198",
    "categoryId": "mens"
  },
  {
    "id": "199",
    "name": "Classic Necklace",
    "description": "A beautiful classic necklace designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 10062,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=199",
    "categoryId": "jewelry"
  },
  {
    "id": "200",
    "name": "Sleek Vase",
    "description": "A beautiful sleek vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1058,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=200",
    "categoryId": "home"
  },
  {
    "id": "201",
    "name": "Sleek Scarf",
    "description": "A beautiful sleek scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1451,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=201",
    "categoryId": "womens"
  },
  {
    "id": "202",
    "name": "Handcrafted Suit",
    "description": "A beautiful handcrafted suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1865,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=202",
    "categoryId": "mens"
  },
  {
    "id": "203",
    "name": "Classic Pendant",
    "description": "A beautiful classic pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 11519,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=203",
    "categoryId": "jewelry"
  },
  {
    "id": "204",
    "name": "Essential Cushion",
    "description": "A beautiful essential cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5921,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=204",
    "categoryId": "home"
  },
  {
    "id": "205",
    "name": "Casual Jacket",
    "description": "A beautiful casual jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 761,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=205",
    "categoryId": "womens"
  },
  {
    "id": "206",
    "name": "Casual Suit",
    "description": "A beautiful casual suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2218,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=206",
    "categoryId": "mens"
  },
  {
    "id": "207",
    "name": "Modern Bracelet",
    "description": "A beautiful modern bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 13013,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=207",
    "categoryId": "jewelry"
  },
  {
    "id": "208",
    "name": "Bespoke Mirror",
    "description": "A beautiful bespoke mirror designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7770,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=208",
    "categoryId": "home"
  },
  {
    "id": "209",
    "name": "Classic Coat",
    "description": "A beautiful classic coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3368,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=209",
    "categoryId": "womens"
  },
  {
    "id": "210",
    "name": "Sleek Blazer",
    "description": "A beautiful sleek blazer designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1945,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=210",
    "categoryId": "mens"
  },
  {
    "id": "211",
    "name": "Classic Pendant",
    "description": "A beautiful classic pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 13203,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=211",
    "categoryId": "jewelry"
  },
  {
    "id": "212",
    "name": "Premium Cushion",
    "description": "A beautiful premium cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4979,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=212",
    "categoryId": "home"
  },
  {
    "id": "213",
    "name": "Smart Scarf",
    "description": "A beautiful smart scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3178,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=213",
    "categoryId": "womens"
  },
  {
    "id": "214",
    "name": "Vintage Shirt",
    "description": "A beautiful vintage shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1709,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=214",
    "categoryId": "mens"
  },
  {
    "id": "215",
    "name": "Chic Studs",
    "description": "A beautiful chic studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 13929,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=215",
    "categoryId": "jewelry"
  },
  {
    "id": "216",
    "name": "Minimalist Clock",
    "description": "A beautiful minimalist clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1874,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=216",
    "categoryId": "home"
  },
  {
    "id": "217",
    "name": "Handcrafted Sweater",
    "description": "A beautiful handcrafted sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 866,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=217",
    "categoryId": "womens"
  },
  {
    "id": "218",
    "name": "Classic Coat",
    "description": "A beautiful classic coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2020,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=218",
    "categoryId": "mens"
  },
  {
    "id": "219",
    "name": "Elegant Bracelet",
    "description": "A beautiful elegant bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 13002,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=219",
    "categoryId": "jewelry"
  },
  {
    "id": "220",
    "name": "Bespoke Cushion",
    "description": "A beautiful bespoke cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5027,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=220",
    "categoryId": "home"
  },
  {
    "id": "221",
    "name": "Smart Coat",
    "description": "A beautiful smart coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3718,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=221",
    "categoryId": "womens"
  },
  {
    "id": "222",
    "name": "Smart Shirt",
    "description": "A beautiful smart shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2223,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=222",
    "categoryId": "mens"
  },
  {
    "id": "223",
    "name": "Bespoke Bangle",
    "description": "A beautiful bespoke bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 10397,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=223",
    "categoryId": "jewelry"
  },
  {
    "id": "224",
    "name": "Smart Vase",
    "description": "A beautiful smart vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4169,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=224",
    "categoryId": "home"
  },
  {
    "id": "225",
    "name": "Sleek Jacket",
    "description": "A beautiful sleek jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2206,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=225",
    "categoryId": "womens"
  },
  {
    "id": "226",
    "name": "Casual Jacket",
    "description": "A beautiful casual jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1511,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=226",
    "categoryId": "mens"
  },
  {
    "id": "227",
    "name": "Modern Bracelet",
    "description": "A beautiful modern bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 11517,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=227",
    "categoryId": "jewelry"
  },
  {
    "id": "228",
    "name": "Cozy Speaker",
    "description": "A beautiful cozy speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7439,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=228",
    "categoryId": "home"
  },
  {
    "id": "229",
    "name": "Essential Sweater",
    "description": "A beautiful essential sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 615,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=229",
    "categoryId": "womens"
  },
  {
    "id": "230",
    "name": "Elegant Trousers",
    "description": "A beautiful elegant trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1746,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=230",
    "categoryId": "mens"
  },
  {
    "id": "231",
    "name": "Minimalist Pendant",
    "description": "A beautiful minimalist pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 10260,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=231",
    "categoryId": "jewelry"
  },
  {
    "id": "232",
    "name": "Classic Clock",
    "description": "A beautiful classic clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2462,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=232",
    "categoryId": "home"
  },
  {
    "id": "233",
    "name": "Sleek Dress",
    "description": "A beautiful sleek dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1795,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=233",
    "categoryId": "womens"
  },
  {
    "id": "234",
    "name": "Luxurious Boots",
    "description": "A beautiful luxurious boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2429,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=234",
    "categoryId": "mens"
  },
  {
    "id": "235",
    "name": "Bespoke Studs",
    "description": "A beautiful bespoke studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4388,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=235",
    "categoryId": "jewelry"
  },
  {
    "id": "236",
    "name": "Vintage Speaker",
    "description": "A beautiful vintage speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3194,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=236",
    "categoryId": "home"
  },
  {
    "id": "237",
    "name": "Luxurious Scarf",
    "description": "A beautiful luxurious scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1700,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=237",
    "categoryId": "womens"
  },
  {
    "id": "238",
    "name": "Sleek Shirt",
    "description": "A beautiful sleek shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3045,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=238",
    "categoryId": "mens"
  },
  {
    "id": "239",
    "name": "Cozy Pendant",
    "description": "A beautiful cozy pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 9780,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=239",
    "categoryId": "jewelry"
  },
  {
    "id": "240",
    "name": "Elegant Lamp",
    "description": "A beautiful elegant lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6884,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=240",
    "categoryId": "home"
  },
  {
    "id": "241",
    "name": "Premium Dress",
    "description": "A beautiful premium dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2382,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=241",
    "categoryId": "womens"
  },
  {
    "id": "242",
    "name": "Sleek Shirt",
    "description": "A beautiful sleek shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3689,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=242",
    "categoryId": "mens"
  },
  {
    "id": "243",
    "name": "Modern Watch",
    "description": "A beautiful modern watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 9417,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=243",
    "categoryId": "jewelry"
  },
  {
    "id": "244",
    "name": "Modern Lamp",
    "description": "A beautiful modern lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2886,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=244",
    "categoryId": "home"
  },
  {
    "id": "245",
    "name": "Casual Scarf",
    "description": "A beautiful casual scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 713,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=245",
    "categoryId": "womens"
  },
  {
    "id": "246",
    "name": "Handcrafted Shirt",
    "description": "A beautiful handcrafted shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2451,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=246",
    "categoryId": "mens"
  },
  {
    "id": "247",
    "name": "Handcrafted Earrings",
    "description": "A beautiful handcrafted earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4383,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=247",
    "categoryId": "jewelry"
  },
  {
    "id": "248",
    "name": "Smart Lamp",
    "description": "A beautiful smart lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4012,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=248",
    "categoryId": "home"
  },
  {
    "id": "249",
    "name": "Smart Coat",
    "description": "A beautiful smart coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2720,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=249",
    "categoryId": "womens"
  },
  {
    "id": "250",
    "name": "Modern Trousers",
    "description": "A beautiful modern trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 993,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=250",
    "categoryId": "mens"
  },
  {
    "id": "251",
    "name": "Luxurious Bracelet",
    "description": "A beautiful luxurious bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6105,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=251",
    "categoryId": "jewelry"
  },
  {
    "id": "252",
    "name": "Chic Clock",
    "description": "A beautiful chic clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7587,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=252",
    "categoryId": "home"
  },
  {
    "id": "253",
    "name": "Minimalist Blouse",
    "description": "A beautiful minimalist blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 442,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=253",
    "categoryId": "womens"
  },
  {
    "id": "254",
    "name": "Vintage Boots",
    "description": "A beautiful vintage boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 449,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=254",
    "categoryId": "mens"
  },
  {
    "id": "255",
    "name": "Premium Bangle",
    "description": "A beautiful premium bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7017,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=255",
    "categoryId": "jewelry"
  },
  {
    "id": "256",
    "name": "Bespoke Thermostat",
    "description": "A beautiful bespoke thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2413,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=256",
    "categoryId": "home"
  },
  {
    "id": "257",
    "name": "Casual Dress",
    "description": "A beautiful casual dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2786,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=257",
    "categoryId": "womens"
  },
  {
    "id": "258",
    "name": "Casual Trousers",
    "description": "A beautiful casual trousers designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 500,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=258",
    "categoryId": "mens"
  },
  {
    "id": "259",
    "name": "Bespoke Ring",
    "description": "A beautiful bespoke ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 14605,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=259",
    "categoryId": "jewelry"
  },
  {
    "id": "260",
    "name": "Minimalist Vase",
    "description": "A beautiful minimalist vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2870,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=260",
    "categoryId": "home"
  },
  {
    "id": "261",
    "name": "Minimalist Sweater",
    "description": "A beautiful minimalist sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2318,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=261",
    "categoryId": "womens"
  },
  {
    "id": "262",
    "name": "Minimalist Coat",
    "description": "A beautiful minimalist coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3097,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=262",
    "categoryId": "mens"
  },
  {
    "id": "263",
    "name": "Modern Ring",
    "description": "A beautiful modern ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2942,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=263",
    "categoryId": "jewelry"
  },
  {
    "id": "264",
    "name": "Bespoke Cushion",
    "description": "A beautiful bespoke cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4203,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=264",
    "categoryId": "home"
  },
  {
    "id": "265",
    "name": "Casual Blouse",
    "description": "A beautiful casual blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1031,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=265",
    "categoryId": "womens"
  },
  {
    "id": "266",
    "name": "Smart Coat",
    "description": "A beautiful smart coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1525,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=266",
    "categoryId": "mens"
  },
  {
    "id": "267",
    "name": "Modern Watch",
    "description": "A beautiful modern watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 13415,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=267",
    "categoryId": "jewelry"
  },
  {
    "id": "268",
    "name": "Handcrafted Clock",
    "description": "A beautiful handcrafted clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6123,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=268",
    "categoryId": "home"
  },
  {
    "id": "269",
    "name": "Classic Sweater",
    "description": "A beautiful classic sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3133,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=269",
    "categoryId": "womens"
  },
  {
    "id": "270",
    "name": "Bespoke Coat",
    "description": "A beautiful bespoke coat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1990,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=270",
    "categoryId": "mens"
  },
  {
    "id": "271",
    "name": "Vintage Ring",
    "description": "A beautiful vintage ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4877,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=271",
    "categoryId": "jewelry"
  },
  {
    "id": "272",
    "name": "Smart Cushion",
    "description": "A beautiful smart cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7964,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=272",
    "categoryId": "home"
  },
  {
    "id": "273",
    "name": "Minimalist Blouse",
    "description": "A beautiful minimalist blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2423,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=273",
    "categoryId": "womens"
  },
  {
    "id": "274",
    "name": "Chic Suit",
    "description": "A beautiful chic suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3237,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=274",
    "categoryId": "mens"
  },
  {
    "id": "275",
    "name": "Modern Pendant",
    "description": "A beautiful modern pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 10029,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=275",
    "categoryId": "jewelry"
  },
  {
    "id": "276",
    "name": "Premium Rug",
    "description": "A beautiful premium rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5871,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=276",
    "categoryId": "home"
  },
  {
    "id": "277",
    "name": "Sleek Jacket",
    "description": "A beautiful sleek jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2739,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=277",
    "categoryId": "womens"
  },
  {
    "id": "278",
    "name": "Smart Jacket",
    "description": "A beautiful smart jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 910,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=278",
    "categoryId": "mens"
  },
  {
    "id": "279",
    "name": "Casual Studs",
    "description": "A beautiful casual studs designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 12693,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=279",
    "categoryId": "jewelry"
  },
  {
    "id": "280",
    "name": "Essential Rug",
    "description": "A beautiful essential rug designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2480,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=280",
    "categoryId": "home"
  },
  {
    "id": "281",
    "name": "Luxurious Dress",
    "description": "A beautiful luxurious dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2706,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=281",
    "categoryId": "womens"
  },
  {
    "id": "282",
    "name": "Classic Shirt",
    "description": "A beautiful classic shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2989,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=282",
    "categoryId": "mens"
  },
  {
    "id": "283",
    "name": "Classic Necklace",
    "description": "A beautiful classic necklace designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7730,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=283",
    "categoryId": "jewelry"
  },
  {
    "id": "284",
    "name": "Chic Clock",
    "description": "A beautiful chic clock designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6724,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=284",
    "categoryId": "home"
  },
  {
    "id": "285",
    "name": "Elegant Sweater",
    "description": "A beautiful elegant sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1335,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=285",
    "categoryId": "womens"
  },
  {
    "id": "286",
    "name": "Modern Shirt",
    "description": "A beautiful modern shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2955,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=286",
    "categoryId": "mens"
  },
  {
    "id": "287",
    "name": "Classic Earrings",
    "description": "A beautiful classic earrings designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 8676,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=287",
    "categoryId": "jewelry"
  },
  {
    "id": "288",
    "name": "Luxurious Thermostat",
    "description": "A beautiful luxurious thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4200,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=288",
    "categoryId": "home"
  },
  {
    "id": "289",
    "name": "Casual Skirt",
    "description": "A beautiful casual skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 938,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=289",
    "categoryId": "womens"
  },
  {
    "id": "290",
    "name": "Vintage Sweater",
    "description": "A beautiful vintage sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2252,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=290",
    "categoryId": "mens"
  },
  {
    "id": "291",
    "name": "Chic Bracelet",
    "description": "A beautiful chic bracelet designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 14252,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=291",
    "categoryId": "jewelry"
  },
  {
    "id": "292",
    "name": "Bespoke Cushion",
    "description": "A beautiful bespoke cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6200,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=292",
    "categoryId": "home"
  },
  {
    "id": "293",
    "name": "Casual Blouse",
    "description": "A beautiful casual blouse designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1237,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=293",
    "categoryId": "womens"
  },
  {
    "id": "294",
    "name": "Modern Boots",
    "description": "A beautiful modern boots designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3424,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=294",
    "categoryId": "mens"
  },
  {
    "id": "295",
    "name": "Minimalist Bangle",
    "description": "A beautiful minimalist bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6069,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=295",
    "categoryId": "jewelry"
  },
  {
    "id": "296",
    "name": "Sleek Speaker",
    "description": "A beautiful sleek speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5751,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=296",
    "categoryId": "home"
  },
  {
    "id": "297",
    "name": "Modern Jacket",
    "description": "A beautiful modern jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2825,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=297",
    "categoryId": "womens"
  },
  {
    "id": "298",
    "name": "Vintage Jacket",
    "description": "A beautiful vintage jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1209,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=298",
    "categoryId": "mens"
  },
  {
    "id": "299",
    "name": "Handcrafted Pendant",
    "description": "A beautiful handcrafted pendant designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 9956,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=299",
    "categoryId": "jewelry"
  },
  {
    "id": "300",
    "name": "Vintage Speaker",
    "description": "A beautiful vintage speaker designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3557,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=300",
    "categoryId": "home"
  },
  {
    "id": "301",
    "name": "Modern Jacket",
    "description": "A beautiful modern jacket designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3859,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=301",
    "categoryId": "womens"
  },
  {
    "id": "302",
    "name": "Chic Suit",
    "description": "A beautiful chic suit designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2308,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=302",
    "categoryId": "mens"
  },
  {
    "id": "303",
    "name": "Handcrafted Necklace",
    "description": "A beautiful handcrafted necklace designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 11266,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=303",
    "categoryId": "jewelry"
  },
  {
    "id": "304",
    "name": "Elegant Thermostat",
    "description": "A beautiful elegant thermostat designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7054,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=304",
    "categoryId": "home"
  },
  {
    "id": "305",
    "name": "Chic Skirt",
    "description": "A beautiful chic skirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3076,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=305",
    "categoryId": "womens"
  },
  {
    "id": "306",
    "name": "Sleek Sweater",
    "description": "A beautiful sleek sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 596,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=306",
    "categoryId": "mens"
  },
  {
    "id": "307",
    "name": "Minimalist Bangle",
    "description": "A beautiful minimalist bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 7139,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=307",
    "categoryId": "jewelry"
  },
  {
    "id": "308",
    "name": "Modern Cushion",
    "description": "A beautiful modern cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1366,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=308",
    "categoryId": "home"
  },
  {
    "id": "309",
    "name": "Minimalist Scarf",
    "description": "A beautiful minimalist scarf designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2439,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=309",
    "categoryId": "womens"
  },
  {
    "id": "310",
    "name": "Vintage Shirt",
    "description": "A beautiful vintage shirt designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3385,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=310",
    "categoryId": "mens"
  },
  {
    "id": "311",
    "name": "Modern Ring",
    "description": "A beautiful modern ring designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 14443,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=311",
    "categoryId": "jewelry"
  },
  {
    "id": "312",
    "name": "Classic Lamp",
    "description": "A beautiful classic lamp designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 5589,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=312",
    "categoryId": "home"
  },
  {
    "id": "313",
    "name": "Vintage Tunic",
    "description": "A beautiful vintage tunic designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 1095,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=313",
    "categoryId": "womens"
  },
  {
    "id": "314",
    "name": "Modern Blazer",
    "description": "A beautiful modern blazer designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2926,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=314",
    "categoryId": "mens"
  },
  {
    "id": "315",
    "name": "Modern Watch",
    "description": "A beautiful modern watch designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 6542,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=315",
    "categoryId": "jewelry"
  },
  {
    "id": "316",
    "name": "Cozy Vase",
    "description": "A beautiful cozy vase designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 4428,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=316",
    "categoryId": "home"
  },
  {
    "id": "317",
    "name": "Modern Dress",
    "description": "A beautiful modern dress designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 941,
    "imageUrl": "https://loremflickr.com/800/800/womens,clothing?lock=317",
    "categoryId": "womens"
  },
  {
    "id": "318",
    "name": "Classic Sweater",
    "description": "A beautiful classic sweater designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 2870,
    "imageUrl": "https://loremflickr.com/800/800/mens,clothing?lock=318",
    "categoryId": "mens"
  },
  {
    "id": "319",
    "name": "Cozy Bangle",
    "description": "A beautiful cozy bangle designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 12352,
    "imageUrl": "https://loremflickr.com/800/800/jewelry?lock=319",
    "categoryId": "jewelry"
  },
  {
    "id": "320",
    "name": "Elegant Cushion",
    "description": "A beautiful elegant cushion designed to elevate your everyday experience. Features premium materials and expert craftsmanship.",
    "price": 3483,
    "imageUrl": "https://loremflickr.com/800/800/homedecor?lock=320",
    "categoryId": "home"
  }
];
