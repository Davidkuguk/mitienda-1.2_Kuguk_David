/* eslint-disable func-names */
(function () {
  const toparrow = document.getElementById('toparrow');
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
      toparrow.classList.remove('animate__animated', 'animate__fadeOut');
      toparrow.classList.add('animate__animated', 'animate__fadeIn');
      toparrow.style.display = 'block';
    } else {
      toparrow.classList.remove('animate__animated', 'animate__fadeIn');
      toparrow.classList.add('animate__animated', 'animate__fadeOut');
      toparrow.style.display = 'none';
    }
  });

  const examples = document.getElementById('examples');
  const examplesRows = Array.from(examples.children);
  const examplesLinks = document.querySelectorAll('#examplesLinks a');
  const result = document.getElementById('result');

  const linkExamplesEvent = (event) => {
    const index = Array.prototype.indexOf.call(examplesLinks, event.target);
    examples.classList.remove('d-none');
    examplesRows.forEach((row) => {
      row.classList.add('d-none');
    });
    examplesRows[index].classList.remove('d-none');

    examplesRows[examplesRows.length - 1].classList.remove('d-none');
    result.innerHTML = '';
  };

  examplesLinks.forEach((link) => {
    link.addEventListener('click', linkExamplesEvent);
  });

  const bHideResult = document.getElementById('hide-result');
  bHideResult.addEventListener('click', () => {
    examples.classList.add('d-none');
  });
}());
