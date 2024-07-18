// 23 
// найти и исправить как можно больше ошибок, функция должна создавать полную копию объекта

const createCopy = (data) => {
  if (!data || typeof data!== 'object') {
    return data; 
  }
  const copy = Array.isArray(data)? [] : {};
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];

      if (typeof value === 'object') {
        copy[key] = deepCopy(value);
      } else if (typeof value === 'function') {
        copy[key] = function() {
          return value.apply(this, arguments);
        };
      } else {
        copy[key] = value;
      }
    }
  }
  return copy;
}
console.log(createCopy({1:2,3:4}));