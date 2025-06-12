function first() {
  second();
  console.log("First");
}

function second() {
  console.log("Second");
}

first();


// 1. Call first() ➝ stack: [first]
// 2. Call second() ➝ stack: [first, second]
// 3. second() finishes ➝ pop ➝ stack: [first]
// 4. console.log("First") ➝ stack: [first]
// 5. first() finishes ➝ pop ➝ stack: []
