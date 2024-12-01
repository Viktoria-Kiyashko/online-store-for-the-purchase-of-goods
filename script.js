document.addEventListener('DOMContentLoaded', () => {
    // Логика для формы входа
    const form = document.getElementById('login-form');
    const inputField = document.getElementById('phone-email');
    const errorMessage = document.getElementById('error-message');

    if (form && inputField && errorMessage) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const inputValue = inputField.value.trim();
            errorMessage.style.display = 'none';

            if (isValidEmail(inputValue)) {
                alert(`Вход выполнен с email: ${inputValue}`);
            } else if (isValidPhoneNumber(inputValue)) {
                alert(`Вход выполнен с номером телефона: ${inputValue}`);
            } else {
                errorMessage.style.display = 'block';
                errorMessage.textContent = 'Неверный формат! Введите корректный email или номер телефона (+7XXXXXXXXXX).';
            }
        });
    }

    // Проверка корректности Email
    function isValidEmail(input) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
    }

    // Проверка корректности номера телефона с префиксом +7
    function isValidPhoneNumber(input) {
        const phoneRegex = /^\+7\d{10}$/;
        return phoneRegex.test(input);
    }



// Получение элементов формы
const registrationForm = document.getElementById('registration-form');
const verificationForm = document.getElementById('verification-form');

// Обработчик для формы регистрации
if (registrationForm) {
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Отключаем стандартное поведение формы

        // Получаем данные из формы
        const phone = document.getElementById('phone').value;

        // Простой пример валидации номера телефона
        if (!/^(\+7)[0-9]{10}$/.test(phone)) {
            document.getElementById('error-message').style.display = 'block';
            return;
        }

        // Если данные валидны, перенаправляем пользователя на страницу подтверждения
        window.location.href = 'verification.html';
    });
}

// Обработчик для формы подтверждения
if (verificationForm) {
    verificationForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Отключаем стандартное поведение формы

        const code = document.getElementById('verification-code')?.value.trim();
        const verificationError = document.getElementById('verification-error');

        if (!code) {
            // Если поле пустое
            verificationError.style.display = 'block';
            verificationError.textContent = 'Пожалуйста, введите код.';
            return;
        }

        if (code === '1234') {
            alert('Телефон подтвержден!');
            // Перенаправление на главную страницу
            window.location.href = 'home.html';
        } else {
            // Неверный код
            verificationError.style.display = 'block';
            verificationError.textContent = 'Неверный код. Попробуйте еще раз.';
        }
    });
}
    // Логика для работы с товарами и корзиной
    const productList = document.getElementById('product-list');
    const cartCountEl = document.getElementById('cart-count');
    let cart = {}; // Словарь для хранения количества товаров в корзине

    const products = {
        new: [
            { name: 'Фильтр для кофе', price: '$10', image: 'img/фильтр для кофе.png' },
            { name: 'Кофе в капсулах ESPRESSO CREMA', price: '$15', image: 'img/кофе в капсулах espresso crema.png' },
            { name: 'Фильтр сетчатый многоразовый', price: '$18', image: 'img/new3.png' },
            { name: 'Кофе в капсулах', price: '$18', image: 'img/new4.png' },
            { name: 'Электрическая турка для варки кофе', price: '$18', image: 'img/new5.png' },
            { name: 'Кофе в капсулах', price: '$18', image: 'img/new6.png' },
            { name: 'Фильтр для заваривания кофе', price: '$18', image: 'img/new7.png' },
            { name: 'Капсулы кофе для кофемашины', price: '$18', image: 'img/new8.png' },
            { name: 'Кофеварка гейзерная', price: '$18', image: 'img/new9.png' },
            { name: 'Адаптер для капсул', price: '$18', image: 'img/new10.png' },
        ],
        recommended: [
            { name: 'Набор кофе в капсулах', price: '$20', image: 'img/rec1.png' },
            { name: 'Капучино в капсулах Dolce Gusto', price: '$22', image: 'img/rec2.png' },
            { name: 'Кофеварка Kitfort', price: '$22', image: 'img/rec3.png' },
            { name: 'Nescafe Gold', price: '$22', image: 'img/rec4.png' },
            { name: 'Кофемашина Kitfort', price: '$22', image: 'img/rec5.png' },
            { name: 'Капсулы Latte Machiatto Nescafe', price: '$22', image: 'img/rec6.png' },
            { name: 'Беспроводной капучинатор', price: '$22', image: 'img/rec7.png' },
            { name: 'Электрическая турка', price: '$22', image: 'img/rec8.png' },
            { name: 'Многоразовый адаптер для кофемашин', price: '$22', image: 'img/rec9.png' },
            { name: 'Стакан для капучино', price: '$22', image: 'img/rec10.png' },

        ],
        popular: [
            { name: 'Кофемолка Borcelle Coffee', price: '$30', image: 'img/pop1.png' },
            { name: 'Гейзерная кофемолка', price: '$35', image: 'img/pop2.png' },
            { name: 'Капучино в капсулах', price: '$35', image: 'img/pop3.png' },
            { name: 'Темпер для кофе с мерной ложкой', price: '$35', image: 'img/pop4.png' },
            { name: 'Смесь Milk Coffee', price: '$35', image: 'img/pop5.png' },
            { name: 'Набор капсул', price: '$35', image: 'img/pop6.png' },
            { name: 'Кофеварка на 6 кружек', price: '$35', image: 'img/pop7.png' },
            { name: 'Кофеварка автоматическая', price: '$35', image: 'img/pop8.png' },
            { name: 'Офисная кофеварка', price: '$35', image: 'img/pop9.png' },
            { name: 'Latte в капсулах', price: '$35', image: 'img/pop10.png' },

        ],
    };

 

   // Обновление общего количества товаров в корзине
   const updateCartCount = () => {
    const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);
    cartCountEl.textContent = totalItems;
};

