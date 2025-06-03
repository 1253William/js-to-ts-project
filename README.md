# js-to-ts-project
 Assignment designed for converting JavaScript to TypeScript


## Practice Assignment designed for converting JavaScript to TypeScript, complete with:

- A sample JS function

- Instructions to convert it to TypeScript

- A detailed rubric

- Testing steps

- VSCode setup instructions

## Goal:
- Familiarize yourself with TypeScript by converting JavaScript code into TypeScript and understanding types, interfaces, and compilation.

## Folder Structure:
- typescript-practice/
├── js-version/
│   └── mathUtils.js
├── ts-version/
│   └── mathUtils.ts
├── package.json
├── tsconfig.json
└── README.md

Your Assignment:
Task: Convert the code in js-version to TypeScript in ts-version/mathUtils.ts.

You must:
* Add type annotations to all function parameters and return types.
* Create an interface for the user object.
* Ensure type safety throughout the file.
* Add a few test cases in ts-version/mathUtils.ts to test your typed functions.

How to Set Up TypeScript in VSCode:
* Install Node.js (if you haven’t): https://nodejs.org
* Open Terminal in VSCode, run:
  
```
npm init -y
npm install typescript --save-dev
npx tsc --init
```
- This will create a tsconfig.json.

* Create ts-version/mathUtils.ts and begin converting the code.
* Run the TypeScript Compiler:
  
```
npx tsc ts-version/mathUtils.ts
```
- This compiles it to mathUtils.js. Run the output file:
```
node ts-version/mathUtils.js
```


 How to Test Your Code:
Add test cases at the bottom of your mathUtils.ts file:
```
console.log(addNumbers(10, 15)); // Expect 25
console.log(greetUser({ name: "Kwame", age: 30 })); // Expect: Hello, Kwame! You
```

Compile & run again:
```
npx tsc
node ts-version/mathUtils.js
```

Bonus Challenge:
-Add a subtractNumbers(a, b) function in JS and convert it to TS.
-Add a User class with a method getUserInfo() that returns a string.

Rubric (Out of 10)
Criteria	Points
✅ Functions successfully converted - 	2 marks
✅ Correct type annotations used -	2 marks
✅ Interface created for user	- 2 marks
✅ No compiler errors	1 - 2 marks
✅ Working test cases	 - 2 marks
✅ Code cleanliness & formatting	- 1 mark
Total	10 marks


