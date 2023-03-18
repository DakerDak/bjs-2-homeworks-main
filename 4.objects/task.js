function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.subject;
  this.marks = new Array();
  this.excluded;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark)
{
    this.marks.push(mark);  
}


Student.prototype.addMarks = function (...marks)
{
for(mark of marks)
  this.marks.push(mark);
}


Student.prototype.getAverage = function ()
{
var sum = 0;
this.marks.forEach(element => {
    sum += element;
})

return (sum / this.marks.length);
}


Student.prototype.exclude = function (reason)
{
delete this.subject;
delete this.marks;
this.excluded = reason;
}