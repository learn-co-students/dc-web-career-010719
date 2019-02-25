// let paul = {
//   firstName: "Paul",
//   lastName: "Nicholsen"
// }
//
// let mel = {
//   firstName: "Melanie",
//   lastName: "MacDonald"
// }
//
// let jake = {
//   firstName: "Jake",
//   lastName: "Shilling"
// }

// function teacherFactory(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

//ES5 OOJS (constructor function)
// function Teacher(firstName, lastName){
//   //this -> {}
//   this.firstName = firstName
//   this.lastName = lastName
//   Teacher.all.push(this)
// }
//
// Teacher.prototype.greet = function(){
//     console.log(`${this.firstName} say hi`)
//   }
//
// Teacher.all = []
// Teacher.lecture = function(){
//   console.log("All teachers to busy in lecture")
// }
//prototype is going to be created, any time you create a function



//ES6 class syntax
let paul = new Teacher("Paul", "Nicholsen", 2)
//         {}
paul.eatSandwhich = function(){return "eating sandwhich"}
let ann = new Teacher("Ann", "Duong", 3)
let rob = new Teacher("Rob", "Cobb", 1)
let josh = new Person("Josh", "Daniels")

let jane = new Student("Jane", "Doe")











//
