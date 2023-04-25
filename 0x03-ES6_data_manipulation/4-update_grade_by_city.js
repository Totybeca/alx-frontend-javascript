export default  function updateStudentGradeByCity(students, city, newGrade) {
    return students
    .filter((student) => student.location === city)
    .map((student) => {
        const grade1 = newGrade.find((grade2) => grade2.studentId === student.id);
        const grade2 = grade1 ? grade1.grade2 : 'N/A';
        return {...student, grade2 };
    });
}
