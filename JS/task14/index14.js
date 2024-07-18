// 14

// Есть несколько слов, определить состоят ли они из одних 
// и тех же букв
// например 
// matchCharacters('кот', 'ток', 'окт') --> true
// matchCharacters('кот', 'ком') --> false
// matchCharacters('аларм', 'малар', 'армал', 'рамал') --> true
const matchCharacters = (...words) => {
  const charSet = new Set();
  for (const word of words) {
    for (const char of word) {
      charSet.add(char);
    }
  }
  for (const word of words) {
    for (const char of word) {
      if (!charSet.has(char)) return false;
    }
  }
  return true;
};

matchCharacters('bro', 'rob', 'bor', 'rbro'); 
