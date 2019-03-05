//Take an array os arrays, iterate through the array, find the greatest integer and the lowest integer, find the difference between them, add them up, and return that thingy

//arr is an array of arrays containing
//numbers, they can be negative

//iterate(map) -> return the differences
//Math.min(...) to find min
//Math.max(...) to find max
//result.reduce()
var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]
function findCheckSumUsingSort(arr){
  let checksum = 0
  arr.forEach((subArray) => {
    subArray.sort((a, b) => a-b)
    checksum += subArray[subArray.length - 1] - subArray[0]
  })
  return checksum
}

function findCheckSumMath(arr){
  return arr.map((subArray)=>{
    return Math.max(...subArray) - Math.min(...subArray)
  }).reduce((acc,curr)=> acc+curr)
}

//iterate -> use placeholder varaibles,
//compare every value, updating max and mins,
//add them up, return

//iterate -> sort the subarray
//min = subarray[0]
//max = subarray[last]
//find difference, add them up, return
