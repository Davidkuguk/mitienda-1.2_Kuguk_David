(function () {
  const examples = document.getElementById('examples');
  const divExamples = examples.children[0];
  const buttons = divExamples.getElementsByClassName('tab-pane')[3].getElementsByTagName('button');

  buttons[0].addEventListener('click', () => {
    $$result.clear();
    $$result.logBold('Objeto literal y acceso a propiedades');
    const computer2 = {
      brand: 'HP',
      model: 'EliteBook',
      memory: 16,
      hardDisks: {
        SSD: [1024],
        HDD: [2048, 1024],
      },
      discounted: true,
      price: 2000,
    };

    $$result.log(computer2.model); // EliteBook
    $$result.log(computer2.hardDisks.HDD); // 2048,1024
    $$result.log(computer2.hardDisks.HDD[1]); // 1024
    $$result.log(computer2['model']); // EliteBook
  });

  buttons[1].addEventListener('click', () => {
    $$result.clear();
    // Métodos
    $$result.logBold('Métodos');
    const computer3 = {
      brand: 'HP',
      model: 'EliteBook',
      memory: 16,
      hardDisks: {
        SSD: [1024],
        HDD: [2048, 1024],
      },
      discounted: true,
      price: 2000,
      showInfo() {
        return `${this.brand} ${this.model} (${this.memory}GB)`;
      },
    };
    $$result.log(computer3.showInfo()); // HP EliteBook (16GB)
  });

  buttons[2].addEventListener('click', () => {
    // Paso por valor
    $$result.logBold('Paso por valor');
    function changeValue(value) {
      $$result.log(`Valor antes del cambio: ${value}`); // abcde
      value = 12345;
      $$result.log(`Valor después del cambio: ${value}`); // 12345
    }
    const value = 'abcde';
    changeValue(value);
    $$result.log(`Valor fuera de la función: ${value}`); // abcde

    // Paso por referencia
    $$result.logBold('Paso por referenica');
    function changeComputer(computer) {
      computer.brand = 'Dell';
      computer.model = 'XPS';
      computer.memory = 32;
    }
    changeComputer(computer3);
    $$result.log(computer3.showInfo()); // Dell XPS (32GB)
  });

  buttons[3].addEventListener('click', () => {
    $$result.clear();
    // Styling DOM
    $$result.logBold('Styling DOM');
    function setRedBorderInElement(id) {
      document.getElementById(id).style.border = '3px solid red';
    }

    setRedBorderInElement('message');
    $$result.log('Revisa encabezado de la página para ver el borde');
  });

  buttons[4].addEventListener('click', () => {
    $$result.clear();
    $$result.logBold('Manejadores de eventos');
    function setRedBorderInElement(id) {
      document.getElementById(id).style.border = '3px solid green';
    }

    const button = document.getElementById('button');
    button.addEventListener('click', () => {
      setRedBorderInElement('message');
    });
    $$result.log('Cliquea en el botón VER ARTÍCULO');
  });

  buttons[5].addEventListener('click', () => {
    $$result.clear();
    $$result.logBold('Objeto classList');

    const button = document.getElementById('button');
    button.addEventListener('click', () => {
      const categories = document.getElementById('categories');

      if (categories.classList.contains('d-none')) {
        categories.classList.remove('d-none');
        button.textContent = 'Ocultar categorías';
      } else {
        categories.classList.add('d-none');
        button.textContent = 'Mostrar categorías';
      }
    });
    $$result.log('Cliquea VER ARTÍCULO para oculta y mostrar la sección de categorías');
  });

  buttons[6].addEventListener('click', () => {
    $$result.clear();
    $$result.logBold('Ámbito global');

    const computerId = 9876;
    function showComputerId() {
      $$result.log(computerId); // 9876
    }
    showComputerId();

    const APP = {
      computerId: 9876,
      userName: 'pablo',
      profile: 'admin',
    };

    function showGlobalInfo() {
      $$result.log(`${APP.computerId} ${APP.userName}`); // 9876 pablo
    }
    showGlobalInfo();
  });
}());
