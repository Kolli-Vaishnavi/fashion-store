const menProducts = [
    {
        id: 'm1',
        name: 'Classic Oxford Shirt',
        brand: 'LUXE MEN',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600',
        description: 'A timeless classic crafted from premium cotton with impeccable tailoring. Perfect for both formal and casual occasions.'
    },
    {
        id: 'm2',
        name: 'Tailored Wool Blazer',
        brand: 'LUXE MEN',
        price: 459.99,
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600',
        description: 'Sophisticated blazer in pure wool with structured shoulders and a modern slim fit. A wardrobe essential.'
    },
    {
        id: 'm3',
        name: 'Premium Denim Jeans',
        brand: 'LUXE MEN',
        price: 189.99,
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600',
        description: 'Premium selvedge denim with exceptional durability and comfort. Features a modern tapered fit.'
    },
    {
        id: 'm4',
        name: 'Cashmere Sweater',
        brand: 'LUXE MEN',
        price: 329.99,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600',
        description: 'Luxuriously soft cashmere sweater with a classic crew neck. Ultimate comfort meets timeless style.'
    },
    {
        id: 'm5',
        name: 'Leather Jacket',
        brand: 'LUXE MEN',
        price: 799.99,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600',
        description: 'Premium leather jacket with quilted lining. Crafted from the finest materials for lasting quality.'
    },
    {
        id: 'm6',
        name: 'Slim Fit Chinos',
        brand: 'LUXE MEN',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600',
        description: 'Versatile chinos in stretch cotton twill. Perfect fit with elegant drape for everyday sophistication.'
    },
    {
        id: 'm7',
        name: 'Merino Wool Cardigan',
        brand: 'LUXE MEN',
        price: 249.99,
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600',
        description: 'Refined cardigan in merino wool with classic button closure. Lightweight warmth with elegant style.'
    },
    {
        id: 'm8',
        name: 'Linen Summer Shirt',
        brand: 'LUXE MEN',
        price: 139.99,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600',
        description: 'Breathable linen shirt perfect for warm weather. Relaxed fit with refined details.'
    },
    {
        id: 'm9',
        name: 'Wool Trench Coat',
        brand: 'LUXE MEN',
        price: 899.99,
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600',
        description: 'Classic trench coat in premium wool blend. Timeless design with modern construction.'
    },
    {
        id: 'm10',
        name: 'Polo Shirt',
        brand: 'LUXE MEN',
        price: 119.99,
        image: 'https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=600',
        description: 'Refined polo in pique cotton. Smart casual staple with superior comfort and fit.'
    },
    {
        id: 'm11',
        name: 'Formal Dress Shirt',
        brand: 'LUXE MEN',
        price: 159.99,
        image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=600',
        description: 'Crisp formal shirt in Egyptian cotton. Impeccable tailoring for special occasions.'
    },
    {
        id: 'm12',
        name: 'Quilted Vest',
        brand: 'LUXE MEN',
        price: 279.99,
        image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=600',
        description: 'Lightweight quilted vest with premium insulation. Perfect layering piece for transitional weather.'
    }
];

