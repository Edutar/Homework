// blocks
{
    let a = 10;
{
    let b = 20;
    {
        let c = 30;
        // Значення: a = 100, b = 21, c = 30, d underfined
        b++;
        a *= 10;
    }
    {
        let c = 50;
        // Значення: a = 100, b = 521, c = 50, d underfined
        b += 500;
    }
    {
        const a = 100500;
        const d = "value";
        // Значення: a = 100, b = 1000, c = 30, d = "value"
        {
            let a = -50;
            b = 1000;
            // Значення: a = -50, b = 1000, c = 30, d = "value"
        }
        // Значення: a = 100, b = 1000, c = 30, d = "value"
    }
    // Значення: a = 100, b = 1000, c underfined, d underfined
}
// Значення: a = 100, b = 1001, c underfined, d underfined

}
// comparison if

{
    var age = + prompt ("Скільки вам років?", "");
    if (age < 18) {
        alert("школяр");
    }
    else if (age > 18 && age < 30){
        alert("молодь");
    }
    else if (age > 30 && age < 45){
        alert("зрілість");
    }
    else if (age > 45 && age < 60){
        alert("захід сонця");
    }
    else if (age > 60) {
        alert("як пенсія?");
    }
    else {
        alert("чи кіборг, чи KERNESS");
    }
}

// switch: size

{
    var size =  prompt("Введіть ваш розмір одягу");
    switch(true){
        case(size < 6 ):
        alert("У вас дитячий розмір");
        break;
        case(size >= 6 && size < 8  ):
        alert("Ваш розімр: S");
        break;
        case(size >=8 && size <10):
        alert("Ваш розімр: M");
        break;
        case(size >=10 && size < 14):
        alert("Ваш розімр: L");
        break;
        case(size > 14):
        alert("Ваш розімр: XXL");
        break;
    }
}

// switch: if

{
    let color = prompt("Введіть колір","");
    if (color === "red") {
        document.write("<div style='background-color: red;'>червоний</div>");
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    } else if (color === "black") {
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    } else if (color === "blue") {
        document.write("<div style='background-color: blue;'>синій</div>");
        document.write("<div style='background-color: green;'>зелений</div>");
    } else if (color === "green") {
        document.write("<div style='background-color: green;'>зелений</div>");
    } else {
        document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
    }

}

// noswitch

{
    const noSwitch = (key, cases, defaultKey = 'default') => {
        if (key in cases && typeof cases[key] === 'function') {
            return cases[key]();
        } else if (defaultKey in cases && typeof cases[defaultKey] === 'function') {
            return cases[defaultKey]();
        } else {
            console.log('Для цього ключа відсутня функція');
        }
    };
    
    const drink = prompt("Що ви любите пити?");
    
    noSwitch(drink, {
        воду: () => console.log('Найздоровіший вибір!'),
        чай() {
            console.log('Смачна та корисна штука. Не перестарайтеся з цукром');
        },
        "пиво": () => console.log('Добре влітку, та в міру'),
        віскі: function() {
            console.log('Та ви, батечку, естет! Не забудьте лід і сигару');
        },
        default() {
            console.log('Щось я не зрозумів');
        }
    });
    
}

// closure calc

{
    fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        // Отримали дані, тепер обробляємо їх
        console.log(data); // Переглянемо структуру даних у консолі

        // Отримуємо контейнер, куди будемо додавати кнопки
        const container = document.getElementById('currency-buttons');

        // Перевіряємо, чи контейнер існує
        if (!container) {
            console.error("Елемент з id 'currency-buttons' не знайдений в DOM.");
            return; // Виходимо з функції, якщо контейнер не знайдено
        }

        // Перебираємо курси
        for (const currency in data.rates) {
            // Створюємо кнопку
            const button = document.createElement('button');
            button.innerText = currency; // Текст кнопки - назва валюти

            // Додаємо обробник події на кнопку
            button.onclick = () => {
                // Запитуємо суму від користувача
                const amount = parseFloat(prompt(`Введіть суму в ${currency}:`));
                if (!isNaN(amount)) {
                    // Конвертуємо суму у валюту в USD та виводимо результат
                    const convertedAmount = amount / data.rates[currency];
                    console.log(`${amount} ${currency} = ${convertedAmount.toFixed(2)} USD`);
                } else {
                    console.log('Невірний формат суми');
                }
            };

            // Додаємо кнопку до контейнера
            container.appendChild(button);
        }
    })
    .catch(error => console.log('Сталася помилка при завантаженні даних:', error));

}

