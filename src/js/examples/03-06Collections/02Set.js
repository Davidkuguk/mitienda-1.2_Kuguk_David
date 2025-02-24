(function () {
  const examples = document.getElementById('examples');
  const divExamples = examples.children[5];
  const buttons = divExamples.getElementsByClassName('tab-pane')[1].getElementsByTagName('button');

  function workingWithSets() {
    $$result.clear();
    $$result.logBold('Trabajando con Set');

    // Nuevo objeto set.
    const mySet = new Set();

    // Añadimos elementos heterogéneos al set
    mySet.add(1);
    mySet.add(5);
    mySet.add('text');
    const o = { a: 1, b: 2 };
    mySet.add(o);
    // Dos objetos diferentes con referencias diferentes
    mySet.add({ a: 1, b: 2 });

    // Tamaño del set
    $$result.log(mySet.size); // 5

    // Existencia de elementos en el set
    $$result.log(mySet.has(1)); // true
    $$result.log(mySet.has(3)); // false
    $$result.log(mySet.has('TEXT'.toLocaleLowerCase())); // true
    $$result.log(mySet.has(o)); // true

    // Eliminar elementos
    mySet.delete(5);
    $$result.log(mySet.has(5)); // false
    $$result.log(mySet.size); // 4
    // No genera error eliminar un elemento no existente
    mySet.delete(11111);
  }
  buttons[0].addEventListener('click', workingWithSets);

  function addElementsInSet() {
    $$result.clear();
    $$result.logBold('Inicializando Set');

    // Crear un set a partir de un iterable
    const mySet = new Set([1, 2, 3]);
    $$result.log(mySet.size); // 3
    $$result.log(mySet.has(1)); // true

    // Encadenado de llamadas a add()
    mySet.add(4).add(5).add(6);
    $$result.log(mySet.size); // 6
    $$result.log(mySet.has(6)); // true

    // Vaciar set
    mySet.clear();
    $$result.log(mySet.size); // 0
  }
  buttons[1].addEventListener('click', addElementsInSet);

  function iterateOverSetV1() {
    $$result.clear();
    $$result.logBold('Interando sobre Set for-of');

    const mySet = new Set([1, 2, 3]);
    // Al iterar recuperamos los elementos en orden de inserción
    for (const item of mySet) $$result.log(item); // 1,2,3
  }
  buttons[2].addEventListener('click', iterateOverSetV1);

  function iterateOverSetV2() {
    $$result.clear();
    $$result.logBold('Interando sobre Set values()');

    const mySet = new Set([1, 2, 3]);
    // Al iterar recuperamos los elementos en orden de inserción
    for (const item of mySet.values()) $$result.log(item); // 1,2,3
  }
  buttons[3].addEventListener('click', iterateOverSetV2);

  function iterateOverSetV3() {
    $$result.clear();
    $$result.logBold('Interando sobre Set forEach');

    const mySet = new Set([1, 2, 3]);
    // Iteración utilizando forEach
    mySet.forEach((item) => {
      $$result.log(item); // 1,2,3
    });
  }
  buttons[4].addEventListener('click', iterateOverSetV3);
}());
