// Arrow to Functions
{
  fn1 = function () {
    let question = true;
    while (question === true) {
      question = confirm("Вимкни мене натиснувши відміна");
    }
  };
  fn2 = function () {
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
  };
  fn3 = function () {
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
  };
  fn4 = function () {
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
  };
  fn5 = function () {
    while (true) {
      var a = prompt("Введіть ваше ім'я");
      if (a == null) {
        break;
      }
    }
  };
}
// createPerson
{
  function createPerson(name, surname) {
    return {
      name: name,
      surname: surname,
      getFullName: function () {
        return `${this.name} ${this.fatherName ? this.fatherName + " " : ""}${
          this.surname
        }`.trim();
      },
    };
  }

  const a = createPerson("Вася", "Пупкін");
  const b = createPerson("Ганна", "Іванова");
  const c = createPerson("Єлизавета", "Петрова");

  console.log(a.getFullName()); // Вася Пупкін
  a.fatherName = "Іванович";
  console.log(a.getFullName()); // Вася Іванович Пупкін
  console.log(b.getFullName()); // Ганна Іванова
  console.log(c.getFullName());
}
// createPersonClosure
{
  function createPersonClosure(name, surname) {
    let fullName = `${surname} ${name}`;
    let fatherName = "";
    let age = 0;
    function setName(newName) {
      if (
        typeof newName === "string" &&
        /^[A-ZА-ЯЁ][a-zа-яё]*$/.test(newName)
      ) {
        name = newName;
        fullName = `${surname} ${name}`;
      }
      return name;
    }
    function setSurname(newSurname) {
      if (
        typeof newSurname === "string" &&
        /^[A-ZА-ЯЁ][a-zа-яё]*$/.test(newSurname)
      ) {
        surname = newSurname;
        fullName = `${surname} ${name}`;
      }
      return surname;
    }
    function setFatherName(newFatherName) {
      if (
        typeof newFatherName === "string" &&
        /^[A-ZА-ЯЁ][a-zа-яё]*$/.test(newFatherName)
      ) {
        fatherName = newFatherName;
      }
      return fatherName;
    }
    function setAge(newAge) {
      if (typeof newAge === "number" && newAge >= 0 && newAge <= 100) {
        age = newAge;
      }
      return age;
    }
    function setFullName(newFullName) {
      const parts = newFullName.split(" ");
      if (parts.length === 3) {
        const [newSurname, newName, newFatherName] = parts;
        setName(newName);
        setSurname(newSurname);
        setFatherName(newFatherName);
      }
      return fullName;
    }
    function getName() {
      return name;
    }
    function getSurname() {
      return surname;
    }
    function getFatherName() {
      return fatherName;
    }
    function getAge() {
      return age;
    }
    function getFullName() {
      return fullName;
    }
    return {
      setName,
      setSurname,
      setFatherName,
      setAge,
      setFullName,
      getName,
      getSurname,
      getFatherName,
      getAge,
      getFullName,
    };
  }
  const a = createPersonClosure("Вася", "Пупкін");
  const b = createPersonClosure("Ганна", "Іванова");
  console.log(a.getName());
  a.setAge(15);
  console.log(a.getAge());
  a.setAge(150);
  console.log(a.getAge());
  b.setFullName("Петрова Ганна Миколаївна");
  console.log(b.getFatherName());
}
// createPersonClosureDestruct\
{
  function createPersonClosureDestruct({
    name = "",
    surname = "",
    fatherName = "",
    age = 0,
  } = {}) {
    let fullName = `${surname} ${name}`;
    function setName(newName) {
      if (
        typeof newName === "string" &&
        /^[A-ZА-ЯЁ][a-zа-яё]*$/.test(newName)
      ) {
        name = newName;
        fullName = `${surname} ${name}`;
      }
      return name;
    }
    function setSurname(newSurname) {
      if (
        typeof newSurname === "string" &&
        /^[A-ZА-ЯЁ][a-zа-яё]*$/.test(newSurname)
      ) {
        surname = newSurname;
        fullName = `${surname} ${name}`;
      }
      return surname;
    }
    function setFatherName(newFatherName) {
      if (
        typeof newFatherName === "string" &&
        /^[A-ZА-ЯЁ][a-zа-яё]*$/.test(newFatherName)
      ) {
        fatherName = newFatherName;
      }
      return fatherName;
    }
    function setAge(newAge) {
      if (typeof newAge === "number" && newAge >= 0 && newAge <= 100) {
        age = newAge;
      }
      return age;
    }
    function setFullName(newFullName) {
      const parts = newFullName.split(" ");
      if (parts.length === 3) {
        const [newSurname, newName, newFatherName] = parts;
        setName(newName);
        setSurname(newSurname);
        setFatherName(newFatherName);
      }
      return fullName;
    }
    function getName() {
      return name;
    }
    function getSurname() {
      return surname;
    }
    function getFatherName() {
      return fatherName;
    }
    function getAge() {
      return age;
    }
    function getFullName() {
      return fullName;
    }
    return {
      setName,
      setSurname,
      setFatherName,
      setAge,
      setFullName,
      getName,
      getSurname,
      getFatherName,
      getAge,
      getFullName,
    };
  }
  const a = createPersonClosureDestruct({ name: "Вася", surname: "Пупкін" });
  const b = createPersonClosureDestruct({ name: "Миколай", age: 75 });
  console.log(a.getName());
  a.setAge(15);
  console.log(a.getAge());
  a.setAge(150);
  console.log(a.getAge());
}
// isSorted
{
  function isSorted(...args) {
    if (args.length <= 1) {
      return true;
    }
    for (let i = 1; i < args.length; i++) {
      if (typeof args[i] !== "number" || args[i] <= args[i - 1]) {
        return false;
      }
    }
    return true;
  }
  console.log(isSorted(1, 2, 3, 4, 5)); // true
  console.log(isSorted(1, 3, 2, 4, 5)); // false
  console.log(isSorted(5, 4, 3, 2, 1)); // false
  console.log(isSorted(1, 2, 2, 3, 4)); // true
  console.log(isSorted(1)); // true, так як лише один елемент
  console.log(isSorted()); // true, якщо набір пустий
  console.log(isSorted(1, 2, "3")); // false, оскільки '3' - не число
}
// Test isSorted
{
  function isSorted(...args) {
    if (args.length <= 1) {
      return true;
    }
    for (let i = 1; i < args.length; i++) {
      if (typeof args[i] !== "number" || args[i] <= args[i - 1]) {
        return false;
      }
    }
    return true;
  }
  function promptForData() {
    const data = [];
    let input = prompt('Введіть число (або введіть "готово", щоб завершити):');
    while (input !== null && input.toLowerCase() !== "готово") {
      const number = parseFloat(input);
      if (!isNaN(number)) {
        data.push(number);
      } else {
        console.log("Будь ласка, введіть дійсне число.");
      }
      input = prompt('Введіть число (або введіть "готово", щоб завершити):');
    }
    return data;
  }
  function main() {
    const data = promptForData();
    const sorted = isSorted(...data);
    console.log("Чи дані впорядковані?", sorted);
  }
  main();
}
// personForm
{
  function personForm(parent, person) {
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = person.getName();
    parent.appendChild(nameInput);

    nameInput.oninput = () => {
      const newName = nameInput.value;
      person.setName(newName);
      nameInput.value = person.getName();
    };

    const surnameInput = document.createElement("input");
    surnameInput.type = "text";
    surnameInput.value = person.getSurname();
    parent.appendChild(surnameInput);

    surnameInput.oninput = () => {
      const newSurname = surnameInput.value;
      person.setSurname(newSurname);
      surnameInput.value = person.getSurname();
    };

    const fatherNameInput = document.createElement("input");
    fatherNameInput.type = "text";
    fatherNameInput.value = person.getFatherName();
    parent.appendChild(fatherNameInput);

    fatherNameInput.oninput = () => {
      const newFatherName = fatherNameInput.value;
      person.setFatherName(newFatherName);
      fatherNameInput.value = person.getFatherName();
    };

    const ageInput = document.createElement("input");
    ageInput.type = "number";
    ageInput.min = 0;
    ageInput.max = 100;
    ageInput.value = person.getAge();
    parent.appendChild(ageInput);

    ageInput.oninput = () => {
      let newAge = parseInt(ageInput.value);
      if (isNaN(newAge)) {
        newAge = 0;
      }
      person.setAge(newAge);
      ageInput.value = person.getAge();
    };

    const fullNameInput = document.createElement("input");
    fullNameInput.type = "text";
    fullNameInput.value = person.getFullName();
    parent.appendChild(fullNameInput);

    fullNameInput.oninput = () => {
      const newFullName = fullNameInput.value;
      person.setFullName(newFullName);
      fullNameInput.value = person.getFullName();
    };
  }

  function createPersonClosure(initialName, initialSurname) {
    let name = initialName;
    let surname = initialSurname;
    let fatherName = "";
    let age = 0;

    return {
      getName: function () {
        return name;
      },
      getSurname: function () {
        return surname;
      },
      getFatherName: function () {
        return fatherName;
      },
      getAge: function () {
        return age;
      },
      getFullName: function () {
        return name + " " + surname + " " + fatherName;
      },
      setName: function (newName) {
        name = newName;
      },
      setSurname: function (newSurname) {
        surname = newSurname;
      },
      setFatherName: function (newFatherName) {
        fatherName = newFatherName;
      },
      setAge: function (newAge) {
        if (newAge >= 0 && newAge <= 100) {
          age = newAge;
        }
      },
      setFullName: function (newFullName) {
        const parts = newFullName.split(" ");
        if (parts.length === 3) {
          name = parts[0];
          surname = parts[1];
          fatherName = parts[2];
        }
      },
    };
  }

  const b = createPersonClosure("Ганна", "Іванова");
  b.setAge(15);
  b.setFullName("Петрова Ганна Миколаївна");

  const parentElement = document.getElementById("parent");
  personForm(parentElement, b);
}
// getSetForm
{
  function getSetForm(parent, getSet) {
    const inputs = {};

    const updateInputs = () => {
      for (const fieldName in inputs) {
        const method =
          "get" + fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
        if (typeof getSet[method] === "function") {
          inputs[fieldName].value = getSet[method]();
        }
      }
    };

    for (const getSetName in getSet) {
      const getOrSet = getSetName.slice(0, 3);
      const fieldName =
        getSetName.charAt(3).toLowerCase() + getSetName.slice(4);
      const setKey =
        "set" + fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
      const getKey =
        "get" + fieldName.charAt(0).toUpperCase() + fieldName.slice(1);

      if (getOrSet === "set" && typeof getSet[setKey] === "function") {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = fieldName;
        parent.appendChild(input);
        inputs[fieldName] = input;

        input.oninput = () => {
          const value = input.value;
          getSet[setKey](value);
          updateInputs();
        };
      }
    }

    updateInputs();
  }

  function createPersonClosure(initialName, initialSurname) {
    let name = initialName;
    let surname = initialSurname;
    let fatherName = "";
    let age = 0;

    return {
      getName: function () {
        return name;
      },
      getSurname: function () {
        return surname;
      },
      getFatherName: function () {
        return fatherName;
      },
      getAge: function () {
        return age;
      },
      getFullName: function () {
        return name + " " + surname + " " + fatherName;
      },
      setName: function (newName) {
        name = newName;
      },
      setSurname: function (newSurname) {
        surname = newSurname;
      },
      setFatherName: function (newFatherName) {
        fatherName = newFatherName;
      },
      setAge: function (newAge) {
        if (newAge >= 0 && newAge <= 100) {
          age = newAge;
        }
      },
      setFullName: function (newFullName) {
        const parts = newFullName.split(" ");
        if (parts.length === 3) {
          name = parts[0];
          surname = parts[1];
          fatherName = parts[2];
        }
      },
    };
  }

  let car;
  {
    let brand = "BMW",
      model = "X5",
      volume = 2.4;
    car = {
      getBrand() {
        return brand;
      },
      setBrand(newBrand) {
        if (newBrand && typeof newBrand === "string") {
          brand = newBrand;
        }
        return brand;
      },

      getModel() {
        return model;
      },
      setModel(newModel) {
        if (newModel && typeof newModel === "string") {
          model = newModel;
        }
        return model;
      },

      getVolume() {
        return volume;
      },
      setVolume(newVolume) {
        newVolume = +newVolume;
        if (newVolume && newVolume > 0 && newVolume < 20) {
          volume = newVolume;
        }
        return volume;
      },

      getTax() {
        return volume * 100;
      },
    };
  }

  const parentElement = document.body;
  getSetForm(parentElement, car);

  const person = createPersonClosure("Анон", "Анонов");
  getSetForm(parentElement, person);
}
