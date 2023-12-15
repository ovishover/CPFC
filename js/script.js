var products = [
  { name: 'Борошно кукурудзяне Своя лінія', type: 'Борошно', calories: 331, proteins: 7.20, fats: 1.50, carbs: 72.10, calc: true },
  { name: 'Борошно цільнозернове Своя лінія', type: 'Борошно', calories: 298.00, proteins: 11.5, fats: 2.2, carbs: 55.8, calc: true },
  { name: 'Лаваш Піта Ifood', type: 'Борошно', calories: 262.30, proteins: 8.50, fats: 1.00, carbs: 57.70, calc: true },
  { name: 'Спагетті Чумак', type: 'Борошно', calories: 362.00, proteins: 11.00, fats: 1.10, carbs: 74.50, calc: true },
  { name: 'Хліб Фітнес Злак Цар Хліб', type: 'Борошно', calories: 343, proteins: 11.20, fats: 16.10, carbs: 34.20, calc: true },
  { name: 'Булгур Премія', type: 'Крупи', calories: 365.00, proteins: 12.30, fats: 1.30, carbs: 75.90, calc: true },
  { name: 'Вівсянка Премія', type: 'Крупи', calories: 342.00, proteins: 12.30, fats: 6.10, carbs: 59.50, calc: true },
  { name: 'Гречка Ситий двір', type: 'Крупи', calories: 306.00, proteins: 12.60, fats: 3.30, carbs: 57.10, calc: true },
  { name: 'Манка Ситий двір', type: 'Крупи', calories: 328.00, proteins: 10.30, fats: 1.00, carbs: 67.40, calc: true },
  { name: 'Рис довгозерн пропар Ситий двір', type: 'Крупи', calories: 330.00, proteins: 7.00, fats: 1.00, carbs: 74.00, calc: true },
  { name: 'Сочевиця Ситий двір', type: 'Крупи', calories: 362.00, proteins: 24.00, fats: 22.00, carbs: 63.00, calc: true },
  { name: 'Бринза Ферма', type: 'Молочка', calories: 177.50, proteins: 15.90, fats: 11.60, carbs: 2.50, calc: true },
  { name: 'Вершки 10% Яготинські', type: 'Молочка', calories: 119.00, proteins: 2.90, fats: 10.00, carbs: 4.30, calc: true },
  { name: 'Йогурт 1% Своя лінія', type: 'Молочка', calories: 42.00, proteins: 1.70, fats: 1.00, carbs: 13.90, calc: true },
  { name: 'Кефір 2,5% Своя Лінія', type: 'Молочка', calories: 49.00, proteins: 2.90, fats: 2.50, carbs: 3.80, calc: true },
  { name: 'Крем-сир класичний Feel the Cheese', type: 'Молочка', calories: 235.00, proteins: 5.50, fats: 22.50, carbs: 3.00, calc: true },
  { name: 'Масло вершкове 72,5% Селянське', type: 'Молочка', calories: 663.00, proteins: 0.80, fats: 72.50, carbs: 1.30, calc: true },
  { name: 'Молоко 2,5% Селянське', type: 'Молочка', calories: 53.00, proteins: 2.80, fats: 2.50, carbs: 4.73, calc: true },
  { name: 'Морозиво Рудь 100%, 1кг(без вафлі)', type: 'Молочка', calories: 207.00, proteins: 3.9, fats: 12.10, carbs: 20.50, calc: true },
  { name: 'Сир кисломолочний 0,2% Мімімілк', type: 'Молочка', calories: 103.00, proteins: 22.00, fats: 0.20, carbs: 3.30, calc: true },
  { name: 'Сир кисломолочний 5% Мімімілк', type: 'Молочка', calories: 141.00, proteins: 21.00, fats: 5.00, carbs: 3.00, calc: true },
  { name: 'Сир мʼякий вершковий Exquisa', type: 'Молочка', calories: 235.00, proteins: 5.50, fats: 22.50, carbs: 3.00, calc: true },
  { name: 'Сир твердий 45%', type: 'Молочка', calories: 347.00, proteins: 22.50, fats: 28.50, carbs: 4.70, calc: true },
  { name: 'Сметана 15% Молокія', type: 'Молочка', calories: 158.00, proteins: 2.70, fats: 15.00, carbs: 3.00, calc: true },
  { name: 'Фелата 45% Premialle', type: 'Молочка', calories: 222.00, proteins: 14.00, fats: 6.40, carbs: 4.50, calc: true },
  { name: 'Печінка куряча', type: 'Мʼясо', calories: 119.00, proteins: 20.10, fats: 4.20, carbs: 0.20, calc: true },
  { name: 'Серце куряче', type: 'Мʼясо', calories: 159.00, proteins: 15.80, fats: 10.30, carbs: 0.80, calc: true },
  { name: 'Стегно індички', type: 'Мʼясо', calories: 151.00, proteins: 19.50, fats: 8.50, carbs: 0.00, calc: true },
  { name: 'Філе індички', type: 'Мʼясо', calories: 105.00, proteins: 24.00, fats: 1.00, carbs: 0.10, calc: true },
  { name: 'Філе куряче', type: 'Мʼясо', calories: 106.00, proteins: 23.10, fats: 1.50, carbs: 0.00, calc: true },
 { name: 'Філе стегна курки', type: 'Мʼясо', calories: 190.00, proteins: 19.00, fats: 12.00, carbs: 0.00, calc: true },
  { name: 'Какао порошок Мрія', type: 'Напої', calories: 310.00, proteins: 22.50, fats: 11.00, carbs: 10.80, calc: true },
  { name: 'Капучіно 250 мл', type: 'Напої', calories: 53.06, proteins: 2.53, fats: 2.86, carbs: 4.24, calc: true },
  { name: 'Пиво Carlsberg Б/А', type: 'Напої', calories: 28.00, proteins: 0.00, fats: 0.00, carbs: 6.20, calc: true },
  { name: 'Пиво Hoegaarden Б/А', type: 'Напої', calories: 27.00, proteins: 0.50, fats: 0.00, carbs: 7.40, calc: true },
  { name: 'Сік мультифрукт', type: 'Напої', calories: 37.00, proteins: 0.5, fats: 0.00, carbs: 9.30, calc: true },
  { name: 'Сік томатний Наш сік', type: 'Напої', calories: 20.00, proteins: 0.50, fats: 0.00, carbs: 4.50, calc: true },
  { name: 'Буряк', type: 'Овочі', calories: 51.00, proteins: 1.60, fats: 0.00, carbs: 10.80, calc: true },
  { name: 'Гарбуз сирий', type: 'Овочі', calories: 17.00, proteins: 0.60, fats: 0.10, carbs: 3.00, calc: true },
  { name: 'Горошок консервований Своя лінія', type: 'Овочі', calories: 55.00, proteins: 3.00, fats: 0.40, carbs: 9.70, calc: true },
  { name: 'Імбир маринований', type: 'Овочі', calories: 64, proteins: 0.7, fats: 0.3, carbs: 14.6, calc: true },
  { name: 'Кабачкова ікра Верес', type: 'Овочі', calories: 73.00, proteins: 1.00, fats: 5.00, carbs: 6.00, calc: true },
  { name: 'Кабачок', type: 'Овочі', calories: 22.00, proteins: 1.50, fats: 0.30, carbs: 2.90, calc: false },
  { name: 'Капуста білокачанна', type: 'Овочі', calories: 31.00, proteins: 1.50, fats: 0.30, carbs: 4.50, calc: false },
  { name: 'Капуста пекінська', type: 'Овочі', calories: 23.00, proteins: 1.30, fats: 0.20, carbs: 2.70, calc: false },
  { name: 'Картопля', type: 'Овочі', calories: 88.00, proteins: 2.00, fats: 0.20, carbs: 19.00, calc: true },
  { name: 'Кукурудза консервована Своя лінія', type: 'Овочі', calories: 54.00, proteins: 2.20, fats: 0.00, carbs: 11.20, calc: true },
  { name: 'Морква', type: 'Овочі', calories: 35.00, proteins: 1.00, fats: 0.20, carbs: 7.30, calc: true },
  { name: 'Огірок', type: 'Овочі', calories: 16.00, proteins: 0.80, fats: 0.20, carbs: 2.30, calc: false },
  { name: 'Оливки, маслини', type: 'Овочі', calories: 132.00, proteins: 1.00, fats: 12.00, carbs: 5.00, calc: true },
  { name: 'Печериці (шампіньйони)', type: 'Овочі', calories: 28.00, proteins: 2.80, fats: 0.20, carbs: 3.00, calc: false },
  { name: 'Томат', type: 'Овочі', calories: 20.00, proteins: 0.90, fats: 0.20, carbs: 3.90, calc: false },
  { name: 'Цибуля ріпчаста', type: 'Овочі', calories: 43.00, proteins: 1.40, fats: 0.25, carbs: 8.90, calc: false },
  { name: 'Часник', type: 'Овочі', calories: 130.00, proteins: 6.20, fats: 0.30, carbs: 25.00, calc: true },
  { name: 'Дорадо патрана', type: 'Риба', calories: 148.00, proteins: 10.00, fats: 12.00, carbs: 0.00, calc: true },
  { name: 'Мінтай патраний', type: 'Риба', calories: 176.00, proteins: 17.20, fats: 11.90, carbs: 0.10, calc: true },
  { name: 'Оселедець в олії Премія', type: 'Риба', calories: 304.10, proteins: 16.40, fats: 26.50, carbs: 0.00, calc: true },
  { name: 'Скумбрія', type: 'Риба', calories: 193.00, proteins: 18.70, fats: 13.20, carbs: 0.00, calc: true },
  { name: 'Фарш сьомги АТБ', type: 'Риба', calories: 166.00, proteins: 19.00, fats: 10.00, carbs: 0.00, calc: true },
  { name: 'Фарш тріски АТБ', type: 'Риба', calories: 76.00, proteins: 16.70, fats: 1.00, carbs: 0.00, calc: true },
  { name: 'Фарш хека АТБ', type: 'Риба', calories: 89.00, proteins: 17.00, fats: 2.00, carbs: 0.00, calc: true },
  { name: 'Хек', type: 'Риба', calories: 91.00, proteins: 18.00, fats: 2.40, carbs: 0.00, calc: true },
  { name: 'Замінник цукру Еритрітол', type: 'Солодке', calories: 20, proteins: 0.1, fats: 0.2, carbs: 4, calc: true },
  { name: 'Замінювач цукру Sukrazit', type: 'Солодке', calories: 43.00, proteins: 0.00, fats: 0.00, carbs: 16.00, calc: true },
  { name: 'Згущене молоко Ічня', type: 'Солодке', calories: 338.5, proteins: 7.2, fats: 8.5, carbs: 58.3, calc: true },
  { name: 'Мед', type: 'Солодке', calories: 314.00, proteins: 0.80, fats: 0.00, carbs: 74.80, calc: true },
  { name: 'Цукерки Корисно, 1 шт (20 г)', type: 'Солодке', calories: 71.50, proteins: 1.00, fats: 2.60, carbs: 11.50, calc: true },
  { name: 'Шоколад чорний (без цукру)', type: 'Солодке', calories: 481.00, proteins: 11.00, fats: 36.00, carbs: 34.00, calc: true },
  { name: 'Гірчиця міцна Верес', type: 'Соуси', calories: 160.00, proteins: 6.90, fats: 7.80, carbs: 15.60, calc: true },
  { name: 'Гірчиця французька Верес', type: 'Соуси', calories: 128.00, proteins: 4.90, fats: 4.70, carbs: 15.70, calc: true },
  { name: 'Кетчуп Pripravka з базиліком', type: 'Соуси', calories: 95.00, proteins: 1, fats: 0.20, carbs: 22.10, calc: true },
  { name: 'Олія соняшникова, оливкова', type: 'Соуси', calories: 899.10, proteins: 0.00, fats: 99.90, carbs: 0.00, calc: true },
  { name: 'Соєвий соус', type: 'Соуси', calories: 55.00, proteins: 2.80, fats: 0.00, carbs: 11.50, calc: true },
  { name: 'Соус український Королівський смак', type: 'Соуси', calories: 81, proteins: 0, fats: 0, carbs: 20, calc: true },
  { name: 'Томатна паста Королівський смак', type: 'Соуси', calories: 64.00, proteins: 0.00, fats: 0.00, carbs: 16.00, calc: true },
  { name: 'Томатна паста Welldar', type: 'Соуси', calories: 115.3, proteins: 2.3, fats: 0.4, carbs: 14.8, calc: true },
  { name: 'Волоський горіх', type: 'Сухофрукти', calories: 662.00, proteins: 14.00, fats: 62.00, carbs: 12.00, calc: true },
  { name: 'Кешʼю', type: 'Сухофрукти', calories: 583.00, proteins: 17.50, fats: 45.60, carbs: 25.80, calc: true },
  { name: 'Кунжут', type: 'Сухофрукти', calories: 664.00, proteins: 22.00, fats: 58.5, carbs: 4.00, calc: true },
  { name: 'Курага', type: 'Сухофрукти', calories: 291.00, proteins: 4.6, fats: 0.50, carbs: 67.20, calc: true },
  { name: 'Мигдаль сирий', type: 'Сухофрукти', calories: 575.00, proteins: 21.20, fats: 49.40, carbs: 9.50, calc: true },
  { name: 'Насіння соняшнику Повна Чаша', type: 'Сухофрукти', calories: 458.90, proteins: 20.80, fats: 20.00, carbs: 51.50, calc: true },
  { name: 'Родзинки сушені', type: 'Сухофрукти', calories: 326.00, proteins: 3.1, fats: 0.5, carbs: 75.00, calc: true },
  { name: 'Фундук', type: 'Сухофрукти', calories: 668.00, proteins: 14.6, fats: 62.40, carbs: 7.80, calc: true },
  { name: 'Апельсин, мандарин', type: 'Фрукти', calories: 50.00, proteins: 0.90, fats: 0.20, carbs: 11.00, calc: true },
  { name: 'Банан', type: 'Фрукти', calories: 94.00, proteins: 1.20, fats: 0.20, carbs: 22.00, calc: true },
  { name: 'Хурма, корольок', type: 'Фрукти', calories: 67.00, proteins: 0.50, fats: 0.20, carbs: 15.30, calc: true },
  { name: 'Яблуко, груша', type: 'Фрукти', calories: 63.00, proteins: 0.40, fats: 0.40, carbs: 13.00, calc: true },
  { name: 'Яйця курячі', type: 'Яйця', calories: 154.30, proteins: 12.00, fats: 10.00, carbs: 1.00, calc: true }
];

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydatabase.db');

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
				suggestion.classList.add('prod-list');
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
        <div>
            <div class="cardName"><strong>${product.name}</strong></div>
            <div class="row-quantity">Кількість: <input type="number" class="quantity-input" value="${product.quantity}" onchange="updateQuantity(this, ${index})"> г</div>
            <div class="row-quantity">Ккал: ${product.calories.toFixed(2)}</div>
            <div class="row-quantity">Білки: ${product.proteins.toFixed(2)} г</div>
            <div class="row-quantity">Жири: ${product.fats.toFixed(2)} г</div>
            <div class="row-quantity">Вуглеводи: ${product.carbs.toFixed(2)} г</div>
        </div>
        <div>
            <button onclick="removeProduct(${index})">Видалити</button>
        </div>
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

        document.getElementById('totalQuantity').textContent = totalQuantity.toFixed(0);
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

    function removeProduct(index) {
        userProducts.splice(index, 1);
        updatePage();
    }
