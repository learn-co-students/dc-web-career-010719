let buttonElement = document.querySelector('button')
buttonElement.addEventListener("click", fetchAllAnimals)

function fetchAllAnimals(){
  fetch('https://animal-farm-api.herokuapp.com/animals')
  .then(response => response.json())
  .then(animalsArray => {
    //an array
    // document.querySelector(".container").innerHTML = ""
    animalsArray.forEach((animal)=>{
      renderAnimal(animal)
    })
  })
}

function renderAnimal(animal){
  //render that animal to the DOM
  let template = `<div>
    <h3>${animal.name}<h3>
    <img src=${animal.img} />
  </div>`
  document.querySelector(".container").innerHTML += template
}
