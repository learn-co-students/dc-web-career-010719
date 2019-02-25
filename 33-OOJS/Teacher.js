class Teacher extends Person{
  constructor(firstName, lastName, id){
    super(firstName, lastName)
    this.teacherId = id
    this.students = []
  }

  teach(){
    console.log(`${this.firstName} is teaching`)
  }

  addStudent(student){
    this.students.push(student)
    student.setTeacher(this)
  }

  static lecture(){
    console.log('all teachers are busy lecturing')
  }
}

class Student extends Person{
  setTeacher(teacher){
    this.teacher = teacher
  }
}
