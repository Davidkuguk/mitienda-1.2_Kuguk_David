(function () {
  const examples = document.getElementById('examples');
  const divExamples = examples.children[2];
  const buttons = divExamples.getElementsByClassName('tab-pane')[0].getElementsByTagName('button');

  function defaultAnywhere() {
    $$result.clear();
    $$result.logBold('Claúsula default');
    const computerId = 200;
    switch (computerId) { // Producto desconocido
      default:
        $$result.log('Producto desconocido');
        break;
      case 1:
        $$result.log('Computer 1');
        break;
      case 2:
        $$result.log('Computer 2');
        break;
      case 3:
        $$result.log('Computer 3');
        break;
    }
  }
  buttons[0].addEventListener('click', defaultAnywhere);

  function multipleCase() {
    $$result.clear();
    $$result.logBold('Múltiples case');

    const color = 'Rojo';

 		switch (color) { // El color es rojo o verde
      case 'Rojo':
      case 'Verde':
        $$result.log('El color es rojo o verde');
        break;
      case 'Azul':
      case 'Azul claro':
      case 'Azul oscuro':
        $$result.log('El color es azul');
        break;
      default:
        $$result.log('Sin color');
        break;
    }
 	}
  buttons[1].addEventListener('click', multipleCase);

  function forgetABreak() {
    $$result.clear();
    $$result.logBold('Perdida clausula Break');

    const computerId = 2;
    switch (computerId) {
      case 1:
        $$result.log('Computer 1');
        break;
      case 2:
        $$result.log('Computer 2'); // Computer 2
      case 3:
        $$result.log('Computer 3'); // Computer 3
        break;
      default:
        $$result.log('Producto desconocido');
        break;
    }
  }
  buttons[2].addEventListener('click', forgetABreak);

  function strictComparison() {
    $$result.clear();
    $$result.logBold('Comparación estricta');

    const computerId = '2';
    switch (computerId) {
      case 1:
        $$result.log('Computer 1');
        break;
      case 2:
        $$result.log('Computer 2');
      case 3:
        $$result.log('Computer 3');
        break;
      default:
        $$result.log('Producto desconocido');
        break;
    }
  }
  buttons[3].addEventListener('click', strictComparison);
}());
