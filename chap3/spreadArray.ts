namespace SpreadArray {
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const c = [...a, ...b];
  const d = a.concat(b);

  console.log("c before", c); //  c before [ 1, 2, 3, 4, 5, 6 ]
  console.log("d before", d); //  d before [ 1, 2, 3, 4, 5, 6 ]

  a.push(10);

  console.log("a", a); //  a [ 1, 2, 3, 10 ]
  console.log("c after", c); //  c after [ 1, 2, 3, 4, 5, 6 ]
  console.log("d after", d); //  d after [ 1, 2, 3, 4, 5, 6 ]

  //  both spread and concat create new arrays!
}
