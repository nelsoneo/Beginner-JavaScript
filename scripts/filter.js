//Retorna um array novo, dependendo que a condition a evaluar seja TRUE, então retornará o elemento que
// cumpla com a condiction TRUE, caso nenhum elemento do array comprir a condition TRUE retornará um array vazio
// a function filter() recebe 3 arqgumentos: item, index, thisArray

/***********************************************************/

// const randromnumbers = [15,24,36];
// const number = randromnumbers.filter(item => true)

/***********************************************************/

// const randromnumbers = [15, 24, 36];
// const number = randromnumbers.filter((item) => item > 15);

/***********************************************************/

// const users = [
//   { name: "Ada Lovelace", premium: true },
//   { name: "Grace Hopper", premium: false },
//   { name: "Alan Turing", premium: true },
//   { name: "Linus Torvalds", premium: false },
//   { name: "Margaret Hamilton", premium: true },
// ];

// let filterUser = users.filter(item => item.premium);

/***********************************************************/

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// const lengthword = words.filter((item) => item.length > 5);

/***********************************************************/

// function isBigEnough(value){
//     return value >= 10;
// }

// let filtered = [12,5,8,130,44].filter(isBigEnough)

/***********************************************************/

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

/***********************************************************/

// let arr = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     { },
//     { id: null },
//     { id: NaN },
//     { id: 'undefined' }
//   ]

//   let invalidEntries = 0

//   function filterByID(item) {
//     if (Number.isFinite(item.id) && item.id !== 0) {
//       return true
//     }
//     invalidEntries++
//     return false;
//   }

//   let arrByID = arr.filter(filterByID)

/***********************************************************/

// let fruits = ["apple", "banana", "grapes", "mango", "orange"];

// function filterItems(arr, query) {
//   return arr.filter(function (el) {
//     return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//   });
// }

// const filterItems = (arr, query) => {
//     return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
//   }

/***********************************************************/

let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

// const modifiedWords = words.filter( (word, index, arr) => {
//     arr[index+1] +=' extra'
//     return word.length < 6
//   })

// const appendedWords = words.filter((word, index, arr) => {
//   arr.push("new");
//   return word.length < 6;
// });

const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
});

/***********************************************************/
console.log(deleteWords, words);
