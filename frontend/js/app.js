let cart = [];
let wishlist = [];
let currentSection = 'home';
let previousSection = 'home';
let selectedSize = 'M';

window.onload = function() {
    renderProducts('men', menProducts);
    renderProducts('women', womenProducts);
    updateCartCount();
    updateWishlistCount();
    showSection('home');
}

function showSection(section) {
    if (currentSection !== section) {
        previousSection = currentSection;
        currentSection = section;
    }
    
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('men-section').style.display = 'none';
    document.getElementById('women-section').style.display = 'none';
    document.getElementById('product-detail').style.display = 'none';
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('wishlist-section').style.display = 'none';
    document.getElementById('payment-section').style.display = 'none';
    document.getElementById('confirmation-section').style.display = 'none';

    switch(section) {
        case 'home':
            document.getElementById('home-section').style.display = 'block';
            break;
        case 'men':
            document.getElementById('men-section').style.display = 'block';
            document.getElementById('men-section').classList.add('active');
            break;
        case 'women':
            document.getElementById('women-section').style.display = 'block';
            document.getElementById('women-section').classList.add('active');
            break;
        case 'cart':
            document.getElementById('cart-section').style.display = 'block';
            renderCart();
            break;
        case 'wishlist':
            document.getElementById('wishlist-section').style.display = 'block';
            renderWishlist();
            break;
        case 'payment':
            document.getElementById('payment-section').style.display = 'block';
            break;
        case 'confirmation':
            document.getElementById('confirmation-section').style.display = 'block';
            break;
    }
}

function showPreviousSection() {
    if (previousSection === 'men' || previousSection === 'women') {
        showSection(previousSection);
    } else {
        showSection('home');
    }
}

function processPayment(event) {
    event.preventDefault();
    
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    
    let isValid = true;
    
    const fullname = document.getElementById('fullname').value.trim();
    if (fullname.length < 3) {
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }
    
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }
    
    const cardNumber = document.getElementById('cardnumber').value.replace(/\s/g, '');
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        document.getElementById('card-error').style.display = 'block';
        isValid = false;
    }
    
    const expiry = document.getElementById('expiry').value;
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryRegex.test(expiry)) {
        document.getElementById('expiry-error').style.display = 'block';
        isValid = false;
    }
    
    const cvv = document.getElementById('cvv').value;
    if (cvv.length !== 3 || isNaN(cvv)) {
        document.getElementById('cvv-error').style.display = 'block';
        isValid = false;
    }
    
    if (!isValid) {
        return false;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 200 ? 0 : 15;
    const total = subtotal + shipping;
    
    const orderNumber = 'LUXE' + Math.floor(Math.random() * 1000000);
    
    document.getElementById('order-details').innerHTML = `
        <div style="margin-bottom: 1rem;">
            <strong>Order Number:</strong> ${orderNumber}
        </div>
        <div style="margin-bottom: 1rem;">
            <strong>Customer:</strong> ${fullname}
        </div>
        <div style="margin-bottom: 1rem;">
            <strong>Email:</strong> ${email}
        </div>
        <div style="margin-bottom: 1rem;">
            <strong>Total Amount:</strong> $${total.toFixed(2)}
        </div>
        <div style="margin-bottom: 1rem;">
            <strong>Items:</strong> ${cart.reduce((sum, item) => sum + item.quantity, 0)}
        </div>
        <div style="padding-top: 1rem; border-top: 1px solid var(--border); color: var(--text-light);">
            A confirmation email has been sent to ${email}
        </div>
    `;
    
    cart = [];
    updateCartCount();
    showSection('confirmation');
    
    document.getElementById('payment-form').reset();
    
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    const cardInput = document.getElementById('cardnumber');
    if (cardInput) {
        cardInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }
    
    const expiryInput = document.getElementById('expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }
});