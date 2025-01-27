//spreed
// add and remove in array using apreed operator and filter function
// 1. Add to Beginning
let arr = [2, 3, 4];
arr = [1, ...arr];

// 2. Add to End
arr = [...arr, 5];

// 3. Add in Middle
arr = [...arr.slice(0, 2), 10, ...arr.slice(2)];

// 4. Remove Specific Element
arr = arr.filter((item) => item !== 3);

// 5. Add and Remove Simultaneously
arr = [...arr.filter((item) => item !== 2), 8];

console.log(arr); 
