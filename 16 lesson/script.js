// Literals
{
    const cat = {
        name: "Miron",
        age: "2 year",
        color: "white",
    }
}
// Literals expand
{   
    let object = {};
    const key1 = prompt("Введіть назву першого ключа:");
    const value1 = prompt(`Введіть значення для ключа ${key1}:`);
    object[key1] = value1;
    const key2 = prompt("Введіть назву другого ключа:");
    const value2 = prompt(`Введіть значення для ключа ${key2}:`);
    object[key2] = value2;
    console.log(object);
}
// Literals copy
{
     const cat = {
            name: "Miron",
            age: "2 year",
            color: "white",
        }
    let dog = {};
    dog = Object.assign(cat);
    const key = prompt("Введіть ключ для об'єкта");
    const item = prompt(`Введіть значення для ключа ${key}`);
    dog[key] = item;
    console.log(dog);
}
// Html tree
{
    {
        tagName: "body",
        children = [
            {
                tagName: "div",
                children: [
                    {
                        tagName: "span",
                        children: ["Enter a data please:"]
                    },
                    {
                        tagName: "br"
                    },
                    {
                        tagName: "input",
                        attrs: {
                            type: "text",
                            id: "name"
                        }
                    },
                    {
                        tagName: "input",
                        attrs: {
                            type: "text",
                            id: "surname"
                        }
                    }
                ]
            },
            {
                tagName: "div",
                children: [
                    {
                        tagName: "button",
                        attrs: {
                            id: "ok"
                        },
                        children: ["OK"]
                    },
                    {
                        tagName: "button",
                        attrs: {
                            id: "cancel"
                        },
                        children: ["Cancel"]
                    }
                ]
            }
        ]
    }
    
}
// Parent
{
    {
        tagName: "body",
        children = [
            {
                tagName: "div",
                parent: null,
                children: [
                    {
                        tagName: "span",
                        parent: {
                            tagName: "div"
                        },
                        children: ["Enter a data please:"]
                    },
                    {
                        tagName: "br",
                        parent: {
                            tagName: "div"
                        }
                    },
                    {
                        tagName: "input",
                        attrs: {
                            type: "text",
                            id: "name"
                        },
                        parent: {
                            tagName: "div"
                        }
                    },
                    {
                        tagName: "input",
                        attrs: {
                            type: "text",
                            id: "surname"
                        },
                        parent: {
                            tagName: "div"
                        }
                    }
                ]
            },
            {
                tagName: "div",
                parent: null,
                children: [
                    {
                        tagName: "button",
                        attrs: {
                            id: "ok"
                        },
                        parent: {
                            tagName: "div"
                        },
                        children: ["OK"]
                    },
                    {
                        tagName: "button",
                        attrs: {
                            id: "cancel"
                        },
                        parent: {
                            tagName: "div"
                        },
                        children: ["Cancel"]
                    }
                ]
            }
        ]
    }
    
}
// Change OK
{
    {
        tagName: "body",
        children =  [
            {
                tagName: "div",
                parent: null,
                children: [
                    {
                        tagName: "span",
                        parent: {
                            tagName: "div"
                        },
                        children: ["Enter a data please:"]
                    },
                    {
                        tagName: "br",
                        parent: {
                            tagName: "div"
                        }
                    },
                    {
                        tagName: "input",
                        attrs: {
                            type: "text",
                            id: "name"
                        },
                        parent: {
                            tagName: "div"
                        }
                    },
                    {
                        tagName: "input",
                        attrs: {
                            type: "text",
                            id: "surname"
                        },
                        parent: {
                            tagName: "div"
                        }
                    }
                ]
            },
            {
                tagName: "div",
                parent: null,
                children: [
                    {
                        tagName: "button",
                        attrs: {
                            id: "ok" // Значення атрибута id
                        },
                        parent: {
                            tagName: "div"
                        },
                        children: ["OK"]
                    },
                    {
                        tagName: "button",
                        attrs: {
                            id: "cancel"
                        },
                        parent: {
                            tagName: "div"
                        },
                        children: ["Cancel"]
                    }
                ]
            }
        ]
    }
    
}
// Destructure
{
    const {
        children: [
            { children: [ { children: [spanText] }] }, 
            ,
            { children: [ { attrs: { id: secondButtonId } }] }, 
            { children: [ { attrs: { id: secondInputId } }] } 
        ]
    } = htmlStructure;
    
    console.log(spanText);
    console.log(secondButtonId);
    console.log(secondInputId);
}
// Destruct array
{
    let arr = [1,2,3,4,5, "a", "b", "c"];
    let [odd1, even1, odd2, even2, odd3, ...letters] = arr;
    console.log("Odd Numbers:", odd1, odd2, odd3);
    console.log("Even Numbers:", even1, even2);
    console.log("Letters:", letters);
}    
// Destruct string
{
    let arr = [1, "abc"];
    let [number, [s1, s2, s3]] = arr;
    console.log("Number:", number);
    console.log("Letters:", s1, s2, s3);
}
// Destruct 2
{
    let obj = {name: 'Ivan',
           surname: 'Petrov',
           children: [{name: 'Maria'}, {name: 'Nikolay'}]};
    let{ children: [{ name: name1 }, { name: name2 }] } = obj;
    console.log(name1);
    console.log(name2);
}
// Destruct 3
{
    let arr = [1,2,3,4, 5,6,7,10];
    let [a, b, ...rest] = arr;
    let length = arr.length;
    console.log("a:", a);
    console.log("b:", b);
    console.log("length:", length);
}
// Copy delete
{
    const cat = {
            name: "Miron",
            age: "2 year",
            color: "white",
    }
    let keyToDelete = 'color';
    let { [keyToDelete]: _, ...newObject } = cat;

    console.log(newObject); 

}
// Currency real rate
{
    fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
     .then(data => {
           let input = prompt("Введіть першу валюту");
           let output = prompt("Введіть другу валюту");
           let amount = +prompt("Введіть кількість валюти");
           const{rates} = data;
           const result = (amount * rates[input])/ rates[output];
           console.log(result.toFixed(2));
         })
}
// Currency drop down
{
    fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        const{rates} = data;
        let str = "<select>"
        for (const currency in rates) {
            str+= `<option>${currency}</option>`
        }
        str+="</select>"
        document.write(str);
        console.log(rates); // Виводимо отримані дані у консолі
    })
}
// Currency table
{
    fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        const currencies = Object.keys(data.rates);
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        headerRow.insertCell().textContent = 'Currency';
        currencies.forEach(currency => {
            const cell = headerRow.insertCell();
            cell.textContent = currency;
        });
        currencies.forEach(fromCurrency => {
            const row = table.insertRow();
            const headerCell = row.insertCell();
            headerCell.textContent = fromCurrency;
            currencies.forEach(toCurrency => {
                const crossRate = (1 / data.rates[fromCurrency]) * data.rates[toCurrency];
                const cell = row.insertCell();
                cell.textContent = crossRate.toFixed(2);
            });
        });
        document.body.appendChild(table);
    })
}
// Form
{
    const car = {
        "Name":"chevrolet chevelle malibu",
        "Cylinders":8,
        "Displacement":307,
        "Horsepower":130,
        "Weight_in_lbs":3504,
        "Origin":"USA",
        "in_production": false
  }
  let str = "<form>";
     for (let key in car) {
           str+=`<label> ${key}`;
           if(typeof car[key] === "string"){
            str+=`<input type="text" value = ${car[key]}>`;
           }else if(typeof car[key] === "number"){
            str+=`<input type="number" value = ${car[key]}>`;
           }else if(typeof car[key] === "boolean"){
                if(car[key] === false){
                    str+=`<input type="checkbox" >`;
                } else{
                    str+=`<input type="checkbox" checked >`;
                }
            
           }
           str+="</label><br>";
        }
    str +="</form>";
    document.write(str);
}
// Table
{
    const persons = [
        {
           "Name":"chevrolet chevelle malibu",
           "Cylinders":8,
           "Displacement":307,
           "Horsepower":130,
           "Weight_in_lbs":3504,
           "Origin":"USA"
        },
        {
           "Name":"buick skylark 320",
           "Miles_per_Gallon":15,
           "Cylinders":8,
           "Displacement":350,
           "Horsepower":165,
           "Weight_in_lbs":3693,
           "Acceleration":11.5,
           "Year":"1970-01-01",
        },
        {
           "Miles_per_Gallon":18,
           "Cylinders":8,
           "Displacement":318,
           "Horsepower":150,
           "Weight_in_lbs":3436,
           "Year":"1970-01-01",
           "Origin":"USA"
        },
        {
           "Name":"amc rebel sst",
           "Miles_per_Gallon":16,
           "Cylinders":8,
           "Displacement":304,
           "Horsepower":150,
           "Year":"1970-01-01",
           "Origin":"USA"
        },
     ];
    
    let str = "<table>";
    
    const allKeys = [];
    
    for (const person of persons) {
        allKeys.push(...Object.keys(person));
    }
    const arr = [...new Set(allKeys)];
    
    str += "<tr>";
    for (const elem of arr) {
        str += `<td>${elem}</td>`;
    }
    str += "</tr>";
    
    for (const person of persons) {
        str += "<tr>";
        for (const key of arr) {
            if (person.hasOwnProperty(key)) {
                str += `<td>${person[key]}</td>`;
            } else {
                str += "<td>" + " " + "</td>";
            }
        }
        str += "</tr>";
    }
    
    str += "</table>";
    document.write(str);
    
}