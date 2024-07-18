// 19

// Реализовать алгоритм сжатия строки "AAADDDGFFFAAR" → "3A3DG3F2AR"
let count = 1;
let sum= '';
const getNumber = (word) => {

  for(let i = 0; i<=word.length-1; i++){
    if(word[i]=== word[i+1]){ 
          count +=1;
                                } 
      else if(count > 1 ){sum += `${count}${word[i]}`
          count =1;
        }
        else {sum += `${word[i]}`}  
    }
    return sum
}

console.log(getNumber('AAADDDGFFFAAR'));
