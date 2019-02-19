// console.log('connected')

//Passing a function as an argument to another function
let arr = [1,2,3,4]

let timesTwo = (x) => x*2
let invert = x => -x

let newArray = arr.map(invert)

function myOwnMapMethod(array, callback){
  let newArray = []
  for(const index in array){
    newArray.push(callback(array[index], index, array))
  }
  return newArray
}

//what are more examples of callbacks?
//setTimeout

function sayHello(){
  console.log('hii frands')
}
// setTimeout(sayHello, 3000)
// setInterval(sayHello, 500)

//General benefits of callbacks?
//modular design

// function welcomeStudentstoFlatiron(student, process){
//   console.log(`Welcome, ${student}!`)
//   process(student)
// }
//
// function giveOutKeyCard(name){
//   console.log(`${name}, here is your card`)
// }
//
// function expell(name){
//   console.log(`${name}, please leave the building`)
// }

//Function factory
// function welcomeStudentToMod(num){
//   //num is closed over
//   return function(name){
//     return `Welcome ${name} to Mod ${num}`
//   }
// }
//
// let welcomeToMod1 = welcomeStudentToMod(1)
// let welcomeToMod2 = welcomeStudentToMod(2)
// let welcomeToMod3 = welcomeStudentToMod(3)
// let welcomeToMod4 = welcomeStudentToMod(4)
// let welcomeToMod5 = welcomeStudentToMod(5)
// // let welcoming = welcomeStudentToMod(5)
// function welcomeGeneric(name, num){
//   return `Welcome ${name} to Mod ${num}`
// }

//create a counter
// function createCounter(){
//   count = 0
//   return function generateStudentID(name){
//     console.log(`Welcome ${name}, your ID is ${++count}`)
//     return 3
//   }
// }
//
// let incrementID = createCounter()
// let addOneToID = createCounter()


//Immediately Invoked Function Expression (IIFE)
(function (date, location, cohort){
  campus = `DC campus was opened on ${date} at ${location} with ${cohort}`
})("march 2018", "G Street", "Baby Got Stack")








//
