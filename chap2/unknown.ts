let val: unknown = 22;
val = "string value";
val = new Array();

val instanceof Array && val.push(33);

console.log(val);
