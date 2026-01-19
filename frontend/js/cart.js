function addToCart(productId) {
    const product = [...menProducts, ...womenProducts].find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId && item.size === selectedSize);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            size: selectedSize,
            quantity: 1
        });
    }

    updateCartCount();
    alert(`${product.name} (Size ${selectedSize}) added to cart!`);
}

function renderCart() {
    const cartContent = document.getElementById('cart-content');
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-state">
                <h2>Your cart is empty</h2>
                <p style="margin-bottom: 2rem;">Add some items to get started!</p>
                <button class="btn-primary" onclick="showSection('men')">SHOP NOW</button>
            </div>
        `;
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 200 ? 0 : 15;
    const total = subtotal + shipping;

    cartContent.innerHTML = `
        <div class="cart-items">
            ${cart.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p style="color: var(--text-light);">Size: ${item.size}</p>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="quantity-selector">
                            <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                            <span style="padding: 0 1rem;">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `).join('')}
        </div>

        <div class="cart-summary">
            <h3 style="margin-bottom: 1.5rem;">Order Summary</h3>
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping:</span>
                <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
            </div>
            <div class="summary-row summary-total">
                <span>Total:</span>
                <span>$${total.toFixed(2)}</span>
            </div>
            <button class="checkout-btn" onclick="showSection('payment')">PROCEED TO CHECKOUT</button>
        </div>
    `;
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartCount();
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function toggleWishlist(productId) {
    const product = [...menProducts, ...womenProducts].find(p => p.id === productId);
    if (!product) return;

    const index = wishlist.findIndex(item => item.id === productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        alert(`${product.name} removed from wishlist`);
    } else {
        wishlist.push(product);
        alert(`${product.name} added to wishlist!`);
    }

    updateWishlistCount();
    if (currentSection === 'wishlist') {
        renderWishlist();
    }
}

function renderWishlist() {
    const wishlistContent = document.getElementById('wishlist-content');
    
    if (wishlist.length === 0) {
        wishlistContent.innerHTML = `
            <div class="empty-state">
                <h2>Your wishlist is empty</h2>
                <p style="margin-bottom: 2rem;">Save your favorite items here!</p>
                <button class="btn-primary" onclick="showSection('women')">BROWSE COLLECTION</button>
            </div>
        `;
        return;
    }

    wishlistContent.innerHTML = `
        <div class="wishlist-items">
            ${wishlist.map(item => `
                <div class="wishlist-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p style="color: var(--text-light); margin-bottom: 0.5rem;">${item.brand}</p>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <button class="btn-primary" style="margin-top: 1rem; padding: 0.7rem 2rem;" onclick="addToCart('${item.id}')">ADD TO CART</button>
                    </div>
                    <button class="remove-btn" onclick="toggleWishlist('${item.id}')">Remove</button>
                </div>
            `).join('')}
        </div>
    `;
}

function updateWishlistCount() {
    document.getElementById('wishlist-count').textContent = wishlist.length;
}
