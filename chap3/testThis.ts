function MyFunction() {
  console.log(this);
}

MyFunction(); // this = node's global object
let test = new MyFunction(); //  this = MyFunction {}
