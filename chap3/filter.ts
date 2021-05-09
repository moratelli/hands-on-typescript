//  all items that meet the filter criteria are returned

const filterItems = [
  { name: "jon", age: 20 },
  { name: "linda", age: 22 },
  { name: "jon", age: 40 },
];
const results = filterItems.filter((item, _index) => {
  return item.name === "jon";
});

console.log(results); //  [{ name: "jon", age: 20 }, { name: "jon", age: 40 }]
