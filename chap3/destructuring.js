const getEmployee = (id) => {
  return {
    name: "John",
    age: 35,
    address: "123 St",
    country: "United States",
  };
};
const { name: fullName, age } = getEmployee(22);

console.log("employee", fullName, age); //  employee John 35

const getEmployeeWorkInfo = (id) => {
  return [id, "Office St", "France"];
};
const [id, officeAddress] = getEmployeeWorkInfo(33);

console.log("employee", id, officeAddress); //  employee 33 Office St
