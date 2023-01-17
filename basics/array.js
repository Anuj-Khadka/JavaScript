let marks = [1, 2, 3, 4, 6, 5];
console.log(typeof marks)
let yourName = ["anuj", "ram", "shyam", "hari", "steve"];
let mixed = ["str", 12, true, [9, 8, 7]];

console.log("marks: ", marks, "yourName: ", yourName, "mixed: ", mixed);

let array = new Array("copy", "cut", "paste", "undo", "redo");
console.log(array);
console.log(array[1]);
array[0] = "new";
console.log(array.length);
console.log(Array.isArray(array));
console.log(array.indexOf("cut"));

// Mutating or Modifing
let marks2 = [100, 101, 102, 103, 104];

console.log(marks);

marks.unshift(0);
console.log(marks);

console.log(marks.push(7));
console.log(marks);

marks.shift();
console.log(marks);

marks.pop();
console.log(marks);

marks.sort();
console.log(marks);

marks.reverse();
console.log(marks);

marks = marks.concat(marks2);
console.log(marks);

marks = marks.join(" and ");
console.log(marks);

marks = marks.slice(1,3);
console.log(marks);


const arr = ['Hello'];
arr.splice(1, 0, 'World');
console.log(arr)
// marks.splice(2, 3, 001, 002, 003, 004);          //not valid because highly manipulated.
console.log(marks);

delete marks2[2];
console.log(marks2)

// console.log(typeof marks);
marks.toString();
console.log(typeof marks);



//Object

// let myobject = {
//   yourName: "Anuj",
//   class: 12,
//   student: true,
//   subjects: [101, 102, 103, 104, 105, 107],
// };

// console.log(myobject.yourName);
// console.log(myobject["yourName"]);