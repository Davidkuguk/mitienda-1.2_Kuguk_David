(function () {
  const examples = document.getElementById('examples');
  const divExamples = examples.children[2];
  const buttons = divExamples.getElementsByClassName('tab-pane')[5].getElementsByTagName('button');

  function simpleTryCatch() {
    $$result.clear();
    $$result.logBold('Try-catch');

    let result;
    try {
      result = x2 / 10;
    } catch (error) {
      $$result.log(error.name); // ReferenceError
      $$result.log(error.message); // x is not defined
    }
  }
  buttons[0].addEventListener('click', simpleTryCatch);

  // A finally statement, catch block runs
  function finallyCatchSample() {
    $$result.clear();
    $$result.logBold('Try-catch-finally');

    let result;
    try {
      $$result.log('Va a ocurrir un error.');
      result = x / 10;
      $$result.log('Esta línea nunca ocurre');
    } catch (error) {
      $$result.log(`Gestionamos la excepción: ${error.name}`);
    } finally {
      $$result.log('El bloque finally siempre se ejecuta.');
    }
  }
  buttons[1].addEventListener('click', finallyCatchSample);

  // Throw a custom error object
  function attemptDivision() {
    let result;
    try {
      result = x2 / 10;
    } catch (error) {
      throw {
        message: `Error en attemptDivision(): ${error.name}`,
        name: 'CustomError',
      };
    }
  }

  function throwError() {
    $$result.clear();
    $$result.logBold('Error personalizado');

    try {
      attemptDivision();
    } catch (error) {
      $$result.log(`${error.name}: ${error.message}`);
    }
  }
  buttons[2].addEventListener('click', throwError);

  function handleError(error) {
    switch (error.name) {
      case 'ReferenceError':
        $$result.log(`Reference error: ${error.message}`);
        break;
      case 'RangeError':
        $$result.log(`Range error: ${error.message}`);
        break;
      case 'TypeError':
        $$result.log(`Type error: ${error.message}`);
        break;
      case 'URIError':
        $$result.log(`URI error: ${error.message}`);
        break;
      case 'SyntaxError':
        $$result.log(`Syntax error: ${error.message}`);
        break;
      case 'EvalError':
        $$result.log(`Evaluation error: ${error.message}`);
        break;
      default:
        $$result.log(`Error: ${error.name} - Mensaje: ${error.message}`);
        break;
    }
  }

  function rangeErrorSample() {
    $$result.clear();
    $$result.logBold('RangeError');

    const result = 0;
    try {
      result.toPrecision(200);
    } catch (error) {
      handleError(error);
    }
  }
  buttons[3].addEventListener('click', rangeErrorSample);

  function typeErrorSample() {
    $$result.clear();
    $$result.logBold('TypeError');

    const result = 0;
    try {
      result.toUpperCase();
    } catch (error) {
      handleError(error);
    }
  }
  buttons[4].addEventListener('click', typeErrorSample);

  function uriErrorSample() {
    $$result.clear();
    $$result.logBold('URIError');

    const uri = 'http://www.example.com/path%%%/file name';
    try {
      // URI error
      decodeURI(uri);
    } catch (error) {
      handleError(error);
    }
  }
  buttons[5].addEventListener('click', uriErrorSample);
}());
