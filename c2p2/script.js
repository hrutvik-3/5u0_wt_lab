let cart = [];

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    updateCart();
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

function updateQuantity(name, quantity) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity = parseInt(quantity);
        if (item.quantity <= 0) {
            removeFromCart(name);
        }
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - Rs.${item.price} x 
            <input type="number" value="${item.quantity}" min="0"
                onchange="updateQuantity('${item.name}', this.value)">
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItems.appendChild(li);
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPrice.textContent = "Total: Rs." + total;
}
