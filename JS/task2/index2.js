// 2

// Представьте что вам нужно записать в переменную arr  массив из 50 
// элементов, со значениями от 1 до 50, соответственно, как вы это сделаете?

let arr = Array.from({ length: 50 }, (_, i) => i + 1);
console.log(arr);