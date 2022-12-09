



// rest operators. when we use rest operators for destructuring, the position matters. we cannot place rest in the front place. because rest operator always return rest of the items. also we can not use ...rest keyword again and again. we have to use different keywords everytime.

const numbers = [2, 7, 9, 11, 33, 45];
const [two, , nine, eleven, ...rest] = numbers;
console.log (two, nine, eleven, rest)


