const numbers = [2, 7, 11, 15];
const target = 22;

const solve = () => {
  for (let index1 = 0; index1 < numbers.length - 1; index1++) {
    for (let index2 = index1 + 1; index2 < numbers.length; index2++) {
      if (numbers[index1] + numbers[index2] === target) {
        console.log(`Found indexes: ${index1} and ${index2}`);
        return;
      }
    }
  }
  console.log('No solution found.');
};

solve();
