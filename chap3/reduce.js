const allTrucks = [2, 5, 7, 10];
const initialCapacity = 0;
const allTonnage = allTrucks.reduce((totalCapacity, currentCapacity) => {
  totalCapacity = totalCapacity + currentCapacity;

  return totalCapacity;
}, initialCapacity);

console.log(allTonnage); //  24

/* Notice the logic of the reducer can be anything; 
it does not have to be a sum. It could be a subtraction or 
any other logic that you may need. The core point is 
that at the end, you will have only a single value or object result. 
This is why it is called reduce. */
