//! Homework
const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Bitola" },
  { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
  { ime: "Vancho", prosek: 10, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

//! Домашна

//* 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
const filtriraniStudenti = studenti.filter(student => student.grad === 'Skopje' && student.ime.endsWith('a') && student.prosek > 7);
const sortiraniStudenti = filtriraniStudenti.sort((a, b) => {
  if (a.ime < b.ime) {
    return -1;
  } else if (a.ime > b.ime) {
    return 1;
  } else {
    return 0;
  }
});

console.log(sortiraniStudenti);


//* 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
const filteredStudents = studenti.filter(student => student.prosek > 9 && student.grad !== 'Skopje');
const sortedStudents = filteredStudents.sort((a, b) => a.prosek - b.prosek);

console.log(sortedStudents);


//* 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
const sortStudents = studenti
.filter(student => student.ime.length === 5)
.sort((a, b) => b.prosek - a.prosek)
.slice(0, 3);

console.log(sortStudents);


//* 4. Градови подредени по групна висина на просек.
const sortedCities = studenti
.sort((a, b) => b.prosek - a.prosek)
.map((student) => ({ grad: student.grad, prosek: student.prosek }));

console.log(sortedCities);


//* 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.
const aStudents = studenti.filter(student => student.ime.endsWith("a"));
const nonAStudents = studenti.filter(student => !student.ime.endsWith("a"));

const sumAStudents = aStudents.reduce((sum, student) => sum + student.prosek, 0);
const sumNonAStudents = nonAStudents.reduce((sum, student) => sum + student.prosek, 0);

const resultAStudents = Math.round((sumAStudents / aStudents.length) * 10) / 10;
const resultNonAStudents = Math.round((sumNonAStudents / nonAStudents.length) * 10) / 10;

console.log("Просек на студенти чие име завршува на буквата 'a':", resultAStudents);
console.log("Просек на студенти чие име не завршува на буквата 'a':", resultNonAStudents);