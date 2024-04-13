// Temperature

function temperature(celsius = 1) {
  const result = (celsius * 9) / 5 + 32;
  return result;
}
temperature();

// RGB

function numberToRGB(r, g, b) {
  const addLeadingZero = (num) => (num < 16 ? "0" : "") + num.toString(16);
  const red = addLeadingZero(r);
  const green = addLeadingZero(g);
  const blue = addLeadingZero(b);
  return `#${red}${green}${blue}`;
}
console.log(numberToRGB(255, 0, 128));

// Flats

function numberToFlats(flatNumber, flatsPerFloor, floorsPerEntrance) {
  const flatsPerEntrance = flatsPerFloor * floorsPerEntrance;

  const entrance = Math.ceil(flatNumber / flatsPerEntrance);
  const flatWithinEntrance = flatNumber % flatsPerEntrance || flatsPerEntrance;
  const floorWithinEntrance = Math.ceil(flatWithinEntrance / flatsPerFloor);
  const floor = (entrance - 1) * floorsPerEntrance + floorWithinEntrance;

  return {
    entrance: entrance,
    floor: floor,
  };
}
let flatNumber;
let flatsPerFloor;
let floorsPerEntrance;
const flatDetails = numberToFlats(
  (flatNumber = +prompt("Введіть номер квартири")),
  (flatsPerFloor = +prompt("Введіть кількість квартир на поверсі")),
  (floorsPerEntrance = +prompt("Введіть кількість поверхів в під'їзді"))
);
console.log(flatDetails);

// Credentials

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function allName() {
  const name = prompt("Введіть ваше ім'я:") || "Іван";
  const surname = prompt("Введіть ваше прізвище:") || "Іванов";
  const fatherName = prompt("Введіть ваше по батькові:") || "Іванович";
  const fullName =
    capitalize(name) + " " + capitalize(surname) + " " + capitalize(fatherName);

  return {
    name: name,
    surname: surname,
    fatherName: fatherName,
    fullName: fullName,
  };
}
const userCredentials = allName();
console.log(userCredentials);

// New line

const promptOrDefault = (message, defaultValue) =>
  prompt(message) || defaultValue;
const input1 = promptOrDefault("Введіть текст:", "Значення за замовчуванням");
console.log(input1);

// Login And Password

const admin = function () {
  const login = prompt("Введіть логін");
  const password = prompt("Введіть пароль");
  const correctLogin = "admin";
  const correctPassword = "qwerty";
  if (login === correctLogin && password === correctPassword) {
    alert("Вітаю!");
  } else {
    alert("Дані введено невірно!");
  }
};
admin();

// For Table

function createMultiplyTable(array) {
  let table = "<table>";
  array.forEach((row) => {
    table += "<tr>";
    row.forEach((cell) => {
      table += "<td>" + cell + "</td>";
    });
    table += "</tr>";
  });
  table += "</table>";
  return table;
}
const Array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const table = createMultiplyTable(Array);
document.write(table);

// Filter Lexics

function filterLexics(inputString, forbiddenWords) {
  const words = inputString.split(/\s*,\s*|\s+/);
  console.log(words);
  const filteredWords = words.filter(
    (word) => forbiddenWords.indexOf(word) === -1
  );
  return filteredWords.join(" ");
}
const input =
  prompt("Введіть речення для перевірки") ||
  "Це речення містить слова бляха, муха, пляшка та шабля";
const forbiddenWords = ["бляха", "муха", "пляшка", "шабля"];
const filteredString = filterLexics(input, forbiddenWords);
alert(filteredString);

// Currency Table

async function fetchData() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await response.json();
    const currencies = Object.keys(data.rates);
    const rates = currencies.map((currency) => ({
      currency: currency,
      rates: currencies.map((toCurrency) => {
        const crossRate = (1 / data.rates[currency]) * data.rates[toCurrency];
        return crossRate.toFixed(2);
      }),
    }));
    return rates;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Функція для створення таблиці на основі отриманих даних
function createTable(data) {
  const table = document.createElement("table");
  const headerRow = table.insertRow();
  const headerHTML = ["<tr><th>Currency</th>"];
  data.forEach((rowData) => {
    headerHTML.push(`<th>${rowData.currency}</th>`);
  });
  headerHTML.push("</tr>");
  table.innerHTML = headerHTML.join("");

  data.forEach((rowData) => {
    const row = table.insertRow();
    let rowHTML = `<td>${rowData.currency}</td>`;
    rowData.rates.forEach((rate) => {
      rowHTML += `<td>${rate}</td>`;
    });
    row.innerHTML = rowHTML;
  });

  document.body.appendChild(table);
}

// Виклик функцій для отримання даних та створення таблиці
fetchData().then((data) => {
  createTable(data);
});

// Form

