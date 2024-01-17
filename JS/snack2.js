console.log('S2-JS-OK');

//*Filtering students with highscore over 70
const highVoteStudents = studentsData.filter(student => student.grade > 70);

console.log('Studenti con voto superiore a 70: ', highVoteStudents);

//*Filtering students with highscore and cs id value
const selectedCustomStudents = studentsData.filter(student => student.grade > 70 && student.id > 120);

console.log('Studenti con voto superiore a 70 e id superiore a 120: ', selectedCustomStudents);


//*Mapping list for names student with uppercase only
const uppercaseNames = studentsData.map(student => ({ name: student.name.toUpperCase() }));

console.log('Nomi degli studenti scritti in maiuscolo:', uppercaseNames);
