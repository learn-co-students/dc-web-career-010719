// 'use strict'

// myGlobal = "this is a global variable"

// console.log(this)
//this is a lot of ruby's self

// function greet(){
//   debugger //this === paul
//   console.log(`${this.firstName} says hi`)
//   let createFullName = ()=>{
//     debugger //this === whether the parent scope this is
//     this.fullName = this.firstName + " " + this.lastName
//   }
//   createFullName()
// }

let paul = {
  firstName: "Paul",
  lastName: "Nicholsen",
  greet: greet
}

let ann = {
  firstName: "Ann",
  lastName: "Duong",
  greet: greet
}
//this depends on the OBJ in which you invoke this function off of
//in strict mode, the value of this inside a function can never be window

//bind, call, and apply
//bind() invoke off another function obj, it returns a copy of that funciton obj with the value of this predetermined
let boundGreet = greet.bind(ann)
let anotherBound = greet.bind(paul)
//you only bind a function once
document.querySelector("button").addEventListener("click", greet.bind(ann))
document.querySelectorAll("button")[1].addEventListener("click", greet.bind(paul))

let jake = {
  firstName: "Jake",
  lastName: "Shilling",
  greet: boundGreet
}

//call and apply do not return anything, when you invoke call or apply, it also immediately invokes the function you are calling off of

function greet(person1, person2, person3){
  console.log(`${this.firstName} says hi to ${person1} and ${person2} and ${person3}`)
}

// greet.call(ann, "Lane", "Trevor", "Will")
// greet.call(paul, "Will")
// boundGreet = greet.bind(ann, "Rob")
let ppl = ["Bruno","Robin","Josh"]
greet.apply(paul, ppl)













//
