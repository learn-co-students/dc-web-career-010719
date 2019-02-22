## AJAX, Promises, and Fetch (Communicating with APIs)
- What is AJAX? Async JavaScript and XML
- What is Synchronous (blocking) vs Asynchronous (non-blocking)?

#### Synchronous
- if()
- for()
- function(){}

#### Asynchronous
- document.addEventListener()
- setTimeout(function(){console.log("hello 2 seconds later")}, 2000)
- setTimeout(function(){console.log("hello right away")}, 0)

### How do we handle/process async code?

### What if you have multiple async code that depend on each other?
- https://pokeapi.co/api/v2/pokemon/
- Given the name of the Pokemon, I want to find out the effect/description of its hidden ability

### XHR and Callback Hell
- Nested callbacks within nested callbacks
- Triangle shape
- Really hard to read and manage

### Welcome Fetch
- Built in web api
- Get JSON data
- Returns a promise object

### Promises and what are they
- [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- pending
- fulfilled (resolved/rejected)
- How to unwrap a promise using `.then`
- At Flatiron, we will work with promises via Fetch rather than creating our own Promises

### Promise chaining
- `.then().then()`
- Easier to read, easier to manage

### Practice with Animal Farm
- https://animal-farm-api.herokuapp.com/animals

### Lab Announcements
 - Check board for Lab priority
 - Intro to Fetch lab Pairing Lab



















#### Old School way of fetching
```XHR (web API)
//first xhr request makes a call to https://pokeapi.co/api/v2/pokemon
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/")
xhr.responseType = 'json'
xhr.send()
xhr.addEventListener("load", function(event){

  //once we get a list of all pokemon, extract bulbasaur's URL from the response
	let bulbasaurURL = event.target.response.results[0].url

  //then make a second xhr request to bulbasaurURL
	var xhr2 = new XMLHttpRequest();
	xhr2.open("GET", bulbasaurURL)
    xhr2.responseType = 'json'
    xhr2.send()
    xhr2.addEventListener("load", function(event){

    //once we get data about just bulbasaur, extra the ability URL from the response
		let abilityURL = event.target.response.abilities.find(ability => ability.is_hidden === true).ability.url

    //then make a third request to abilityURL
		var xhr3 = new XMLHttpRequest();
        xhr3.open("GET", abilityURL)
        xhr3.responseType = 'json'
        xhr3.send()
        xhr3.addEventListener("load", function(event){
            //finally, we have the data we want and can print it to the console
			      console.log(event.target.response.effect_entries[0].effect)
        })
    })
})
```

```FETCH (web API)
fetch(`https://pokeapi.co/api/v2/pokemon/`)
.then(res => res.json())
.then(json => {
  let bulbasaurURL = json.results[0].url
  fetch(bulbasaurURL)
  .then(res => res.json())
  .then(json => {
    let abilityURL = json.abilities.find(ability => ability.is_hidden === true).ability.url
    fetch(abilityURL)
    .then(res => res.json())
    .then(json => console.log(json.effect_entries[0].effect))
  })
})
```

```
function fetchingFromTerribleAPI(){
  let randomNumber = Math.random()
  return new Promise((resolve, reject) => {
    if(randomNumber < 0.8){
      resolve({data: {firstName:"Ann", lastName:"Duong"}})
    }else{
      reject("error!")
    }
  })
}
```
