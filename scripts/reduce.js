//utlizado para retornar um unico valor dos elementos de uma matriz 'array', O reduce executa uma funcion de revolucion
//'reductora'. Por exemplo retornar a soma de todos los elementos de um array.

//O reduce, recebe por argumento um valor acumulador, item como argumentos obligatorios, também pode recebir dois
//argumentos mais como opcionais como index, thisArray

// é passado uma function e outro argumento um valor que dependerá de que tipo de retorno vai devolver a redkuce
//para ese caso se for um numero (0) caso esse valor for inicializado ou um string, array

// Sintaxis
// // Arrow function
// reduce((previousValue, currentValue) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// // Callback function
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// // Inline callback function
// reduce(function(previousValue, currentValue) { /* ... */ })
// reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
// reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
// reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)

/**************************************************************************************/

// const numbers = [1, 2, 3];
// const letters = ["a", "b", "c"];
// const arrays = [numbers, letters];

// const somaAll = numbers.reduce((acomulator, item) => acomulator + item, 0); 6

// const somaAll = numbers.reduce((acomulator, item) => acomulator + item, 5); 11

// const letterAll = letters.reduce((acomulator, item) => acomulator + item, "");

// const arrAll = arrays.reduce((acomulator, item) => acomulator + item, []);

/**************************************************************************************/

// const phaseScores = [
//   { name: "Vinicius Costa", score: 337 },
//   { name: "Roger Melo", score: 43 },
//   { name: "Alfredo Braga", score: 234 },
//   { name: "Pedro H. Silva", score: 261 },
//   { name: "Ana Paula Rocha", score: 491 },
//   { name: "Vinicius Costa", score: 167 },
//   { name: "Roger Melo", score: 137 },
//   { name: "Alfredo Braga", score: 135 },
//   { name: "Ana Paula Rocha", score: 359 },
//   { name: "Pedro H. Silva", score: 133 },
// ];

// let roguerScore = phaseScores.reduce((acomulator, phaseScore) => {
//   if (phaseScore.name === "Roger Melo") {
//     acomulator += phaseScore.score;
//   }
//   return acomulator;
// }, 0);

/**************************************************************************************/

// const getMax = (a, b) => Math.max(a, b);

// console.log([1, 100].reduce(getMax, 50))
// console.log([    50].reduce(getMax, 10))

/**************************************************************************************/

const array = [15, 16, 17, 18, 19];

// function reducer(previous, current, index, array) {
//   const returns = previous + current;
//   console.log(
//     `previous: ${previous}, current: ${current}, index: ${index}, array ${array}, returns: ${returns}`
//   );
//   return returns;
// }

// let suma = [15, 16, 17, 18, 19].reduce(
//   (previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 10);

// console.log(suma);

/**************************************************************************************/

// let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
//   return previousValue + currentValue;
// }, 0);

// let total = [ 0, 1, 2, 3 ].reduce(
//     ( previousValue, currentValue ) => previousValue + currentValue,
//     0
//   )
/**************************************************************************************/

// let initialValue = 0
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue.x
// }, initialValue)

// let initialValue = 0
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
//     (previousValue, currentValue) => previousValue + currentValue.x
//     , initialValue
// )

/**************************************************************************************/

// let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     function(previousValue, currentValue) {
//       return previousValue.concat(currentValue)
//     },
//     []
//   )

//   let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     ( previousValue, currentValue ) => previousValue.concat(currentValue),
//     []
//   )

  /**************************************************************************************/

  let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})

  /**************************************************************************************/

  let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }
  
  let groupedPeople = groupBy(people, 'age')

  /**************************************************************************************/

  let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }]
  
  // allbooks - list which will contain all friends' books +
  // additional list contained in initialValue
  let allbooks = friends.reduce(function(previousValue, currentValue) {
    return [...previousValue, ...currentValue.books]
  }, ['Alphabet'])

  /**************************************************************************************/

  let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

/**************************************************************************************/

  const numbers = [-5, 6, 2, 0,];

const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    previousValue.push(doubled);
  }
  return previousValue;
}, []);

 /**************************************************************************************/
/**************************************************************************************/

console.log(doubledPositiveNumbers);
