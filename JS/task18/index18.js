// 18

// Напишите функцию для тротлинга
const throttle = (func, ms) => {
  let timeoutId = null;
  return function(...args) {
    if (timeoutId) return;
    func.apply(this, args);
    timeoutId = setTimeout(() => timeoutId = null, ms);
  };
}
throttle(console.log('hey'),1000)