function form(obj) {
  let str = "<form>";
  for (let key in car) {
    str += `<label> ${key}`;
    if (typeof car[key] === "string") {
      str += `<input type="text" value = ${car[key]}>`;
    } else if (typeof car[key] === "number") {
      str += `<input type="number" value = ${car[key]}>`;
    } else if (typeof car[key] === "boolean") {
      if (car[key] === false) {
        str += `<input type="checkbox" >`;
      } else {
        str += `<input type="checkbox" checked >`;
      }
    }
    str += "</label><br>";
  }
  str += "</form>";
  document.write(str);
}
const car = {
  Name: "chevrolet chevelle malibu",
  Cylinders: 8,
  Displacement: 307,
  Horsepower: 130,
  Weight_in_lbs: 3504,
  Origin: "USA",
  in_production: false,
};
form(car);

// Array of objects sort

function sort(array, field, ascending = true) {
  if (!field) {
    console.error("Field parameter is required");
    return;
  }

  const sortedArray = [...array]; // Створюємо копію масиву, щоб не змінювати оригінальний
  sortedArray.sort((a, b) => {
    const valueA = a[field];
    const valueB = b[field];

    if (typeof valueA === "string" && typeof valueB === "string") {
      if (ascending) {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    } else if (typeof valueA === "number" && typeof valueB === "number") {
      if (ascending) {
        return valueA - valueB;
      } else {
        return valueB - valueA;
      }
    } else {
      console.error("Invalid field type");
      return 0;
    }
  });

  console.log(sortedArray); // Виведення відсортованого масиву
}

var persons = [
  { name: "Іван", age: 17 },
  { name: "Марія", age: 35 },
  { name: "Олексій", age: 73 },
  { name: "Яків", age: 12 },
];

sort(persons, "age");
sort(persons, "name", true);

// Table

function sort(array, field, ascending = true) {
  if (!field) {
    console.error("Field parameter is required");
    return;
  }
  const sortedArray = [...array]; // Створюємо копію масиву, щоб не змінювати оригінальний
  sortedArray.sort((a, b) => {
    if (!a.hasOwnProperty(field) || !b.hasOwnProperty(field)) {
      return 0;
    }

    const valueA = a[field];
    const valueB = b[field];

    if (typeof valueA === "string" && typeof valueB === "string") {
      if (ascending) {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    } else if (typeof valueA === "number" && typeof valueB === "number") {
      if (ascending) {
        return valueA - valueB;
      } else {
        return valueB - valueA;
      }
    } else {
      console.error("Invalid field type");
      return 0;
    }
  });

  return sortedArray;
}

function displayTable(data) {
  let str = "<table>";

  // Знайдемо всі можливі ключі
  const allKeys = new Set();
  for (const item of data) {
    for (const key in item) {
      allKeys.add(key);
    }
  }
  const uniqueKeys = [...allKeys];

  // Виведемо заголовок таблиці
  str += "<tr>";
  for (const key of uniqueKeys) {
    str += `<td>${key}</td>`;
  }
  str += "</tr>";

  // Виведемо дані
  for (const item of data) {
    str += "<tr>";
    for (const key of uniqueKeys) {
      const value = item.hasOwnProperty(key) ? item[key] : "default";
      str += `<td>${value}</td>`;
    }
    str += "</tr>";
  }

  str += "</table>";
  document.write(str);
}
function Table(array, field, order = "ascending") {
  const sortedArray = sort(array, field, order === "ascending");
  displayTable(sortedArray);
}

// Приклад використання
const persons = [
  {
    Name: "chevrolet chevelle malibu",
    Cylinders: 8,
    Displacement: 307,
    Horsepower: 130,
    Weight_in_lbs: 3504,
    Origin: "USA",
  },
  {
    Name: "buick skylark 320",
    Miles_per_Gallon: 15,
    Cylinders: 8,
    Displacement: 350,
    Horsepower: 165,
    Weight_in_lbs: 3693,
    Acceleration: 11.5,
    Year: "1970-01-01",
  },
  {
    Miles_per_Gallon: 18,
    Cylinders: 8,
    Displacement: 318,
    Horsepower: 150,
    Weight_in_lbs: 3436,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "amc rebel sst",
    Miles_per_Gallon: 16,
    Cylinders: 8,
    Displacement: 304,
    Horsepower: 150,
    Year: "1970-01-01",
    Origin: "USA",
  },
];

Table(persons, "Name", "ascending");

// Divide

function calculateValues(input1, input2) {
  const sum = input1 + input2;
  const difference = input1 - input2;
  const product = input1 * input2;
  let division = "Неможливо обчислити ділення: ділення на нуль";
  if (input2 !== 0) {
    division = input1 / input2;
  }

  return {
    sum: sum,
    difference: difference,
    product: product,
    division: division,
  };
}

// Приклад виклику функції з вхідними даними
const inputData1 = 10;
const inputData2 = 5;
const result = calculateValues(inputData1, inputData2);
console.log(result);

// Calc Live
