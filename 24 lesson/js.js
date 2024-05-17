// Person Constructor
{
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getFullName = function() {
            if (this.fatherName) {
                return this.name + ' ' + this.fatherName + ' ' + this.surname;
            } else {
                return this.name + ' ' + this.surname;
            }
        };
    }
    const a = new Person("Вася", "Пупкін");
    const b = new Person("Ганна", "Іванова");
    const c = new Person("Єлизавета", "Петрова");
    console.log(a.getFullName()); // Вася Пупкін
    a.fatherName = 'Іванович';
    console.log(a.getFullName()); // Вася Іванович Пупкін
    console.log(b.getFullName()); // Ганна Іванова
}
// Person Prototype
{
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.getFullName = function() {
        if (this.fatherName) {
            return this.name + ' ' + this.fatherName + ' ' + this.surname;
        } else {
            return this.name + ' ' + this.surname;
        }
    };
    
    const a = new Person("Вася", "Пупкін");
    const b = new Person("Ганна", "Іванова");
    const c = new Person("Єлизавета", "Петрова");
    
    console.log(a.getFullName()); // Вася Пупкін
    a.fatherName = 'Іванович';
    console.log(a.getFullName()); // Вася Іванович Пупкін
    console.log(b.getFullName()); // Ганна Іванова
}
// Store
{
    function Store(reducer, initialState) {
        let state = initialState;
        let cbs = [];
    
        const subscribe = (cb) => {
            cbs.push(cb);
            return () => {
                cbs = cbs.filter((callback) => callback !== cb);
            };
        };
    
        const dispatch = (action) => {
            state = reducer(state, action);
            cbs.forEach((cb) => cb());
        };
    
        const getState = () => state;
    
        return {
            subscribe,
            dispatch,
            getState
        };
    }
    
    // Приклад використання
    
    // Редуктор для збільшення лічильника на одиницю
    const counterReducer = (state = 0, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            default:
                return state;
        }
    };
    
    // Створення магазину з редуктором та початковим станом
    const store = new Store(counterReducer, 0);
    
    // Підписка на зміни стану
    const unsubscribe = store.subscribe(() => {
        console.log('Current state:', store.getState());
    });
    
    // Відправка дії до магазину
    store.dispatch({ type: 'INCREMENT' }); // Current state: 1
    store.dispatch({ type: 'INCREMENT' }); // Current state: 2
    
    // Відписка від подій
    unsubscribe();
    
    // Додаткові зміни, після відписки
    store.dispatch({ type: 'INCREMENT' }); // (Нічого не виводить, оскільки підписка скасована)
    
}
// Password
{
    function Password(parent, open) {
        const input = document.createElement('input');
        input.type = 'password';
        parent.appendChild(input);
    
        const toggleButton = document.createElement('button');
        toggleButton.textContent = open ? 'Hide' : 'Show';
        parent.appendChild(toggleButton);
    
        let value = '';
        let isOpen = open;
    
        const updateInput = () => {
            input.value = isOpen ? value : '*'.repeat(value.length);
        };
    
        updateInput();
    
        input.addEventListener('input', () => {
            value = input.value;
            if (typeof this.onChange === 'function') {
                this.onChange(value);
            }
            updateInput();
        });
    
        toggleButton.addEventListener('click', () => {
            isOpen = !isOpen;
            if (typeof this.onOpenChange === 'function') {
                this.onOpenChange(isOpen);
            }
            toggleButton.textContent = isOpen ? 'Hide' : 'Show';
            updateInput();
        });
    
        this.setValue = newValue => {
            value = newValue;
            updateInput();
        };
    
        this.getValue = () => value;
    
        this.setOpen = newOpen => {
            isOpen = newOpen;
            toggleButton.textContent = isOpen ? 'Hide' : 'Show';
            updateInput();
        };
    
        this.getOpen = () => isOpen;
    }
    
    let p = new Password(document.body, true);
    
    p.onChange = data => console.log(data);
    p.onOpenChange = open => console.log(open);
    
    p.setValue('qwerty');
    console.log(p.getValue());
    
    p.setOpen(false);
    console.log(p.getOpen());
    
}
// LoginForm
{
    function Password(parent, open) {
        const input = document.createElement('input');
        input.type = 'password';
        parent.appendChild(input);
    
        const toggleButton = document.createElement('button');
        toggleButton.textContent = open ? 'Hide' : 'Show';
        parent.appendChild(toggleButton);
    
        let value = '';
        let isOpen = open;
    
        const updateInput = () => {
            input.value = isOpen ? value : '*'.repeat(value.length);
        };
    
        updateInput();
    
        input.addEventListener('input', () => {
            value = input.value;
            if (typeof this.onChange === 'function') {
                this.onChange(value);
            }
            updateInput();
        });
    
        toggleButton.addEventListener('click', () => {
            isOpen = !isOpen;
            if (typeof this.onOpenChange === 'function') {
                this.onOpenChange(isOpen);
            }
            toggleButton.textContent = isOpen ? 'Hide' : 'Show';
            updateInput();
        });
    
        this.setValue = newValue => {
            value = newValue;
            updateInput();
        };
    
        this.getValue = () => value;
    
        this.setOpen = newOpen => {
            isOpen = newOpen;
            toggleButton.textContent = isOpen ? 'Hide' : 'Show';
            updateInput();
        };
    
        this.getOpen = () => isOpen;
    }
    
    const loginInput = new Password(document.body, true);
    const passwordInput = new Password(document.body, true);
    const loginButton = document.createElement('button');
    loginButton.textContent = 'Login';
    document.body.appendChild(loginButton);
    
    function checkInputs() {
        const login = loginInput.getValue();
        const password = passwordInput.getValue();
        return login.trim() !== '' && password.trim() !== '';
    }
    
    function handleInput() {
        loginButton.disabled = !checkInputs();
    }
    
    loginInput.onChange = handleInput;
    passwordInput.onChange = handleInput;
    
    loginButton.addEventListener('click', () => {
        if (checkInputs()) {
            console.log('Logged in');
        }
    });
       
}
// LoginForm Constructor
{
    function Password(parent, open) {
        const input = document.createElement('input');
        input.type = 'password';
        parent.appendChild(input);
    
        const toggleButton = document.createElement('button');
        toggleButton.textContent = open ? 'Hide' : 'Show';
        parent.appendChild(toggleButton);
    
        let value = '';
        let isOpen = open;
    
        const updateInput = () => {
            input.value = isOpen ? value : '*'.repeat(value.length);
        };
    
        updateInput();
    
        input.addEventListener('input', () => {
            value = input.value;
            if (typeof this.onChange === 'function') {
                this.onChange(value);
            }
            updateInput();
        });
    
        toggleButton.addEventListener('click', () => {
            isOpen = !isOpen;
            if (typeof this.onOpenChange === 'function') {
                this.onOpenChange(isOpen);
            }
            toggleButton.textContent = isOpen ? 'Hide' : 'Show';
            updateInput();
        });
    
        this.setValue = newValue => {
            value = newValue;
            updateInput();
        };
    
        this.getValue = () => value;
    
        this.setOpen = newOpen => {
            isOpen = newOpen;
            toggleButton.textContent = isOpen ? 'Hide' : 'Show';
            updateInput();
        };
    
        this.getOpen = () => isOpen;
    
        this.isOpen = () => isOpen;
    
        this.setIsOpen = (newState) => {
            isOpen = newState;
            toggleButton.textContent = isOpen ? 'Hide' : 'Show';
            updateInput();
        };
    
        this.onChange = null;
    
        this.onOpenChange = null;
    }
    
    const loginInput = new Password(document.body, true);
    const passwordInput = new Password(document.body, true);
    const loginButton = document.createElement('button');
    loginButton.textContent = 'Login';
    document.body.appendChild(loginButton);
    
    function checkInputs() {
        const login = loginInput.getValue();
        const password = passwordInput.getValue();
        return login.trim() !== '' && password.trim() !== '';
    }
    
    function handleInput() {
        loginButton.disabled = !checkInputs();
    }
    
    loginInput.onChange = handleInput;
    passwordInput.onChange = handleInput;
    
    loginButton.addEventListener('click', () => {
        if (checkInputs()) {
            console.log('Logged in');
        }
    });
}
// Password Verify
{
    function Password(parent, open) {
        this.input = document.createElement('input');
        this.input.type = 'password';
        parent.appendChild(this.input);
    
        const toggleButton = document.createElement('button');
        toggleButton.textContent = open ? 'Hide' : 'Show';
        parent.appendChild(toggleButton);
    
        let value = '';
        let isOpen = open;
    
        const updateInput = () => {
            this.input.value = isOpen ? value : '*'.repeat(value.length);
        };
    
        updateInput();
    
        this.input.addEventListener('input', () => {
            value = this.input.value;
            if (typeof this.onChange === 'function') {
                this.onChange(value);
            }
            updateInput();
        });
    
        toggleButton.addEventListener('click', () => {
            isOpen = !isOpen;
            if (typeof this.onOpenChange === 'function') {
                this.onOpenChange(isOpen);
            }
            toggleButton.textContent = isOpen ? 'Hide' : 'Show';
            updateInput();
            if (!isOpen) {
                if (this.confirmPasswordInput) {
                    this.confirmPasswordInput.style.display = 'none';
                }
            } else {
                if (this.confirmPasswordInput) {
                    this.confirmPasswordInput.style.display = 'inline-block';
                }
            }
        });
    
        this.setValue = newValue => {
            value = newValue;
            updateInput();
        };
    
        this.getValue = () => value;
    
        this.setOpen = newOpen => {
            isOpen = newOpen;
            toggleButton.textContent = isOpen ? 'Hide' : 'Show';
            updateInput();
            if (!isOpen) {
                if (this.confirmPasswordInput) {
                    this.confirmPasswordInput.style.display = 'none';
                }
            } else {
                if (this.confirmPasswordInput) {
                    this.confirmPasswordInput.style.display = 'inline-block';
                }
            }
        };
    
        this.getOpen = () => isOpen;
    
        this.isOpen = () => isOpen;
    
        this.setIsOpen = (newState) => {
            isOpen = newState;
            toggleButton.textContent = isOpen ? 'Hide' : 'Show';
            updateInput();
            if (!isOpen) {
                if (this.confirmPasswordInput) {
                    this.confirmPasswordInput.style.display = 'none';
                }
            } else {
                if (this.confirmPasswordInput) {
                    this.confirmPasswordInput.style.display = 'inline-block';
                }
            }
        };
    
        this.onChange = null;
    
        this.onOpenChange = null;
    }
    
    const container = document.createElement('div');
    document.body.appendChild(container);
    
    const passwordInput = new Password(container, true);
    const confirmPasswordInput = new Password(container, false);
    passwordInput.confirmPasswordInput = confirmPasswordInput.input;
    confirmPasswordInput.confirmPasswordInput = passwordInput.input;
    
    const validatePasswords = () => {
        const password = passwordInput.getValue();
        const confirmPassword = confirmPasswordInput.getValue();
        if (password !== confirmPassword) {
            passwordInput.input.style.border = '1px solid red';
            confirmPasswordInput.input.style.border = '1px solid red';
        } else {
            passwordInput.input.style.border = '';
            confirmPasswordInput.input.style.border = '';
        }
    };
    
    passwordInput.onChange = validatePasswords;
    confirmPasswordInput.onChange = validatePasswords;    
}