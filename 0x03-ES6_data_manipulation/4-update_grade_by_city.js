export default function updateStudentGradeByCity(students, city, newGrade) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const grades1 = newGrade.find((grade) => grade.studentId === student.id);
        const grade = grades1 ? grades1.grade : 'N/A';
        return { ...student, grade };
      });
  }
