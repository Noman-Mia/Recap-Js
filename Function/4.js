// //function in js
// function addTwoNumber(addOne, addTwo){
//     // let addOne = 20;
//     // let addTwo = 10;
//     let addAll = addOne + addTwo;
//    return addAll;

// }

// const add = addTwoNumber(2,4);
// console.log(add);

//arrow function
let add = ((a,b)=>{
let first = a;
let second = b;
let addTwo = first + second;
return addTwo;
})
 let jog= add(30,20);
 console.log(jog);


 //multiline arrow
const add4 = (x, y, z) => {
    const sum = x + y + z;
    return sum;
  };
  console.log(add4(2, 2, 2));