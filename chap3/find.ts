// always gives back only one item: the first one found in the array.

const items = [
  { name: "jon", age: 20 },
  { name: "linda", age: 22 },
  { name: "jon", age: 40 },
];
const jon = items.find((item) => item.name === "jon");

console.log(jon); //  { name: "jon", age: 20 }