// Добавление товара в корзину
const addToCart = (name) => {
    cart[name] = (cart[name] || 0) + 1;
    document.getElementById(`count-${name}`).textContent = cart[name];
    updateCartCount();
};

// Удаление товара из корзины
const removeFromCart = (name) => {
    if (cart[name]) {
        cart[name] -= 1;
        if (cart[name] === 0) {
            delete cart[name];
        }
        document.getElementById(`count-${name}`).textContent = cart[name] || 0;
        updateCartCount();
    }
};

// Рендер товаров
const renderProducts = (category) => {
    productList.innerHTML = '';
    products[category].forEach((product) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <div class="cart-actions">
                <button class="minus-button" data-name="${product.name}">-</button>
                <span class="item-count" id="count-${product.name}">0</span>
                <button class="plus-button" data-name="${product.name}">+</button>
            </div>
            <button class="buy-button" data-name="${product.name}">Купить</button>
        `;
        productList.appendChild(card);
    });
};

// Добавление обработчиков событий
productList.addEventListener('click', (event) => {
    const name = event.target.dataset.name;

    if (event.target.classList.contains('plus-button')) {
        addToCart(name);
   } else if (event.target.classList.contains('minus-button')) {
        removeFromCart(name);
    } else if (event.target.classList.contains('buy-button')) {
        // Перенаправление на страницу товара
        window.location.href = `product-details.html?name=${encodeURIComponent(name)}`;
    }
});

// Переключение категорий
document.querySelectorAll('.filter-button').forEach((button) => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        renderProducts(filter);
    });
});

// Первоначальный рендер категории "новинки"
renderProducts('new');

// Логика для работы с избранным
const favoriteIcons = document.querySelectorAll('.favorite-icon');
const productCards = document.querySelectorAll('.product-card'); // все карточки товаров

// об избранных товарах из localStorage
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

favoriteIcons.forEach((icon, index) => {
    const isFavorite = favorites.includes(index); //  был ли товар в избранном

    // Если товар в избранном
    if (isFavorite) {
        icon.classList.add('active');
    }

    icon.addEventListener('click', () => {
        if (icon.classList.contains('active')) {
            // товар из избранного
            icon.classList.remove('active');
            favorites = favorites.filter(favIndex => favIndex !== index);
            productCards[index].remove(); // карточка товара с экрана
        } else {
            //  товар в избранное
            icon.classList.add('active');
            favorites.push(index);
            console.log('Товар добавлен в избранное');
        }

        //  обновленное состояние в localStorage
        localStorage.setItem('favorites', JSON.stringify(favorites));
    });
});
});







//  параметр 'name' из URL для отображения информации о товаре
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');

const findProductByName = (name) => {
    for (let category in products) {
        const product = products[category].find(p => p.name === name);
        if (product) return product;
    }
    return null;
};

// Функция отображения деталей товара
const showProductDetails = () => {
    const product = findProductByName(productName);
    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `Цена: ${product.price}`;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-image').alt = product.name;
    } else {
        document.getElementById('product-details').innerHTML = "<p>Товар не найден.</p>";
    }
};

//  детали товара, если есть 'name'
if (productName) {
    showProductDetails();
} else {
    renderProducts('new'); // Если параметра нет
}


