interface User {
  name: string;
  age: number;
}

const canDrive = (user: User) => {
  console.log("user is", user.name);

  user.age >= 16
    ? console.log("allowed to drive")
    : console.log("not allowed to drive");
};

const tom: User = {
  name: "tom",
  age: 20,
};

canDrive(tom);
