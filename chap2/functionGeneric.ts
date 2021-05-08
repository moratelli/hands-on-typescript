/* Generics allows a type definition to include an associated type 
that can be chosen by the user of the generic type, instead of being 
dictated by the type creator. In this way, there are structures 
and rules, but still some amount of flexibility.  */

/* function getLength<T>(arg: T): number {
  if (arg.hasOwnProperty("length")) return arg["length"];

  return 0;
} */

interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(arg: T): number {
  return arg.length;
}

//  compiler error BELOW. number doesn't have length!
//  console.log(getLength<number>(22)); //  <> is optional
console.log(getLength("Hello World!"));
