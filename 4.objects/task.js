function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age; 
  this.marks = [];
}

let student1 = new Student("Элли", "женский", 20);
let student2 = new Student("Страшила", "мужской", 35);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.marks) {
    this.marks.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function () {
  if (typeof this.marks === 'undefined' || this.marks.length === 0) {
    return 0;
  }
  return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}
