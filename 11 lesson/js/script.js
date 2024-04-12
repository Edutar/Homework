// task1
{
let kilometres = +prompt("Яку кількість кілометрів ти готовий бігати щодня?");
let wishtKilometres = +prompt("Яку кількість усіх кілометрів ти хочеш пробігти за місяць?");
if(wishtKilometres <= kilometres){
    alert('Ти зможеш пробігти усю заплановану дистанцію');
}else{
    var difference = wishtKilometres - kilometres;
    alert("Краще зменши сумарну кількість кілометрів на " + difference + "км" );
}
}
// task2
{
    const credentials = {
        login: 'admin',
        password: 'qwerty'
    };
    
    const form = document.getElementById('loginForm');
    const resultDiv = document.getElementById('result');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const enteredLogin = document.getElementById('login').value;
        const enteredPassword = document.getElementById('password').value;
    
        if (enteredLogin === credentials.login && enteredPassword === credentials.password) {
            resultDiv.textContent = 'Welcome, ' + enteredLogin + '!';
            resultDiv.className = 'success';
        } else {
            resultDiv.textContent = 'Invalid login or password.';
            resultDiv.className = 'error';
        }
    });
}