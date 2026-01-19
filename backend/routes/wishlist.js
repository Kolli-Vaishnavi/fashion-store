const express = require('express');
const { auth } = require('../middleware/auth');
const Product = require('../models/Product');
const router = express.Router();

let wishlists = {};
router.get('/', auth, (req, res) => {
  const userId = req.user.userId;
  const wishlist = wishlists[userId] || [];
  res.json(wishlist);
});

router.post('/add', auth, async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user.userId;
    
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    if (!wishlists[userId]) {
      wishlists[userId] = [];
    }
    
    const existingItem = wishlists[userId].find(item => item.productId === productId);
    
    if (existingItem) {
      return res.status(400).json({ message: 'Product already in wishlist' });
    }
    
    wishlists[userId].push({
      productId,
      name: product.name,
      price: product.price,
      image: product.images[0],
      brand: product.brand
    });
    
    res.json(wishlists[userId]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/remove/:productId', auth, (req, res) => {
  const { productId } = req.params;
  const userId = req.user.userId;
  
  if (!wishlists[userId]) {
    return res.status(404).json({ message: 'Wishlist not found' });
  }
  
  wishlists[userId] = wishlists[userId].filter(item => item.productId !== productId);
  
  res.json(wishlists[userId]);
});

module.exports = router;