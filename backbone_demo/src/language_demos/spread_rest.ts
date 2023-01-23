

// const nums = [1,2,3,4];

// // const newNums = nums.concat();
// // const newNums = nums.slice();

// const newNums = [];

// for (let x=0; x<nums.length; x++) {
//   newNums.push(nums[x])
// }

// const newNums2 = [
//   // array spread operator
//   ...nums,
// ]


// console.log(nums);
// console.log(newNums);
// console.log(nums === newNums);

// const person = {
//   firstName: 'Bob',
//   lastName: 'Smith',
// };

// const person2 = {
//   // object spread operator
//   ...person,
//   age: 23,
//   firstName: 'Tim',
// };

// console.log(person);
// console.log(person2);
// console.log(person===person2);


// const nums = [1,2,3,4,5,6];

// // array destructuring
// const [ firstNumber, secondNumber, ...otherNums /* array rest operator */ ] = nums;

// console.log(firstNumber, secondNumber, otherNums);

const person = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 45,
};

// object destructuring
const { firstName, ...otherProps /* object rest operator */ } = person;

console.log(firstName, otherProps);