const womenProducts = [
    {
        id: 'w1',
        name: 'Silk Blouse',
        brand: 'LUXE WOMEN',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600',
        description: 'Elegant silk blouse with sophisticated draping. Luxurious fabric with timeless appeal.'
    },
    {
        id: 'w2',
        name: 'Tailored Blazer',
        brand: 'LUXE WOMEN',
        price: 429.99,
        image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600',
        description: 'Power blazer with structured shoulders and refined fit. Professional elegance redefined.'
    },
    {
        id: 'w3',
        name: 'Maxi Dress',
        brand: 'LUXE WOMEN',
        price: 349.99,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600',
        description: 'Flowing maxi dress in premium fabric. Effortless elegance for any occasion.'
    },
    {
        id: 'w4',
        name: 'Cashmere Turtleneck',
        brand: 'LUXE WOMEN',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600',
        description: 'Pure cashmere turtleneck with luxurious softness. Classic comfort in refined style.'
    },
    {
        id: 'w5',
        name: 'Leather Moto Jacket',
        brand: 'LUXE WOMEN',
        price: 749.99,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600',
        description: 'Edgy leather jacket with premium hardware. Bold style meets exceptional craftsmanship.'
    },
    {
        id: 'w6',
        name: 'High-Waisted Trousers',
        brand: 'LUXE WOMEN',
        price: 179.99,
        image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600',
        description: 'Tailored trousers with flattering high-rise fit. Sophisticated style for the modern woman.'
    },
    {
        id: 'w7',
        name: 'Knit Cardigan',
        brand: 'LUXE WOMEN',
        price: 229.99,
        image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600',
        description: 'Cozy knit cardigan in merino wool blend. Versatile layering piece with elegant details.'
    },
    {
        id: 'w8',
        name: 'Evening Gown',
        brand: 'LUXE WOMEN',
        price: 899.99,
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600',
        description: 'Stunning evening gown with exquisite detailing. Red carpet elegance for special moments.'
    },
    {
        id: 'w9',
        name: 'Wool Coat',
        brand: 'LUXE WOMEN',
        price: 849.99,
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600',
        description: 'Luxurious wool coat with timeless silhouette. Winter elegance at its finest.'
    },
    {
        id: 'w10',
        name: 'Pencil Skirt',
        brand: 'LUXE WOMEN',
        price: 159.99,
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600',
        description: 'Classic pencil skirt in premium fabric. Professional sophistication with feminine grace.'
    },
    {
        id: 'w11',
        name: 'Wrap Dress',
        brand: 'LUXE WOMEN',
        price: 269.99,
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600',
        description: 'Flattering wrap dress in luxe jersey. Versatile elegance from day to evening.'
    },
    {
        id: 'w12',
        name: 'Cashmere Sweater',
        brand: 'LUXE WOMEN',
        price: 359.99,
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600',
        description: 'Premium cashmere sweater with relaxed fit. Ultimate luxury in everyday comfort.'
    }
];
function renderProducts(category, products) {
    const container = document.getElementById(`${category}-products`);
    container.innerHTML = products.map(product => `
        <div class="product-card" onclick="showProductDetail('${product.id}')">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-actions">
                    <button class="action-btn" onclick="event.stopPropagation(); toggleWishlist('${product.id}')" title="Add to Wishlist">♡</button>
                    <button class="action-btn" onclick="event.stopPropagation(); showProductDetail('${product.id}')" title="Quick View">👁</button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
            </div>
        </div>
    `).join('');
}

function showProductDetail(productId) {
    const product = [...menProducts, ...womenProducts].find(p => p.id === productId);
    if (!product) return;
    
    if (currentSection === 'men' || currentSection === 'women') {
        previousSection = currentSection;
    }

    const detailContent = document.getElementById('detail-content');
    detailContent.innerHTML = `
        <div>
            <img src="${product.image}" alt="${product.name}" class="detail-image">
        </div>
        <div class="detail-info">
            <button class="btn-secondary" onclick="showPreviousSection()" style="margin-bottom: 2rem;">← Back</button>
            <div class="detail-brand">${product.brand}</div>
            <h1 class="detail-name">${product.name}</h1>
            <div class="detail-price">$${product.price.toFixed(2)}</div>
            <p class="detail-description">${product.description}</p>
            
            <div class="size-selector">
                <h4>SELECT SIZE</h4>
                <div class="size-options">
                    <div class="size-option ${selectedSize === 'XS' ? 'active' : ''}" onclick="selectSize('XS')">XS</div>
                    <div class="size-option ${selectedSize === 'S' ? 'active' : ''}" onclick="selectSize('S')">S</div>
                    <div class="size-option ${selectedSize === 'M' ? 'active' : ''}" onclick="selectSize('M')">M</div>
                    <div class="size-option ${selectedSize === 'L' ? 'active' : ''}" onclick="selectSize('L')">L</div>
                    <div class="size-option ${selectedSize === 'XL' ? 'active' : ''}" onclick="selectSize('XL')">XL</div>
                </div>
            </div>

            <div class="detail-buttons">
                <button class="btn-secondary" onclick="toggleWishlist('${product.id}')">ADD TO WISHLIST</button>
                <button class="btn-detail-primary" onclick="addToCart('${product.id}')">ADD TO CART</button>
            </div>

            <div style="padding-top: 2rem; border-top: 1px solid var(--border);">
                <p style="color: var(--text-light); line-height: 1.8;">
                    <strong>Free Shipping</strong> on orders over $200<br>
                    <strong>Free Returns</strong> within 30 days<br>
                    <strong>Secure Checkout</strong> with encryption
                </p>
            </div>
        </div>
    `;

    document.getElementById('home-section').style.display = 'none';
    document.getElementById('men-section').style.display = 'none';
    document.getElementById('women-section').style.display = 'none';
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('wishlist-section').style.display = 'none';
    document.getElementById('payment-section').style.display = 'none';
    document.getElementById('confirmation-section').style.display = 'none';
    
    document.getElementById('product-detail').style.display = 'block';
    document.getElementById('product-detail').classList.add('active');
}

function selectSize(size) {
    selectedSize = size;
    document.querySelectorAll('.size-option').forEach(opt => {
        opt.classList.remove('active');
        if (opt.textContent === size) {
            opt.classList.add('active');
        }
    });
}