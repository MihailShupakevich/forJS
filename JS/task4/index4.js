// 4

// Напишите функцию которая сортирует массив по датам
const arr = [
  { date: '10.01.2016' },
  { date: '11.01.2017' },
  { date: '05.11.2016' },
  { date: '21.12.2002' }
];

const sortByDate = (arr) => {
  return arr.sort((a, b) => {
    const dateA = new Date(a.date.split('.').reverse().join('-'));
    const dateB = new Date(b.date.split('.').reverse().join('-'));
    return dateA - dateB;
  });
};

const sortedArr = sortByDate(arr);
console.log(sortedArr);
