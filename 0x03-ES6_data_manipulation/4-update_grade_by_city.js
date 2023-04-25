export default function updateStudentGradeByCity(students, city, newGrade) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const grades1 = newGrade.find((grades2) => grades2.studentId === student.id);
        const grades2 = grades1 ? grades1.grades2 : 'N/A';
        return { ...student, grades2 };
      });
  }
