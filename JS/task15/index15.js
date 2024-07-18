// 15

// Напишите свой полифил для [].map()


  Array.prototype.myMap = function (callback, thisArg = this) {
    if (!(this instanceof Array || this instanceof String)) {
      throw TypeError('myMap is not Array!')
    }
    if (typeof callback !== 'function') {
      throw TypeError(`{callback} is not a function`)
    }
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray[i] = callback.call(thisArg, this[i] )
    }
    return newArray;
  }

 