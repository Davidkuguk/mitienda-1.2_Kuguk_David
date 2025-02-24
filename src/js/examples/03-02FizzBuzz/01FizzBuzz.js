(function () {
  const examples = document.getElementById('examples');
  const divExamples = examples.children[1];
  const buttons = divExamples.getElementsByTagName('button');

  buttons[0].addEventListener('click', () => {
    // Por cada número 4 condiciones. 4 comparativos.
    function getFizzBuzz(num) {
      let str = num;
      if (num % 3 === 0 && num % 5 === 0) {
        str = 'FizzBuzz';
      } else if (num % 3 === 0) {
        str = 'Fizz';
      } else if (num % 5 === 0) {
        str = 'Buzz';
      }

      return str;
    }

    function printFizzBuzzNumbers() {
      for (let i = 1; i <= 100; i++) {
        $$result.log(`Number: ${getFizzBuzz(i)}`);
      }
      const after = new Date();
    }

    $$result.clear();
    $$result.logBold('FizzBuzz V1');
    const before = new Date();
    printFizzBuzzNumbers();
    const after = new Date();
    $$result.log(`Tiempo de ejecución: ${after - before}`);
  });

  buttons[1].addEventListener('click', () => {
    // Por cada número 4 condiciones. 2 comparativos.
    function getFizzBuzzV2(num) {
      const buzz = ((num % 5)) ? '' : 'Buzz'; // 0 es false
      const fizz = ((num % 3)) ? '' : 'Fizz'; // 0 es false

      if (fizz || buzz) return fizz + buzz;
      return num;
    }

    function printFizzBuzzNumbers() {
      for (let i = 1; i <= 100; i++) {
        $$result.log(`Number: ${getFizzBuzzV2(i)}`);
      }
      const after = new Date();
    }

    $$result.clear();
    $$result.logBold('FizzBuzz V2');
    const before = new Date();
    printFizzBuzzNumbers();
    const after = new Date();
    $$result.log(`Tiempo de ejecución: ${after - before}`);
  });

  buttons[2].addEventListener('click', () => {
    // Por cada número 3 condiciones. 2 comparativos.
    function getFizzBuzzV3(num) {
      let str = '';
      str += ((num % 3)) ? '' : 'Fizz';
      str += ((num % 5)) ? '' : 'Buzz';

      return (str || num);
    }

    function printFizzBuzzNumbers() {
      for (let i = 1; i <= 100; i++) {
        $$result.log(`Number: ${getFizzBuzzV3(i)}`);
      }
      const after = new Date();
    }

    $$result.clear();
    $$result.logBold('FizzBuzz V3');
    const before = new Date();
    printFizzBuzzNumbers();
    const after = new Date();
    $$result.log(`Tiempo de ejecución: ${after - before}`);
  });
}());
