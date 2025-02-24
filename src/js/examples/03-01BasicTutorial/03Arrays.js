(function () {
  const examples = document.getElementById('examples');
  const divExamples = examples.children[0];
  const buttons = divExamples.getElementsByClassName('tab-pane')[2].getElementsByTagName('button');

  buttons[0].addEventListener('click', () => {
    $$result.clear();

    // Arrays
    $$result.logBold('Arrays');
    const letters = ['a', 'b', 'c', 'd'];
    $$result.log(letters); // a,b,c,d

    $$result.logBold('Arrays heterogéneos');
    const lettersAndNumbers = ['a', '1', 'c', '2'];
    $$result.log(lettersAndNumbers); // a,1,c,2

    $$result.logBold('Tipo array');
    $$result.log(typeof lettersAndNumbers); // object
    $$result.log(Array.isArray(lettersAndNumbers)); // true

    $$result.logBold('Acceso a items');
    $$result.log(lettersAndNumbers[2]); // c
    $$result.log(lettersAndNumbers[20]); // undefined
    lettersAndNumbers[lettersAndNumbers.length] = 'e';
    $$result.log(lettersAndNumbers); // a,1,c,2,e
    lettersAndNumbers[7] = 'z';
    $$result.log(lettersAndNumbers); // a,1,c,2,e,,,z
  });

  buttons[1].addEventListener('click', () => {
    $$result.clear();
    $$result.logBold('Manipulación de array');

    // Añadir elementos en la cola
    $$result.logBold('Añadir elementos en la cola');
    const letters = ['a', 'b', 'c', 'd'];
    letters.push('e', 'f', 'g', 'h');
    $$result.log(letters); // a,b,c,d,e,f,g,h

    // Sacar elementos de la cola
    $$result.logBold('Sacar elementos de la cola');
    const lastLetter = letters.pop();
    $$result.log(letters); // a,b,c,d,e,f,g

    // Sacar elementos de la cabeza
    $$result.logBold('Sacar elementos de la cabeza');
    const firstLetter = letters.shift();
    $$result.log(letters); // b,c,d,e,f,g

    // Añadir elementos en la cabeza
    $$result.logBold('Añadir elementos en la cabeza');
    letters.unshift('a', 'a');
    $$result.log(letters); // a,a,b,c,d,e,f,g

    // Crear un subarray
    $$result.logBold('Crear un subarray');
    const newLetters = letters.slice(1, 4);
    $$result.log(newLetters); // a,b,c

    // Insertar elementos en un array
    $$result.logBold('Insertar elementos en un array');
    newLetters.splice(1, 0, '1', '2', '3');
    $$result.log(newLetters); // a,1,2,3,b,c

    // Eliminar elementos de un array
    $$result.logBold('Eliminar elemento y lo sustituye por otro');
    newLetters.splice(2, 1, '4');
    $$result.log(newLetters); // a,1,4,3,b,c

    // Eliminar elementos de un array
    $$result.logBold('Eliminar elementos de un array');
    newLetters.splice(1, 3);
    $$result.log(newLetters); // a,b,c

    // Buscar elementos en un array
    $$result.logBold('Buscar elementos en un array');
    $$result.log(newLetters.indexOf('c')); // 2
    $$result.log(newLetters.indexOf('d')); // -1
    $$result.log(letters.indexOf('a')); // 0
    $$result.log(letters.lastIndexOf('a')); // 1
  });

  buttons[2].addEventListener('click', () => {
    $$result.clear();
    // Recorrer un array con forEach
    $$result.logBold('Recorrer un array con forEach');
    const numbers = [1, 2, 32, 14, 3, 23, 5];
    numbers.forEach((item) => {
      $$result.log(`Elemento: ${item}`);
    });

    // Filtrar elementos de un array
    $$result.logBold('Filtrar elementos de un array');
    const greaterNumbers = numbers.filter((item) => item > 10);
    $$result.log(greaterNumbers); // 32,14,23
  });
}());
