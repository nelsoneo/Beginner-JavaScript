// let numbers = [1,2,3];
// let quad = numbers.map(number => number ** 2);
//---------------------------------------------------------

// let prodprices = [25,45,52,22,32,58,60];
// let haftprice = prodprices.map(price => price / 2)

//---------------------------------------------------------

const products = [
  { name: "Mouse Sem Fio", price: 30 },
  { name: "Pen Drive", price: 25 },
  { name: "Cartucho de Tinta", price: 50 },
  { name: "Suporte Ergonômico para Notebook", price: 23 },
  { name: "Repetidor de Sinal Wi-Fi", price: 44 },
];

const promproducts = products.map((product) => {
  if (product.price >= 30) {
    {
      return { name: product.name, price: product.price / 2 };
    }
  }
  return product;
});

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

console.log(promproducts, products);
