//array in js
let person = ["faRuk","noMan"];
console.log(person[1]);

const users = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true },
  ];
  
  
  // 1. map: শুধুমাত্র user names-এর নতুন array তৈরি
  const userNames = users.map((user) => user.name);
  console.log(userNames); // Output: ["Alice", "Bob", "Charlie"]
  
  // 2. forEach: Active user-দের প্রিন্ট করুন
  users.forEach((user) => {
    if (user.active) console.log(user.name);
  });
  // Output: Alice
  //         Charlie
  
  // 3. filter: Active user-দের filter করুন
  const activeUsers = users.filter((user) => user.active);
  console.log(activeUsers);
  // Output: [{ id: 1, name: "Alice", active: true }, { id: 3, name: "Charlie", active: true }]
  
  // 4. find: ID = 2 থাকা user খুঁজুন
  const userWithId2 = users.find((user) => user.id === 2);
  console.log(userWithId2);
  // Output: { id: 2, name: "Bob", active: false }
  