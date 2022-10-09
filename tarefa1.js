const originalArray = [7, 5, 3, 9, 6, 4, 1];

let newArray = originalArray.filter((number) => number !== 4);
newArray = newArray.map((number) => (number === 9 ? 5 : number));
let sum = newArray.reduce((a, b) => a + b, 0);

console.log('originalArray: ' + originalArray);
console.log('newArray: ' + newArray);
console.log('Sum of items in newArray: ' + sum);
