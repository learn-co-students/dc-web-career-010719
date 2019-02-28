document.addEventListener('DOMContentLoaded', init)

function init(){
  console.log('DOM loaded')
  let cat1 = new Cat({id: 1, name: "Fluffy"})
  let cat2 = new Cat({id: 2, name: "Meowzie"})
  let cat3 = new Cat({id: 3, name: "Meowth"})
  let cat4 = new Cat({id: 4, name: "Same"})
  document.querySelector('#cats').appendChild(cat1.render())
  document.querySelector('#cats').appendChild(cat2.render())
  document.querySelector('#cats').appendChild(cat3.render())
  document.querySelector('#cats').appendChild(cat4.render())
}
