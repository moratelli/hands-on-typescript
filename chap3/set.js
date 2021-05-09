/* Set is a collection of unique values or objects.
This is a good function to use when you simply want to see
whether an item is contained in a large complex list. */

//  Conceptually, it is still quite similar to an array
//  but is optimized for unique collections.

const userIds = [1, 2, 1, 3];
const uniqueIds = new Set(userIds);

console.log(uniqueIds); //  Set(3) { 1, 2, 3 }

uniqueIds.add(10);

console.log("add 10", uniqueIds); //  add 10 Set(4) { 1, 2, 3, 10 }
console.log("has", uniqueIds.has(3)); //  has true
//  In regard to sets, size is used to check quantity not length
console.log("size", uniqueIds.size); //  size 4

for (let item of uniqueIds) {
  console.log("iterate", item);
}

//  1
//  2
//  3
//  10
