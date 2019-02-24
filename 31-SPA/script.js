//When <some event happens>, a want to make a <what kind of?> fetch call and/or
//manipulate the DOM <in what way?>
(function(){
  let form
  document.addEventListener("DOMContentLoaded", init);

  function init(){
    //add an event listener to the form
    form = document.querySelector('form')
    form.addEventListener('submit', handleSubmitForm)
    //what to do when the DOM is DOMContentLoaded
    getAllPokemon()
  }

  function getPokemonDiv(){
    return document.querySelector("#pokemon-container")
  }

  function handleSubmitForm(e){
    e.preventDefault()
    postNewPokemon()
  }

  function postNewPokemon(){
    let data = {
      name: document.querySelector("#name-input").value,
      sprite: document.querySelector("#sprite-input").value
    }
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
    .then(newPokemon => {
      renderPokemon(newPokemon)
    })
  }

  function getAllPokemon(){
    fetch('http://localhost:3000/pokemon/')
    .then(resp => resp.json())
    .then(pokemonArray => {
      pokemonArray.forEach(renderPokemon)
      //take in a callback function -> takes in a single parameter and does stuff with that parameter
    })
  }

  function renderPokemon(pokemonObj){
    let pokemonId = pokemonObj.id
    //render my pokemon on the DOM
    //<div><h4>Bulbasaur</h4><img /></div>
    let div = document.createElement('div')
    getPokemonDiv().appendChild(div)
    div.classList.add("card")
    div.dataset.id = pokemonId
    div.id = "pokemon-" + pokemonId
    div.addEventListener('click', handleClickOfPokemon)

    let h4 = document.createElement('h4')
    div.appendChild(h4)
    h4.innerText = pokemonObj.name

    let img = document.createElement('img')
    img.src = pokemonObj.sprite
    div.appendChild(img)
  }

  function handleClickOfPokemon(event){
    let pokemonIdToBeDelete = event.currentTarget.dataset.id
    deleteFetch(pokemonIdToBeDelete)
  }

  function deleteFetch(id){
    fetch(`http://localhost:3000/pokemon/${id}`, {
      method:"DELETE"
    }).then(resp => resp.json())
    .then(() => {
      document.querySelector(`#pokemon-${id}`).remove()
    })
    .catch((error) => {alert('problem with server'); console.log(error)})
  }


})()
