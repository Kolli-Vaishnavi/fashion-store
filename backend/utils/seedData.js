const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const products = [
  {
    name: 'Classic Oxford Shirt',
    brand: 'LUXE MEN',
    price: 129.99,
    description: 'A timeless classic crafted from premium cotton with impeccable tailoring. Perfect for both formal and casual occasions.',
    category: 'men',
    images: ['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Blue', 'Pink'],
    stock: 50,
    featured: true
  },
  {
    name: 'Tailored Wool Blazer',
    brand: 'LUXE MEN',
    price: 459.99,
    description: 'Sophisticated blazer in pure wool with structured shoulders and a modern slim fit. A wardrobe essential.',
    category: 'men',
    images: ['https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Black', 'Grey'],
    stock: 25,
    featured: true
  },
  {
    name: 'Premium Denim Jeans',
    brand: 'LUXE MEN',
    price: 189.99,
    description: 'Premium selvedge denim with exceptional durability and comfort. Features a modern tapered fit.',
    category: 'men',
    images: ['https://images.unsplash.com/photo-1542272604-787c3835535d?w=600'],
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Dark Blue', 'Black', 'Light Blue'],
    stock: 75,
    featured: false
  },
  {
    name: 'Cashmere Sweater',
    brand: 'LUXE MEN',
    price: 329.99,
    description: 'Luxuriously soft cashmere sweater with a classic crew neck. Ultimate comfort meets timeless style.',
    category: 'men',
    images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Grey', 'Cream'],
    stock: 30,
    featured: true
  },
  {
    name: 'Silk Blouse',
    brand: 'LUXE WOMEN',
    price: 199.99,
    description: 'Elegant silk blouse with sophisticated draping. Luxurious fabric with timeless appeal.',
    category: 'women',
    images: ['https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Nude'],
    stock: 40,
    featured: true
  },
  {
    name: 'Tailored Blazer',
    brand: 'LUXE WOMEN',
    price: 429.99,
    description: 'Power blazer with structured shoulders and refined fit. Professional elegance redefined.',
    category: 'women',
    images: ['https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Navy', 'Camel'],
    stock: 20,
    featured: true
  },
  {
    name: 'Maxi Dress',
    brand: 'LUXE WOMEN',
    price: 349.99,
    description: 'Flowing maxi dress in premium fabric. Effortless elegance for any occasion.',
    category: 'women',
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Red', 'Emerald'],
    stock: 35,
    featured: false
  },
  {
    name: 'Cashmere Turtleneck',
    brand: 'LUXE WOMEN',
    price: 299.99,
    description: 'Pure cashmere turtleneck with luxurious softness. Classic comfort in refined style.',
    category: 'women',
    images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey', 'Cream', 'Burgundy'],
    stock: 45,
    featured: true
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing products
    await Product.deleteMany({});
    console.log('Existing products cleared');

    // Insert new products
    await Product.insertMany(products);
    console.log('Database seeded successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();