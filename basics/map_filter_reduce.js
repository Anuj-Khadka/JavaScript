// map: returns new array after certain operation on each element of old array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mapped_arr = arr.map((value, index, array) => value * 2);
console.log(mapped_arr);

// filter: it filters out the element from an array with certain criteria and creates a new array
let filtered_arr = arr.filter((value) => value < 6);
console.log(filtered_arr);

// reduce: reduces all the element of an array to a single value
let reduced_arr = arr.reduce((a, b) => {
  return a + b;
});
console.log(reduced_arr);
