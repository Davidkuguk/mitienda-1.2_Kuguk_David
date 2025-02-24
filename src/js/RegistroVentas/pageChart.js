const monthCtx = document.getElementById('monthlySales').getContext('2d');
const deptCtx = document.getElementById('deptSales').getContext('2d');
const yearlyLabel = document.getElementById('yearlyTotal');
const bSalesOver5000 = document.getElementById('bSalesOver5000');
bSalesOver5000.addEventListener('click', getSalesMonths);
const bReset = document.getElementById('bReset');
bReset.addEventListener('click',resetMonthlySales);
// Valores del formulario
const newAmount = document.getElementById('itemAmount');
const newMonth = document.getElementById('monthId');
const bAddSaleModal = document.getElementById('bAddSaleModal');
bAddSaleModal.addEventListener('click', addSale);
const bRemoveSale = document.getElementById('bRemoveSale');
bRemoveSale.addEventListener('click',drawSelectMontlySales);
const bRemoveSaleModal = document.getElementById('bRemoveSaleModal');
bRemoveSaleModal.addEventListener('click',removeMonthlySale);

//tenemos que obtener el valor de los radiobotones del formulario
const newProduct = document.forms[0].inlineRadioOptions;

// Variables
const monthSales = Array.of(6500, 3250, 4000);
const monthLabels = Array.of('Octubre', 'Noviembre', 'Diciembre');
const deptSales = Array.of(12, 9, 7, 3);
const deptLabels = Array.of('Cámara', 'Móvil', 'Portátil', 'Tablet');
const yearlyTotal = 0;

// Colecciones para mostrar en gráficos.
const monthlyLabelsSet = new Set();
const monthlySalesArray = [];
const monthlySalesMap = new Map();

// Gráfico de Barras
const monthlySalesChart = new Chart(monthCtx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'Número de ventas',
      data: [],
      backgroundColor: [
        'rgba(238, 184, 104, 1)',
        'rgba(75, 166, 223, 1)',
        'rgba(239, 118, 122, 1)',
      ],
      borderWidth: 0,
    }],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: { beginAtZero: true },
      }],
    },
  },
});

// Pie
const deptSalesChart = new Chart(deptCtx, {
  type: 'pie',
  data: {
    labels: deptLabels,
    datasets: [{
      label: 'Número de ventas',
      data: deptSales,
      backgroundColor: [
        'rgba(238, 184, 104, 1)',
        'rgba(75, 166, 223, 1)',
        'rgba(239, 118, 122, 1)',
        'rgba(40, 167, 69, 1)',
      ],
      borderWidth: 0,
    }],
  },
  options: {},
});

/* Calculo de totales */
function addYearlyTotal(a, b, c) {
  return a + b + c;
}

function initMonthlyTotalSales(){
	// yearlyLabel.innerHTML = Array.from(monthlySalesMap.values()).reduce( function (count, value){ return count + value; }, 0) + "€";

  //necesitamos una varible donde ir almacenando el valor que vamos sumando
  let total = 0;

  //entramos en el mapa de meses, y en cada valor del mes
  //nos dirigimos al producto y del producto nos dirigimos al valor
  //el cual vamos almacenando en los totales
  monthlySalesMap.forEach((productSalesMap) =>{
    productSalesMap.forEach((amount) =>{
      total += amount;
    })
  })


  //insertamos en el html el total
  yearlyLabel.innerHTML = total + '€'
  
}

initMonthlyTotalSales();

/* Ventas por encima de 5000 */
function findOver5000() {
  let position = -1;
  const quantity = monthSales.find((elem, index) => {
    if (elem > 5000) {
      position = index;
      return true;
    }
    return false;
  });
  alert(`Cantidad: ${quantity} Posición: ${position}`);
}

function resetMonthlySales(){
	monthlySalesMap.clear();

  //reiniciamos el Map de productos
 monthlySalesMap.forEach((productSalesMap) => productSalesMap.clear());

	monthlySalesChart.reset();
	monthlySalesChart.render();
	initMonthlyTotalSales();
}

// Añadir ventas al gráfico
function addSale() {
  try {
    // Validación de datos de entrada
    if(newMonth.value === '' ||newAmount.value === '' ||newProduct.value === ''){
      throw {
        name: 'InputError',
        message: 'Todos los campos tienen que estar completos ',
      };
    }

    //comprobar si el mes tiene el mes
    if(monthlySalesMap.has(newMonth.value)){

        //obtenemos el map de productos del mes
        const productSalesMap = monthlySalesMap.get(newMonth.value);

        //comprobar si el producto esta añadido y sumarle el valor
        if(productSalesMap.has(newProduct.value)){

            //obtenemos el valor que tenia el Map y si no tiene por algun motivo, lo iniciamos en 0
            const valorActual = productSalesMap.get(newProduct.value) || 0;

            //insertamos los datos en el Map y sumamos el valor
            productSalesMap.set(newProduct.value, valorActual + parseInt(newAmount.value));
            console.log('Se sumaron los valores');
        }else{

          //si el producto no fue registrado, se creara uno nuevo
          productSalesMap.set(newProduct.value, parseInt(newAmount.value));
          console.log('se creo el producto');
        }
      
    }else{

      //si el mes no existe creamos un mapa de productos para ese mes
      const productSalesMap = new Map();
      productSalesMap.set(newProduct.value, parseInt(newAmount.value));

      //añadimos el producto al mapa de mes
      
      console.log(monthlySalesMap.set(newMonth.value, productSalesMap));
      console.log('se creo un nuevo mes con su primer producto');
    }


    
  
    // Recuento de totales
    initMonthlyTotalSales();
    // Actualizar gráfico
		monthlySalesChart.data.datasets[0].data = Array.from(monthlySalesMap.values());
		monthlySalesChart.data.labels = Array.from(monthlySalesMap.keys());
    monthlySalesChart.update();
  } catch (error) {
    // Tratamiento de excepciones
    alert(error.message);
  } finally {
    // Reseteo de formulario
    cleanAddSaleForm();
  }
}

function cleanAddSaleForm() {
  newMonth.value = '';
  newAmount.value = '';
}

//Resetear datos en los gráficos
function resetMonthlySales(){
	monthlySalesArray.length = 0;
	monthlyLabelsSet.clear();
	monthlySalesChart.update();
	initMonthlyTotalSales();
}

function getSalesMonths(){
	monthlyLabelsSet.forEach(function (month){
		console.dir(month);
		alert(month);
	});
}

function drawSelectMontlySales(){
	// Seleccionamos elemento usando id con jQuery
	let removeSales = $("#removeSales");
	// Eliminamos option del select.
	removeSales.empty();
	for (let [month, amount] of monthlySalesMap.entries()){
		// Creamos elemento option con jQuery
		let opt = $("<option>").val(month).text(month + ": " + amount);
		// Añadimos elemento al select.
		removeSales.append(opt);
	}
}

// Borrar meses de la colección
function removeMonthlySale(){
	let removeSales = document.getElementById("removeSales");
	// Borramos de la colección la venta.
	monthlySalesMap.delete(removeSales.value);
	// Actualizamos colección en el gráfico
	monthlySalesChart.data.datasets[0].data = Array.from(monthlySalesMap.values());
	monthlySalesChart.data.labels = Array.from(monthlySalesMap.keys());
	monthlySalesChart.update();
	// Actualizasmos la vista
	initMonthlyTotalSales();
	drawSelectMontlySales();
}

