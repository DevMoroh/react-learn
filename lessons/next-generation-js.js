
const myFunc = (name) => {
    return name;
}

console.log(myFunc('Test name'));

const myFunc2 = name => name;

console.log(myFunc2('Test name'));

/*
   ##### Hoisting in javascript
 */

// show undefined
// console.log(somevar);
// var somevar = 23;

// show exception
// console.log(somevar);
// let somevar = 23;

function getClothingVar(isCold) {
    if (isCold) {
        var freezing = 'Grab a jacket!';
    } else {
        var hot = 'It’s a shorts kind of day.';
        console.log(freezing);
    }
}

getClothingVar(false);



