class Cat {
  constructor(cat){
    this.id = cat.id
    this.name = cat.name
    this.image = cat.image
    this.breed = cat.breed
    this.floof = cat.floof
    this.hobbies = cat.hobbies
    Cat.all.push(this)
  }

  render(){
    let catDiv = document.createElement("div")
    catDiv.classList.add("four", "wide", "column")
    catDiv.innerHTML = `
    <div class="ui card">
      <div class="image">
        <img src="${this.image}">
      </div>
      <div class="content">
        <p>Name: ${this.name}</p>
        <p>Breed: ${this.breed}</p>
        <p>Floofiness: ${this.floof}</p>
        <ul>Hobbies: ${
          this.hobbies.map(h => `<li>${h.name}</li>`).join("")
        }
        <ul>
      </div>
    </div>
    `
    return this.addForm(catDiv)
  }

  //Will need to POST to cats table
  static addCat(event){
    event.preventDefault()
    fetch('http://localhost:3000/cats', {
    	method:"POST",
    	headers: {"Content-Type": "application/json"},
    	body: JSON.stringify({
        name: document.querySelector('form').children[1].value,
        breed: document.querySelector('form').children[3].value,
        floof: document.querySelector('form').children[4].value,
        image: document.querySelector('form').children[2].value
      })
    })
    .then(res => res.json())
    .then(cat => {
      debugger
      let catInstance = new Cat(cat)
      document.querySelector("#cats").appendChild(catInstance.render())
    })
  }

  addForm(catDiv){
    let input = document.createElement('input')
    input.placeholder = "Enter Hobby ID"
    let button = document.createElement('button')
    button.innerText = "Add Hobby"
    button.addEventListener("click", this.addHobby.bind(this))
    catDiv.querySelector(".card").appendChild(input)
    catDiv.querySelector(".card").appendChild(button)
    return catDiv
  }

  //Will need POST to join table
  addHobby(event){
    fetch('http://localhost:3000/cat_hobbies', {
    	method:"POST",
    	headers: {"Content-Type": "application/json"},
    	body: JSON.stringify({
        cat_id: this.id,
        hobby_id: event.target.previousElementSibling.value
      })
    })
    .then(res => res.json())
    .then(catHobby => {console.log(catHobby)})
  }

  //Will need to DELETE to cats table
  deleteCat(){
    fetch(`http://localhost:3000/cats/${this.id}`,{
    	method: "DELETE"
    })
    .then(res => res.json())
    .then(console.log)
  }

  //Will need to PATCH to cats table
  updateCat(){
    fetch(`http://localhost:3000/cats/${this.id}`, {
      method:"PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name: "Slinky"})
    })
    .then(res => res.json())
    .then(cat => {console.log(cat)})
  }
}
Cat.all = []
