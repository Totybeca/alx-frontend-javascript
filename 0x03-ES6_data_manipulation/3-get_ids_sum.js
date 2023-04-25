export default function getStudentIdsSum(students) {
    return students.reduce((fem, em) => fem + em.id, 0);
}
