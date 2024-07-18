// 7


function сумма(variable1, variable2) {
  return variable1 + variable2;
}

Number.prototype.сумма = function(variable) {
  return this + variable;
};
console.log(сумма(2, 3)); 
console.log((2).сумма(3)); 