// while confirm
{
  let question = false;
  while (question === false) {
    question = confirm("Вимкни мене натиснувши відміна");
  }
}
// array fill
{
  let arr = [];
  let a = 1;
  while (a != null) {
    a = prompt("Введіть значення для масиву");
    if (a != null && a != "") {
      arr.push(a);
    } else {
      break;
    }
  }
  console.log(arr);
}
// array fill nopush
{
  let arr = [];
  let a = 1;
  let i = 0;
  while (a != null) {
    a = prompt("Введіть значення для масиву");
    if (a != null && a != "") {
      arr[i] = a;
      i++;
    } else {
      break;
    }
  }
  console.log(arr);
}
// infinite probability
{
  let i = 0;
  let a = 0;
  while (true) {
    a = Math.random();
    if (a < 0.9) {
      i++;
    } else {
      break;
    }
  }
  console.log(i);
}
// empty loop
{
  while (true) {
    var a = prompt("Введіть ваше ім'я");
    if (a == null) {
      break;
    }
  }
}
// progression sum
{
  const N = +prompt("Введіть кілдькість елементів в арифметичній прогресії");
  let a = 1;
  let sum = 0;
  for (let i = 0; i <= N; i++) {
    sum += a;
    a += 3;
  }
  console.log(sum);
}
// chess one line
{
  const length = +prompt("Введіть довжину рядка");
  let str = "";
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      str += "#";
    } else {
      str += ".";
    }
  }
  console.log(str);
}
// numbers
{
  let result = "";
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      result += j;
    }
    result += "\n";
  }
  console.log(result);
}
// chess
{
  let result = "";
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if ((i + j) % 2 === 0) {
        result += "#";
      } else {
        result += ".";
      }
    }
    result += "\n";
  }
  console.log(result);
}
// cubes
{
  let arr = [];
  const N = +prompt("Введіть кількість елементів");
  for (let i = 0; i <= N; i++) {
    arr.push(i ** 3);
  }
  console.log(arr);
}
// multiply table
{
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr[i] = [];
    for (let j = 0; j < 10; j++) {
      arr[i][j] = i * j;
    }
  }
  console.log(arr);
}
// read array of objects
{
  function arrayOfObjects() {
    let arr = [];
    while (true) {
      let object = {};
      let input = true;
      while (input) {
        let key = prompt("Введіть назву ключа для об'єкта:");
        if (key === null) {
          input = false;
          break;
        }
        let value = prompt("Введіть значення для ключа '" + key + "':");
        object[key] = value;
        input = confirm(
          "Бажаєте додати ще один ключ-значення до поточного об'єкта?"
        );
      }
      arr.push(object);
      if (!confirm("Бажаєте додати ще один об'єкт до масиву?")) {
        break;
      }
    }
    return arr;
  }
  let result = arrayOfObjects();
  console.log(result);
}
// Ромбік
{
  const size = +prompt("Введіть не парне число - розмір ромба");
  let diamond = "";
  let half = Math.floor(size / 2);
  var j = 1;
  var k = half;
  if (size % 2 !== 0) {
    for (let i = 0; i < size; i++) {
      if (i < half) {
        let point = ".".repeat(k);
        let grid = "#".repeat(j);
        k -= 1;
        j += 2;
        diamond += point + grid + point;
        diamond += "\n";
      } else if (i >= half) {
        let point = ".".repeat(k);
        let grid = "#".repeat(j);
        diamond += point + grid + point;
        k += 1;
        j -= 2;
        diamond += "\n";
      }
    }
    console.log(diamond);
  } else {
    alert("Ви ввели парне число, таким чином ромб не побудувати");
  }
}
// DOM: multiply table
{
  const table = document.createElement("table");
  for (let i = 0; i <= 10; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j <= 10; j++) {
      const cell = document.createElement("td");
      cell.innerText = i * j;
      cell.classList.add("cell");
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  document.getElementById("multiplication-table").appendChild(table);
}
// DOM: highlight cell
{
  const table = document.createElement("table");
  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    for (let j = 1; j <= 10; j++) {
      const cell = document.createElement("td");
      cell.innerText = i * j;
      cell.classList.add("cell");
      cell.addEventListener("mouseover", function () {
        this.style.backgroundColor = "yellow";
      });
      cell.addEventListener("mouseout", function () {
        this.style.backgroundColor = "";
      });
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  document.getElementById("multiplication-table").appendChild(table);
}
// DOM: Highlight cross
{
  const table = document.createElement("table");
  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    for (let j = 1; j <= 10; j++) {
      const cell = document.createElement("td");
      cell.innerText = i * j;
      cell.classList.add("cell");
      cell.addEventListener("mouseover", function () {
        const row = this.parentElement;
        row.style.backgroundColor = "lightblue";
        const columnNumber = this.cellIndex;
        const tableRows = Array.from(row.parentElement.children);
        tableRows.forEach((tableRow) => {
          const cells = tableRow.children;
          cells[columnNumber].style.backgroundColor = "lightblue";
        });
        this.style.backgroundColor = "yellow";
      });
      cell.addEventListener("mouseout", function () {
        const row = this.parentElement;
        row.style.backgroundColor = "";
        const tableRows = Array.from(row.parentElement.children);
        tableRows.forEach((tableRow) => {
          const cells = tableRow.children;
          cells[this.cellIndex].style.backgroundColor = "";
        });

        this.style.backgroundColor = "";
      });
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  document.getElementById("multiplication-table").appendChild(table);
}
