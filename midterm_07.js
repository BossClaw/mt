// 7 BONUS

// Write a higher-order function named sortStudents that takes an array of objects,
//  where each object represents a student with properties "name" and "grade".

// Sort the array based on the grades in descending order. Use this function on the following array:
// const students = [
//    { name: "Alice", grade: 85 },
//    { name: "Bob", grade: 92 },
//    { name: "Charlie", grade: 78 },
//    { name: "David", grade: 88 }
//  ];

// If the highest grade exceeds 90, log "Congratulations, Top Student!" before the sorted list is printed.

function sortStudents(students) {
  // DEFFO MIND MELT MOMENT
  // SINCE IT'S NOT LIKE C# LINQ or GDscript return a > b
  return students.sort((a, b) => b.grade - a.grade);
}

const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 88 },
];

// SORT THE STUDENTS
sortStudents(students);

// GET HIGHEST WHICH WOULD BE FIRST
if (students[0].grade > 90) {
  console.log(`Congratulations, Top Student ${students[0].name}!`);
}

// PRINT THE STUDENTS
students.forEach((student) => {
  console.log(`${student.name.padEnd(8)} GRADE ${student.grade}`);
});

// OUTPUT
// PS C:\Proj\SCHOOL\CPAN113 JS\mt> node midterm_07.js
// Congratulations, Top Student Bob!
// Bob      GRADE 92
// David    GRADE 88
// Alice    GRADE 85
// Charlie  GRADE 78
