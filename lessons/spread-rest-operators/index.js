/*
  Spread operator
 */

const numbers = [1, 2, 4];

const newNumbers = [...numbers, 5];

console.log(newNumbers);

/*
  REST operator
 */

const myFunc = (n, ...args) => {
    return args.filter(el => el === 1);
};

console.log(myFunc(1, 1, 4, 5, 5));

/*
  Destructor
 */
// const arrElements = [1, 4, 'rrrr', 6];
//
// [,four, ,six] = arrElements;
//
// console.log(four, six);

/*
################### Reference refresher

let y = {number: '123'};

let x = y;

console.log(x);
y.number = '124';
console.log(x);
*/

let y = {number: '123'};

let x = {...y};

console.log(x);
y.number = '124';
console.log(x);