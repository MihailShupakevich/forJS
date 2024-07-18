// 9

// Необходимо реализовать функцию getNumberCharacters, которая
// считает количество символов в строке и выводит
//  *количество символов**символ* 

// Пример aaabbcaff → выведет 3a2b1c1a2f


let count = 1;
let sum = '';
const getNumberCharacters = (word) => {

  for( let i = 0; i <= word.length-1 ; i++ ){
    if( word[i] === word[i+1] ){ 
          count += 1;
                                } 
    else {sum += `${count}${word[i]}`
          count = 1;
        } 
    }
    return sum
}

getNumberCharacters('helllo');

