var products = [
    { category: 'Фрукти', name: 'Яблуко', quantity: 100, proteins: 0.5, fats: 0.2, carbs: 14, calories: 52 },
    { category: 'Мясо', name: 'Курятина', quantity: 100,proteins: 25, fats: 3.6, carbs: 0, calories: 135 },
    { category: 'Злаки', name: 'Гречка', quantity: 100,proteins: 12.6, fats: 2.3, carbs: 62, calories: 335 }
    // Додайте інші продукти за необхідністю
];

var userProducts = [];

function showSuggestions(query) {
    var suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';

    if (query.trim() === '') {
        suggestionsDiv.style.display = 'none';
        return;
    }

    var matches = products.filter(function(product) {
        return product.name.toLowerCase().includes(query.toLowerCase());
    });

    if (matches.length > 0) {
        suggestionsDiv.style.display = 'block';
        matches.forEach(function(match) {
            var suggestion = document.createElement('div');
            suggestion.textContent = match.name;
            suggestion.onclick = function() {
                addProductToUser(match);
                suggestionsDiv.style.display = 'none';
            };
            suggestionsDiv.appendChild(suggestion);
        });
    } else {
        suggestionsDiv.style.display = 'none';
    }
}

function hideSuggestions() {
    setTimeout(function() {
        document.getElementById('suggestions').style.display = 'none';
    }, 200);
}

function addProductToUser(product) {
    var existingProductIndex = userProducts.findIndex(function(p) {
        return p.name.toLowerCase() === product.name.toLowerCase();
    });

    if (existingProductIndex > -1) {
        var existingCard = document.getElementById(`userProductCard_${existingProductIndex}`);
        existingCard.classList.add('duplicate');
        setTimeout(function() {
            existingCard.classList.remove('duplicate');
        }, 1000);
        alert('Цей продукт вже доданий!');
        return;
    }

    var quantity = prompt('Введіть кількість продукту (г):', '100');
    if (!quantity) return;

    quantity = parseFloat(quantity);

    if (isNaN(quantity) || quantity <= 0) {
        alert('Будь ласка, введіть правильну кількість.');
        return;
    }

    var userProduct = {
        name: product.name,
        quantity: quantity,
        proteins: (product.proteins / 100) * quantity,
        fats: (product.fats / 100) * quantity,
        carbs: (product.carbs / 100) * quantity,
        calories: (product.calories / 100) * quantity
    };

    userProducts.push(userProduct);

    // Додаємо анімацію для нового продукту
    var userProductsDiv = document.getElementById('userProducts');
    var newCard = createUserProductCard(userProduct, userProducts.length - 1);
    userProductsDiv.appendChild(newCard);
    newCard.classList.add('new');
    setTimeout(function() {
        newCard.classList.remove('new');
    }, 5000); // збільшено час анімації

    updatePage();
}

function createUserProductCard(product, index) {
    var card = document.createElement('div');
    card.classList.add('product-card');
    card.setAttribute('id', `userProductCard_${index}`);
    card.innerHTML = `
        <div><strong>${product.name}</strong></div>
        <div>Кількість: <input type="number" class="quantity-input" value="${product.quantity}" onchange="updateQuantity(this, ${index})"> г</div>
        <div>Ккал: ${product.calories.toFixed(2)}</div>
        <div>Білки: ${product.proteins.toFixed(2)} г</div>
        <div>Жири: ${product.fats.toFixed(2)} г</div>
        <div>Вуглеводи: ${product.carbs.toFixed(2)} г</div>
    `;
    return card;
}

function updatePage() {
    var userProductsDiv = document.getElementById('userProducts');
    userProductsDiv.innerHTML = '';

    var totalQuantity = 0;
    var totalCalories = 0;
    var totalProteins = 0;
    var totalFats = 0;
    var totalCarbs = 0;

    userProducts.forEach(function(product, index) {
        var card = createUserProductCard(product, index);
        userProductsDiv.appendChild(card);

        totalQuantity += product.quantity;
        totalCalories += product.calories;
        totalProteins += product.proteins;
        totalFats += product.fats;
        totalCarbs += product.carbs;
    });

    document.getElementById('totalQuantity').textContent = totalQuantity.toFixed(2);
    document.getElementById('totalCalories').textContent = totalCalories.toFixed(2);
    document.getElementById('totalProteins').textContent = totalProteins.toFixed(2);
    document.getElementById('totalFats').textContent = totalFats.toFixed(2);
    document.getElementById('totalCarbs').textContent = totalCarbs.toFixed(2);

    var avgСalories = ((totalCalories / totalQuantity) * 100).toFixed(2);
    var avgProteins = ((totalProteins / totalQuantity) * 100).toFixed(2);
    var avgFats = ((totalFats / totalQuantity) * 100).toFixed(2);
    var avgCarbs = ((totalCarbs / totalQuantity) * 100).toFixed(2);

    document.getElementById('avgСalories').textContent = avgСalories;
    document.getElementById('avgProteins').textContent = avgProteins;
    document.getElementById('avgFats').textContent = avgFats;
    document.getElementById('avgCarbs').textContent = avgCarbs;

    document.getElementById('search').value = '';
}

function updateQuantity(input, index) {
    var newQuantity = parseFloat(input.value);

    if (isNaN(newQuantity) || newQuantity <= 0) {
        alert('Будь ласка, введіть правильну кількість.');
        input.value = userProducts[index].quantity;
        return;
    }

    userProducts[index].quantity = newQuantity;
    userProducts[index].proteins = (products[index].proteins / 100) * newQuantity;
    userProducts[index].fats = (products[index].fats / 100) * newQuantity;
    userProducts[index].carbs = (products[index].carbs / 100) * newQuantity;
    userProducts[index].calories = (products[index].calories / 100) * newQuantity;

    updatePage();
}