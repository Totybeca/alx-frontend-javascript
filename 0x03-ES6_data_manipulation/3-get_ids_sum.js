export default function getStudentIdsSum(students) {
    return students.reduce((bur, c) => bur + c.id, 0);
}
