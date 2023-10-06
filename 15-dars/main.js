////////////////recursion function//////
//? recursion function- takrorlanuvchi funcsiya
// let sum = 0;
// const sumValue = (e) => {
//   if (e == 1) {
//     return (sum += 1);
//   } else {
//     sum += e;
//     return sumValue(e - 1);
//   }
// };
// sumValue(4);
// console.log(sum);

// let company = {
//   sales: [
//     { name: "sales", salary: 1200 },
//     { name: "sam", salary: 1200 },
//   ],
//   development: {
//     sites: [
//       { name: "sites", salary: 1200 },
//       { name: "sam", salary: 1200 },
//     ],
//     intervals: [{ name: "inter", salary: 1200 }],
//   },
// };
// function calcSalary(e) {
//   if (Array.isArray(e)) {
//     return e.reduce((prev, current) => {
//       return prev + current.salary;
//       // console.log(current.salary);
//     }, 0);
//   } else {
//     let sum = 0;
//     // console.log(Object.values(e));
//     for (let evant of Object.values(e)) {
//       sum = sum + calcSalary(evant);
//       console.log(sum);
//     }
//     return sum;
//   }
//   //   console.log(sum);
// }

// // console.log;
// calcSalary(company);
let company = {
  sales: [
    { name: "sales", salary: 1200 },
    { name: "sam", salary: 1200 },
  ],
  development: {
    sites: [
      { name: "sites", salary: 1200 },
      { name: "sam", salary: 1200 },
    ],
    intervals: [{ name: "inter", salary: 1200 }],
  },
};
function calcSalary(e) {
  if (Array.isArray(e)) {
    return e.reduce((prev, current) => {
      return prev + current.salary;
      // console.log(current.salary);
    }, 0);
  } else {
    let sum = 0;
    // console.log(Object.values(e));
    for (let evant of Object.values(e)) {
      sum = sum + calcSalary(evant);
      console.log(sum);
    }
    return sum;
  }
  //   console.log(sum);
}

// console.log;
// calcSalary(company);

// let arr = [1, 2, 5, 6];

// console.log(
//   arr.reduce((prev, current) => {
//     return prev + current;
//   }, 0)
// );
