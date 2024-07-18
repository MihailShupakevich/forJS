// 21 напишите кастомный Flat
const flat = (input) => {
  const flattenArray = (arr) => {
    return arr.reduce((acc, val) => {
      if (Array.isArray(val)) {
        acc.push(...flattenArray(val));
      } else if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
        acc.push(flattenObject(val));
      } else {
        acc.push(val);
      }
      return acc;
    }, []);
  }

  const flattenObject = (obj) => {
    let result = {};
    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        // Если значение - объект, рекурсивно расплющиваем его
        let flatObj = flattenObject(obj[key]);
        for (let subKey in flatObj) {
          result[subKey] = flatObj[subKey];
        }
      } else if (Array.isArray(obj[key])) {
        result[key] = flattenArray(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
    return result;
  }

  if (Array.isArray(input)) {
    return flattenArray(input);
  } else if (typeof input === 'object' && input !== null) {

    return flattenObject(input);
  } else {

    return input;
  }
}

const test = [
  1,
  2,
  [[3], 4, [5, [11], 9]],
  {
    one: 1,
    two: {
      bar: 'pop',
      three: {
        foo: 33,
        name: 'oleg',
        olga: true,
        unic: { in: 'in' }
      }
    }
  },
  ['098', [33, 44, [[12], 1, [56]]]]
];

const test2 = {
  foo: {
    one: 1,
    two: {
      bar: 'pop',
      three: {
        foo2: 33,
        name: 'oleg',
        olga: true,
        unic: { in: 'in' }
      }
    },
    abc: [
      1,
      2,
      [[3], 4, [5, [11], 9]],
      ['098', [33, 44, [[12], 1, [56]]]]
    ]
  },
};