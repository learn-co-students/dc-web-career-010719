const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})


// OR HERE!
function toyUrl(){
  return "http://localhost:3000/toys"
}

function fetchToys(){
  fetch(toyUrl())
  .then(res => res.json())
  .then((toys) =>{
    console.log(toys)
    toys.map(toy => toyCard(toy))
  })
}

function toyContainer(){
  return document.querySelector('#toy-collection')
}
// ```
// <div class="card">
//   <h2>Woody</h2>
//   <img src=toy_image_url class="toy-avatar" />
//   <p>4 Likes </p>
//   <button class="like-btn">Like <3</button>
// </div>
// ```
function toyCard(toy){
  let card = document.createElement('div')
  card.className = "card"
  card.id = toy.id

  let toyName = document.createElement('h2')
  toyName.innerText = toy.name

  let toyImage = document.createElement('img')
  toyImage.src = toy.image
  toyImage.className = "toy-avatar"

  let likeCount = document.createElement('p')
  likeCount.innerText = toy.likes + " Likes"

  let likeButton = document.createElement('button')
  likeButton.className = "like-btn"
  likeButton.innerText = "Like <3"

  likeButton.addEventListener('click',()=>{patchLikes(++toy.likes, toy.id)})

  card.appendChild(toyName)
  card.appendChild(toyImage)
  card.appendChild(likeCount)
  card.appendChild(likeButton)

  toyContainer().appendChild(card)
}

function postToy(formData){
  console.log(formData[0].value, formData[1].value)
  let data = {
    name:formData[0].value,
    image:formData[1].value,
    likes:0
  }
  fetch(toyUrl(),{
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
  }).then(res=>res.json())
  .then(data => toyCard(data))
}

function toyFormSubmit(){
  toyForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let formData = document.querySelectorAll('.input-text')
    postToy(formData)
  })
}

function renderLikes(id){
  console.log(id)
  let card = document.getElementById(`${id}`)
  likes = parseInt(card.children[2].innerText.split(" ")[0])
  likes++
  card.children[2].innerText = likes + " Likes"
}

function patchLikes(likes, id){
  console.log(likes)
  fetch(`http://localhost:3000/toys/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({likes: likes})
  })
  .then(res => res.json())
  .then(data => renderLikes(data.id))
}

document.addEventListener('DOMContentLoaded',()=>{
  fetchToys()
  toyFormSubmit()
})
