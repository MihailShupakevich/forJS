// 13

// Дана функция, она принимает в качестве 
// аргументов строки '-', '1', 'b', '1c', реализуйте ее так,
// чтобы она вернула строку '1-b-1c'

let anotherFn = (delim, ...args) =>{
  return  [...args].join(delim)
}
console.log(anotherFn('=','ld','11', 'g'));
