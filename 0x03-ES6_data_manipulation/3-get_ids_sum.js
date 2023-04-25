export default function getStudentIdsSum(students) {
    return students.reduce((fem, m) => fem + m.id, 0);
}
