// A pure Typescript function for performing addition on two positive integers                                                                                                                                                     
 function addNumbers(a: number, b: number): number {
  return a + b;
}


// A Pure Typescript function for alerting a greeting to a given user
interface User {
  name: string
  age: number
}

function greetUser(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

// Sample usage
console.log(addNumbers(4, 6));
console.log(greetUser({ name: "Amina", age: 25 }));

