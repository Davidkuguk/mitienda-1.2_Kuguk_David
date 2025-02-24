(function () {
  const examples = document.getElementById('examples');
  const divExamples = examples.children[4];
  const buttons = divExamples.getElementsByTagName('button');

  function createRegularExpression() {
    $$result.clear();
    $$result.logBold('Creando Expresiones Regulares');

    const str = 'En un lugar de la Mancha.';
    const reg1 = /Mancha/; // Declaración de una expresión regular.
    const reg2 = /España/;

    // Evaluación de expresión regular.
    $$result.log(`"Mancha" está en "En un lugar de la Mancha.": ${reg1.test(str)}`); // true
    $$result.log(`"España" está en "En un lugar de la Mancha.": ${reg2.test(str)}`); // false

    $$result.log(`Patrón reconocido: ${reg1.exec(str)[0]}`); // "Mancha"
    $$result.log(`Posición en la cadena: ${reg1.exec(str).index}`); // 18
    $$result.log(`Cadena de entrada: ${reg1.exec(str).input}`); // "En un lugar de la Mancha."
    $$result.log(`Patrón reconocido: ${/de/.exec(str)[0]}`); // "de"
    $$result.log(`Posición en la cadena: ${/de/.exec(str).index}`); // 12
    $$result.log(`Patrón reconocido: ${reg2.exec(str)}`); // null
  }
  buttons[0].addEventListener('click', createRegularExpression);

  function optionalCharacters() {
    $$result.clear();

    $$result.logBold('Caracteres opcionales');
    const reg = /[Mm]ancha/; // Los corchetes nos dan la posibilidad de elegir uno de los caracteres que contienen.
    $$result.log(reg.exec('En un lugar de la Mancha')[0]); // "Mancha"
    $$result.log(reg.exec('En un lugar de la mancha')[0]); // "mancha"

    // Podemos especificar rangos de caracteres en función de su código Unicode.
    $$result.logBold('Rangos de caracteres');
    $$result.log(/[0-9]/.exec('En un lugar 7de la Mancha')[0]); // "7"
    // El acento circunflejo niega los caracteres que estamos buscando
    $$result.log(/[^0-9]/.exec('3.1416')[0]); // "."

    // | índica también opcionalidad
    $$result.logBold('Secuencia de caracteres opcionales');
    $$result.log(/azul|verde/.exec('rojo, azul, verde')[0]); // "azul"
  }
  buttons[1].addEventListener('click', optionalCharacters);

  function commonSets() {
    $$result.clear();
    // \w equivale a [a-zA-Z0-9]
    // No inclye tildes ni ñ
    $$result.logBold('\\w equivale a [a-zA-Z0-9]');
    $$result.log(/\w/.exec('----a----')[0]); // "a"
    // \W equivale a [^a-zA-Z0-9]
    $$result.logBold('\\W equivale a [^a-zA-Z0-9]');
    $$result.log(/\W/.exec('1111-aaaa')[0]); // "-"
    // \d equivale a [0-9]
    $$result.logBold('\\d equivale a [0-9]');
    $$result.log(/\d/.exec('aaaa1aaaa')[0]); // "1"
    // \D equivale a [^0-9]
    $$result.logBold('\\D equivale a [^0-9]');
    $$result.log(/\D/.exec('1111+1111')[0]); // "+"
    // \s para espacios en blanco (espacios, tabuladores, etc).
    $$result.logBold('\\s para espacios en blanco (espacios, tabuladores, etc).');
    $$result.log(/\s/.exec('1111 1111')[0].length); // "1"
    // \S para NO espacios en blanco.
    $$result.logBold('\\S para NO espacios en blanco.');
    $$result.log(/\S/.exec('    a   ')[0]); // "a"
  }
  buttons[2].addEventListener('click', commonSets);

  function repeatCharacters() {
    $$result.clear();
    const str = 'En un lugar 12345de la Mancha';
    // Esta expresión busca 4 digitos seguidos.
    $$result.logBold('Expresión con 4 caracteres seguidos');
    $$result.log(/\d\d\d\d/.exec(str)[0]); // "1234"

    // \d{4} Las llaves indican que busque cuatro digitos seguidos
    $$result.logBold('Igual que la anterior pero utilizando { }');
    $$result.log(/\d{4}/.exec(str)[0]); // "1234"
    // \d{1,3} Busca entre 1 y 3 digitos.
    $$result.logBold('Rangos');
    $$result.log(/\d{1,3}/.exec(str)[0]); // "123"
    // \d{2,} Busca dos dígitos o más en el string
    $$result.logBold('Rangos infinitos');
    $$result.log(/\d{2,}/.exec(str)[0]); // "12345"
  }
  buttons[3].addEventListener('click', repeatCharacters);

  function useWildcardsV1() {
    $$result.clear();
    const reg1 = /texto\d*/;
    const reg2 = /texto\d+/;
    const reg3 = /texto\d?/;

    $$result.logBold('Comodín *');
    $$result.log('texto12345'.match(reg1)); // texto12345
    $$result.log('texto'.match(reg1)); // texto
    $$result.logBold('Comodín +');
    $$result.log('texto12345'.match(reg2)); // texto12345
    $$result.log('texto'.match(reg2)); // null
    $$result.logBold('Comodín ?');
    $$result.log('texto12345'.match(reg3)); // texto1
    $$result.log('texto'.match(reg3)); // texto
  }
  buttons[4].addEventListener('click', useWildcardsV1);

  function useWildcardsV2() {
    $$result.clear();
    // Podemos utilizar también comodines
    // * equivale a 0 o más veces {0,}
    $$result.logBold('Comodín *');
    const reg1 = /ab*a/;
    $$result.log(reg1.exec('aaaabaaaa')[0]); // "aa". Corresponde a los dos primeros caracteres.
    $$result.log(reg1.exec('a a abaaaa')[0]); // "aba"
    $$result.log(reg1.exec('a a abbbbbaaaa')[0]); // "abbbbba"

    // + equivale a 0 o más veces {1,}
    $$result.logBold('Comodín +');
    const reg2 = /ab+a/;
    $$result.log(reg2.exec('aaaabaaaa')[0]); // "aba"
    $$result.log(reg2.exec('a a abaaaa')[0]); // "aba"
    $$result.log(reg2.exec('a a abbbbbaaaa')[0]); // "abbbbba"

    // * equivale a 0 o más veces {0,1}
    $$result.logBold('Comodín ?');
    const reg3 = /ab?a/;
    $$result.log(reg3.exec('aaaabaaaa')[0]); // "aa". Corresponde a los dos primeros caracteres.
    $$result.log(reg3.exec('a a abaaaa')[0]); // "aba"
    $$result.log(reg3.exec('a a abbbbbaaaa')[0]); // "aa". Corresponden a los caracteres posteriores a "bbbbb".
  }
  buttons[5].addEventListener('click', useWildcardsV2);

  function useWildcardsV3() {
    $$result.clear();
    // Para evitar que el comodín se empareje con la cadena más larga se utiliza ?
    $$result.logBold('Comodín +?');
    $$result.log(/ab+/.exec('a a abbbbbaaaa')[0]); // Devuelve "abbbb"
    $$result.log(/ab+?/.exec('a a abbbbbaaaa')[0]); // Devuelve "ab"

    // . equivale a cualquier carácter menos el de nueva línea.
    $$result.logBold('Comodín .');
    $$result.log(/...../.exec('12345')[0]); // Devuelve "12345"
    $$result.log(/.n/.exec('En un lugar de la Mancha')[0]); // Devuelve "En"
  }
  buttons[6].addEventListener('click', useWildcardsV3);

  function escapeCharacters() {
    $$result.clear();
    // Algunos de los caracteres que debemos escapar son:  [ ] { } ( ) * . ^ $
    $$result.logBold('Escapando caracteres');
    const result = /\*/.exec('esto es un *');
    $$result.log(result); // ["*"].
  }
  buttons[7].addEventListener('click', escapeCharacters);

  function parenthesisExample() {
    $$result.clear();
    $$result.logBold('Agrupamientos con ( )');
    $$result.log(/(aba){3}/.exec('abaabaabaabaaba')[0]); // "abaabaaba"
    $$result.log(/(aba)+/.exec('abaabaabaabaaba')[0]); // "abaabaabaabaaba"
    $$result.log(/(aba)+?/.exec('abaabaabaabaaba')[0]); // "aba"

    // Con el paréntesis también podemos extraer información del patrón para reutilizarla.
    // El siguiente ejemplo muestra un expresión para una fecha.
    $$result.logBold('Subpatrones');
    const d = new Date();
    $$result.log(/\d{1,2}\/\d{1,2}\/\d{4}/.exec(d.toLocaleDateString())[0]); // ["dd/mm/aaaa"].
    // Podemos obtener el valor de cada uno de los paréntesis para reutilizarlos. Se quedan guardados en el array.
    $$result.log(/(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(d.toLocaleDateString())); // ["dd/mm/aaaa", "dd", "mm", "aaaa", index: 0, input: "01/11/2017"].

    // Los patrones encontrados en los paréntesis pueden ser reutilizado en otros puntos de la expresión.
    // El valor encontrado en cada paréntesis puede referenciarse como "\1", "\2", "\3", etc.
    // El siguiente ejemplo muestra como capturar texto entrecomillado con comilla simple o doble.
    $$result.logBold('Reutilización de subpatrones');
    $$result.log(/(["']).*\1/.exec("En un lugar de la 'Mancha'")[0]); // "'Mancha'"
    $$result.log(/(["']).*\1/.exec('En un lugar de la "Mancha"')[0]); // '"Mancha"'
    $$result.log(/(["']).*\1/.exec('En un lugar de la "Mancha\'')); // null

    // Para ignorar lo encontrado en un paréntesis debemos de usar "?:" al comienzo del paréntesis.
    $$result.logBold('Ignorar un subpatrón');
    $$result.log(/(?:\d{1,2})\/(?:\d{1,2})\/(?:\d{4})/.exec(d.toLocaleDateString())); // ["dd/mm/aaaa", index: 0, input: "01/11/2017"].
    $$result.log(/(?:aba){3}/.exec('abaabaabaabaaba')); // "abaabaaba"
  }
  buttons[8].addEventListener('click', parenthesisExample);

  function positionExpressionV1() {
    $$result.clear();

    $$result.logBold('Comienzo de la cadena ^');
    const str = 'En un lugar de la Mancha';
    // ^ indica que la expresión debe emparejarse al comienzo del string.
    $$result.log(/^En un lugar/.test(str)); // true
    $$result.log(/^En un lugar/.test(`Otra cadena: ${str}`)); // false

    $$result.logBold('Final de la cadena $');
    // $ indica que la expresión debe emparejarse al final del string.
    $$result.log(/Mancha$/.test(str)); // true
    $$result.log(/Mancha$/.test(`${str}Otra cadena`)); // false
  }
  buttons[9].addEventListener('click', positionExpressionV1);

  function positionExpressionV2() {
    $$result.clear();
    const str = 'En un lugar de la Mancha';

    $$result.logBold('Delimitador de palabra');
    // Con \b nos sirve de delimitador de una palabra para localizarla en el string.
    $$result.log(/\bJava\b/.exec('Java, es un lenguaje de programación.')[0]); // "Java"
    $$result.log(/\bJava\b/.exec('JavaScript es un lenguaje de programación.')); // null
    // También elimina símbolos de puntuación.
    $$result.log(/\bJava\b/.exec('La lista de lenguajes que debo conocer es JavaScritp, Java, HTML, CSS.')[0]); // "Java"
    // Localiza la primera palabra en un string
    $$result.log(/\b\w+\b/.exec('La lista de lenguajes que debo conocer es JavaScritp, Java, HTML, CSS.')[0]); // "La"
    // Localiza la primera palabra que comience por M
    $$result.log(/\bM\w*\b/.exec(str)[0]); // "Mancha"

    $$result.logBold('Palabra no finalizada');
    // \B índica que la palabra no debe finalizar todavía.
    $$result.log(/\bJava\B/.exec('JavaScript es un lenguaje de programación.')[0]); // "Java"
    $$result.log(/\bJava\B/.exec('Java es un lenguaje de programación.')); // null
    $$result.log(/\BScript\b/.exec('Un lenguaje de Script es JavaScript.')[0]); // "Script"
  }
  buttons[10].addEventListener('click', positionExpressionV2);

  function positionExpressionV3() {
    $$result.clear();

    $$result.logBold('Datos antes del patrón');
    // (?=expresion) permite posicionarnos en el string, para poder obtener un dato antes o después de lo encontrado.
    $$result.log(/\d+Gb/.exec('La memoria RAM puede ser de 1024Mb, 8Gb, 16Gb, 32Gb.')[0]); // "8Gb"
    $$result.log(/\d+(?=Gb)/.exec('La memoria RAM puede ser de 1024Mb, 8Gb, 16Gb, 32Gb.')[0]); // "8"
    $$result.log(/\b[\wáéíóú]*\s*(?=(Pérez|Fernández))/.exec('Luis García, Juan Fernández, José Fernández.')[0]); // "Juan"

    $$result.logBold('Datos después del patrón');
    // Al posicionarnos en el string con ?=, la expresión no es consumida y hay que repetirla para recoger la información después de dicha expresión.
    $$result.log(/(?=\.)\d+/.exec('3.1416')); // Devuelve null
    $$result.log(/(?=\.)\.\d+/.exec('3.1416')[0]); // Devuelve ".1416"

    $$result.logBold('Patrón inverso');
    // (?!expresión) es la operación inversa, buscando un patrón donde no se cumpla la expresión.
    $$result.log(/\d{3,4}(?!Gb)/.exec('La memoria RAM puede ser de 8Gb, 16Gb, 32Gb o 1024Mb.')[0]); // Devuelve "1024"
  }
  buttons[11].addEventListener('click', positionExpressionV3);

  function useModifiers() {
    $$result.clear();
    // Los modificadores permiten cambiar el comportamiento por defecto de una expresión regular.
    const str = 'En un lugar de la Mancha';

    $$result.logBold('Ignorando mayúsculas de minúsculas');
    // i: indica que se ignoren mayúscuals y minúsculas.
    $$result.log(/mancha/i.exec(str)[0]); // "Mancha"

    $$result.logBold('Modificador global');
    // g: Busca globalmente todos los patrones que se emparejen con la expresión
    const reg = /n/g;
    $$result.log(reg.exec(str)); // ["n", index: 1, input: "En un lugar de la Mancha"]
    $$result.log(reg.exec(str)); // ["n", index: 4, input: "En un lugar de la Mancha"]
    $$result.log(reg.exec(str)); // ["n", index: 20, input: "En un lugar de la Mancha"]
    $$result.log(reg.exec(str)); // null

    $$result.logBold('Multilineas');
    // m: considera el string con multilineas, teniendo en cuenta el caracter \n
    // Localiza el nombre "Mancha" al final de una de las líneas.
    $$result.log(/Mancha$/m.exec('En un lugar de la Mancha\nde cuyo nombre no quiero acordarme.')[0]); // "Mancha"
    $$result.log(/^de/m.exec('En un lugar de la Mancha\nde cuyo nombre no quiero acordarme.')[0]); // "de"
  }
  buttons[12].addEventListener('click', useModifiers);

  function iterateOverRegularExpression() {
    $$result.clear();

    $$result.logBold('Posición del patrón en la cadena');
    const str1 = 'En un lugar de la Mancha.';
    const reg1 = /[mn]/ig; // Declaración de una expresión regular.
    let item;
    while (item = reg1.exec(str1)) { // 1, 4, 18, 20
      $$result.log(item.index);
    }
  }
  buttons[13].addEventListener('click', iterateOverRegularExpression);

  function useRegularExpressionWithStringV1() {
    $$result.clear();
    const str = 'En un lugar de la Mancha';

    $$result.logBold('Método: search');
    // Método: search
    $$result.log(str.search(/mancha/i)); // Devuelve 18

    $$result.logBold('Método: match');
    // Método: match
    // Genera un array con la primera ocurrencia encontrada o si utilizamos el modificador global con todas las que encuentre.
    $$result.log('La memoria RAM puede ser de 1024Mb, 8Gb, 16Gb, 32Gb.'.match(/\d+(?=Gb)/)); // ["8", index: 36, input: "La memoria RAM puede ser de 1024Mb, 8Gb, 16Gb, 32Gb."]
    $$result.log('La memoria RAM puede ser de 1024Mb, 8Gb, 16Gb, 32Gb.'.match(/\d+(?=Gb)/g)); // ["8", "16", "32"]

    $$result.logBold('Método: split');
    // Método: split
    // Genera un array con separadores irregulares.
    const list = 'José Pérez ;Manuel Fernández; Juan Gómez ; María López ;Ana Díaz ';
    $$result.log(list.split(/\s*;\s*/)); // ["José Pérez", "Manuel Fernández", "Juan Gómez", "María López", "Ana Díaz "]
  }
  buttons[14].addEventListener('click', useRegularExpressionWithStringV1);

  function useRegularExpressionWithStringV2() {
    $$result.clear();

    $$result.logBold('Método: Replace');
    // Método: replace
    $$result.log('Man5cha'.replace(/\d/, 'X')); // "ManXcha"
    $$result.log('La memoria RAM puede ser de 1024Mb, 8Gb, 16Gb, 32Gb.'.replace(/Gb\b/ig, 'Tb')); // "La memoria RAM puede ser de 1024Mb, 8Tb, 16Tb, 32Tb."
    // Podemos reutilizar lo recogido en los paréntesis de la expresión utilizando $n, siendo n la posición del paréntesis.
    $$result.log('Man5cha'.replace(/(\d+)/, '-$1-')); // "Man-5-cha"
    // Este ejemplo cambiar de orden el nombre y el apellido.
    $$result.log('Jose Perez'.replace(/(\w+)\s(\w+)/, '$2 $1')); // "Perez Jose"

    // Podemos utilizar funciones por cada ocurrencia emparejada con la expresión
    // La función transforma cada ocurrencia a minúsculas.
    function transform(match, offset, string) {
      // Si la posición no es la 0 añade un guión antes de devolver la ocurrencia en minúsculas.
      // Si es la 0, al transformase en false, solamente devuelve la ocurrencia en minúsculas.
      // También devuelve la posición
      return `${(offset ? '-' : '') + match.toLowerCase()}(${offset})`;
    }
    $$result.log('En un lugar de la Mancha'.replace(/[A-Z]/g, transform)); // "e(0)n un lugar de la -m(18)ancha"
  }
  buttons[15].addEventListener('click', useRegularExpressionWithStringV2);

  function realExamples() {
    function f2c(x) {
      function convert(str, p1, offset, s) {
        // p1 contiene el valor recogido en el paréntesis.
        return `${((p1 - 32) * 5 / 9).toFixed(2)}C`;
      }
      const s = String(x);
      const test = /(-?\d+(?:\.\d*)?)F\b/g;
      return s.replace(test, convert);
    }

    function styleHyphenFormat(propertyName) {
      function upperToHyphenLower(match, offset, string) {
        return (offset ? '-' : '') + match.toLowerCase();
      }
      return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
    }

    function trim(str, filter) {
      function ltrim(str, filter) {
        const pattern = new RegExp(`^(${filter})*`, 'g');
        return str.replace(pattern, '');
      }
      function rtrim(str, filter) {
        const pattern = new RegExp(`(${filter})*$`, 'g');
        return str.replace(pattern, '');
      }

      filter || (filter = '\\s|\\&nbsp;');
      return ltrim(rtrim(str, filter), filter);
    }

    $$result.clear();
    $$result.logBold('Transformar temperaturas');
    $$result.log(f2c('Viernes: -80.5F, Sábado 90.5F, Domingo 95.5F')); // "Viernes: -62.22C, Sábado 32.22C, Domingo 35.00C"
    $$result.logBold('Propiedades DOM a CSS');
    $$result.log(styleHyphenFormat('borderTop')); // "border-top"
    $$result.logBold('Trim');
    $$result.log(trim('       En un lugar de la Mancha        ')); // "En un lugar de la Mancha"
    $$result.log(trim('-.-.---En un lugar de la Mancha-.-.-.--', '-|\\.')); // "En un lugar de la Mancha"
  }
  buttons[16].addEventListener('click', realExamples);
}());
