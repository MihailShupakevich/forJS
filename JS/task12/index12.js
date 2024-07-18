// 12

// Написать функцию которая будет строить “шахматную доску”
// Пример работы:
let createBoard = () => {
  let result = '';
  for (let i = 0; i < 60; i++) {
    result += (i % 2 === 0) ? '_' : '#';
    if ((i + 1) % 10 === 0) result += '\n';
  }
  return result;
}
createBoard();
