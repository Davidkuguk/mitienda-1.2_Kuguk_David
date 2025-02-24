(function () {
  const examples = document.getElementById('examples');
  const divExamples = examples.children[5];
  const buttons = divExamples.getElementsByClassName('tab-pane')[2].getElementsByTagName('button');

  function workingWithMaps() {
    $$result.clear();
    $$result.logBold('Trabajando con Map');

    const myMap = new Map();

    const obj = {};
    const f = function () {};
    const str = 'Text';

    // Asignar valores a un Map

    myMap.set(obj, 'Valor con Object');
    myMap.set(f, 'Valor con function');
    myMap.set(str, 'Valor con string');

    $$result.log(myMap.size); // 3

    // Obtener valores
    $$result.log(myMap.get(obj)); // Valor con Object
    $$result.log(myMap.get(f)); // Valor con function
    $$result.log(myMap.get({})); // undefined

    // Borrar elementos
    myMap.delete(obj);
    $$result.log(myMap.size); // 2
  }
  buttons[0].addEventListener('click', workingWithMaps);

  function iterateOverMapV1() {
    $$result.clear();
    $$result.logBold('Interando sobre Map for-of');

    const myMap = new Map([[0, 'cero'], [1, 'uno']]);
    // Iterando con for/of
    for (const [key, value] of myMap) {
      $$result.log(`Clave: ${key} Valor: ${value}`);
    }
  }
  buttons[1].addEventListener('click', iterateOverMapV1);

  function iterateOverMapV2() {
    $$result.clear();
    $$result.logBold('Interando sobre Map con keys y values');

    const myMap = new Map([[0, 'cero'], [1, 'uno']]);
    // Iterando sobre arrays de claves y valores
    for (const key of myMap.keys()) {
      $$result.log(`Clave: ${key}`);
    }
    for (const value of myMap.values()) {
      $$result.log(`Valor: ${value}`);
    }
  }
  buttons[2].addEventListener('click', iterateOverMapV2);

  function iterateOverMapV3() {
    $$result.clear();
    $$result.logBold('Interando sobre Map con entries');

    const myMap = new Map([[0, 'cero'], [1, 'uno']]);
    // Iteramos sobre un array con las entradas.
    for (const [key, value] of myMap.entries()) {
      $$result.log(`Clave: ${key} Valor: ${value}`);
    }
  }
  buttons[3].addEventListener('click', iterateOverMapV3);

  function iterateOverMapV4() {
    $$result.clear();
    $$result.logBold('Interando sobre Map con forEach');

    const myMap = new Map([[0, 'cero'], [1, 'uno']]);
    // Iteramos sobre el método forEach
    myMap.forEach((value, key, m) => {
      $$result.log(`Clave: ${key} Valor: ${value}`);
    });
  }
  buttons[4].addEventListener('click', iterateOverMapV4);
}());
