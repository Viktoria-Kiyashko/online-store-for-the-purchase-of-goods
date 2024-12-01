// Логика для работы с избранным
const favoriteIcons = document.querySelectorAll('.favorite-icon');
const productCards = document.querySelectorAll('.product-card'); // Получаем все карточки товаров

// Получаем информацию об избранных товарах из localStorage
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

favoriteIcons.forEach((icon, index) => {
    const isFavorite = favorites.includes(index); // Проверяем, был ли товар в избранном

    // Если товар в избранном, делаем сердечко красным
    if (isFavorite) {
        icon.classList.add('active');
    }

    icon.addEventListener('click', () => {
        if (icon.classList.contains('active')) {
            // Удаляем товар из избранного
            icon.classList.remove('active');
            favorites = favorites.filter(favIndex => favIndex !== index);
            productCards[index].remove(); // Удаляем карточку товара с экрана
        } else {
            // Добавляем товар в избранное
            icon.classList.add('active');
            favorites.push(index);
            console.log('Товар добавлен в избранное');
        }

        // Сохраняем обновленное состояние в localStorage
        localStorage.setItem('favorites', JSON.stringify(favorites));
    });
});
