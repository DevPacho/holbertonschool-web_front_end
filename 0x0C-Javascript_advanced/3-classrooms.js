function createClassRoom(numbersOfStudents) {

  function studentSeat(seat) {
    return () => seat;
  }

  let students = [];

  for(let student = 0; student < numbersOfStudents; student++) {
    const seats = studentSeat(student + 1);
    students.push(seats);
  }

  return students;
}

const classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
