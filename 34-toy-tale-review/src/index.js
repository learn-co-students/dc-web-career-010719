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
document.addEventListener("DOMContentLoaded",()=>{
  getToys()
  createNewToyButton()
})

function toyUrl(){
  return "http://localhost:3000/toys"
}

function getToys(){
  fetch(toyUrl())
  .then(res => res.json())
  .then((toys) =>{
    toys.forEach(toy=> toyCard(toy))
  })
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
  let container=document.getElementById('toy-collection')

  let card = document.createElement('div')
  card.className = 'card'

  let name = document.createElement('h2')
  name.innerText = toy.name

  let image = document.createElement('img')
  image.src = toy.image
  image.className = 'toy-avatar'

  let likeCount = document.createElement('p')
  likeCount.innerText= toy.likes + " Likes"
  likeCount.id = toy.id

  let likeButton = document.createElement('button')
  likeButton.className = "like-btn"
  likeButton.innerText = "Like <3"

  card.append(name, image, likeCount, likeButton)

  container.appendChild(card)

  card.addEventListener('click', (e)=>{
    likeToy(toy.id)
  })
}

function createNewToyButton(){
  let form = document.querySelector('.add-toy-form')
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    postToy()
  })
}

function postToy(e){
  let formData =document.querySelectorAll('.input-text')
  let data = {
    name: formData[0].value,
    image: formData[1].value,
    likes: 0
  }
  fetch(toyUrl(),{
    method: "POST",
    headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
  .then(toy => toyCard(toy))
}

function likeToy(id){
  let likeCount = document.getElementById(id)
  let newLikes =  parseInt(likeCount.innerText)
  newLikes++

  likeCount.innerText = newLikes + " Likes"

  let data = {likes:newLikes}

  fetch(`${toyUrl()}/${id}`,{
    method:'PATCH',
    headers:{
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body:JSON.stringify(data)
  }).then(res=>res.json())
  .then(console.log)
}
