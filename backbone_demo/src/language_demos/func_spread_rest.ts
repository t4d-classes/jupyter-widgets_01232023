
// function parameter rest operator
// const doIt = (a: number, b: number, ...c: number[]) => {

//   console.log(a);
//   console.log(b);
//   console.log(c)

// };

// doIt(1,2,3,4,5,6);

const doIt2 = (a: number, b: number, c: number) => {

  console.log(a);
  console.log(b);
  console.log(c);

};

const args: [number, number, number] = [1,2,3];

// function argument spread operator
doIt2(...args);



