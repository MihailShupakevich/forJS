// 6

// Реализовать функцию getMatchedNumbers. На вход поступают 2 
// отсортированных массива чисел
// Необходимо вернуть объект с двумя массивам:
// matched - массив цифр, в котором есть одинаковые элементы из 
// двух входных массивов
// Учесть!!! Цифры не должны дублироваться.
// different - массив цифр, которые находятся в одном из массивов, 
// но в другом его не было

// пример: 
// на вход [1,3,3,5]; [3,5,5,6]
// на выходе {matched: [3,5], different: [1,6]}
const first=[1,3,3,5];
const second=[3,5,5,6];

const getMatchedNumbers=(firstArr,secondArr)=>{
  const res = {
    matched: [],
    different: [],
  }
  let setFirst = new Set(firstArr);
  let setSecond = new Set(secondArr);
  
  res.matched = [...setFirst].filter((el)=> setSecond.has(el))  
  res.different = [...setFirst].filter((el)=> !setSecond.has(el)).concat([...setSecond].filter((el)=> !setFirst.has(el))) 
  return `matched: [${res.different}] , different:[${res.matched}]`;
}
(getMatchedNumbers(first,second));
