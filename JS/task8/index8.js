// 8

// Написать метод массивов reverse через рекурсию


const arr = [1,2,3,4];
const newArr = [];
const reverseFunc = (arr1) => {
  if(arr1.length !== 0){
      newArr.push(arr1.pop());
    return  reverseFunc(arr1);
    }
  else return newArr;
  }


