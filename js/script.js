var products = [
       { name: "Борошно цільнозернове", type: "Борошно", calories: 331.00, proteins: 10.30, fats: 1.10, carbs: 70.00 },
  { name: "Піта Айфуд", type: "Борошно", calories: 262.30, proteins: 8.50, fats: 1.00, carbs: 57.70 },
  { name: "Спагетті Чумак", type: "Борошно", calories: 362.00, proteins: 11.00, fats: 1.10, carbs: 74.50 },
  { name: "Булгур", type: "Крупи", calories: 342.00, proteins: 12.30, fats: 1.30, carbs: 57.60 },
  { name: "Вівсянка Премія", type: "Крупи", calories: 342.00, proteins: 12.30, fats: 6.10, carbs: 59.50 },
  { name: "Гречка", type: "Крупи", calories: 345.80, proteins: 12.60, fats: 2.60, carbs: 68.00 },
  { name: "Манка", type: "Крупи", calories: 344.70, proteins: 11.30, fats: 0.70, carbs: 73.30 },
  { name: "Рис довгозерн пропар", type: "Крупи", calories: null, proteins: null, fats: null, carbs: null }, // Введіть конкретні значення, якщо доступні
  { name: "Сочевиця", type: "Крупи", calories: 323.90, proteins: 24.80, fats: 1.10, carbs: 53.70 },
  { name: "Бринза", type: "Молочка", calories: 179.00, proteins: 14.40, fats: 11.50, carbs: 4.50 },
  { name: "Вершки 10%", type: "Молочка", calories: 116.00, proteins: 2.60, fats: 10.00, carbs: 3.90 },
  { name: "Йогурт 1,5%", type: "Молочка", calories: 42.00, proteins: 3.20, fats: 1.50, carbs: 3.80 },
  { name: "Кефір 2,5%", type: "Молочка", calories: 51.00, proteins: 3.00, fats: 2.50, carbs: 4.00 },
  { name: "Масло вершкове, 72,5%", type: "Молочка", calories: 658.00, proteins: 0.60, fats: 72.50, carbs: 0.80 },
  { name: "Молоко 2,5%", type: "Молочка", calories: 51.70, proteins: 2.80, fats: 2.50, carbs: 4.73 },
  { name: "Морозиво Рудь 100%, 1кг(без вафлі)", type: "Молочка", calories: 207.00, proteins: 3.9, fats: 12.10, carbs: 20.50 },
  { name: "Сир кисломолочний 0,2%", type: "Молочка", calories: 103.00, proteins: 22.00, fats: 0.20, carbs: 3.30 },
  { name: "Сир кисломолочний 5%", type: "Молочка", calories: 141.00, proteins: 21.00, fats: 5.00, carbs: 3.00 },
  { name: "Сир твердий 45%", type: "Молочка", calories: null, proteins: null, fats: null, carbs: null }, // Введіть конкретні значення, якщо доступні
  { name: "Сметана 15%", type: "Молочка", calories: 158.00, proteins: 2.70, fats: 15.00, carbs: 3.00 },
  { name: "Фета, 45%", type: "Молочка", calories: 222.00, proteins: 14.00, fats: 6.40, carbs: 4.50 },
  { name: "Печінка куряча", type: "Мʼясо", calories: 114.00, proteins: 16.90, fats: 4.80, carbs: 0.70 },
  { name: "Серце куряче", type: "Мʼясо", calories: 149.00, proteins: 15.60, fats: 9.30, carbs: 0.70 },
  { name: "Стегно індички", type: "Мʼясо", calories: 174.50, proteins: 20.00, fats: 10.50, carbs: 0.00 },
  { name: "Філе зі стегна курки", type: "Мʼясо", calories: 192.00, proteins: 19.60, fats: 12.60, carbs: 0.00 },
  { name: "Філе індички", type: "Мʼясо", calories: 144.00, proteins: 18.00, fats: 8.00, carbs: 0.00 },
  { name: "Філе куряче", type: "Мʼясо", calories: 110.00, proteins: 21.60, fats: 2.60, carbs: 0.00 },
  { name: "Какао порошок", type: "Напої", calories: 310.00, proteins: 23.00, fats: 11.00, carbs: 11.00 },
  { name: "Капучіно 250 мл", type: "Напої", calories: 53.06, proteins: 2.53, fats: 2.86, carbs: 4.24 },
  { name: "Пиво Carlsberg Б/А", type: "Напої", calories: 28.00, proteins: 0.00, fats: 0.00, carbs: 6.20 },
  { name: "Пиво Hoegaarden Б/А", type: "Напої", calories: null, proteins: null, fats: null, carbs: null }, // Введіть конкретні значення, якщо доступні
  { name: "Сік мультифрукт", type: "Напої", calories: 37.00, proteins: 0.5, fats: 0.00, carbs: 9.30 },
  { name: "Сік томатний", type: "Напої", calories: 4.00, proteins: 21.20, fats: 1.30, carbs: 0.00 },
  { name: "Сік яблучний", type: "Напої", calories: 48.80, proteins: 0.50, fats: 0.00, carbs: 11.70 },
  { name: "Буряк", type: "Овочі", calories: 50.00, proteins: 1.70, fats: 0.00, carbs: 10.80 },
  { name: "Гарбуз", type: "Овочі", calories: 30.00, proteins: 1.00, fats: 0.00, carbs: 6.50 },
  { name: "Горошок консервований", type: "Овочі", calories: 55.00, proteins: 3.60, fats: 0.10, carbs: 9.80 },
  { name: "Кабачкова ікра", type: "Овочі", calories: 84.10, proteins: 0.80, fats: 7.00, carbs: 4.70 },
  { name: "Капуста білокачанна", type: "Овочі", calories: 28.80, proteins: 1.80, fats: 0.00, carbs: 5.40 },
  { name: "Капуста пекінська", type: "Овочі", calories: 16.00, proteins: 1.20, fats: 0.20, carbs: 2.00 },
  { name: "Картопля", type: "Овочі", calories: 87.70, proteins: 2.00, fats: 0.10, carbs: 19.70 },
  { name: "Кукурудза консервована", type: "Овочі", calories: 119.00, proteins: 3.90, fats: 1.30, carbs: 22.70 },
  { name: "Морква", type: "Овочі", calories: 34.10, proteins: 1.30, fats: 0.10, carbs: 7.00 },
  { name: "Огірок", type: "Овочі", calories: 15.20, proteins: 0.80, fats: 0.00, carbs: 3.00 },
  { name: "Огірок солоний", type: "Овочі", calories: 16.40, proteins: 2.80, fats: 0.00, carbs: 1.30 },
  { name: "Оливки, маслини", type: "Овочі", calories: 214.60, proteins: 1.70, fats: 20.60, carbs: 5.60 },
  { name: "Томат", type: "Овочі", calories: 19.20, proteins: 0.60, fats: 0.00, carbs: 4.20 },
  { name: "Томат солоний", type: "Овочі", calories: 14.00, proteins: 1.70, fats: 0.00, carbs: 1.80 },
  { name: "Цибуля", type: "Овочі", calories: 44.80, proteins: 1.70, fats: 0.00, carbs: 9.50 },
  { name: "Часник", type: "Овочі", calories: 143.00, proteins: 6.50, fats: 0.50, carbs: 29.90 },
  { name: "Дорадо патрана", type: "Риба", calories: 148.00, proteins: 10.00, fats: 12.00, carbs: 0.00 },
  { name: "Мінтай патрана", type: "Риба", calories: 176.00, proteins: 17.20, fats: 11.90, carbs: 0.10 },
  { name: "Оселедець в олії Премія", type: "Риба", calories: 304.10, proteins: 16.40, fats: 26.50, carbs: 0.00 },
  { name: "Скумбрія", type: "Риба", calories: null, proteins: null, fats: null, carbs: null }, // Введіть конкретні значення, якщо доступні
  { name: "Фарш сьомги АТБ", type: "Риба", calories: 166.00, proteins: 19.00, fats: 10.00, carbs: 0.00 },
  { name: "Фарш тріски АТБ", type: "Риба", calories: null, proteins: null, fats: null, carbs: null }, // Введіть конкретні значення, якщо доступні
  { name: "Фарш хека АТБ", type: "Риба", calories: 89.00, proteins: 17.00, fats: 2.00, carbs: 0.00 },
  { name: "Хек", type: "Риба", calories: null, proteins: null, fats: null, carbs: null }, // Введіть конкретні значення, якщо доступні
  { name: "Замінювач цукру", type: "Солодке", calories: 43.00, proteins: 0.00, fats: 0.00, carbs: 16.00 },
  { name: "Мед", type: "Солодке", calories: 320.00, proteins: 0.00, fats: 0.00, carbs: 80.00 },
  { name: "Цукерки Корисно, 1 шт", type: "Солодке", calories: 357.60, proteins: 5.20, fats: 13.10, carbs: 57.60 },
  { name: "Шоколад чорний(без цукру)", type: "Солодке", calories: 481.00, proteins: 11.00, fats: 36.00, carbs: 34.00 },
  { name: "Гірчиця мічна", type: "Соуси", calories: 160.00, proteins: 6.90, fats: 7.80, carbs: 15.60 },
  { name: "Кетчуп", type: "Соуси", calories: 88.00, proteins: 1.4, fats: 0.20, carbs: 20.10 },
  { name: "Олія соняшникова, оливкова", type: "Соуси", calories: 899.10, proteins: 0.00, fats: 99.90, carbs: 0.00 },
  { name: "Соєвий соус", type: "Соуси", calories: 55.00, proteins: 2.80, fats: 0.00, carbs: 11.50 },
  { name: "Томатна паста", type: "Соуси", calories: 60.80, proteins: 0.00, fats: 0.00, carbs: 16.00 },
  { name: "Волоський горіх", type: "Сухофрукти", calories: 647.70, proteins: 13.80, fats: 61.30, carbs: 10.20 },
  { name: "Кешʼю", type: "Сухофрукти", calories: 633.60, proteins: 25.20, fats: 53.60, carbs: 12.60 },
  { name: "Кунжут", type: "Сухофрукти", calories: 564.70, proteins: 19.40, fats: 48.70, carbs: 12.20 },
  { name: "Курага", type: "Сухофрукти", calories: 284.40, proteins: 5.20, fats: 0.00, carbs: 65.90 },
  { name: "Миглаль", type: "Сухофрукти", calories: 648.10, proteins: 18.60, fats: 57.70, carbs: 13.60 },
  { name: "Насіння соняшника сире", type: "Сухофрукти", calories: null, proteins: null, fats: null, carbs: null }, // Введіть конкретні значення, якщо доступні
  { name: "Родзинки", type: "Сухофрукти", calories: 294.00, proteins: 2.30, fats: 0.00, carbs: 71.20 },
  { name: "Фундук", type: "Сухофрукти", calories: 706.10, proteins: 16.10, fats: 66.90, carbs: 9.90 },
  { name: "Апельсин, мандарин", type: "Фрукти", calories: 37.20, proteins: 0.90, fats: 0.00, carbs: 8.40 },
  { name: "Банан", type: "Фрукти", calories: 95.60, proteins: 1.50, fats: 0.00, carbs: 22.40 },
  { name: "Хурма", type: "Фрукти", calories: 65.60, proteins: 0.50, fats: 0.00, carbs: 15.90 },
  { name: "Яблуко, груша", type: "Фрукти", calories: 46.80, proteins: 0.40, fats: 0.00, carbs: 11.30 },
  { name: "Яйця курячі", type: "Яйця", calories: 154.30, proteins: 12.70, fats: 11.50, carbs: 0.70 },
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
        <div>
            <div class="cardName"><strong>${product.name}</strong></div>
            <div>Кількість: <input type="number" class="quantity-input" value="${product.quantity}" onchange="updateQuantity(this, ${index})"> г</div>
            <div>Ккал: ${product.calories.toFixed(2)}</div>
            <div>Білки: ${product.proteins.toFixed(2)} г</div>
            <div>Жири: ${product.fats.toFixed(2)} г</div>
            <div>Вуглеводи: ${product.carbs.toFixed(2)} г</div>
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