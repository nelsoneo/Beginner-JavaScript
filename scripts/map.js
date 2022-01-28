//Retorna um novo array, com a mesma quantidade de elemestos, onde esses elementos podem ser modificados
// a function map() recebe 3 arqgumentos: item, index, thisArray

// let numbers = [1,2,3];
// let quad = numbers.map(number => number ** 2);
//---------------------------------------------------------

// let prodprices = [25,45,52,22,32,58,60];
// let haftprice = prodprices.map(price => price / 2)

//---------------------------------------------------------

// let numbers = [1,4,9];
// let double = numbers.map(function(num) {
//     return num * 2;
// })

//----------------------------------------------------------

// const products = [
//   { name: "Mouse Sem Fio", price: 30 },
//   { name: "Pen Drive", price: 25 },
//   { name: "Cartucho de Tinta", price: 50 },
//   { name: "Suporte Ergonômico para Notebook", price: 23 },
//   { name: "Repetidor de Sinal Wi-Fi", price: 44 },
// ];

// const promproducts = products.map((product) => {
//   if (product.price >= 30) {
//     {
//       return { name: product.name, price: product.price / 2 };
//     }
//   }
//   return product;
// });

//----------------------------------------------------------

//   let kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
//   ];
//   let reformattedArray = kvArray.map((obj) => {
//     let rObj = {};
//     rObj[obj.key] = obj.value;
//     return rObj;
//   });

//----------------------------------------------------------

// let map = Array.prototype.map;
// let a = map.call("Hello Word", function (letter) {
//   return letter.charCodeAt(0);
// });

//----------------------------------------------------------

// let elems = document.querySelectorAll('select option:checked')
// let values = Array.prototype.map.call(elems, function(obj){
//     return obj.values;
// })

//----------------------------------------------------------

// let numbers = [1, 2, 3, 4]
// let filteredNumbers = numbers.map(function(num, index) {
//   if (index < 3) {
//      return num
//   }
// })

//----------------------------------------------------------

// console.log(filteredNumbers, numbers);
