const express = require('express');
const { auth } = require('../middleware/auth');
const Product = require('../models/Product');
const router = express.Router();

let carts = {};

router.get('/', auth, (req, res) => {
  const userId = req.user.userId;
  const cart = carts[userId] || { items: [], total: 0 };
  res.json(cart);
});

router.post('/add', auth, async (req, res) => {
  try {
    const { productId, quantity = 1, size = 'M' } = req.body;
    const userId = req.user.userId;
    
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    if (!carts[userId]) {
      carts[userId] = { items: [], total: 0 };
    }
    
    const existingItemIndex = carts[userId].items.findIndex(
      item => item.productId === productId && item.size === size
    );
    
    if (existingItemIndex > -1) {
      carts[userId].items[existingItemIndex].quantity += quantity;
    } else {
      carts[userId].items.push({
        productId,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity,
        size
      });
    }
    updateCartTotal(userId);
    
    res.json(carts[userId]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.put('/update/:productId', auth, (req, res) => {
  const { productId } = req.params;
  const { quantity, size } = req.body;
  const userId = req.user.userId;
  
  if (!carts[userId]) {
    return res.status(404).json({ message: 'Cart not found' });
  }
  
  const itemIndex = carts[userId].items.findIndex(
    item => item.productId === productId && item.size === size
  );
  
  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found in cart' });
  }
  
  if (quantity <= 0) {
    carts[userId].items.splice(itemIndex, 1);
  } else {
    carts[userId].items[itemIndex].quantity = quantity;
  }
  
  updateCartTotal(userId);
  res.json(carts[userId]);
});

router.delete('/remove/:productId', auth, (req, res) => {
  const { productId } = req.params;
  const { size } = req.body;
  const userId = req.user.userId;
  
  if (!carts[userId]) {
    return res.status(404).json({ message: 'Cart not found' });
  }
  
  carts[userId].items = carts[userId].items.filter(
    item => !(item.productId === productId && item.size === size)
  );
  
  updateCartTotal(userId);
  res.json(carts[userId]);
});

router.delete('/clear', auth, (req, res) => {
  const userId = req.user.userId;
  carts[userId] = { items: [], total: 0 };
  res.json({ message: 'Cart cleared successfully' });
});

function updateCartTotal(userId) {
  if (carts[userId]) {
    carts[userId].total = carts[userId].items.reduce(
      (total, item) => total + (item.price * item.quantity), 0
    );
  }
}

module.exports = router;