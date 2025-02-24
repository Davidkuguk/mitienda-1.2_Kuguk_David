/* eslint-disable no-undef */
const $$result = (function () {
  const _result = {};

  _result.logRaw = function (contents) {
    $('#result').append(contents);
  };

  _result.log = function (contents) {
    if (Array.isArray(contents)) {
      contents.forEach((e) => _result.log(e));
    } else if (typeof contents === 'object') {
      _result.logObject(contents);
    } else {
      if (typeof contents === 'undefined') contents = 'undefined';
      if (contents === null) contents = 'null';
      console.log(contents.toString().replace(/(<([^>]+)>)/ig, ''));
      _result.logRaw(`<li>${contents}</li>`);
    }
  };

  _result.logObject = function (obj) {
    if (obj !== null) {
      console.log(obj);
      const objType = (obj.constructor) ? obj.constructor.name : 'typeof obj';
      let separtor = '<br>';
      let markup = `<p class="code">${objType} {`;
      for (const property in obj) {
        (property === 'constructor' || typeof obj[property] === 'function')
          ? markup += (`${separtor}&nbsp;&nbsp;&nbsp;&nbsp;${property}: ${obj[property].name}`)
          : markup += (`${separtor}&nbsp;&nbsp;&nbsp;&nbsp;${property}: ${obj[property]}`);
        separtor = ',<br>';
      }
      // markup += Object.keys(obj).map(function(property){
      // return '&nbsp;&nbsp;&nbsp;&nbsp;' + property + ': ' + '&quot;' + obj[property] + '&quot;';
      // }).join(",<br>");
      markup += '<br>}</p>';

      _result.logRaw(markup);
    } else {
      _result.logRaw('<li>null</li>');
    }
  };

  _result.hr = function () {
    _result.logRaw('<hr>');
  };

  _result.logBold = function (contents, contents2) {
    if (contents2) {
      _result.logRaw(`<br><strong>${contents}: </strong>${contents2}`);
    } else {
      _result.logRaw(`<br><strong>${contents}</strong>`);
    }
  };

  // Utility functions..
  _result.clear = function () {
    $('#result').empty();
  };

  return {
    clear: _result.clear,
    log: _result.log,
    hr: _result.hr,
    logRaw: _result.logRaw,
    logBold: _result.logBold,
  };
}());
