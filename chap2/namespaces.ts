namespace A {
  class FirstClass {}
}

namespace B {
  class SecondClass {}
  //  compile error BELOW. FirstClass is hidden from namespace B
  //  const test = new FirstClass();
}
