(function () {
  const examples = document.getElementById('examples');
  const divExamples = examples.children[5];
  const buttons = divExamples.getElementsByClassName('tab-pane')[0].getElementsByTagName('button');

  const computers = [
    {
      computerID: 134,
      brand: 'HP',
      model: 'EliteBook',
      memory: 16,
    },
    {
      computerID: 14,
      brand: 'HP',
      model: 'EliteBook',
      memory: 32,
    },
    {
      computerID: 456,
      brand: 'HP',
      model: 'Pavilion',
      memory: 16,
    },
  ];

  function findNumberPositions(array, elem) {
    const indexes = [];
    let index = array.indexOf(elem);
    while (index != -1) {
      indexes.push(index);
      index = array.indexOf(elem, index + 1);
    }
    return indexes;
  }

  function addNumberCollection(array, elem) {
    if (array.indexOf(elem) === -1) {
      array.push(elem);
    }
    return array;
  }

  function updateNumberCollection(array, elem, newElement) {
    const index = array.indexOf(elem);
    newElement = Number(newElement);
    if (index >= 0) {
      (newElement || newElement === 0)
        ? array.splice(index, 1, newElement)
        : array.splice(index, 1);
    }
    return array;
  }

  function updateAllNumbersCollection(array, elem, newElement) {
    let index = array.indexOf(elem);
    newElement = Number(newElement);
    while (index > -1) {
      (newElement || newElement === 0)
        ? array.splice(index, 1, newElement)
        : array.splice(index, 1);
      index = array.indexOf(elem);
    }
  }

  function indexOfExample() {
    $$result.clear();
    $$result.logBold('Index-of');
    let numbers = [32, -5, 66, 32, 23, 14, 32, 16];
    $$result.log(numbers.toString()); // 32,-5,66,32,23,14,32,16
    $$result.log(findNumberPositions(numbers, 32).toString()); // 0,3,6

    $$result.logBold('Añadir elemento a colección');
    numbers = [32, -5, 66, 23, 14, 16];
    $$result.log(numbers.toString()); // 32,-5,66,23,14,16
    addNumberCollection(numbers, 32);
    $$result.log(numbers.toString()); // 32,-5,66,23,14,16
    addNumberCollection(numbers, 1);
    $$result.log(numbers.toString()); // 32,-5,66,23,14,16,1

    $$result.logBold('Añadir elemento a colección');
    updateNumberCollection(numbers, 66);
    $$result.log(numbers.toString()); // 32,-5,23,14,16,1
    updateNumberCollection(numbers, 23, 2);
    $$result.log(numbers.toString()); // 32,-5,2,14,16,1
    updateNumberCollection(numbers, -5, 0);
    $$result.log(numbers.toString()); // 32,0,23,14,16,1

    $$result.logBold('Añadir elemento a colección');
    numbers = [32, -5, 66, 32, 23, 14, 32, 16];
    $$result.log(numbers.toString()); // 32,-5,66,32,23,14,32,16
    updateAllNumbersCollection(numbers, 32, 15);
    $$result.log(numbers.toString()); // 15,-5,66,15,23,14,15,16
    updateAllNumbersCollection(numbers, 15, 32);
    $$result.log(numbers.toString()); // 32,-5,66,32,23,14,32,16
  }
  buttons[0].addEventListener('click', indexOfExample);

  function findHighPerformanceComputer() {
    $$result.clear();
    $$result.logBold('Método find');

    const computer = computers.find((elem) => elem.memory > 16);
    $$result.log(computer); // ID: 14 Brand: HP Memory: 32
  }
  buttons[1].addEventListener('click', findHighPerformanceComputer);

  function updateMemoryV1() {
    $$result.clear();
    $$result.logBold('Método forEach');

    const localComputers = [...computers]; // Copia del array
    const updatedIds = []; // Array para obtener Ids modificados
    const memory = 16;
    // Objeto sustituto para intercambiar en el array original
    const newComputer =	{
      memory: 24,
      SSD: 1024,
    };
    // Iteración sobre el array original
    localComputers.forEach((elem, index, array) => {
      // Modificamos el array origininal si se cumple la condición
      if (elem.memory === memory) { // callback puede acceder a memory por ser una función interna
        // El parámetro array referencia el array original
        array[index] = { // Creamos un objeto nuevo
          computerID: elem.computerID,
          brand: elem.brand,
          model: elem.model,
          memory: newComputer.memory, // callback puede acceder por ser una función interna
          SSD: newComputer.SSD,
        };
        // Guardamos el array.
        // callback puede acceder por ser una función interna
        updatedIds.push(elem.computerID);
      }
    });
    $$result.log(updatedIds); // 134,456
  }
  buttons[2].addEventListener('click', updateMemoryV1);

  function changeComputer(elem, index, array) {
    // El argumento this puede ser utilizado en la invocación del callback
    if (elem.memory === this.memory) {
      array[index] = {
        computerID: elem.computerID,
        brand: elem.brand,
        model: elem.model,
        memory: this.newComputer.memory,
        SSD: this.newComputer.SSD,
      };
      // this.updatedIds es una referencia por lo que el cambio permanece en el objeto
      this.updatedIds.push(elem.computerID);
    }
  }

  function updateMemoryV2() {
    $$result.clear();
    $$result.logBold('Método forEach con this');

    const localComputers = [...computers];
    const updatedIds = [];
    const memory = 16;
    const newComputer =	{
      memory: 24,
      SSD: 1024,
    };
    localComputers.forEach(changeComputer, { // Argumento this
      updatedIds, // El array es una referencia, puede ser modificado
      memory,
      newComputer,
    });
    $$result.log(updatedIds); // 134,456
  }
  buttons[3].addEventListener('click', updateMemoryV2);

  function mapArray() {
    $$result.clear();
    $$result.logBold('Método map');

    const updatedIds = [];
    const memory = 16;
    const newComputer =	{
      memory: 24,
      SSD: 1024,
    };
    const newComputers = computers.map((elem) => {
      if (elem.memory === memory) {
        return {
          computerID: elem.computerID,
          brand: elem.brand,
          model: elem.model,
          memory: newComputer.memory,
          SSD: newComputer.SSD,
        };
      }
      return elem;
    });
    newComputers.forEach((elem) => {
      $$result.log(elem);
    }); // 134,	14,	456
  }
  buttons[4].addEventListener('click', mapArray);

  function sortComputersById() {
    $$result.clear();
    $$result.logBold('Método sort por enteros');

    const localComputers = [...computers];
    localComputers.sort((elemA, elemB) => elemA.computerID - elemB.computerID);
    localComputers.forEach((elem) => {
      $$result.log(elem);
    }); // 14,134,456
  }
  buttons[5].addEventListener('click', sortComputersById);

  function sortComputersByModel() {
    $$result.clear();
    $$result.logBold('Método sort por nombre');

    const localComputers = [...computers];
    localComputers.sort((elemA, elemB) => -elemA.model.localeCompare(elemB.model));
    localComputers.forEach((elem) => {
      $$result.log(elem.model);
    }); // Pavilion,EliteBook,EliteBook
  }
  buttons[6].addEventListener('click', sortComputersByModel);

  function evenAndOddNumbers() {
    $$result.clear();
    $$result.logBold('Método filter');

    const numbers = [32, -5, 66, 32, 23, 14, 32, 16];
    const evenNumbers = numbers.filter((elem) => !(elem % 2));
    const oddNumbers = numbers.filter((elem) => (elem % 2));

    $$result.log(evenNumbers.toString()); // 32,66,32,14,32,16
    $$result.log(oddNumbers.toString()); // -5,23
  }
  buttons[7].addEventListener('click', evenAndOddNumbers);

  function removeArrayElements() {
    $$result.clear();
    $$result.logBold('Eliminar elementos no válidos');

    let falsyElementsArray = ['text', 0, '', undefined, 'green', null, 5, false, NaN];
    falsyElementsArray = falsyElementsArray.filter(Boolean);

    let finitesNumbersArray = [1, 2, , 3, , 3, , , 0, , , 4, , 4, , 5, , 6, NaN];
    finitesNumbersArray = finitesNumbersArray.filter(Number.isFinite);

    $$result.log(falsyElementsArray.toString()); // text,green,5
    $$result.log(finitesNumbersArray.toString()); // 1,2,3,3,0,4,4,5,6
  }
  buttons[8].addEventListener('click', removeArrayElements);

  function isOlderLegalAge(user) {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    return (user.birth < today);
  }

  function everyAndSomeElements() {
    $$result.clear();
    $$result.logBold('Todos o algunos');

    const users = [
      { username: 'user1', birth: new Date(1999, 7, 3) },
      { username: 'user2', birth: new Date(1998, 2, 23) },
      { username: 'user3', birth: new Date(2010, 6, 19) },
      { username: 'user4', birth: new Date(1995, 10, 12) },
    ];
    $$result.log(users.every(isOlderLegalAge)); // false
    $$result.log(users.some(isOlderLegalAge)); // true
  }
  buttons[9].addEventListener('click', everyAndSomeElements);

  function destructuringArray() {
    $$result.clear();
    $$result.logBold('Desestructurando un array');

    const postalCodeArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52'];
    const [Alava, Albacete, Alicante, Almeria, Avila, Badajoz, Baleares, Barcelona, Burgos, Caceres, Cadiz, Castellon, CiudadReal, Cordoba, Coruna, Cuenca, Gerona, Granada, Guadalajara, Guipuzcoa, Huelva, Huesca, Jaen, Leon, Lerida, LaRioja, Lugo, Madrid, Malaga, Murcia, Navarra, Orense, Asturias, Palencia, LasPalmas, Pontevedra, Salamanca, SantaCruzdeTenerife, Cantabria, Segovia, Sevilla, Soria, Tarragona, Teruel, Toledo, Valencia, Valladolid, Vizcaya, Zamora, Zaragoza, Ceuta, Melilla] = postalCodeArray;
    $$result.log(Albacete); // 02
    $$result.log(CiudadReal); // 13
    $$result.log(Cuenca); // 16
    $$result.log(Guadalajara); // 19
    $$result.log(Toledo); // 45
  }
  buttons[10].addEventListener('click', destructuringArray);
}());
