/* eslint-disable no-undef */
(function () {
	const examples = document.getElementById('examples');
  const divExamples = document.getElementById('examples').children[0];
  const buttons = divExamples.getElementsByClassName('tab-pane')[0].getElementsByTagName('button');

  buttons[0].addEventListener('click', () => {
    $$result.clear();
    $$result.log('<h1>Ejemplo</h1>');
    $$result.log('Ejemplo de log');
    $$result.log([1, 2, 3, 4, 5]);
    $$result.hr();
    $$result.logRaw('Ejemplo raw <h1>prueba</h1>');
    $$result.logRaw([1, 2, 3, 4, 5]);
    $$result.hr();
    $$result.logBold('Ejemplo de bold');
    $$result.logBold('Etiqueta', 'Valor');

    const computer1 = {
      brand: 'HP',
      model: 'EliteBook',
      arr: [1, 2, 3],
      memory: 16,
      date: new Date(),
      SSD: 2,
      test: {
        a: 'a',
        b: 1,
        c: [1, 2, 3],
        d: new Date(),
      },
      discounted: true,
      price: 2000,
    };
    $$result.hr();
    $$result.log(computer1);
  });

  buttons[1].addEventListener('click', () => {
    $$result.clear();
    $$result.logBold('');
  });

  const examplesRows = examples.children;
  examplesRows[0].classList.remove('d-none');
	examplesRows[examplesRows.length - 1].classList.remove('d-none');
  const tabLinks = examplesRows[0].getElementsByClassName('nav-link');
  const tabPane = examplesRows[0].getElementsByClassName('tab-pane');
  // tabLinks[0].classList.remove('active');
  // tabLinks[1].classList.add('active');
  // tabPane[0].classList.remove('active');
  // tabPane[1].classList.add('active');
  buttons[0].click();
}());
