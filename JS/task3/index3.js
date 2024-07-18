// 3

// Написать функцию которая будет принимать строку и возвращать объект 
// Пример работы функции:

let result = '';
let convertToObject = (variable) => {
  for(let i = variable.length-1 ; i >= 0; i--){
    restVariable = [...variable];
    result = `${restVariable[i]}: {${result}}`
    
  }
  return result 
}
console.log(convertToObject('bcd')); // { a: { b: { c: {} } } }