// Confirms
{
  const arr = [
    confirm("do you like dog?"),
    confirm("do you like car?"),
    confirm("do you run every day?"),
  ];
}
// Prompts
{
  const arr = [];
  arr[0] = prompt("enter your idea");
  arr[1] = prompt("how much is this worth?");
  arr[2] = prompt("why is it worth investing in?");
  console.log(arr);
}
// Item access
{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const index = +prompt("Введіть індекс до 10");
  alert(`ваше значення в масиві : ${arr[index]}`);
}
// Item change
{
  const arr = [];
  const index = +prompt("Введіть значення індексу для масива");
  arr[index] = prompt("Введіть значення в масив");
  console.log(arr);
}
// Multiply table
{
  const arr = [
    [1, 2, 3, 4, 5],
    [2, 4, 6, 8, 10],
    [3, 6, 9, 12, 15],
    [4, 8, 12, 16, 20],
    [5, 10, 15, 20, 25],
  ];
  console.log(arr);
}
// Multiply table slice
{
  const arr = [
    [0, 1, 2, 3, 4],
    [1, 1, 2, 3, 4],
    [2, 2, 4, 6, 8],
    [3, 3, 6, 9, 12],
    [4, 4, 8, 12, 16],
  ];
  const result = arr.slice(1);
  console.log(result);
}
// IndexOf Word
{
  const arr = prompt("Введіть речення з кількох слів").split(" ");
  const findWord = prompt("Введіть слово, яке треба знайти");
  const result = arr.includes(findWord);
  result == false
    ? alert("такого слова не має в реченні")
    : alert(` ваше слово має номер = ${result + 2}`);
}
// Reverse
{
  let array = [];
  for (let i = 0; i < 5; i++) {
    let userInput = prompt("Введіть елемент масиву:");
    array.push(userInput);
  }
  console.log(array);
  let reverseArray = [];
  while (array.length > 0) {
    reverseArray.push(array.pop());
  }
  console.log(reverseArray);
}
// Reverse 2
{
  let array = [];
  for (let i = 0; i < 5; i++) {
    let userInput = prompt("Введіть елемент масиву:");
    array.unshift(userInput);
  }
  console.log(array);
  let reverseArray = [];
  while (array.length > 0) {
    reverseArray.unshift(array.shift());
  }
  console.log(reverseArray);
}
// Copy
{
  const arr = [
    [0, 1, 2, 3, 4],
    [1, 1, 2, 3, 4],
    [2, 2, 4, 6, 8],
    [3, 3, 6, 9, 12],
    [4, 4, 8, 12, 16],
  ];
  const result = arr.slice(1);
  const copyArray = [...result];
  copyArray[1][1] = 76;
  copyArray[6] = 100;
  console.log(result);
  console.log(copyArray);
}
// Deep Copy
{
  const arr = [
    [0, 1, 2, 3, 4],
    [1, 1, 2, 3, 4],
    [2, 2, 4, 6, 8],
    [3, 3, 6, 9, 12],
    [4, 4, 8, 12, 16],
  ];
  const copyArray = arr.map((subarray) => subarray.slice());
  copyArray[1][1] = 76;
  copyArray[6] = 100;
  console.log(arr);
  console.log(copyArray);
}
// Array Equals
{
  let arr = [1, 2, 3, 4, 5];
  let arr2 = arr;
  console.log(arr === arr2);
} // Flat
{
  let arr = [
    [0, 1, 2, 3, 4],
    [1, 1, 2, 3, 4],
    [2, 2, 4, 6, 8],
    [3, 3, 6, 9, 12],
    [4, 4, 8, 12, 16],
  ];
  let arr2 = arr.reduce(
    (accumulator, currentValue) => [...accumulator, ...currentValue],
    []
  );
  console.log(arr);
  console.log(arr2);
  console.log(arr2.length);
}
// Destruct
{
  const arr = prompt("Введіть строку");
  const [firstLetter, , , , fifthLetter, , , , ninthLetter] = arr;
  console.log(`Перша літера: ${firstLetter}`);
  console.log(`П'ята літера: ${fifthLetter}`);
  console.log(`Дев'ята літера: ${ninthLetter}`);
}
// Destruct default
{
  const arr = prompt("Введіть строку");
  const [secondLetter = "!", , fourthLetter = "!", fifthLetter = "!"] = arr;
  console.log("Друга літера:", secondLetter);
  console.log("Четверта літера:", fourthLetter);
  console.log("П'ята літера:", fifthLetter);
}
// Multiply table rest
{
  let arr = [
    [0, 1, 2, 3, 4],
    [1, 1, 2, 3, 4],
    [2, 2, 4, 6, 8],
    [3, 3, 6, 9, 12],
    [4, 4, 8, 12, 16],
  ];
  const [
    [, ...firstRest],
    [, , ...secondRest],
    [, , , ...thirdRest],
    [, , , , ...fourthRest],
  ] = arr;
  const combinedArray = [
    ...firstRest,
    ...secondRest,
    ...thirdRest,
    ...fourthRest,
  ];
  const nonZeroArray = combinedArray.filter((element) => element !== 0);
  console.log(nonZeroArray);
}
// For Alert
{
  const arr = ["John", "Paul", "George", "Ringo"];
  for (item of arr) {
    alert(item);
  }
}
// For Select Option
{
  const currencies = ["USD", "EUR", "GBP", "UAH"];
  let str = "<select>";
  for (const currency of currencies) {
    str += `<option value="${currency}">${currency}</option>`;
  }
  str += "</select>";
  document.write(str);
}
// For Table Horizontal
{
  const names = ["John", "Paul", "George", "Ringo"];
  let str = "<table>";
  for (const name of names) {
    str += `<td>${name}</td>`;
  }
  str += "</table>";
  document.write(str);
}
// For Table Vertical
{
  const names = ["John", "Paul", "George", "Ringo"];
  let str = "<table>";
  for (const name of names) {
    str += `<tr><td>${name}</td></tr>`;
  }
  str += "</table>";
  document.write(str);
}
// For Table Letters
{
  const currencies = ["USD", "EUR", "GBP", "UAH"];
  let str = "<table>";
  for (const currency of currencies) {
    //цикл створює рядки
    str += "<tr>";
    console.log(currency);
    for (const letter of currency) {
      //цикл створює осередки в одному рядку
      str += "<td>" + letter + "</td>";
      console.log(letter);
    }
    str += "</tr>";
  }
  str += "</table>";
  document.write(str); //document.write відобразить ваш HTML на сторінці
}
// For Multiply Table
{
  let arr = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16],
  ];
  document.write("<table>");
  for (let i = 0; i < arr.length; i++) {
    const rowColor = i % 2 === 0 ? "grey" : "lightgrey";
    document.write(`<tr style="background-color: ${rowColor};">`);
    for (const value of arr[i]) {
      document.write(`<td>${value}</td>`);
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
// Function Capitalize
{
  const capitalize = (str) => {
    let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return result;
  };
  console.log(capitalize("cANBerRa")); //Canberra
}
// Map Capitalize
{
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  let str = prompt("Введіть рядок");
  let arr = str.split(" ");
  let UpperWords = arr.map((word) => capitalize(word));
  let result = UpperWords.join(" ");
  console.log(result);
}
// Filter Lexics
{
  let str = prompt("Введіть рядок");
  let word = prompt("Введіть небажане слово");
  let arr = str.split(" ");
  let arrSort = arr.filter((item) => !word.includes(item));
  let result = arrSort.join(" ");
  console.log(result);
}
// Beep Lexics
{
  const bannedWords = ["bad", "words", "here"];
  let userInput = prompt("Введіть рядок:");
  let words = userInput.split(" ");
  let result = words.map((word) =>
    bannedWords.includes(word) ? "BEEP" : word
  );
  let finalResult = result.join(" ");
  console.log(finalResult);
}
// Reduce HTML
{
  const currencies = ["USD", "EUR", "GBP", "UAH"];
  let str = "<select>";
  str += currencies.reduce((a, b) => a + `<option>${b}</option>`, "");
  str += "</select>";
  document.write(str);
}
// For Brackets Hell Check
{
  const line = prompt();
  const bracketsStack = [];
  let i = 0;
  let errorIndex = -1;

  for (const character of line) {
    if (character === "[" || character === "(" || character === "{") {
      bracketsStack.push({ character, index: i });
    } else if (character === "]" || character === ")" || character === "}") {
      const lastBracket = bracketsStack.pop();
      if (
        !lastBracket ||
        (character === "]" && lastBracket.character !== "[") ||
        (character === ")" && lastBracket.character !== "(") ||
        (character === "}" && lastBracket.character !== "{")
      ) {
        errorIndex = i;
        break;
      }
    }
    i++;
  }

  if (bracketsStack.length === 0 && errorIndex === -1) {
    console.log("Рядок містить правильно збалансовані дужки!");
  } else {
    console.log(`Помилка на позиції ${errorIndex} у рядку!`);
  }
}
