const student = {
  fullName: "Максим",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"],
};

const updatedStudent = giveJobToStudent(student, "веб-разработчик");

function giveJobToStudent(student, jobName) {
  alert(
    `Поздравляем! У студента ${student.fullName} появилась новая работа!` +
      ` Теперь он ${jobName}`
  );
  return { ...student, job: jobName };
}
