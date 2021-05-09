namespace A {
  class A {
    aname: string = "A";
  }

  class B {
    bname: string = "B";
  }

  const a = new A();
  const b = new B();
  const c = { ...a, ...b };
  const d = Object.assign(a, b);

  console.log(c); //  { aname: 'A', bname: 'B' }
  console.log(d); //  A { aname: 'A', bname: 'B' }

  a.aname = "a1";

  console.log(c); //  { aname: 'A', bname: 'B' }  - new object from a+b
  console.log(d); //  A { aname: 'a1', bname: 'B' } - object made from a+b
}
