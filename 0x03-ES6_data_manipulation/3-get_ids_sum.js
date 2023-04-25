export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, acc) => accumulator + acc.id, 0);
}
