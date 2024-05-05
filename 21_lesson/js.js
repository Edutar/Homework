// makeProfileTimer
{
  function makeProfileTimer() {
      const start = performance.now();
      return function() {
          return performance.now() - start;
      };
  }
  const timer = makeProfileTimer();
  alert('Вимірюємо час роботи цього alert');
  alert(timer());
  const timer2 = makeProfileTimer();
  prompt('');
  alert(`Час роботи двух alert та одного prompt ${timer()}`);
  alert(`Час роботи prompt та попереднього alert ${timer2()}`);
}
// makeSaver
{
  function makeSaver(func) {
      let result;
      let called = false;
      return function() {
          if (!called) {
              result = func();
              called = true;
          }
          return result;
      };
  }
  let saver = makeSaver(Math.random);
  let value1 = saver();
  let value2 = saver();
  alert(`Random: ${value1} === ${value2}`);
  let saver2 = makeSaver(() => {
      console.log('saved function called');
      return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random() * 6)];
  });
  let value3 = saver2();
  let value4 = saver2();
  console.log(value3 === value4);
  let namePrompt = prompt.bind(window, 'Як тебе звуть?');
  let nameSaver = makeSaver(namePrompt);
  alert(`Привіт! Prompt ще не було!`);
  alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`);
  alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`);
}
// myBind
{
  function myBind(func, thisArg, defaultArgs) {
      return function(...args) {
          const boundArgs = defaultArgs.map((arg, index) => arg === undefined ? args.shift() : arg);
          return func.apply(thisArg, boundArgs.concat(args));
      };
  }
  let pow5 = myBind(Math.pow, Math, [undefined, 5]);
  console.log(pow5(2));
  console.log(pow5(4));
  let cube = myBind(Math.pow, Math, [undefined, 3]);
  console.log(cube(3));
  let chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5, undefined, 8, undefined, 9]);
  console.log(chessMin(-1,-5,3,15));
  let zeroPrompt = myBind(prompt, window, [undefined, "0"]);
  let someNumber = zeroPrompt("Введіть число");
  console.log(someNumber);
  const bindedJoiner = myBind((...params) => params.join(''), null, [undefined, 'b', undefined, undefined, 'e', 'f']);
  console.log(bindedJoiner('a','c','d'));
  console.log(bindedJoiner('1','2','3'));
}
// checkResult
{
    function checkResult(original, validator) {
        function wrapper(...params) {
            let result;
            do {
                result = original.apply(this, params);
            } while (!validator(result));
            return result;
        }
        return wrapper;
    }
    // Функція для отримання випадкового числа в діапазоні від 0.5 до 1
    const RandomHigh = checkResult(Math.random, x => x >= 0.5 && x <= 1);
    console.log(RandomHigh());
    
    // Функція для завжди позитивної відповіді користувача
    const AlwaysSayYes = checkResult(confirm, x => x === true);
    console.log(AlwaysSayYes("Погоджуєтеся?"));
    
    // Функція для отримання віку від користувача
    const respectMe = checkResult(prompt, x => x.trim() !== "");
    console.log(respectMe("Введіть ваш вік:"));
    
    // Функція для отримання числа від користувача
    const numberPrompt = checkResult(prompt, x => !isNaN(+x));
    let number = +numberPrompt("Введіть число", "0");
    console.log(number);
    
    // Функція для вибору опції гри від користувача
    const gamePrompt = checkResult(prompt, x => ['камінь', 'ножиці', 'папір'].includes(x.toLowerCase()));
    const turn = gamePrompt("Введіть щось зі списку: 'камінь', 'ножиці', 'папір'");
    console.log(turn);
}