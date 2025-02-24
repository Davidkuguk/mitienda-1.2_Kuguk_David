let y; const
  z = 0;
let x = y + z;
let values = ['Volvo', 'Saab', 'Fiat'];

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

// Comentario de línea
/*
function toCelsius(fahrenheit) {
return (5 / 9) * (fahrenheit - 32);
}
*/

(function () {
  const examples = document.getElementById('examples');
  const divExamples = examples.children[0];
  const buttons = divExamples.getElementsByClassName('tab-pane')[0].getElementsByTagName('button');

  buttons[0].addEventListener('click', () => {
    $$result.clear();
    let price = 13.99;
    let name = 'Portátil SSD';
    let discounted = true;

    let welcome = 'Hola mundo';
    $$result.log(welcome);
    welcome = 14;
    $$result.log(welcome);

    const IVA = 21;
    $$result.log(IVA);

    console.log(total);
    var total = 50.55;
    $$result.log(total);

    let var1; let var2; let
      var3;
    let var4 = var5 = var6 = 123;
		$$result.log(var4);
		$$result.log(var5);
    $$result.log(var6);
  });

  buttons[1].addEventListener('click', () => {
    $$result.clear();

		$$result.logBold('typeof');
		let price = 15;
		$$result.log(typeof price); // 15

    // Operadores aritméticos
    $$result.logBold('Operadores aritméticos');
    $$result.log(price); // 15
    price += 12;
    $$result.log(price); // 27
    price -= 7;
    $$result.log(price); // 20
    price *= 2;
    $$result.log(price); // 40
    price /= 5;
    $$result.log(price); // 8
    price %= 3;
    $$result.log(price); // 2

    price **= 3;
    $$result.log(price); // 8

    // Operadores de asignación
    $$result.logBold('Operadores de asignación');
    price = 15;
    $$result.log(price); // 15
    price = +12;
    $$result.log(price); // 27
    price -= 7;
    $$result.log(price); // 20
    price *= 2;
    $$result.log(price); // 40
    price /= 5;
    $$result.log(price); // 8
    price %= 3;
    $$result.log(price); // 2

    $$result.logBold('Operadores unitarios');
    // Operadores unitarios preincremento
    $$result.log(++price); // 3
    $$result.log(--price); // 2

    // Operadores unitarios postincremento
    $$result.log(price++); // 2
    $$result.log(price); // 3
    $$result.log(price--); // 3
    $$result.log(price); // 2

    // Operadores unitarios negación y conversión a number
    $$result.log(-price); // -2
    $$result.log(typeof +'123'); // number

    // Precedencia de operadores
    $$result.logBold('Precedencia de operadores');
    price = 3 + 2 * 2;
    $$result.log(price); // 7
    price = (3 + 2) * 2;
    $$result.log(price); // 10

    // Precisión
    $$result.logBold('Precisión');
    const taxRate = 0.21;
    $$result.log(price * taxRate); // 2.1

    price = 1.1 + 1.3;
    $$result.log(price); // 2.4000000000000004

    $$result.log(typeof +price.toFixed(2)); // 2.40

    // Número negativos
    $$result.logBold('Número negativos');
    price = 20 - -2;
    $$result.log(price); // 22
  });

 	buttons[2].addEventListener('click', () => {
    $$result.clear();

    // String
    $$result.logBold('String');
    let message = "Hola Mundo Doble";
    $$result.log(message);
    message = 'Hola mundo Simple';
    $$result.log(message);

    message = 'Hola "Mundo"';
    $$result.log(message);
    message = 'Hola \'Mundo\'';
    $$result.log(message);

    const username = 'Pablo';
    message = `Hola ${username}`;
    $$result.log(message);

    message = `Mantener
		saltos
		de línea
		sin carácter
		de escape.
		`;
    console.log(message);

    // Manipular String
    $$result.logBold('Manipular String');

    $$result.log('Hola ' + 'mundo!');
    message = 'Hola Mundo';
    $$result.log(message.toLocaleLowerCase());
    $$result.log(message.substring(1));
    $$result.log(message.length); // 10

    // Conversiones entre Strings y Numbers
    $$result.logBold('Conversiones entre Strings y Numbers');

    const price = 15;
    $$result.log(typeof price.toString()); // string

    $$result.log(Number.parseInt('123')); // 123
    $$result.log(Number.parseFloat('123.12')); // 123.12

    $$result.log(Number.parseFloat('123A.12')); // 123

    $$result.log(Number.parseFloat('A123.12')); // NaN
  });

  buttons[3].addEventListener('click', () => {
    $$result.clear();
    // Boolean
    $$result.logBold('Boolean');
    const changed = true;
    $$result.log(typeof changed); // boolean
    $$result.log(changed); // true
    $$result.log(!changed); // false
  });

  buttons[4].addEventListener('click', () => {
    $$result.clear();
    // Null y undefined
    $$result.logBold('Null y undefined');
    changed = undefined;
    $$result.log(changed); // undefined

    changed = null;
    $$result.log(changed); // null
  });

  buttons[5].addEventListener('click', () => {
    $$result.clear();
    // Formato literal de objetos
    $$result.logBold('Formato literal de objetos');
    const computer1 = {
      brand: 'HP',
      model: 'EliteBook',
      memory: 16,
      SSD: 2,
      discounted: true,
      price: 2000,
    };

    $$result.log(computer1); // [object Object]
    $$result.log(computer1.model); // EliteBook
  });
}());
