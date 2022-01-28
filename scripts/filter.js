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

const users = [
  { name: "Ada Lovelace", premium: true },
  { name: "Grace Hopper", premium: false },
  { name: "Alan Turing", premium: true },
  { name: "Linus Torvalds", premium: false },
  { name: "Margaret Hamilton", premium: true },
];

let filterUser = users.filter(item => item.premium);

/***********************************************************/
console.log(users, filterUser);
