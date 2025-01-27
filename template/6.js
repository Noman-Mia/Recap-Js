//template string
let person = {
    name:"NoMan",
    age:21,
    dept:"computer",
    sub:{
        first:"physics",
        second:"C++"
    }
};
console.log(person);

let mySelf = `my name is ${person.name}. Iam ${person.age} years old`;
console.log(mySelf);