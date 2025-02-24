(function () {
  const examples = document.getElementById('examples');
  const divExamples = examples.children[2];
  const buttons = divExamples.getElementsByClassName('tab-pane')[6].getElementsByTagName('button');

  const computers1 = [
    {
      computerID: 101,
      brand: 'HP',
      model: 'EliteBook',
      memory: 16,
    },
    {
      computerID: 102,
      brand: 'HP',
      model: 'EliteBook',
      memory: 32,
    },
    {
      computerID: 103,
      brand: 'HP',
      model: 'Pavilion',
      memory: 16,
    },
  ];

  const computers2 = [
    {
      computerID: 201,
      brand: 'HP',
      model: 'EliteBook',
      memory: 16,
    },
    {
      computerID: 202,
      brand: 'HP',
      model: 'EliteBook',
      memory: 32,
    },
    {
      computerID: 203,
      brand: 'HP',
      model: 'Pavilion',
      memory: 16,
    },
  ];

  // String to array
  function stringToArray() {
    $$result.clear();
    $$result.logBold('String a array');

    const reference = 'DKR2427';
    const values = [...reference];
    $$result.log(values);// D,K,R,2,4,2,7
  }
  buttons[0].addEventListener('click', stringToArray);

  // Copy array
  function copyArray() {
    $$result.clear();
    $$result.logBold('Copiar un array');

    const arr = [1, 2, 3];
    const arr2 = [...arr];

    arr2.push(4);
    arr2[0] = 99;

    $$result.logBold('Array 1');
    $$result.log(arr);
    $$result.logBold('Array 2');
    $$result.log(arr2);
  }
  buttons[1].addEventListener('click', copyArray);

  function copyObjectArrays() {
    $$result.clear();
    $$result.logBold('Copiar array de objetos');

    const diff = [...computers1];
    diff[0].computerID = 999;
    $$result.log(computers1[0].computerID);// 999
    $$result.log(diff[0].computerID);// 999
  }
  buttons[2].addEventListener('click', copyObjectArrays);

  // Concatentation
  function concatArray() {
    $$result.clear();
    $$result.logBold('Concatenar objetos');

    const join = [...computers1, ...computers2];
    $$result.log(join.length);// 6
  }
  buttons[3].addEventListener('click', concatArray);

  // Use with 'new'
  function spreadInConstructors() {
    $$result.clear();
    $$result.logBold('Spread en constructores');

    let dt = new Date(2020, 9, 15); // 15 Oct 2020
    $$result.log(dt.toLocaleDateString());
    const dateFields = [2020, 10, 15]; // 15 Nov 2020
    dt = new Date(...dateFields);
    $$result.log(dt.toLocaleDateString());
  }
  buttons[4].addEventListener('click', spreadInConstructors);

  function multipleParams(arg1, arg2, arg3) {
    $$result.log(arg1);
    $$result.log(arg2);
    $$result.log(arg3);
  }

  function spreadForFunctionArgs() {
    $$result.clear();
    $$result.logBold('Spread en argumentos');

    $$result.logBold('Invocación normal');
    multipleParams(1, 2, 3);
    $$result.logBold('Invocación con spread');
    const args = [1, 2, 3];
    multipleParams(...args);
  }
  buttons[5].addEventListener('click', spreadForFunctionArgs);
}());
