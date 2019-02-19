// //as if func declarations are declared here
//
//
// functionDeclaration()
// functionExpression()
// arrowFunction('ann')
//
// //diff ways to write a functions
// function functionDeclaration(){
//   console.log('inside function declaration')
// }
//
// let functionExpression = function (){
//   console.log('inside function expression')
// }
//
// //if one param, () are optional
// // let arrowFunction = p1 => {
// //   console.log('inside arrow function with', p1)
// // }
//
// //if arrow function has a single line return
// let arrowFunction = p1 => `inside arrow function with ${p1}`
//
//
// let timesTwo = x => 2*x

// console.log('first line')
// var one = 1
//
// function firstFunction(){
//   var two = 2
//   console.log('firstFunction')
//   secondFunction()
//
//   function secondFunction(){
//     console.log('secondFunction')
//     var three = 3
//     console.log(two, three)
//     debugger
//   }
//   debugger
// }
//
//
//
// firstFunction()
// console.log('last line')


//how you declare variables in JS
var instructor = 'paul'
//var can be redeclared AND reassigned in the same scope

let director = 'josh'
//let can be reassigned but NOT redeclared in the same scope

const tcf = 'jake'
//const CANNOT be redeclared or reassigned in the same scope

// function aFunction(){
//   bFunction()
//
//   function bFunction(){
//     console.log('TCF:', tcf)
//   }
// }

//aFunction()








//Iteration

let arr = [1, 2, 4, 6]
let obj = {firstName: "P", lastName: "N", key: "at least it's friday"}

//for loop
// for(let i=0; i<arr.length; i++){
//   console.log(i)
// }

//is used for arrays where variab is the el
// for(const element of arr){
//   console.log(element)
// }

//is used for arrays where var is the index
// for(const index in arr){
//   console.log(index)
// }

//is used for objs where var is the keys
// for(const key in obj){
//   console.log(obj.key)
// }


// function newScope(){
//   inner()
//
//   function inner(){
//     aVar = "123"
//   }
// }
//
// newScope()

arr = [1, 2, 4, 6]

//forEach
// let callback = function(cur){
//     console.log(cur)
// }
// let x = arr.forEach(el => console.log(el))

//map will return a new array
// let timesFive = function(currentElement){
//   return currentElement * 5
// }
// let newArray = arr.map(el => 4)
// let weirdArray = arr.map(el => console.log(el))

// console.log(newArray)

//filter
// let callback = function(el){
//   return el > 1
// }
let filteredArray = arr.filter(el => el > 3)
console.log(filteredArray)












// //
