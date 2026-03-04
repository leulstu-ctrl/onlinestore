export type Category = 'traditional-womens' | 'traditional-mens' | 'ethiopian-jewelry' | 'home';

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
    "name": "Authentic Habesha Kemis",
    "description": "A stunning authentic habesha kemis that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4323,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=1",
    "categoryId": "traditional-womens"
  },
  {
    "id": "2",
    "name": "Cultural Jano",
    "description": "A stunning cultural jano that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14821,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=2",
    "categoryId": "traditional-mens"
  },
  {
    "id": "3",
    "name": "Vibrant Tilet Ring",
    "description": "A stunning vibrant tilet ring that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 20099,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=3",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "4",
    "name": "Custom Mesob",
    "description": "A stunning custom mesob that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2177,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=4",
    "categoryId": "home"
  },
  {
    "id": "5",
    "name": "Elegant Zurya",
    "description": "A stunning elegant zurya that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2883,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=5",
    "categoryId": "traditional-womens"
  },
  {
    "id": "6",
    "name": "Custom Ertib",
    "description": "A stunning custom ertib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13989,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=6",
    "categoryId": "traditional-mens"
  },
  {
    "id": "7",
    "name": "Beautiful Traditional Earrings",
    "description": "A stunning beautiful traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 22008,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=7",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "8",
    "name": "Beautiful Clay Pot",
    "description": "A stunning beautiful clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2755,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=8",
    "categoryId": "home"
  },
  {
    "id": "9",
    "name": "Elegant Cotton Dress",
    "description": "A stunning elegant cotton dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11684,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=9",
    "categoryId": "traditional-womens"
  },
  {
    "id": "10",
    "name": "Bespoke Cotton Trousers",
    "description": "A stunning bespoke cotton trousers that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3642,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=10",
    "categoryId": "traditional-mens"
  },
  {
    "id": "11",
    "name": "Festive Coptic Cross",
    "description": "A stunning festive coptic cross that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 24712,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=11",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "12",
    "name": "Artisanal Woven Basket",
    "description": "A stunning artisanal woven basket that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3077,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=12",
    "categoryId": "home"
  },
  {
    "id": "13",
    "name": "Vibrant Kaba",
    "description": "A stunning vibrant kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6797,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=13",
    "categoryId": "traditional-womens"
  },
  {
    "id": "14",
    "name": "Authentic Kuta",
    "description": "A stunning authentic kuta that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6887,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=14",
    "categoryId": "traditional-mens"
  },
  {
    "id": "15",
    "name": "Bespoke Beaded Necklace",
    "description": "A stunning bespoke beaded necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11865,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=15",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "16",
    "name": "Authentic Mukecha",
    "description": "A stunning authentic mukecha that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2102,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=16",
    "categoryId": "home"
  },
  {
    "id": "17",
    "name": "Bespoke Habesha Kemis",
    "description": "A stunning bespoke habesha kemis that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11555,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=17",
    "categoryId": "traditional-womens"
  },
  {
    "id": "18",
    "name": "Artisanal Kaba",
    "description": "A stunning artisanal kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6605,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=18",
    "categoryId": "traditional-mens"
  },
  {
    "id": "19",
    "name": "Exquisite Silver Bracelet",
    "description": "A stunning exquisite silver bracelet that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 22393,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=19",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "20",
    "name": "Cultural Woven Basket",
    "description": "A stunning cultural woven basket that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1952,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=20",
    "categoryId": "home"
  },
  {
    "id": "21",
    "name": "Vibrant Cotton Dress",
    "description": "A stunning vibrant cotton dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14513,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=21",
    "categoryId": "traditional-womens"
  },
  {
    "id": "22",
    "name": "Handwoven Ertib",
    "description": "A stunning handwoven ertib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5154,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=22",
    "categoryId": "traditional-mens"
  },
  {
    "id": "23",
    "name": "Premium Meskel Pendant",
    "description": "A stunning premium meskel pendant that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 18494,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=23",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "24",
    "name": "Festive Jebena",
    "description": "A stunning festive jebena that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4904,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=24",
    "categoryId": "home"
  },
  {
    "id": "25",
    "name": "Premium Kaba",
    "description": "A stunning premium kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6685,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=25",
    "categoryId": "traditional-womens"
  },
  {
    "id": "26",
    "name": "Authentic Traditional Shirt",
    "description": "A stunning authentic traditional shirt that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4575,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=26",
    "categoryId": "traditional-mens"
  },
  {
    "id": "27",
    "name": "Traditional Tilet Ring",
    "description": "A stunning traditional tilet ring that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7883,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=27",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "28",
    "name": "Beautiful Mesob",
    "description": "A stunning beautiful mesob that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4469,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=28",
    "categoryId": "home"
  },
  {
    "id": "29",
    "name": "Handwoven Kaba",
    "description": "A stunning handwoven kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6484,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=29",
    "categoryId": "traditional-womens"
  },
  {
    "id": "30",
    "name": "Authentic Ertib",
    "description": "A stunning authentic ertib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13189,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=30",
    "categoryId": "traditional-mens"
  },
  {
    "id": "31",
    "name": "Authentic Traditional Earrings",
    "description": "A stunning authentic traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 9724,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=31",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "32",
    "name": "Intricate Mesob",
    "description": "A stunning intricate mesob that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1692,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=32",
    "categoryId": "home"
  },
  {
    "id": "33",
    "name": "Traditional Kaba",
    "description": "A stunning traditional kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14954,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=33",
    "categoryId": "traditional-womens"
  },
  {
    "id": "34",
    "name": "Elegant Cotton Trousers",
    "description": "A stunning elegant cotton trousers that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6691,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=34",
    "categoryId": "traditional-mens"
  },
  {
    "id": "35",
    "name": "Traditional Coptic Cross",
    "description": "A stunning traditional coptic cross that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 21742,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=35",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "36",
    "name": "Authentic Traditional Rug",
    "description": "A stunning authentic traditional rug that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3053,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=36",
    "categoryId": "home"
  },
  {
    "id": "37",
    "name": "Festive Tilet Dress",
    "description": "A stunning festive tilet dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7924,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=37",
    "categoryId": "traditional-womens"
  },
  {
    "id": "38",
    "name": "Authentic Traditional Shirt",
    "description": "A stunning authentic traditional shirt that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4991,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=38",
    "categoryId": "traditional-mens"
  },
  {
    "id": "39",
    "name": "Festive Traditional Earrings",
    "description": "A stunning festive traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6890,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=39",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "40",
    "name": "Artisanal Traditional Rug",
    "description": "A stunning artisanal traditional rug that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3631,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=40",
    "categoryId": "home"
  },
  {
    "id": "41",
    "name": "Classic Dirib",
    "description": "A stunning classic dirib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14161,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=41",
    "categoryId": "traditional-womens"
  },
  {
    "id": "42",
    "name": "Classic Ertib",
    "description": "A stunning classic ertib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14774,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=42",
    "categoryId": "traditional-mens"
  },
  {
    "id": "43",
    "name": "Cultural Traditional Earrings",
    "description": "A stunning cultural traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5821,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=43",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "44",
    "name": "Exquisite Jebena",
    "description": "A stunning exquisite jebena that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4834,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=44",
    "categoryId": "home"
  },
  {
    "id": "45",
    "name": "Premium Zurya",
    "description": "A stunning premium zurya that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 9817,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=45",
    "categoryId": "traditional-womens"
  },
  {
    "id": "46",
    "name": "Exquisite Ertib",
    "description": "A stunning exquisite ertib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11634,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=46",
    "categoryId": "traditional-mens"
  },
  {
    "id": "47",
    "name": "Festive Gold Necklace",
    "description": "A stunning festive gold necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7343,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=47",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "48",
    "name": "Custom Clay Pot",
    "description": "A stunning custom clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4037,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=48",
    "categoryId": "home"
  },
  {
    "id": "49",
    "name": "Handwoven Tilet Dress",
    "description": "A stunning handwoven tilet dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2804,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=49",
    "categoryId": "traditional-womens"
  },
  {
    "id": "50",
    "name": "Bespoke Kuta",
    "description": "A stunning bespoke kuta that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5021,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=50",
    "categoryId": "traditional-mens"
  },
  {
    "id": "51",
    "name": "Festive Traditional Earrings",
    "description": "A stunning festive traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5660,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=51",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "52",
    "name": "Festive Mukecha",
    "description": "A stunning festive mukecha that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2036,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=52",
    "categoryId": "home"
  },
  {
    "id": "53",
    "name": "Beautiful Kaba",
    "description": "A stunning beautiful kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7389,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=53",
    "categoryId": "traditional-womens"
  },
  {
    "id": "54",
    "name": "Custom Cotton Trousers",
    "description": "A stunning custom cotton trousers that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3131,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=54",
    "categoryId": "traditional-mens"
  },
  {
    "id": "55",
    "name": "Beautiful Gold Necklace",
    "description": "A stunning beautiful gold necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 15756,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=55",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "56",
    "name": "Elegant Sefed",
    "description": "A stunning elegant sefed that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2407,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=56",
    "categoryId": "home"
  },
  {
    "id": "57",
    "name": "Authentic Zurya",
    "description": "A stunning authentic zurya that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3198,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=57",
    "categoryId": "traditional-womens"
  },
  {
    "id": "58",
    "name": "Beautiful Traditional Shirt",
    "description": "A stunning beautiful traditional shirt that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13559,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=58",
    "categoryId": "traditional-mens"
  },
  {
    "id": "59",
    "name": "Premium Coptic Cross",
    "description": "A stunning premium coptic cross that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14300,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=59",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "60",
    "name": "Exquisite Cultural Wall Art",
    "description": "A stunning exquisite cultural wall art that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1483,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=60",
    "categoryId": "home"
  },
  {
    "id": "61",
    "name": "Cultural Dirib",
    "description": "A stunning cultural dirib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7368,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=61",
    "categoryId": "traditional-womens"
  },
  {
    "id": "62",
    "name": "Exquisite Kaba",
    "description": "A stunning exquisite kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13266,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=62",
    "categoryId": "traditional-mens"
  },
  {
    "id": "63",
    "name": "Authentic Anklet",
    "description": "A stunning authentic anklet that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 16622,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=63",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "64",
    "name": "Traditional Cultural Wall Art",
    "description": "A stunning traditional cultural wall art that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1617,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=64",
    "categoryId": "home"
  },
  {
    "id": "65",
    "name": "Festive Gabi",
    "description": "A stunning festive gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 12195,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=65",
    "categoryId": "traditional-womens"
  },
  {
    "id": "66",
    "name": "Exquisite Jano",
    "description": "A stunning exquisite jano that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14771,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=66",
    "categoryId": "traditional-mens"
  },
  {
    "id": "67",
    "name": "Festive Gold Necklace",
    "description": "A stunning festive gold necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 17154,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=67",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "68",
    "name": "Handwoven Mukecha",
    "description": "A stunning handwoven mukecha that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1503,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=68",
    "categoryId": "home"
  },
  {
    "id": "69",
    "name": "Handwoven Zurya",
    "description": "A stunning handwoven zurya that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 10327,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=69",
    "categoryId": "traditional-womens"
  },
  {
    "id": "70",
    "name": "Artisanal Jano",
    "description": "A stunning artisanal jano that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7602,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=70",
    "categoryId": "traditional-mens"
  },
  {
    "id": "71",
    "name": "Vibrant Gold Necklace",
    "description": "A stunning vibrant gold necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11185,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=71",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "72",
    "name": "Artisanal Clay Pot",
    "description": "A stunning artisanal clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3139,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=72",
    "categoryId": "home"
  },
  {
    "id": "73",
    "name": "Traditional Cotton Dress",
    "description": "A stunning traditional cotton dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5217,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=73",
    "categoryId": "traditional-womens"
  },
  {
    "id": "74",
    "name": "Bespoke Kuta",
    "description": "A stunning bespoke kuta that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14518,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=74",
    "categoryId": "traditional-mens"
  },
  {
    "id": "75",
    "name": "Classic Beaded Necklace",
    "description": "A stunning classic beaded necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13467,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=75",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "76",
    "name": "Custom Traditional Rug",
    "description": "A stunning custom traditional rug that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3385,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=76",
    "categoryId": "home"
  },
  {
    "id": "77",
    "name": "Intricate Cotton Dress",
    "description": "A stunning intricate cotton dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 10364,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=77",
    "categoryId": "traditional-womens"
  },
  {
    "id": "78",
    "name": "Custom Kuta",
    "description": "A stunning custom kuta that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3727,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=78",
    "categoryId": "traditional-mens"
  },
  {
    "id": "79",
    "name": "Custom Traditional Earrings",
    "description": "A stunning custom traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 20903,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=79",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "80",
    "name": "Cultural Mukecha",
    "description": "A stunning cultural mukecha that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1084,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=80",
    "categoryId": "home"
  },
  {
    "id": "81",
    "name": "Classic Kaba",
    "description": "A stunning classic kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11877,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=81",
    "categoryId": "traditional-womens"
  },
  {
    "id": "82",
    "name": "Festive Ertib",
    "description": "A stunning festive ertib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7669,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=82",
    "categoryId": "traditional-mens"
  },
  {
    "id": "83",
    "name": "Premium Traditional Earrings",
    "description": "A stunning premium traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 10782,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=83",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "84",
    "name": "Custom Clay Pot",
    "description": "A stunning custom clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1861,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=84",
    "categoryId": "home"
  },
  {
    "id": "85",
    "name": "Traditional Tilet Dress",
    "description": "A stunning traditional tilet dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6164,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=85",
    "categoryId": "traditional-womens"
  },
  {
    "id": "86",
    "name": "Beautiful Kuta",
    "description": "A stunning beautiful kuta that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 12468,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=86",
    "categoryId": "traditional-mens"
  },
  {
    "id": "87",
    "name": "Elegant Anklet",
    "description": "A stunning elegant anklet that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5071,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=87",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "88",
    "name": "Beautiful Clay Pot",
    "description": "A stunning beautiful clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3567,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=88",
    "categoryId": "home"
  },
  {
    "id": "89",
    "name": "Vibrant Kaba",
    "description": "A stunning vibrant kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 9867,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=89",
    "categoryId": "traditional-womens"
  },
  {
    "id": "90",
    "name": "Authentic Cotton Trousers",
    "description": "A stunning authentic cotton trousers that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 10909,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=90",
    "categoryId": "traditional-mens"
  },
  {
    "id": "91",
    "name": "Artisanal Beaded Necklace",
    "description": "A stunning artisanal beaded necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14283,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=91",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "92",
    "name": "Traditional Mesob",
    "description": "A stunning traditional mesob that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4702,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=92",
    "categoryId": "home"
  },
  {
    "id": "93",
    "name": "Custom Tilet Dress",
    "description": "A stunning custom tilet dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3698,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=93",
    "categoryId": "traditional-womens"
  },
  {
    "id": "94",
    "name": "Elegant Gabi",
    "description": "A stunning elegant gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5132,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=94",
    "categoryId": "traditional-mens"
  },
  {
    "id": "95",
    "name": "Vibrant Gold Necklace",
    "description": "A stunning vibrant gold necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 19046,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=95",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "96",
    "name": "Intricate Sefed",
    "description": "A stunning intricate sefed that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4020,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=96",
    "categoryId": "home"
  },
  {
    "id": "97",
    "name": "Bespoke Gabi",
    "description": "A stunning bespoke gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3509,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=97",
    "categoryId": "traditional-womens"
  },
  {
    "id": "98",
    "name": "Elegant Jano",
    "description": "A stunning elegant jano that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4257,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=98",
    "categoryId": "traditional-mens"
  },
  {
    "id": "99",
    "name": "Artisanal Coptic Cross",
    "description": "A stunning artisanal coptic cross that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 9790,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=99",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "100",
    "name": "Intricate Jebena",
    "description": "A stunning intricate jebena that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2420,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=100",
    "categoryId": "home"
  },
  {
    "id": "101",
    "name": "Traditional Gabi",
    "description": "A stunning traditional gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7390,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=101",
    "categoryId": "traditional-womens"
  },
  {
    "id": "102",
    "name": "Intricate Ertib",
    "description": "A stunning intricate ertib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7730,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=102",
    "categoryId": "traditional-mens"
  },
  {
    "id": "103",
    "name": "Artisanal Meskel Pendant",
    "description": "A stunning artisanal meskel pendant that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 21074,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=103",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "104",
    "name": "Authentic Clay Pot",
    "description": "A stunning authentic clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2642,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=104",
    "categoryId": "home"
  },
  {
    "id": "105",
    "name": "Festive Habesha Kemis",
    "description": "A stunning festive habesha kemis that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 10965,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=105",
    "categoryId": "traditional-womens"
  },
  {
    "id": "106",
    "name": "Authentic Jano",
    "description": "A stunning authentic jano that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 12247,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=106",
    "categoryId": "traditional-mens"
  },
  {
    "id": "107",
    "name": "Handwoven Gold Necklace",
    "description": "A stunning handwoven gold necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 9162,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=107",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "108",
    "name": "Intricate Traditional Rug",
    "description": "A stunning intricate traditional rug that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4438,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=108",
    "categoryId": "home"
  },
  {
    "id": "109",
    "name": "Exquisite Netela",
    "description": "A stunning exquisite netela that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4980,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=109",
    "categoryId": "traditional-womens"
  },
  {
    "id": "110",
    "name": "Festive Buluko",
    "description": "A stunning festive buluko that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 9041,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=110",
    "categoryId": "traditional-mens"
  },
  {
    "id": "111",
    "name": "Intricate Traditional Earrings",
    "description": "A stunning intricate traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7099,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=111",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "112",
    "name": "Premium Woven Basket",
    "description": "A stunning premium woven basket that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3063,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=112",
    "categoryId": "home"
  },
  {
    "id": "113",
    "name": "Exquisite Habesha Kemis",
    "description": "A stunning exquisite habesha kemis that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 10787,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=113",
    "categoryId": "traditional-womens"
  },
  {
    "id": "114",
    "name": "Authentic Kuta",
    "description": "A stunning authentic kuta that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3283,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=114",
    "categoryId": "traditional-mens"
  },
  {
    "id": "115",
    "name": "Handwoven Meskel Pendant",
    "description": "A stunning handwoven meskel pendant that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 16729,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=115",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "116",
    "name": "Artisanal Traditional Rug",
    "description": "A stunning artisanal traditional rug that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3531,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=116",
    "categoryId": "home"
  },
  {
    "id": "117",
    "name": "Artisanal Dirib",
    "description": "A stunning artisanal dirib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13208,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=117",
    "categoryId": "traditional-womens"
  },
  {
    "id": "118",
    "name": "Traditional Traditional Shirt",
    "description": "A stunning traditional traditional shirt that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2844,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=118",
    "categoryId": "traditional-mens"
  },
  {
    "id": "119",
    "name": "Elegant Beaded Necklace",
    "description": "A stunning elegant beaded necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5523,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=119",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "120",
    "name": "Authentic Mesob",
    "description": "A stunning authentic mesob that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3614,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=120",
    "categoryId": "home"
  },
  {
    "id": "121",
    "name": "Custom Cotton Dress",
    "description": "A stunning custom cotton dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3512,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=121",
    "categoryId": "traditional-womens"
  },
  {
    "id": "122",
    "name": "Bespoke Traditional Shirt",
    "description": "A stunning bespoke traditional shirt that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 8175,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=122",
    "categoryId": "traditional-mens"
  },
  {
    "id": "123",
    "name": "Festive Traditional Earrings",
    "description": "A stunning festive traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11046,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=123",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "124",
    "name": "Premium Cultural Wall Art",
    "description": "A stunning premium cultural wall art that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4067,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=124",
    "categoryId": "home"
  },
  {
    "id": "125",
    "name": "Premium Habesha Kemis",
    "description": "A stunning premium habesha kemis that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5777,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=125",
    "categoryId": "traditional-womens"
  },
  {
    "id": "126",
    "name": "Festive Cotton Trousers",
    "description": "A stunning festive cotton trousers that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 10278,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=126",
    "categoryId": "traditional-mens"
  },
  {
    "id": "127",
    "name": "Intricate Anklet",
    "description": "A stunning intricate anklet that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14125,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=127",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "128",
    "name": "Exquisite Sefed",
    "description": "A stunning exquisite sefed that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2994,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=128",
    "categoryId": "home"
  },
  {
    "id": "129",
    "name": "Traditional Kaba",
    "description": "A stunning traditional kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6522,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=129",
    "categoryId": "traditional-womens"
  },
  {
    "id": "130",
    "name": "Artisanal Traditional Shirt",
    "description": "A stunning artisanal traditional shirt that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 10229,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=130",
    "categoryId": "traditional-mens"
  },
  {
    "id": "131",
    "name": "Classic Tilet Ring",
    "description": "A stunning classic tilet ring that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 16278,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=131",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "132",
    "name": "Authentic Mesob",
    "description": "A stunning authentic mesob that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2544,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=132",
    "categoryId": "home"
  },
  {
    "id": "133",
    "name": "Bespoke Zurya",
    "description": "A stunning bespoke zurya that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 9424,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=133",
    "categoryId": "traditional-womens"
  },
  {
    "id": "134",
    "name": "Custom Cotton Trousers",
    "description": "A stunning custom cotton trousers that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11738,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=134",
    "categoryId": "traditional-mens"
  },
  {
    "id": "135",
    "name": "Intricate Tilet Ring",
    "description": "A stunning intricate tilet ring that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 24577,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=135",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "136",
    "name": "Elegant Sefed",
    "description": "A stunning elegant sefed that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1331,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=136",
    "categoryId": "home"
  },
  {
    "id": "137",
    "name": "Bespoke Netela",
    "description": "A stunning bespoke netela that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 10971,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=137",
    "categoryId": "traditional-womens"
  },
  {
    "id": "138",
    "name": "Cultural Traditional Shirt",
    "description": "A stunning cultural traditional shirt that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6353,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=138",
    "categoryId": "traditional-mens"
  },
  {
    "id": "139",
    "name": "Premium Silver Bracelet",
    "description": "A stunning premium silver bracelet that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 21038,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=139",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "140",
    "name": "Exquisite Sefed",
    "description": "A stunning exquisite sefed that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1092,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=140",
    "categoryId": "home"
  },
  {
    "id": "141",
    "name": "Beautiful Kaba",
    "description": "A stunning beautiful kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4440,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=141",
    "categoryId": "traditional-womens"
  },
  {
    "id": "142",
    "name": "Handwoven Traditional Shirt",
    "description": "A stunning handwoven traditional shirt that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 9842,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=142",
    "categoryId": "traditional-mens"
  },
  {
    "id": "143",
    "name": "Vibrant Beaded Necklace",
    "description": "A stunning vibrant beaded necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 10925,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=143",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "144",
    "name": "Classic Clay Pot",
    "description": "A stunning classic clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4900,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=144",
    "categoryId": "home"
  },
  {
    "id": "145",
    "name": "Elegant Dirib",
    "description": "A stunning elegant dirib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 9600,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=145",
    "categoryId": "traditional-womens"
  },
  {
    "id": "146",
    "name": "Handwoven Ertib",
    "description": "A stunning handwoven ertib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5634,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=146",
    "categoryId": "traditional-mens"
  },
  {
    "id": "147",
    "name": "Beautiful Traditional Earrings",
    "description": "A stunning beautiful traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6959,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=147",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "148",
    "name": "Classic Sefed",
    "description": "A stunning classic sefed that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4816,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=148",
    "categoryId": "home"
  },
  {
    "id": "149",
    "name": "Vibrant Dirib",
    "description": "A stunning vibrant dirib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6610,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=149",
    "categoryId": "traditional-womens"
  },
  {
    "id": "150",
    "name": "Bespoke Kaba",
    "description": "A stunning bespoke kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14127,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=150",
    "categoryId": "traditional-mens"
  },
  {
    "id": "151",
    "name": "Premium Silver Bracelet",
    "description": "A stunning premium silver bracelet that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13060,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=151",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "152",
    "name": "Bespoke Mesob",
    "description": "A stunning bespoke mesob that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1261,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=152",
    "categoryId": "home"
  },
  {
    "id": "153",
    "name": "Beautiful Gabi",
    "description": "A stunning beautiful gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6690,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=153",
    "categoryId": "traditional-womens"
  },
  {
    "id": "154",
    "name": "Premium Traditional Shirt",
    "description": "A stunning premium traditional shirt that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7967,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=154",
    "categoryId": "traditional-mens"
  },
  {
    "id": "155",
    "name": "Cultural Tilet Ring",
    "description": "A stunning cultural tilet ring that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11097,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=155",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "156",
    "name": "Authentic Traditional Rug",
    "description": "A stunning authentic traditional rug that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4654,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=156",
    "categoryId": "home"
  },
  {
    "id": "157",
    "name": "Exquisite Netela",
    "description": "A stunning exquisite netela that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 12696,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=157",
    "categoryId": "traditional-womens"
  },
  {
    "id": "158",
    "name": "Festive Jano",
    "description": "A stunning festive jano that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13200,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=158",
    "categoryId": "traditional-mens"
  },
  {
    "id": "159",
    "name": "Exquisite Traditional Earrings",
    "description": "A stunning exquisite traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 15002,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=159",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "160",
    "name": "Elegant Woven Basket",
    "description": "A stunning elegant woven basket that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4931,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=160",
    "categoryId": "home"
  },
  {
    "id": "161",
    "name": "Authentic Zurya",
    "description": "A stunning authentic zurya that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 8179,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=161",
    "categoryId": "traditional-womens"
  },
  {
    "id": "162",
    "name": "Custom Gabi",
    "description": "A stunning custom gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 12089,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=162",
    "categoryId": "traditional-mens"
  },
  {
    "id": "163",
    "name": "Cultural Anklet",
    "description": "A stunning cultural anklet that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 19363,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=163",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "164",
    "name": "Classic Cultural Wall Art",
    "description": "A stunning classic cultural wall art that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 913,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=164",
    "categoryId": "home"
  },
  {
    "id": "165",
    "name": "Classic Cotton Dress",
    "description": "A stunning classic cotton dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 10653,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=165",
    "categoryId": "traditional-womens"
  },
  {
    "id": "166",
    "name": "Festive Kaba",
    "description": "A stunning festive kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14578,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=166",
    "categoryId": "traditional-mens"
  },
  {
    "id": "167",
    "name": "Vibrant Silver Bracelet",
    "description": "A stunning vibrant silver bracelet that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 24282,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=167",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "168",
    "name": "Intricate Sefed",
    "description": "A stunning intricate sefed that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2240,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=168",
    "categoryId": "home"
  },
  {
    "id": "169",
    "name": "Custom Tilet Dress",
    "description": "A stunning custom tilet dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14947,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=169",
    "categoryId": "traditional-womens"
  },
  {
    "id": "170",
    "name": "Beautiful Cotton Trousers",
    "description": "A stunning beautiful cotton trousers that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7510,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=170",
    "categoryId": "traditional-mens"
  },
  {
    "id": "171",
    "name": "Traditional Coptic Cross",
    "description": "A stunning traditional coptic cross that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 8524,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=171",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "172",
    "name": "Bespoke Clay Pot",
    "description": "A stunning bespoke clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3184,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=172",
    "categoryId": "home"
  },
  {
    "id": "173",
    "name": "Vibrant Gabi",
    "description": "A stunning vibrant gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5471,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=173",
    "categoryId": "traditional-womens"
  },
  {
    "id": "174",
    "name": "Intricate Gabi",
    "description": "A stunning intricate gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 8263,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=174",
    "categoryId": "traditional-mens"
  },
  {
    "id": "175",
    "name": "Authentic Tilet Ring",
    "description": "A stunning authentic tilet ring that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 12545,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=175",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "176",
    "name": "Beautiful Jebena",
    "description": "A stunning beautiful jebena that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1830,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=176",
    "categoryId": "home"
  },
  {
    "id": "177",
    "name": "Custom Netela",
    "description": "A stunning custom netela that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3210,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=177",
    "categoryId": "traditional-womens"
  },
  {
    "id": "178",
    "name": "Cultural Kaba",
    "description": "A stunning cultural kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3474,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=178",
    "categoryId": "traditional-mens"
  },
  {
    "id": "179",
    "name": "Traditional Silver Bracelet",
    "description": "A stunning traditional silver bracelet that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 18358,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=179",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "180",
    "name": "Elegant Woven Basket",
    "description": "A stunning elegant woven basket that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4854,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=180",
    "categoryId": "home"
  },
  {
    "id": "181",
    "name": "Traditional Zurya",
    "description": "A stunning traditional zurya that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 12020,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=181",
    "categoryId": "traditional-womens"
  },
  {
    "id": "182",
    "name": "Vibrant Jano",
    "description": "A stunning vibrant jano that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4780,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=182",
    "categoryId": "traditional-mens"
  },
  {
    "id": "183",
    "name": "Premium Gold Necklace",
    "description": "A stunning premium gold necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5134,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=183",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "184",
    "name": "Elegant Mesob",
    "description": "A stunning elegant mesob that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2724,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=184",
    "categoryId": "home"
  },
  {
    "id": "185",
    "name": "Artisanal Kaba",
    "description": "A stunning artisanal kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11644,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=185",
    "categoryId": "traditional-womens"
  },
  {
    "id": "186",
    "name": "Elegant Kuta",
    "description": "A stunning elegant kuta that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5234,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=186",
    "categoryId": "traditional-mens"
  },
  {
    "id": "187",
    "name": "Bespoke Silver Bracelet",
    "description": "A stunning bespoke silver bracelet that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 8221,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=187",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "188",
    "name": "Traditional Jebena",
    "description": "A stunning traditional jebena that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1447,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=188",
    "categoryId": "home"
  },
  {
    "id": "189",
    "name": "Classic Dirib",
    "description": "A stunning classic dirib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6370,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=189",
    "categoryId": "traditional-womens"
  },
  {
    "id": "190",
    "name": "Beautiful Kuta",
    "description": "A stunning beautiful kuta that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13770,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=190",
    "categoryId": "traditional-mens"
  },
  {
    "id": "191",
    "name": "Exquisite Coptic Cross",
    "description": "A stunning exquisite coptic cross that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 22845,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=191",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "192",
    "name": "Elegant Traditional Rug",
    "description": "A stunning elegant traditional rug that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3182,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=192",
    "categoryId": "home"
  },
  {
    "id": "193",
    "name": "Cultural Habesha Kemis",
    "description": "A stunning cultural habesha kemis that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14155,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=193",
    "categoryId": "traditional-womens"
  },
  {
    "id": "194",
    "name": "Cultural Traditional Shirt",
    "description": "A stunning cultural traditional shirt that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11667,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=194",
    "categoryId": "traditional-mens"
  },
  {
    "id": "195",
    "name": "Traditional Silver Bracelet",
    "description": "A stunning traditional silver bracelet that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 18040,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=195",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "196",
    "name": "Premium Traditional Rug",
    "description": "A stunning premium traditional rug that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1814,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=196",
    "categoryId": "home"
  },
  {
    "id": "197",
    "name": "Artisanal Dirib",
    "description": "A stunning artisanal dirib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11231,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=197",
    "categoryId": "traditional-womens"
  },
  {
    "id": "198",
    "name": "Handwoven Ertib",
    "description": "A stunning handwoven ertib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14145,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=198",
    "categoryId": "traditional-mens"
  },
  {
    "id": "199",
    "name": "Festive Gold Necklace",
    "description": "A stunning festive gold necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11676,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=199",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "200",
    "name": "Classic Clay Pot",
    "description": "A stunning classic clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1393,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=200",
    "categoryId": "home"
  },
  {
    "id": "201",
    "name": "Exquisite Habesha Kemis",
    "description": "A stunning exquisite habesha kemis that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 10539,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=201",
    "categoryId": "traditional-womens"
  },
  {
    "id": "202",
    "name": "Custom Gabi",
    "description": "A stunning custom gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11130,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=202",
    "categoryId": "traditional-mens"
  },
  {
    "id": "203",
    "name": "Artisanal Gold Necklace",
    "description": "A stunning artisanal gold necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13247,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=203",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "204",
    "name": "Exquisite Clay Pot",
    "description": "A stunning exquisite clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2291,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=204",
    "categoryId": "home"
  },
  {
    "id": "205",
    "name": "Classic Dirib",
    "description": "A stunning classic dirib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14080,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=205",
    "categoryId": "traditional-womens"
  },
  {
    "id": "206",
    "name": "Vibrant Gabi",
    "description": "A stunning vibrant gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 8849,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=206",
    "categoryId": "traditional-mens"
  },
  {
    "id": "207",
    "name": "Elegant Meskel Pendant",
    "description": "A stunning elegant meskel pendant that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7279,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=207",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "208",
    "name": "Festive Clay Pot",
    "description": "A stunning festive clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4786,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=208",
    "categoryId": "home"
  },
  {
    "id": "209",
    "name": "Custom Zurya",
    "description": "A stunning custom zurya that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3020,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=209",
    "categoryId": "traditional-womens"
  },
  {
    "id": "210",
    "name": "Festive Kaba",
    "description": "A stunning festive kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 12752,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=210",
    "categoryId": "traditional-mens"
  },
  {
    "id": "211",
    "name": "Premium Traditional Earrings",
    "description": "A stunning premium traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 19108,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=211",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "212",
    "name": "Artisanal Clay Pot",
    "description": "A stunning artisanal clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 984,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=212",
    "categoryId": "home"
  },
  {
    "id": "213",
    "name": "Bespoke Tilet Dress",
    "description": "A stunning bespoke tilet dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 10396,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=213",
    "categoryId": "traditional-womens"
  },
  {
    "id": "214",
    "name": "Custom Buluko",
    "description": "A stunning custom buluko that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4872,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=214",
    "categoryId": "traditional-mens"
  },
  {
    "id": "215",
    "name": "Cultural Tilet Ring",
    "description": "A stunning cultural tilet ring that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 20763,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=215",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "216",
    "name": "Traditional Cultural Wall Art",
    "description": "A stunning traditional cultural wall art that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3461,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=216",
    "categoryId": "home"
  },
  {
    "id": "217",
    "name": "Beautiful Dirib",
    "description": "A stunning beautiful dirib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14023,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=217",
    "categoryId": "traditional-womens"
  },
  {
    "id": "218",
    "name": "Custom Kaba",
    "description": "A stunning custom kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11137,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=218",
    "categoryId": "traditional-mens"
  },
  {
    "id": "219",
    "name": "Cultural Tilet Ring",
    "description": "A stunning cultural tilet ring that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 8767,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=219",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "220",
    "name": "Beautiful Jebena",
    "description": "A stunning beautiful jebena that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4357,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=220",
    "categoryId": "home"
  },
  {
    "id": "221",
    "name": "Beautiful Kaba",
    "description": "A stunning beautiful kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7534,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=221",
    "categoryId": "traditional-womens"
  },
  {
    "id": "222",
    "name": "Authentic Ertib",
    "description": "A stunning authentic ertib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3771,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=222",
    "categoryId": "traditional-mens"
  },
  {
    "id": "223",
    "name": "Premium Traditional Earrings",
    "description": "A stunning premium traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5486,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=223",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "224",
    "name": "Intricate Mukecha",
    "description": "A stunning intricate mukecha that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2641,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=224",
    "categoryId": "home"
  },
  {
    "id": "225",
    "name": "Custom Dirib",
    "description": "A stunning custom dirib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3407,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=225",
    "categoryId": "traditional-womens"
  },
  {
    "id": "226",
    "name": "Traditional Gabi",
    "description": "A stunning traditional gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11660,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=226",
    "categoryId": "traditional-mens"
  },
  {
    "id": "227",
    "name": "Artisanal Silver Bracelet",
    "description": "A stunning artisanal silver bracelet that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 15029,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=227",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "228",
    "name": "Festive Cultural Wall Art",
    "description": "A stunning festive cultural wall art that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2939,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=228",
    "categoryId": "home"
  },
  {
    "id": "229",
    "name": "Premium Dirib",
    "description": "A stunning premium dirib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13544,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=229",
    "categoryId": "traditional-womens"
  },
  {
    "id": "230",
    "name": "Authentic Kaba",
    "description": "A stunning authentic kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3275,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=230",
    "categoryId": "traditional-mens"
  },
  {
    "id": "231",
    "name": "Classic Beaded Necklace",
    "description": "A stunning classic beaded necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 9043,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=231",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "232",
    "name": "Intricate Woven Basket",
    "description": "A stunning intricate woven basket that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4091,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=232",
    "categoryId": "home"
  },
  {
    "id": "233",
    "name": "Festive Netela",
    "description": "A stunning festive netela that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 10698,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=233",
    "categoryId": "traditional-womens"
  },
  {
    "id": "234",
    "name": "Vibrant Gabi",
    "description": "A stunning vibrant gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3425,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=234",
    "categoryId": "traditional-mens"
  },
  {
    "id": "235",
    "name": "Artisanal Meskel Pendant",
    "description": "A stunning artisanal meskel pendant that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 22605,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=235",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "236",
    "name": "Beautiful Sefed",
    "description": "A stunning beautiful sefed that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2676,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=236",
    "categoryId": "home"
  },
  {
    "id": "237",
    "name": "Intricate Gabi",
    "description": "A stunning intricate gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 8736,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=237",
    "categoryId": "traditional-womens"
  },
  {
    "id": "238",
    "name": "Beautiful Traditional Shirt",
    "description": "A stunning beautiful traditional shirt that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11711,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=238",
    "categoryId": "traditional-mens"
  },
  {
    "id": "239",
    "name": "Bespoke Gold Necklace",
    "description": "A stunning bespoke gold necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 24181,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=239",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "240",
    "name": "Festive Traditional Rug",
    "description": "A stunning festive traditional rug that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4724,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=240",
    "categoryId": "home"
  },
  {
    "id": "241",
    "name": "Beautiful Dirib",
    "description": "A stunning beautiful dirib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11332,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=241",
    "categoryId": "traditional-womens"
  },
  {
    "id": "242",
    "name": "Authentic Kaba",
    "description": "A stunning authentic kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4631,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=242",
    "categoryId": "traditional-mens"
  },
  {
    "id": "243",
    "name": "Handwoven Anklet",
    "description": "A stunning handwoven anklet that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11325,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=243",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "244",
    "name": "Exquisite Traditional Rug",
    "description": "A stunning exquisite traditional rug that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2996,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=244",
    "categoryId": "home"
  },
  {
    "id": "245",
    "name": "Custom Netela",
    "description": "A stunning custom netela that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13141,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=245",
    "categoryId": "traditional-womens"
  },
  {
    "id": "246",
    "name": "Authentic Kaba",
    "description": "A stunning authentic kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4108,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=246",
    "categoryId": "traditional-mens"
  },
  {
    "id": "247",
    "name": "Authentic Traditional Earrings",
    "description": "A stunning authentic traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 15384,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=247",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "248",
    "name": "Elegant Traditional Rug",
    "description": "A stunning elegant traditional rug that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1409,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=248",
    "categoryId": "home"
  },
  {
    "id": "249",
    "name": "Premium Gabi",
    "description": "A stunning premium gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6751,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=249",
    "categoryId": "traditional-womens"
  },
  {
    "id": "250",
    "name": "Vibrant Ertib",
    "description": "A stunning vibrant ertib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7969,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=250",
    "categoryId": "traditional-mens"
  },
  {
    "id": "251",
    "name": "Vibrant Traditional Earrings",
    "description": "A stunning vibrant traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6315,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=251",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "252",
    "name": "Exquisite Mesob",
    "description": "A stunning exquisite mesob that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 885,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=252",
    "categoryId": "home"
  },
  {
    "id": "253",
    "name": "Intricate Cotton Dress",
    "description": "A stunning intricate cotton dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13760,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=253",
    "categoryId": "traditional-womens"
  },
  {
    "id": "254",
    "name": "Cultural Kaba",
    "description": "A stunning cultural kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3986,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=254",
    "categoryId": "traditional-mens"
  },
  {
    "id": "255",
    "name": "Exquisite Meskel Pendant",
    "description": "A stunning exquisite meskel pendant that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 21654,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=255",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "256",
    "name": "Festive Woven Basket",
    "description": "A stunning festive woven basket that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1400,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=256",
    "categoryId": "home"
  },
  {
    "id": "257",
    "name": "Premium Kaba",
    "description": "A stunning premium kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 8217,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=257",
    "categoryId": "traditional-womens"
  },
  {
    "id": "258",
    "name": "Exquisite Cotton Trousers",
    "description": "A stunning exquisite cotton trousers that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 12956,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=258",
    "categoryId": "traditional-mens"
  },
  {
    "id": "259",
    "name": "Elegant Meskel Pendant",
    "description": "A stunning elegant meskel pendant that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 21972,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=259",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "260",
    "name": "Vibrant Mesob",
    "description": "A stunning vibrant mesob that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 1206,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=260",
    "categoryId": "home"
  },
  {
    "id": "261",
    "name": "Artisanal Dirib",
    "description": "A stunning artisanal dirib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13866,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=261",
    "categoryId": "traditional-womens"
  },
  {
    "id": "262",
    "name": "Premium Gabi",
    "description": "A stunning premium gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5958,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=262",
    "categoryId": "traditional-mens"
  },
  {
    "id": "263",
    "name": "Authentic Tilet Ring",
    "description": "A stunning authentic tilet ring that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 21168,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=263",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "264",
    "name": "Bespoke Woven Basket",
    "description": "A stunning bespoke woven basket that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4455,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=264",
    "categoryId": "home"
  },
  {
    "id": "265",
    "name": "Traditional Habesha Kemis",
    "description": "A stunning traditional habesha kemis that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4393,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=265",
    "categoryId": "traditional-womens"
  },
  {
    "id": "266",
    "name": "Authentic Kaba",
    "description": "A stunning authentic kaba that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 8730,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=266",
    "categoryId": "traditional-mens"
  },
  {
    "id": "267",
    "name": "Traditional Anklet",
    "description": "A stunning traditional anklet that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6412,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=267",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "268",
    "name": "Intricate Cultural Wall Art",
    "description": "A stunning intricate cultural wall art that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3893,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=268",
    "categoryId": "home"
  },
  {
    "id": "269",
    "name": "Authentic Netela",
    "description": "A stunning authentic netela that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13001,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=269",
    "categoryId": "traditional-womens"
  },
  {
    "id": "270",
    "name": "Traditional Gabi",
    "description": "A stunning traditional gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14711,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=270",
    "categoryId": "traditional-mens"
  },
  {
    "id": "271",
    "name": "Authentic Anklet",
    "description": "A stunning authentic anklet that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7189,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=271",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "272",
    "name": "Exquisite Clay Pot",
    "description": "A stunning exquisite clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3646,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=272",
    "categoryId": "home"
  },
  {
    "id": "273",
    "name": "Intricate Gabi",
    "description": "A stunning intricate gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14675,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=273",
    "categoryId": "traditional-womens"
  },
  {
    "id": "274",
    "name": "Cultural Buluko",
    "description": "A stunning cultural buluko that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7579,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=274",
    "categoryId": "traditional-mens"
  },
  {
    "id": "275",
    "name": "Classic Gold Necklace",
    "description": "A stunning classic gold necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 24157,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=275",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "276",
    "name": "Intricate Clay Pot",
    "description": "A stunning intricate clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2285,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=276",
    "categoryId": "home"
  },
  {
    "id": "277",
    "name": "Handwoven Netela",
    "description": "A stunning handwoven netela that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2880,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=277",
    "categoryId": "traditional-womens"
  },
  {
    "id": "278",
    "name": "Cultural Traditional Shirt",
    "description": "A stunning cultural traditional shirt that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11800,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=278",
    "categoryId": "traditional-mens"
  },
  {
    "id": "279",
    "name": "Handwoven Tilet Ring",
    "description": "A stunning handwoven tilet ring that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5081,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=279",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "280",
    "name": "Cultural Traditional Rug",
    "description": "A stunning cultural traditional rug that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4269,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=280",
    "categoryId": "home"
  },
  {
    "id": "281",
    "name": "Elegant Cotton Dress",
    "description": "A stunning elegant cotton dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13545,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=281",
    "categoryId": "traditional-womens"
  },
  {
    "id": "282",
    "name": "Festive Kuta",
    "description": "A stunning festive kuta that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11922,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=282",
    "categoryId": "traditional-mens"
  },
  {
    "id": "283",
    "name": "Beautiful Gold Necklace",
    "description": "A stunning beautiful gold necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7832,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=283",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "284",
    "name": "Elegant Clay Pot",
    "description": "A stunning elegant clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2231,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=284",
    "categoryId": "home"
  },
  {
    "id": "285",
    "name": "Elegant Netela",
    "description": "A stunning elegant netela that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 9210,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=285",
    "categoryId": "traditional-womens"
  },
  {
    "id": "286",
    "name": "Premium Buluko",
    "description": "A stunning premium buluko that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14421,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=286",
    "categoryId": "traditional-mens"
  },
  {
    "id": "287",
    "name": "Classic Coptic Cross",
    "description": "A stunning classic coptic cross that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 10865,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=287",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "288",
    "name": "Festive Cultural Wall Art",
    "description": "A stunning festive cultural wall art that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4213,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=288",
    "categoryId": "home"
  },
  {
    "id": "289",
    "name": "Traditional Zurya",
    "description": "A stunning traditional zurya that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 8519,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=289",
    "categoryId": "traditional-womens"
  },
  {
    "id": "290",
    "name": "Festive Traditional Shirt",
    "description": "A stunning festive traditional shirt that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13131,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=290",
    "categoryId": "traditional-mens"
  },
  {
    "id": "291",
    "name": "Elegant Gold Necklace",
    "description": "A stunning elegant gold necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 8807,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=291",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "292",
    "name": "Vibrant Sefed",
    "description": "A stunning vibrant sefed that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3351,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=292",
    "categoryId": "home"
  },
  {
    "id": "293",
    "name": "Elegant Habesha Kemis",
    "description": "A stunning elegant habesha kemis that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 12241,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=293",
    "categoryId": "traditional-womens"
  },
  {
    "id": "294",
    "name": "Bespoke Gabi",
    "description": "A stunning bespoke gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 9534,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=294",
    "categoryId": "traditional-mens"
  },
  {
    "id": "295",
    "name": "Artisanal Gold Necklace",
    "description": "A stunning artisanal gold necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6619,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=295",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "296",
    "name": "Beautiful Woven Basket",
    "description": "A stunning beautiful woven basket that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4433,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=296",
    "categoryId": "home"
  },
  {
    "id": "297",
    "name": "Artisanal Habesha Kemis",
    "description": "A stunning artisanal habesha kemis that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 5655,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=297",
    "categoryId": "traditional-womens"
  },
  {
    "id": "298",
    "name": "Vibrant Traditional Shirt",
    "description": "A stunning vibrant traditional shirt that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6272,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=298",
    "categoryId": "traditional-mens"
  },
  {
    "id": "299",
    "name": "Handwoven Beaded Necklace",
    "description": "A stunning handwoven beaded necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 18997,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=299",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "300",
    "name": "Festive Traditional Rug",
    "description": "A stunning festive traditional rug that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4730,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=300",
    "categoryId": "home"
  },
  {
    "id": "301",
    "name": "Beautiful Cotton Dress",
    "description": "A stunning beautiful cotton dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 13806,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=301",
    "categoryId": "traditional-womens"
  },
  {
    "id": "302",
    "name": "Custom Ertib",
    "description": "A stunning custom ertib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 11161,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=302",
    "categoryId": "traditional-mens"
  },
  {
    "id": "303",
    "name": "Beautiful Traditional Earrings",
    "description": "A stunning beautiful traditional earrings that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 17780,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=303",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "304",
    "name": "Elegant Clay Pot",
    "description": "A stunning elegant clay pot that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2573,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=304",
    "categoryId": "home"
  },
  {
    "id": "305",
    "name": "Beautiful Netela",
    "description": "A stunning beautiful netela that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 12284,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=305",
    "categoryId": "traditional-womens"
  },
  {
    "id": "306",
    "name": "Intricate Jano",
    "description": "A stunning intricate jano that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 7070,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=306",
    "categoryId": "traditional-mens"
  },
  {
    "id": "307",
    "name": "Custom Meskel Pendant",
    "description": "A stunning custom meskel pendant that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 24951,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=307",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "308",
    "name": "Artisanal Mesob",
    "description": "A stunning artisanal mesob that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4713,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=308",
    "categoryId": "home"
  },
  {
    "id": "309",
    "name": "Artisanal Zurya",
    "description": "A stunning artisanal zurya that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 4087,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=309",
    "categoryId": "traditional-womens"
  },
  {
    "id": "310",
    "name": "Classic Kuta",
    "description": "A stunning classic kuta that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2515,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=310",
    "categoryId": "traditional-mens"
  },
  {
    "id": "311",
    "name": "Handwoven Gold Necklace",
    "description": "A stunning handwoven gold necklace that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 17604,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=311",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "312",
    "name": "Festive Traditional Rug",
    "description": "A stunning festive traditional rug that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 2620,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=312",
    "categoryId": "home"
  },
  {
    "id": "313",
    "name": "Authentic Tilet Dress",
    "description": "A stunning authentic tilet dress that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6435,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=313",
    "categoryId": "traditional-womens"
  },
  {
    "id": "314",
    "name": "Artisanal Ertib",
    "description": "A stunning artisanal ertib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 6921,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=314",
    "categoryId": "traditional-mens"
  },
  {
    "id": "315",
    "name": "Premium Meskel Pendant",
    "description": "A stunning premium meskel pendant that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 19129,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=315",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "316",
    "name": "Custom Woven Basket",
    "description": "A stunning custom woven basket that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3330,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=316",
    "categoryId": "home"
  },
  {
    "id": "317",
    "name": "Traditional Dirib",
    "description": "A stunning traditional dirib that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3907,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,women,traditional?lock=317",
    "categoryId": "traditional-womens"
  },
  {
    "id": "318",
    "name": "Elegant Gabi",
    "description": "A stunning elegant gabi that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 14227,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,men,culture?lock=318",
    "categoryId": "traditional-mens"
  },
  {
    "id": "319",
    "name": "Intricate Tilet Ring",
    "description": "A stunning intricate tilet ring that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 18432,
    "imageUrl": "https://loremflickr.com/800/800/ethiopian,jewelry,gold?lock=319",
    "categoryId": "ethiopian-jewelry"
  },
  {
    "id": "320",
    "name": "Authentic Traditional Rug",
    "description": "A stunning authentic traditional rug that celebrates the rich cultural heritage and craftsmanship of Ethiopia. Perfect for special occasions and everyday elegance.",
    "price": 3503,
    "imageUrl": "https://loremflickr.com/800/800/homedecor,ethiopian?lock=320",
    "categoryId": "home"
  }
];
