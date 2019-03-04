document.addEventListener('DOMContentLoaded', init)

function init(){
  document.querySelector('form').addEventListener("submit", Cat.addCat)
  getHobbies()
  getCats()
}

function getHobbies(){
  fetch('http://localhost:3000/hobbies')
  .then(res => res.json())
  .then(hobbiesArray => {
    hobbiesArray.forEach(hobby => {
      let hobbyInstance = new Hobby(hobby.id, hobby.name)
      document.querySelector("#hobbies").appendChild(hobbyInstance.render())
    })
  })
}

function getCats(){
  fetch('http://localhost:3000/cats')
  .then(res => res.json())
  .then(catsArray => {
    catsArray.forEach(cat => {
      let catInstance = new Cat(cat)
      document.querySelector("#cats").appendChild(catInstance.render())
    })
  })
}
