export {};

// EXAMPLE 1 - Compare two Date strings in JavaScript and TypeScript

const dateStr1 = '2022-04-24';
const dateStr2 = '2022-09-21';

const date1 = new Date(dateStr1);
const date2 = new Date(dateStr2);

if (date1.getTime() === date2.getTime()) {
  console.log('dates are the same');
} else {
  // ✅ This runs 👇️ (dates are NOT the same)
  console.log('dates are not the same');
}

if (date1.getTime() > date2.getTime()) {
  console.log('date1 comes after date2');
} else if (date1.getTime() < date2.getTime()) {
  // ✅ This runs 👇️ (date2 comes after)
  console.log('date2 comes after date1');
} else {
  console.log('dates are the same');
}

// ---------------------------------------------------

// // EXAMPLE 2 - Comparing two date strings implicitly

// const dateStr1 = '2022-04-24';
// const dateStr2 = '2022-09-21';

// const date1 = new Date(dateStr1);
// const date2 = new Date(dateStr2);

// if (date1 > date2) {
//   console.log('date1 comes after date2');
// } else if (date1 < date2) {
//   // ✅ This runs 👇️ (date2 comes after)
//   console.log('date2 comes after date1');
// } else {
//   console.log('dates are the same');
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Formatting the two Date strings properly

// // 👇️ Formatted as MM/DD/YYYY
// const str = '07/21/2022';

// const [month, day, year] = str.split('/');

// // 👇️ Create valid Date object
// const date = new Date(+year, +month - 1, +day);
// console.log(date); // 👉️ Thu Jul 21 2022

// ---------------------------------------------------

// // EXAMPLE 4 - Compare Dates without Time in JavaScript and TypeScript

// const date1 = new Date('2022-01-23T06:55:31.820Z');
// const date2 = new Date('2022-01-23T09:30:24.820Z');

// const date1WithoutTime = new Date(date1.getTime());
// const date2WithoutTime = new Date(date2.getTime());

// date1WithoutTime.setUTCHours(0, 0, 0, 0);
// date2WithoutTime.setUTCHours(0, 0, 0, 0);

// if (date1WithoutTime.getTime() === date2WithoutTime.getTime()) {
//   // ✅ This runs 👇️ (dates are the same)
//   console.log('dates are the same');
// } else {
//   console.log('dates are not the same');
// }

// if (date1WithoutTime.getTime() > date2WithoutTime.getTime()) {
//   console.log('date1 comes after date2');
// } else if (date1WithoutTime.getTime() === date2WithoutTime.getTime()) {
//   // ✅ This runs 👇️ (dates are the same)
//   console.log('date1 and date2 are the same');
// } else {
//   console.log('date2 comes after date1');
// }
