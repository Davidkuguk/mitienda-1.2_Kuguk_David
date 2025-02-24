(function () {
  const examples = document.getElementById('examples');
  const divExamples = examples.children[2];
  const buttons = divExamples.getElementsByClassName('tab-pane')[2].getElementsByTagName('button');

  function numberConsts() {
    $$result.clear();
    $$result.logBold('Constantes de Number');

    $$result.log(Number.MIN_VALUE); // 5e-324
    $$result.log(Number.NaN); // NaN
    $$result.log(Number.MAX_VALUE); // 1.7976931348623157e+308
    $$result.log(Number.NEGATIVE_INFINITY); // -Infinity
    $$result.log(Number.POSITIVE_INFINITY); // Infinity
    $$result.log(Number.EPSILON); // 2.220446049250313e-16
    $$result.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
    $$result.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
  }
  buttons[0].addEventListener('click', numberConsts);

  function numberMethods() {
    $$result.clear();
    $$result.logBold('Métodos de Number');

    $$result.log(Number.isFinite(Number.NEGATIVE_INFINITY)); // false
    $$result.log(Number.isInteger(123.23)); // false
    $$result.log(Number.isNaN(Number.parseInt('a'))); // true
  }
  buttons[1].addEventListener('click', numberMethods);

  function checkIsNaN() {
    $$result.clear();
    $$result.logBold('Chequear NaN');

    const x = Number.NaN;
    $$result.log(x === Number.NaN); // false
    $$result.log(Number.isNaN(x)); // true
    $$result.log(isNaN('123')); // false
    $$result.log(isNaN('abc')); // true
    $$result.log(Number.isNaN('123')); // false
    $$result.log(Number.isNaN('abc')); // false
  }
  buttons[2].addEventListener('click', checkIsNaN);

  function epsEqu(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
  }

  function useEpsilon(x, y) {
    $$result.clear();
    $$result.logBold('Epsilon');

    $$result.log(`0.1 + 0.2 === 0.3 -> ${
			 0.1 + 0.2 === 0.3}`); // false
    $$result.log(`0.1 + 0.2 === 0.3 -> ${
			 epsEqu(0.1 + 0.2, 0.3)}`); // true
  }
  buttons[3].addEventListener('click', useEpsilon);

  function safeIntegers() {
    $$result.clear();
    $$result.logBold('Enteros seguros');

    $$result.log(Number.isSafeInteger(9007199254740990)); // true
    $$result.log(Number.isSafeInteger(9007199254740992)); // false
    $$result.log(9007199254740992 + 3); // 9007199254740996
  }
  buttons[4].addEventListener('click', safeIntegers);

  function randomIntegers() {
    $$result.clear();
    $$result.logBold('Enteros aleatorios');

    $$result.log(Math.trunc(Math.random() * 10)); 		 // [0,9]
    $$result.log(Math.trunc(Math.random() * 100)); // [0,99]
    $$result.log(Math.trunc(Math.random() * 10) + 1); // [1,10]
    $$result.log(Math.trunc(Math.random() * 100) + 1); // [1,100]
  }
  buttons[5].addEventListener('click', randomIntegers);
}());
