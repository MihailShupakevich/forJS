// 3

// Написать функцию которая будет принимать строку и возвращать объект 
// Пример работы функции:

let result = '';
const convertToObject = (variable) => {
  for(let i = variable.length-1 ; i >= 0; i--){
    const restVariable = [...variable];
    result = `${restVariable[i]}: {${result}}`
  }
  return result 
}
