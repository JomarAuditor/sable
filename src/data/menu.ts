export interface MenuItem {
  id: string
  name: string
  description?: string
  price: number
}

export interface MenuCategory {
  id: string
  label: string          // Short label for tabs
  heading: string        // Full heading on the page
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'plates',
    label: 'Plates',
    heading: 'Plates & Mains',
    items: [
      {
        id: 'avo-croissant',
        name: 'Avo Croissant Toast',
        description: 'Croissant Toast, Guacamole, Poached Egg, Hollandaise, Arugula, Parmesan Cheese',
        price: 365,
      },
      {
        id: 'shrimp-benny',
        name: 'Shrimp & Avocado Benedict',
        description: 'Fried Shrimp Patty, Guacamole, Poached Egg, Hollandaise, Arugula, Parmesan Cheese',
        price: 565,
      },
      {
        id: 'fried-chicken-french-toast',
        name: 'Fried Chicken With French Toast',
        description: 'Southern Fried Chicken, French Toast, Maple Syrup',
        price: 415,
      },
      {
        id: 'crispy-sisig',
        name: 'Crispy Sisig',
        description: 'Crispy Pork Belly, Chicharon, Fried Egg, Plain Rice, Pickled Onions',
        price: 385,
      },
      {
        id: 'glazed-pork-belly',
        name: 'Glazed Pork Belly',
        description: 'Glazed Pork Belly, Scrambled Eggs, Pilaf Rice, Pickled Onions',
        price: 375,
      },
      {
        id: 'pollo-verde',
        name: 'Pollo Verde',
        description: 'Grilled Peruvian Chicken, Spiced Corn Ribs, Pilaf Rice, Green Sauce, Pickled Onions',
        price: 385,
      },
      {
        id: 'short-rib-shawarma',
        name: 'Short Rib Shawarma',
        description: 'Beef Short Ribs, White & Red Sauces, Spiced Pilaf Rice, Grilled Tomatoes and Onions',
        price: 625,
      },
      {
        id: 'chopped-cheese',
        name: 'Chopped Cheese',
        description: 'Ground Angus Beef, Melted Cheese, Caramelized Onions, Tomatoes, Lettuce, Brioche, Skinny Fries',
        price: 525,
      },
      {
        id: 'hamburgerdon',
        name: 'Hamburgerdon',
        description: 'Angus Beef Patty, Demi-glace Sauce, Mushrooms, Cheese, Pilaf Rice, Fried Egg',
        price: 485,
      },
      {
        id: 'porchetta',
        name: 'Porchetta',
        description: 'Porchetta, Wilted Kale, Jalapeño Aioli, Mozzarella Cheese, Brioche, Skinny Fries',
        price: 395,
      },
      {
        id: 'pesto-mushroom',
        name: 'Pesto Mushroom & Mozzarella',
        description: 'Pesto, Mozzarella Cheese, Mixed Mushrooms, Ciabatta, Skinny Fries',
        price: 365,
      },
    ],
  },
  {
    id: 'coffee',
    label: 'Coffee',
    heading: 'Espresso & Coffee',
    items: [
      { id: 'espresso',        name: 'Espresso',        price: 125 },
      { id: 'flat-white',      name: 'Flat White',      price: 170 },
      { id: 'cappuccino',      name: 'Cappuccino',      price: 175 },
      { id: 'americano',       name: 'Americano',       price: 125 },
      { id: 'latte',           name: 'Latte',           price: 185 },
      { id: 'mocha',           name: 'Mocha',           price: 195 },
      { id: 'espresso-tonic',  name: 'Espresso Tonic',  price: 165 },
      { id: 'affogato',        name: 'Affogato',        price: 175 },
    ],
  },
  {
    id: 'signature',
    label: 'Signature',
    heading: 'Signature Coffee Drinks',
    items: [
      { id: 'spanish-latte',      name: 'Spanish Latte',      price: 185 },
      { id: 'vanilla-latte',      name: 'Vanilla Latte',      price: 220 },
      { id: 'honey-oat-latte',    name: 'Honey Oat Latte',    price: 195 },
      { id: 'biscoff-latte',      name: 'Biscoff Latte',      price: 230 },
      { id: 'sea-salt-latte',     name: 'Sea Salt Cream Latte', price: 195 },
      { id: 'pandan-latte',       name: 'Pandan Latte',       price: 210 },
      { id: 'dirty-horchata',     name: 'Dirty Horchata',     price: 185 },
    ],
  },
  {
    id: 'non-coffee',
    label: 'Non-Coffee',
    heading: 'Non-Coffee Drinks',
    items: [
      { id: 'horchata',            name: 'Horchata',            price: 130 },
      { id: 'strawberry-horchata', name: 'Strawberry Horchata', price: 160 },
      { id: 'salted-thai-tea',     name: 'Salted Thai Tea',     price: 150 },
      { id: 'peach-iced-tea',      name: 'Peach Iced Tea',      price: 140 },
      { id: 'pink-fizz',           name: 'Pink Fizz',           price: 170 },
    ],
  },
  {
    id: 'other',
    label: 'Other',
    heading: 'Other Drinks',
    items: [
      {
        id: 'twg-tea',
        name: 'TWG Tea',
        description: 'Silver Moon, Jasmine Queen, Chamomile',
        price: 215,
      },
      { id: 'water',    name: 'Bottled Water', price: 65 },
      { id: 'soda',     name: 'Soda',          price: 95 },
      { id: 'perrier',  name: 'Perrier',        price: 125 },
    ],
  },
]

// Flat list for featured items shown on the homepage
export const featuredItems: MenuItem[] = [
  {
    id: 'short-rib-shawarma',
    name: 'Short Rib Shawarma',
    description: 'Beef Short Ribs, White & Red Sauces, Spiced Pilaf Rice, Grilled Tomatoes and Onions',
    price: 625,
  },
  {
    id: 'chopped-cheese',
    name: 'Chopped Cheese',
    description: 'Ground Angus Beef, Melted Cheese, Caramelized Onions, Tomatoes, Lettuce, Brioche, Skinny Fries',
    price: 525,
  },
  {
    id: 'avo-croissant',
    name: 'Avo Croissant Toast',
    description: 'Croissant Toast, Guacamole, Poached Egg, Hollandaise, Arugula, Parmesan Cheese',
    price: 365,
  },
  {
    id: 'biscoff-latte',
    name: 'Biscoff Latte',
    description: 'Our most-ordered signature drink',
    price: 230,
  },
]