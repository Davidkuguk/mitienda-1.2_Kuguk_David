(function () {
  const examples = document.getElementById('examples');
  const divExamples = examples.children[0];
  const buttons = divExamples.getElementsByClassName('tab-pane')[1].getElementsByTagName('button');

  buttons[0].addEventListener('click', () => {
    $$result.clear();

    // if-else
    $$result.logBold('if-else');

    if (true) {
      $$result.log(true); // true
    } else {
      $$result.log(false);
    }

    if (5 == '5') {
      $$result.log(true); // true
    } else {
      $$result.log(false);
    }

    if (5 === '5') {
      $$result.log(true);
    } else {
      $$result.log(false); // false
    }

    if (5 === 5) {
      $$result.log(true); // true
    } else {
      $$result.log(false);
    }

    if (1.1 + 1.3 <= 2.4) { // No aplicar descuento
      $$result.log('Aplicar descuento');
    } else {
      $$result.log('No aplicar descuento');
    }

    // Verdad y falsedad
    $$result.logBold('Verdad y falsedad');
    if (!0) $$result.log('0');
    if (!'') $$result.log('cadena vacía');
    if (!null) $$result.log('null');
    if (!undefined) $$result.log('undefined');
    if (!NaN) $$result.log('NaN');

    // Encadenar if-else
    $$result.logBold('Encadenar if-else');
    let rate = 3;
    if (rate === 5) { // La nota es buena
      $$result.log('La nota es excelente');
    } else if (rate === 4) {
      $$result.log('La nota es muy buena');
    } else if (rate === 3) {
      $$result.log('La nota es buena');
    } else if (rate === 2) {
      $$result.log('La nota es regular');
    } else if (rate === 1) {
      $$result.log('La nota es muy mala');
    } else {
      $$result.log('La nota es pésima');
    }

    // Switch
    $$result.logBold('Switch');
    rate = 1;
    switch (rate) {
      case 5:
        $$result.log('La nota es excelente');
        break;
      case 4:
        $$result.log('La nota es muy buena');
        break;
      case 3:
        $$result.log('La nota buena');
        break;
      case 2:
        $$result.log('La nota es regular');
        break;
      case 1:
        $$result.log('La nota es muy mala');
        break;
      default:
        $$result.log('La nota es pésima');
    }

    // Operadores  lógicos
    $$result.logBold('Operadores  lógicos');
    rate = 2.5;
    if (rate >= 2 && rate <= 4) {
      $$result.log('La nota está entre 2 y 4');
    }

    rate = 4.5;
    price = 2001;
    if (rate < 4 || price > 2000) {
      $$result.log('Mala relación calidad precio');
    }

    rate = 4.5;
    price = 1900;
    if (!(rate < 4 || price > 2000)) {
      $$result.log('Buena relación calidad precio');
    }

    rate = 4.5;
    price = 1900;
    if (!(rate < 4) && !(price > 2000)){
      $$result.log('Buena relación calidad precio');
    }

    // Ejecución de instrucciones con operadores lógicos
    $$result.logBold('Ejecución de instrucciones con operadores lógicos');
    // Ejemplos and
    $$result.logBold('Ejemplos and');
    $$result.log(3 + 3 && (12)); // expr1 == t, devuelve expr2, 12
    $$result.log(3 - 3 && (12)); // expr1 == f, devuelve expr1, 0
    $$result.log('Perro' && 'Gato'); // expr1 == t, devuelve expr2, 'Gato'
    $$result.log('' && 'Cat'); // expr1 == f, devuelve expr1, ''

    (3 + 3) && $$result.log('Condición true'); // Condición true
    (3 - 3) && $$result.log('Condición false'); // No se ejecuta la segunda parte

    // Ejemplos or
    $$result.logBold('Ejemplos or');
    $$result.log(3 + 3 || (12)); // expr1 == t, devuelve expr1, 6
    $$result.log(3 - 3 || (12)); // expr1 == f, devuelve expr2, 12
    $$result.log('Perro' || 'Gato'); // expr1 == t, devuelve expr1, 'Perro'
    $$result.log('' || 'Cat'); // expr1 == f, devuelve expr1, 'Gato'

    (3 - 3) || $$result.log('Condición false'); // Condición false
    (3 + 3) || $$result.log('Condición true'); // No se ejecuta la segunda parte

    // Operador ternario
    $$result.logBold('Operador ternario');
    price = 15;
    (price >= 10) ? $$result.log('Por encima') : $$result.log('Por debajo'); // Por encima

    message = (price >= 10) ? 'Por encima' : 'Por debajo';
    $$result.log(message); // Por encima
  });

  buttons[1].addEventListener('click', () => {
    $$result.clear();
    // Ámbito sentencia let y var
    $$result.logBold('Ámbito sentencia let');
    if (true) {
      const value1 = 'Valor interno 1';
      $$result.log(value1); // Valor interno 1
    }

    // console.log(value1); // Generaría un error por no estar definido value1
    $$result.logBold('Ámbito sentencia var');
    if (true) {
      var value2 = 'Valor interno 2';
      $$result.log(value2); // Varlo interno 2
    }
    $$result.log(value2); // Varlo interno 2
  });

  buttons[2].addEventListener('click', () => {
    $$result.clear();
    // Bucle for
    $$result.logBold('Bucle for');
    for (let i = 0; i < 5; i++) {
      $$result.log(`i: ${i}`); // 0, 1, 2, 3, 4
    }

    // Bucle for decrementando
    $$result.logBold('Bucle for decrementando');
    for (let i = 5; i > 0; i--) {
      $$result.log(`i: ${i}`); // 5, 4, 3, 2, 1
    }

    // Uso de dos variables
    $$result.logBold('Uso de dos variables');
    for (let i = 0, j = 0; i < 5 || j < 15; i++, j += 2) {
      $$result.log(`i: ${i}`); // 0, 1, 2, 3, 4, 5, 6, 7
      $$result.log(`j: ${j}`); // 0, 2, 4, 6, 8, 10, 12, 14
    }

    // Bucle while
    $$result.logBold('Bucle while');
    let i = 4;
    while (i > 0) {
      $$result.log(`i: ${i}`); // 4, 3, 2, 1
      --i;
    }

    // Bucle do-while
    $$result.logBold('Bucle do-while');
    let j = 4;
    do {
      $$result.log(`j: ${j}`); // 4, 3, 2, 1
      --j;
    } while (j > 0);
  });

  buttons[3].addEventListener('click', () => {
    $$result.clear();
    $$result.logBold('Funciones');
    // Asignación de una función
    const myFunction = function () {
      $$result.log('Invocación de la función'); // Invocación de la función
    };
    myFunction();

    $$result.log(typeof myFunction); // function

    // Valores de retorno
    $$result.logBold('Valores de retorno');
    function getCode(value) {
      const code = value * 12;
      return code;
    }
    $$result.log(getCode(11)); // 132

    // Ámbito de funciones
    $$result.logBold('Ámbito de funciones');
    const param = 12;
    function getCodeWithParam(value) {
      const code = value * param;
      return code;
    }
    $$result.log(getCodeWithParam(12)); // 144

    // Función interna
    $$result.logBold('Función interna');
    const param2 = 48;
    function getCodeInternalFunction(value) {
      function getKey() {
        const param2 = 12;
        console.log(`Param2 en f unción interna: ${param2}`); // 12
        return param2;
      }

      const code = value * getKey();
      console.log(`Param2 en f unción interna: ${param2}`); // 48
      return code;
    }
    $$result.log(getCodeInternalFunction(13)); // 156
  });
}());
