// 24 что будет в консоли
[[1, 2], [0, 3]].reduce((acc, curr) => { return acc.concat(curr)}, [2, 1])

// Как изменится результат если убрать [2, 1]
//в консоли будет массив [2,1,1,2,0,3],потому что мы методом reduce перебираем наш изначальный массив и прибавляем как строки новые значения, и начинается все с [2,1]
//если убрать [2,1],то массив будет начинаться с [1,2...]