// advanced ternary operator 
const isActive = false;
const showUser = () => console.log("display user");
const hideUser = () => console.log("hide user");
// isActive ? showUser() : hideUser(); or
//use && if the left side is the true then right side will be executed
isActive && showUser();
//use || if the left side is false then right side will be executed
isActive || hideUser();


//toggle Bollen
isActive =!isActive;



// 1. Basic Usage
const age = 18;
const canVote = age >= 18 ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote); // Output: Yes, you can vote

// 2. Assigning a Value
const score = 85;
const grade = score > 90 ? "A" : score > 80 ? "B" : "C";
console.log(grade); // Output: B

// 3. Function Return with Ternary
const isEven = (num) => num % 2 === 0 ? "Even" : "Odd";
console.log(isEven(4)); // Output: Even
console.log(isEven(5)); // Output: Odd

// 4. Inline Check for Null or Undefined
const user = { name: "Alice", age: 25 };
const userName = user ? user.name : "Guest";
console.log(userName); // Output: Alice

// 5. Multiple Conditions
const temperature = 35;
const weather = temperature > 30 ? "Hot" : temperature > 20 ? "Warm" : "Cold";
console.log(weather); // Output: Hot

// 6. Ternary for Short Logic in Template Strings
const isMember = true;
const membershipMessage = `You are ${isMember ? "a member" : "not a member"} of the club.`;
console.log(membershipMessage); // Output: You are a member of the club.
