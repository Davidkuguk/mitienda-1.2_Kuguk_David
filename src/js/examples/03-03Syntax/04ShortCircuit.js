(function () {
  const examples = document.getElementById('examples');
  const divExamples = examples.children[2];
  const buttons = divExamples.getElementsByClassName('tab-pane')[3].getElementsByTagName('button');

  function avoidErrors() {
    $$result.clear();
    $$result.logBold('Evitar errores');

    const obj = undefined;
    if (obj !== undefined && obj.property) {
      $$result.log(obj.property);
    }
    $$result.log('Función ejecutada sin error');
  }
  buttons[0].addEventListener('click', avoidErrors);

  function defaultValueParameter(param1, param2) {
    $$result.clear();
    $$result.logBold('Parámetros con valor por defecto');

    param1 = param1 || '99';
    param2 = param2 || 'Valor por defecto';

    $$result.log(param1); // 99
    $$result.log(param2); // "Valor por defecto"
  }
  function callDefaultValueParameter() {
    defaultValueParameter();
  }
  buttons[1].addEventListener('click', callDefaultValueParameter);

  function invokeFunction() {
    $$result.clear();
    $$result.logBold('Invocar una función');

    true && $$result.log('Invocada'); // Invocada
    false && $$result.log('No invocada'); //
  }
  buttons[2].addEventListener('click', invokeFunction);
}());
