class Person {
  constructor(private readonly msg: string) {}

  speak() {
    //  this.msg = `speak ${this.msg}`;  -- now invalid because msg is readonly
    console.log(this.msg);
  }
}

const tom = new Person("hello");
//   tom.msg = "hello";  --  now invalid because field is private
tom.speak();
