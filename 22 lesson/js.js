// fetch basic
{
    function displayJSONAsTable(container, json) {
        container.innerHTML = '';
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        const keysToShow = Object.keys(json).filter(key => !['homeworld', 'films', 'species', 'vehicles'].includes(key));
        keysToShow.forEach(key => {
            const bodyRow = document.createElement('tr');
            const keyCell = document.createElement('td');
            keyCell.textContent = key;
            const valueCell = document.createElement('td');
            valueCell.textContent = json[key];
            bodyRow.appendChild(keyCell);
            bodyRow.appendChild(valueCell);
            tbody.appendChild(bodyRow);
        });
        table.appendChild(tbody);
        container.appendChild(table);
    }
    
    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(luke => {
            const container = document.getElementById('luke-info');
            displayJSONAsTable(container, luke);
        });
}
// fetch improved
{
    function displayJSONAsTable(container, json) {
        container.innerHTML = '';
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        
        for (const key in json) {
            const bodyRow = document.createElement('tr');
            const keyCell = document.createElement('td');
            keyCell.textContent = key;
            const valueCell = document.createElement('td');
    
            if (typeof json[key] === 'string' && json[key].includes('https://swapi.dev/api/')) {
                const fetchButton = document.createElement('button');
                fetchButton.textContent = 'Fetch Data';
                fetchButton.addEventListener('click', () => {
                    fetch(json[key])
                        .then(res => res.json())
                        .then(data => {
                            displayJSONAsTable(valueCell, data);
                        });
                });
                valueCell.appendChild(fetchButton);
            } else if (Array.isArray(json[key]) || typeof json[key] === 'object') {
                displayJSONAsTable(valueCell, json[key]);
            } else {
                valueCell.textContent = json[key];
            }
    
            bodyRow.appendChild(keyCell);
            bodyRow.appendChild(valueCell);
            tbody.appendChild(bodyRow);
        }
    
        table.appendChild(tbody);
        container.appendChild(table);
    }
    
    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(luke => {
            const container = document.getElementById('luke-info');
            displayJSONAsTable(container, luke);
        });
    
}
// race
{
    function fetchDataWithDelay(delay) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Delay');
            }, delay);
        });
    }
    function fetchDataFromAPI(url) {
        return fetch(url)
            .then(response => response.json())
            .then(data => 'Fetch');
    }
    const apiUrl = 'https://swapi.dev/api/people/1/';
    const delay = 1000; 
    Promise.race([fetchDataWithDelay(delay), fetchDataFromAPI(apiUrl)])
        .then(winner => {
            console.log(`Winner: ${winner}`);
        });
}
// Promisify: confirm
{
    function confirmPromise(text) {
        return new Promise((resolve, reject) => {
            const result = confirm(text);
            if (result) {
                resolve();
            } else {
                reject();
            }
        });
    }
    confirmPromise('Проміси це складно?')
        .then(() => console.log('Не так вже й складно.'))
        .catch(() => console.log('Respect за посидючість і уважність.'));
}
// Promisify: prompt
{
    function promptPromise(text) {
        return new Promise((resolve, reject) => {
            const result = prompt(text);
            if (result !== null) {
                resolve(result);
            } else {
                reject();
            }
        });
    }
    promptPromise("Як тебе звуть?")
        .then(name => console.log(`Тебе звуть ${name}.`))
        .catch(() => console.log('Ну навіщо морозитися, нормально ж спілкувалися.'));
}
// Promisify: LoginForm
{
    class LoginForm {
        constructor(parent) {
            this.parent = parent;
            this.render();
        }
    
        render() {
            const form = document.createElement('form');
            const loginInput = document.createElement('input');
            loginInput.setAttribute('type', 'text');
            loginInput.setAttribute('placeholder', 'Логін');
            const passwordInput = document.createElement('input');
            passwordInput.setAttribute('type', 'password');
            passwordInput.setAttribute('placeholder', 'Пароль');
            const submitButton = document.createElement('button');
            submitButton.textContent = 'Login';
            submitButton.setAttribute('disabled', true); 
    
            loginInput.addEventListener('input', () => this.updateButtonState(loginInput, passwordInput, submitButton));
            passwordInput.addEventListener('input', () => this.updateButtonState(loginInput, passwordInput, submitButton));
    
            form.appendChild(loginInput);
            form.appendChild(passwordInput);
            form.appendChild(submitButton);
            this.parent.appendChild(form);

            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const login = loginInput.value;
                const password = passwordInput.value;
                this.onSubmitCallback(login, password);
            });
        }
        updateButtonState(loginInput, passwordInput, submitButton) {
            if (loginInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
                submitButton.removeAttribute('disabled');
            } else {
                submitButton.setAttribute('disabled', true);
            }
        }
        onSubmit(callback) {
            this.onSubmitCallback = callback;
        }
    }
    
    function loginPromise(parent) {
        return new Promise((resolve, reject) => {
            const form = new LoginForm(parent);
            form.onSubmit((login, password) => {
                resolve({ login, password });
            });
        });
    }
    loginPromise(document.body)
        .then(({ login, password }) => {
            console.log(`Ви ввели логін "${login}" та пароль "${password}".`);
        });
}