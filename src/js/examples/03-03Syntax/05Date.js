(function () {
  const examples = document.getElementById('examples');
  const divExamples = examples.children[2];
  const buttons = divExamples.getElementsByClassName('tab-pane')[4].getElementsByTagName('button');

  function remainingDaysEndYear() {
    $$result.clear();
    $$result.logBold('Calculo de días');

    const today = new Date(); // Día actual
    const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Establece día y mes
    endYear.setFullYear(today.getFullYear()); // Establece año actual
    const msPerDay = 24 * 60 * 60 * 1000; // Nº de milisegundos por día
    let daysLeft = (endYear - today) / msPerDay;
    daysLeft = Math.round(daysLeft); // Días que quedan en el año
    $$result.log(daysLeft);
  }
  buttons[0].addEventListener('click', remainingDaysEndYear);

  function digitalClock() {
    $$result.clear();
    $$result.logBold('Reloj Digital');

    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    let temp = `${(hour > 12) ? hour - 12 : hour}`;
    if (hour === 0) { temp = '12'; }
    temp += ((minute < 10) ? ':0' : ':') + minute;
    temp += ((second < 10) ? ':0' : ':') + second;
    temp += (hour >= 12) ? ' PM' : ' AM';
    $$result.log(temp);
  }
  buttons[1].addEventListener('click', digitalClock);

  function dateFormat() {
    $$result.clear();
    $$result.logBold('Reloj Digital');

    const d = new Date();
    $$result.log(d.toDateString()); // Formato anglosajón
    $$result.log(d.toLocaleDateString()); // Formato local
  }
  buttons[2].addEventListener('click', dateFormat);
}());
