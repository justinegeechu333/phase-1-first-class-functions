function receivesAFunction(cb) {
  cb();
}

function returnsANamedFunction() {
  function aNamedFunction() {}
  return aNamedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {};
}