// closure calc 2

{
    document.addEventListener('DOMContentLoaded', () => {
        const fromSelect = document.getElementById('from');
        const toSelect = document.getElementById('to');
        const rateDiv = document.getElementById('rate');
        const amountInput = document.getElementById('amount');
        const resultDiv = document.getElementById('result');
    
        // Функція для заповнення варіантів вибору валют
        const fillCurrencyOptions = () => {
            // Очистити варіанти вибору
            fromSelect.innerHTML = '';
            toSelect.innerHTML = '';
    
            // Список валют
            const currencies = ['USD', 'EUR', 'GBP', 'JPY']; 
    
            // Додати кожну валюту як варіант вибору
            currencies.forEach(currency => {
                const option = document.createElement('option');
                option.innerText = currency;
                option.value = currency;
    
                fromSelect.appendChild(option.cloneNode(true));
                toSelect.appendChild(option);
            });
        };
    
        // Обновлення крос-курсу та результату обміну
        const updateExchangeRateAndResult = () => {
            const fromCurrency = fromSelect.value;
            const toCurrency = toSelect.value;
            const amount = parseFloat(amountInput.value);
    
            // Симулюємо обчислення крос-курсу та результату обміну
            const exchangeRate = Math.random() * (2 - 0.5) + 0.5; 
            const result = amount * exchangeRate;
    
            // Оновлення крос-курсу та результату
            rateDiv.textContent = `Крос-курс ${fromCurrency} / ${toCurrency}: ${exchangeRate.toFixed(4)}`;
            resultDiv.textContent = `Результат: ${result.toFixed(2)} ${toCurrency}`;
        };
    
        // Заповнення варіантів вибору валют
        fillCurrencyOptions();
    
        // Перший раз оновлюємо крос-курс та результат
        updateExchangeRateAndResult();
    
        // Назначення обробників подій
        fromSelect.addEventListener('change', updateExchangeRateAndResult);
        toSelect.addEventListener('change', updateExchangeRateAndResult);
        amountInput.addEventListener('input', updateExchangeRateAndResult);
    });
}

// countries and cities

{
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json')
    .then(res => res.json())
    .then(data => {
        // Отримали дані, тепер обробляємо їх
        console.log(data); // Переглянемо структуру даних у консолі

        const countriesSelect = document.getElementById('countries');
        const citiesSelect = document.getElementById('cities');

        // Функція для заповнення варіантів вибору країн
        const fillCountryOptions = () => {
            // Очистити варіанти вибору країн
            countriesSelect.innerHTML = '';

            // Додати кожну країну як варіант вибору
            for (const country in data) {
                const option = document.createElement('option');
                option.innerText = country;
                option.value = country;

                countriesSelect.appendChild(option);
            }

            // Викликаємо обробник події зміни країни вручну для оновлення списку міст
            updateCities();
        };

        // Функція для оновлення списку міст після вибору країни
        const updateCities = () => {
            const selectedCountry = countriesSelect.value;
            const cities = data[selectedCountry] || [];

            // Очищаємо варіанти вибору міст
            citiesSelect.innerHTML = '';

            // Додаємо кожне місто як варіант вибору
            cities.forEach(city => {
                const option = document.createElement('option');
                option.innerText = city;
                option.value = city;

                citiesSelect.appendChild(option);
            });
        };

        // Заповнюємо варіанти вибору країн
        fillCountryOptions();

        // Назначаємо обробник події зміни країни
        countriesSelect.addEventListener('change', updateCities);
    })
    .catch(error => console.log('Сталася помилка при завантаженні даних:', error));

}