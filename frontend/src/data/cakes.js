export const cakes = [
  {
    id: 'rose-velvet',
    name: 'Rose Velvet Celebration Cake',
    bakery: 'Velvet Crumb Studio',
    price: 1899,
    rating: 4.9,
    servings: '10-12',
    category: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=80',
    description:
      'A plush red velvet sponge layered with vanilla bean cream cheese, finished with soft pink rosettes and white chocolate pearls.',
    flavors: ['Red Velvet', 'Vanilla Bean', 'Strawberry Cream'],
    sizes: ['1 kg', '1.5 kg', '2 kg'],
    toppings: ['Fresh berries', 'Chocolate pearls', 'Macarons'],
  },
  {
    id: 'truffle-noir',
    name: 'Chocolate Truffle Noir',
    bakery: 'Cocoa & Co.',
    price: 1599,
    rating: 4.8,
    servings: '8-10',
    category: 'Chocolate',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    description:
      'Dark chocolate sponge, whipped ganache, cocoa glaze, and a crisp chocolate shard crown for proper chocolate devotion.',
    flavors: ['Belgian Chocolate', 'Mocha', 'Salted Caramel'],
    sizes: ['750 g', '1 kg', '1.5 kg'],
    toppings: ['Cocoa nibs', 'Gold dust', 'Caramel drizzle'],
  },
  {
    id: 'strawberry-cloud',
    name: 'Strawberry Cloud Gateau',
    bakery: 'Pastel Oven',
    price: 1399,
    rating: 4.7,
    servings: '6-8',
    category: 'Fruit',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80',
    description:
      'Light vanilla sponge with strawberry compote, chantilly cream, and a crown of fresh strawberries.',
    flavors: ['Strawberry', 'Vanilla', 'Raspberry'],
    sizes: ['750 g', '1 kg', '2 kg'],
    toppings: ['Fresh strawberries', 'Cream swirls', 'Berry glaze'],
  },
  {
    id: 'pistachio-dream',
    name: 'Pistachio Dream Cake',
    bakery: 'The Butter Atelier',
    price: 2199,
    rating: 4.9,
    servings: '12-14',
    category: 'Premium',
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=900&q=80',
    description:
      'Pistachio sponge, rose cream, honey crunch, and a satin buttercream finish for refined celebrations.',
    flavors: ['Pistachio', 'Rose', 'Honey Almond'],
    sizes: ['1 kg', '1.5 kg', '2.5 kg'],
    toppings: ['Pistachio crumble', 'Dried rose', 'Honeycomb'],
  },
]

export const cartItems = [
  { id: 'rose-velvet', quantity: 1, selectedSize: '1 kg', message: 'Happy Birthday Aanya' },
  { id: 'truffle-noir', quantity: 2, selectedSize: '750 g', message: 'Extra ganache please' },
]

export const ownerOrders = [
  {
    id: 'ORD-1084',
    customer: 'Nisha Kapoor',
    cake: 'Rose Velvet Celebration Cake',
    date: 'May 29, 2026',
    total: 1899,
    status: 'Preparing',
  },
  {
    id: 'ORD-1085',
    customer: 'Arjun Mehta',
    cake: 'Chocolate Truffle Noir',
    date: 'May 30, 2026',
    total: 3198,
    status: 'Confirmed',
  },
  {
    id: 'ORD-1086',
    customer: 'Sara Thomas',
    cake: 'Pistachio Dream Cake',
    date: 'June 1, 2026',
    total: 2199,
    status: 'Out for delivery',
  },
]
