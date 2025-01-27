//object
let person = {
    name: "John",
    age: 30,
    city: "New York",
    job: {
      first: "bangladesh",
      second: "japan",
    },
  };

  let newPerson = { car : 2,...person}; //when i add some data in line one should use this methods
  console.log(newPerson);
 
//   let personDelate = delete person.name;
//   let addPerson = person.name = "noman";
//   console.log(person);
//   console.log(person.job["first"]);



//dot notaton and bracket notation
const myIntro = {
  name:"noMan",
  id:3333,
  home:"kGram",
  23:"age"
};
//dot notation 23 a kaj korbe na 
//dot notaton
const myName = myIntro.name;
console.log(myName);


//bracket notation
const find23 = myIntro[23];
console.log(find23);
const findHome = myIntro["home"];
console.log(findHome);