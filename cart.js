document.addEventListener("DOMContentLoaded", () => {
    const cartContent = document.getElementById("cart-content");
    const cartNotification = document.getElementById("cart-notification");

    let cartItems = [
        { id: 1, name: "Кофемолка", price: '30', quantity: 1, image: "img/pop1.png" },
        { id: 2, name: "Кофе в капсулах", price: `18`, quantity: 1, image: "img/new4.png" },
        { id: 3, name: "Кофеварка Kitfort", price: `22`, quantity: 1, image: "img/rec3.png" },
        { id: 4, name: "Кофеварка гейзерная", price: `18`, quantity: 1, image: "img/new9.png" },
        { id: 5, name: "Адаптер для капсул", price: `10`, quantity: 1, image: "img/rec10.png" },
        { id: 6, name: "Набор капсул", price: `35`, quantity: 1, image: "img/pop6.png" },
        { id: 7, name: "Фильтр для заваривания кофе", price: `18`, quantity: 1, image: "img/new7.png" },
        { id: 8, name: "Кофемашина Kitfort", price: `22`, quantity: 1, image: "img/rec5.png" },
    ];

    function renderCart() {
        cartContent.innerHTML = "";
        cartItems.forEach(item => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="product-name">${item.name}</div>
                <div class="product-price">${item.price} $</div>
                <div class="quantity">
                    <button class="decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase" data-id="${item.id}">+</button>
                </div>
                <button class="delete" data-id="${item.id}">Удалить</button>
            `;
            
            cartContent.appendChild(productCard);
        });

        // Обновление уведомления с количеством товаров в корзине
const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
cartNotification.style.display = totalQuantity > 0 ? "flex" : "none"; // Показываем или скрываем уведомление
document.getElementById("item-count").textContent = totalQuantity;

    }

    cartContent.addEventListener("click", (e) => {
        // Увеличение количества товара
        if (e.target.classList.contains("increase")) {
            const id = parseInt(e.target.dataset.id);
            const item = cartItems.find(item => item.id === id);
            if (item) {
                item.quantity++;
                renderCart();
            }
        }

        // Уменьшение количества товара
        if (e.target.classList.contains("decrease")) {
            const id = parseInt(e.target.dataset.id);
            const item = cartItems.find(item => item.id === id);
            if (item && item.quantity > 1) {
                item.quantity--;
                renderCart();
            }
        }

        // Удаление товара из корзины
        if (e.target.classList.contains("delete")) {
            const id = parseInt(e.target.dataset.id);
            cartItems = cartItems.filter(item => item.id !== id); // Удаляем товар из массива
            renderCart();
        }
    });

    renderCart();
});
