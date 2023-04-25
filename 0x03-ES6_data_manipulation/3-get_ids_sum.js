export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, accum) => accumulator + accum.id, 0);
}
