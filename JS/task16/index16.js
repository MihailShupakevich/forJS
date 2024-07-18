// 16

// Анаграммы – это слова, у которых те же буквы в том же количестве,
// но они располагаются в другом порядке.

// Например:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// Напишите функцию aclean(arr), которая возвращает массив слов,
// очищенный от анаграмм.

 let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (arr1) => {
  let sortedArr = arr1.map((el) => [...el].sort().join('').toLowerCase());
  return [...new Set(sortedArr)].map((sortedStr) => {
  return arr1.find((el) => [...el].sort().join('') === sortedStr);
  });
};
