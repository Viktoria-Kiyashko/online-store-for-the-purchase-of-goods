// Получаем параметр 'name' из URL
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');

const products = {
    new: [
        { name: 'Фильтр для кофе', price: '$10', description: 'Качественный фильтр для кофе', image: 'img/фильтр для кофе.png' },
        { name: 'Кофе в капсулах ESPRESSO CREMA', price: '$15', description: 'Лучший кофе в капсулах', image: 'img/кофе в капсулах espresso crema.png' },
        // Добавьте другие товары...
    ],
    recommended: [
        { name: 'Набор кофе в капсулах', price: '$20', description: 'Набор капсул для кофемашины', image: 'img/rec1.png' },
        // Добавьте другие товары...
    ],
    popular: [
        { name: 'Кофемолка Borcelle Coffee', price: '$30', description: 'Высококачественная кофемолка', image: 'img/pop1.png' },
        // Добавьте другие товары...
    ]
};

// Функция для нахождения товара по имени
const findProductByName = (name) => {
    for (let category in products) {
        const product = products[category].find(p => p.name === name);
        if (product) return product;
    }
    return null;
};

// Ищем товар по имени
const product = findProductByName(productName);

// Если товар найден, показываем его данные
if (product) {
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = `Цена: ${product.price}`;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.name;
} else {
    // Если товар не найден
    document.getElementById('product-details').innerHTML = "<p>Товар не найден.</p>";
}

// Добавление товара в корзину
document.getElementById('add-to-cart').addEventListener('click', () => {
    // Логика добавления товара в корзину
    alert(`${product.name} добавлен в корзину`);
    // Реализовать сохранение в локальное хранилище или другую логику корзины
});