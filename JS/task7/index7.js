// 7


const sum = (variable1, variable2) => {
  return variable1 + variable2;
}

Number.prototype.sum = function(variable) {
  return this + variable;
};
