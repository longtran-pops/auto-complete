export const debounce = (wait, func) => {
  var timeout;
  return function () {
    var context = this,
      args = arguments;

    var executeFunction = function () {
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(executeFunction, wait);
  };
};
