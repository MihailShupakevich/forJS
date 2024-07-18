// 11

// Напишите функцию для бинарного поиска, она должна принимать
// отсортированный массив и элемент который ищем

const array = [1,2,3,6,7,9,9,10,12,15]

const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1; 
    }
  }

  return -1; 
}

console.log(binarySearch(array,7));

