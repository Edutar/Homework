
    const task = prompt("Введіть назву завдання");
    if(task === "odd"){
    const num = +prompt('Введіть число');
    if(!isNaN(num)){
        if(num%2 == 0){
            alert("Число парне");
        }else{
            alert("Число не парне");
        }
    }else{
        alert('це не число');
    }
    }
    if(task === "lexics"){
    const str = prompt("Введіть рядок");
   console.log(str.indexOf("23")); //повертає 1 - позицію підрядка "23" до "123"
   console.log(str.indexOf("ef")); // 4
   console.log(str.indexOf("some bad word")); // -1 - не знайдено
    }
    if(task === "Boolean"){
         const boolean = confirm('Чи подобається тобі програмуваня?');
    }
    if(task === "if1"){
    const boolean = confirm('Ви чоловік?');
    (boolean === true) ? alert("Ви чоловік"):alert("Ви жінка");
    }
    if(task === "sizes"){
    const size = +prompt("Введіть розмір вашого одягу");
    (size < 6 ) ? alert("У вас дитячий розмір"):
    (size >= 6 && size < 8 ) ? alert("Ваш розімр: S"):
    (size >=8 && size <10 ) ? alert("Ваш розімр: M"):
    (size >=10 && size < 14 ) ? alert("Ваш розімр: L"):
    (size >=14 && size < 16 ) ? alert("Ваш розімр: XL"):
     alert("Ваш розімр: XXL");
    }
    if(task === "Ternary"){
    const boolean = confirm('Ви чоловік?');
    (boolean === true) ? alert("Ви чоловік"):alert("Ви жінка");
    }
    if(task === "Training"){
        // bool type cast
    !!2 //true
    !!0 //false
    !!1 //true
    // or
    2 || 1 //2
    2 || 0 //2
    //and
    2 && 1 //1
    1 && 2//2
    0 && 2//0
    // or and and difference
    0 || 1 || 2 //1
    0 && 1 && 2 //0
    2 || 1 || 0 //0
    2 && 1 && 0 //0
    confirm('left') || confirm('right') //left 
    confirm('left') && confirm('right') //right
    //null, undefined, so on
    null || 2 // 2
    undefined && 1 //undefined
    alert("Hello") && confirm('Are you sexy?'); //спочатку виведе аlert("Hello"), а потім другий варіант
    alert("Hello") || confirm('Are you drunk?'); //виведе тільки alert("Hello")
    //brackets and complex expressions
    (undefined || 2) && (3 || 0) .toExponential //2
    (2 && 1) || (null && 0) //1
    (2 > 1) && "greater" //"greater"
    (2 < 1) && null //false
    null && (2 < 1) // null
    // ternary operator
    1 ? "one" : "not one"//"one"
    0 ? "zero" : "not zero"//"not zero"
    "0" ? "\"zero\"" : "not `zero`" //"\"zero\"" 
    parseInt("0") ? 'true' : 'false' //'false' 
    ("" || 2) && (3 || "3.5") || (4 && 5)  //3
    (-1 + 1) && "zero" // 0
    "-1" + 1 && "oups" // "oups"
    (typeof null === 'object') ? "null is object" : "null is null" //"null is object"
    // ternary && ||
    Math.random() < 0.5 && 'less' || 'less'  //'less' ||'less' 50/50
    (a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a //'less' ||'less' 50/50
    //in for array
    [2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found' //prime
    }
    if(task === "or1"){
        const age = prompt('Введіть ваш вік') || alert("Помилка");
    }
    if(task === "or this days"){
        const question = confirm("Шопінг?") || alert("Ти - бяка");
    }
    if(task === "if this days"){
    const question = confirm("Шопінг?");
    (question || false) ? alert("Круто!") : alert("Ти - бяка");
    }
    if(task === "or2"){
    const firstName = prompt("Будь ласка, введіть ваше ім'я:") || "Іван";
    const lastName = prompt("Будь ласка, введіть ваше прізвище:") || "Іванов";
    const middleName = prompt("Будь ласка, введіть ваше по батькові:") || "Іванович";
    }
    if(task === "if2"){
    let firstName = prompt("Будь ласка, введіть ваше ім'я:");
    let lastName = prompt("Будь ласка, введіть ваше прізвище:");
    let middleName = prompt("Будь ласка, введіть ваше по батькові:");
    if (!firstName) {
        firstName = 'Іван';
    }
    if (!lastName) {
        lastName = 'Іванов';
    }
    if (!middleName) {
        middleName = 'Іванович';
    }
    alert(firstName + ' ' + lastName + ' ' + middleName);
    }
    if(task === "Login and password"){
    const login = prompt("Введіть логін");
    var password;
    (login === "admin") ? password = prompt("Введіть пароль")  : alert("Логін не вірний");
    (password === "qwerty") ? alert("Вітаю!") : alert("Пароль невірний");
    }
    if(task === "Currency exchange"){
        const currency = prompt("Будь ласка, введіть валюту (наприклад, USD, EUR):").toUpperCase();
        const isBuying = confirm("Ви хочете купити валюту?");
        let rate;
        if (currency === 'USD') {
            rate = isBuying ? 27.5 : 27;
        } else if (currency === 'EUR') {
            rate = isBuying ? 33 : 32.5; 
        } else {
            rate = 1;
        }
        const amount = parseFloat(prompt("Будь ласка, введіть суму для обміну:"));
        const result = isBuying ? amount / rate : amount * rate;
        alert(`Ви отримаєте ${result.toFixed(2)} грн за обмін ${amount} ${currency}.`);
    }
    if(task === "Scissors"){
    const user = prompt("Вибери: камінь, ножиці чи папір");
    const deskTop = Math.random();
    if(user === "камінь" || user === "папір" || user === "ножиці"){
        if(user === "ножиці"){
            if(deskTop > 0.8){
                alert("Переміг комп'ютер ");
            }
            else if(deskTop > 0.5){
                alert("Переміг користувач ");
            }else{
                alert("Нічия ");
            }  
        }
        else if(user === "папір"){
            if(deskTop < 0.31){
                alert("Переміг комп'ютер ");
            }
            else if(deskTop > 0.8){
                alert("Переміг користувач ");
            }else{
                alert("Нічия ");
            }  
        }
        else if(user === "камінь"){
            if(deskTop > 0.3 && deskTop < 0.8 ){
                alert("Переміг комп'ютер ");
            }
            else if(deskTop < 0.3){
                alert("Переміг користувач ");
            }else{
                alert("Нічия ");
            }  
        }
    }else{
        alert("Введено неправильне значення");
    }
    }
    if(task === "Завдання на чорний пояс"){
    const user = prompt("Виберіть: камінь, ножиці чи папір?").toLowerCase();
    const computerNumber = Math.floor(Math.random() * 3); 
    const computer = ['камінь', 'ножиці', 'папір'][computerNumber];
    const winner = 
        (user === 'камінь' && computer === 'ножиці') ||
        (user === 'ножиці' && computer === 'папір') ||
        (user === 'папір' && computer=== 'камінь')
        ? 'Ви'
        : (user === computer ? 'Нічия' : 'Комп\'ютер');
    alert(`Комп'ютер вибрав: ${computer}\nПереможець: ${winner}`);
    }
