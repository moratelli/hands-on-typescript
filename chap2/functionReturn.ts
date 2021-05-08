/* const runMore = (distance: number): number => {
  return distance + 10;
};

console.log(runMore(10));
 */

//  no return == same as returning 'void'
const eat = (calories: number) => {
  console.log(`I ate ${calories} calories`);
};

const sleep = (hours: number): void => {
  console.log(`I slept ${hours} hours`);
};

let ate = eat(100);
console.log(ate); //  undefined

let slept = sleep(10);
console.log(slept); //  undefined
