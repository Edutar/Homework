// task1
{
    var a = 5;  
    var b, c;
    b = (a * 5);  
    b = (c = (b/2)); // тоді код не змінить своєї поведінки
    //спочатку присвоюється Б рішення а*5, а потім вже С присвоюється рішення
    // Б/2, після вже Б присвоюється нове рішення як і С
}
// task2
{
    let age = +prompt("Введіть ваш вік");
    const currentDate = new Date();
    let year =  currentDate.getFullYear();
    let yearBirth = year - age;
    alert(yearBirth);
}
// task3
{
    let temperatureC = +prompt("Назовіть градуси в цельсіях");
    alert(temperatureC + 32);   
}
// task4
{
    let num1 = +prompt("Перше число яке ділиться");
    let num2 = +prompt("Друге число на яке ділять");
    alert(Math.floor(num1/num2));
}
// task5
{
    const rate = 39;
    let hrn = +prompt("Введіть кількість гривні");
    alert("Кількість у долларах: " + (hrn/rate).toFixed(2));
}
// task6
{
    let red = parseInt(prompt("Введіть значення червоного кольору"), 10).toString(16);
    let green = parseInt(prompt("Введіть значення зеленого кольору"), 10).toString(16);
    let blue = parseInt(prompt("Введіть значення синього кольору"), 10).toString(16);
    alert("Результат: #" + red + green + blue);
}
// task7
{
    const floors = parseInt(prompt("Введіть кількість поверхів у будинку:"));
    const apartmentsPerFloor = parseInt(prompt("Введіть кількість квартир на поверхі:"));
    const apartmentNumber = parseInt(prompt("Введіть номер квартири:"));
    const entrance = Math.ceil(apartmentNumber / (floors * apartmentsPerFloor));
    const floor = Math.ceil((apartmentNumber % (floors * apartmentsPerFloor)) / apartmentsPerFloor);
    alert(`Під'їзд: ${entrance}, Поверх: ${floor}`);
}