// document.querySelector("#submit").addEventListener("click", function (event) {
//     const name = document.querySelector("#name").value;
//     const surname = document.querySelector("#surname").value;
//     const error = document.querySelector("#error");
//     if (name.length < 2 || surname.length < 2) {
//         error.textContent = "Name və Surname ən azı 2 hərf olmalıdır!";
//         event.preventDefault();
//     } else {
//         error.textContent = "";
//         alert("Form submit oldu!");
//         const Div = document.querySelector("div");
//         Div.innerHTML = "";
//     }
// });





let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}

function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    const cartItems = document.getElementById('cart-items');

    cartPopup.style.display = cartPopup.style.display === 'none' ? 'block' : 'none';
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-3');
        itemElement.innerHTML = `
            <div class="card">
                <div class="card-image">
                    <img src="https://i5.walmartimages.com/asr/754245a3-ffb9-4721-ae00-fcc484cc16d7_1.6c05ac29264da8b78e3d9ab00bf4aff9.jpeg" alt="">
                </div>
                <div class="card-actions">
                    <h5>${item.name}</h5>
                    <p>$${item.price}</p>
                </div>
            </div>
        `;
        cartItems.appendChild(itemElement);
    });
}

function clearCart() {
    cart = [];
    localStorage.removeItem('cart');
    updateCartCount();
    document.getElementById('cart-popup').style.display = 'none'; 
}
updateCartCount();
