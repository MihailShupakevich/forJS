// 14

// Есть несколько слов, определить состоят ли они из одних 
// и тех же букв
// например 
// matchCharacters('кот', 'ток', 'окт') --> true
// matchCharacters('кот', 'ком') --> false
// matchCharacters('аларм', 'малар', 'армал', 'рамал') --> true

let matchCharacters = (...words) => {
  let firstWordSet = new Set([...words[0]]);
  return words.every((word) => {
    let wordSet = new Set([...word]);
    return [...firstWordSet].every((char) => wordSet.has(char)) &&
           [...wordSet].every((char) => firstWordSet.has(char));
  });
}


console.log(matchCharacters('bro', 'rob', 'bor', 'rbro')); 
