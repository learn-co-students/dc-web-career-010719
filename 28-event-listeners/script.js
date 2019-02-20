document.addEventListener("DOMContentLoaded", () => {
  //add event listeners to listen on click of an email <td>
  document.querySelectorAll('.email').forEach(emailCell => {
    emailCell.addEventListener('click', sendingEmail)
  })

  //add event listener to listen on submit of form
  let formElement = document.querySelector('form')
  formElement.addEventListener('submit', submitHandler)

  //add event lsiteners to listen on click of a row <tr>
  document.querySelectorAll('.person').forEach(personRow => {
    personRow.addEventListener('click', viewingProfile, true)
  })
})

function viewingProfile(event){
  // console.log("Viewing Profile:", event.target.innerText)
  console.log('Viewing profile:', event.currentTarget.innerText)
}

function sendingEmail(event){
  console.log('Sending an email', event.target.innerText)
  // event.stopPropagation()
}

function submitHandler(event){
  event.preventDefault()
  let firstName = document.querySelector("#firstNameInput").value
  let lastName = document.querySelector("#lastNameInput").value
  let email = document.querySelector("#emailInput").value
  addNewInstructor(firstName, lastName, email)
}

function addNewInstructor(firstName, lastName, email){
  let rowElement = document.createElement('tr')
  rowElement.addEventListener('click', viewingProfile)
  let tBodyElement = document.querySelector('tbody')
  tBodyElement.appendChild(rowElement)

  //create three <td> and appended them to <tr>
  let firstNameElement = document.createElement('td')
  let lastNamelElement = document.createElement('td')
  let emailElement = document.createElement('td') //create Jane's email <td>
  emailElement.addEventListener('click', sendingEmail)

  rowElement.appendChild(firstNameElement)
  rowElement.appendChild(lastNamelElement)
  rowElement.appendChild(emailElement)

  firstNameElement.classList.add('firstName')
  lastNamelElement.classList.add('lastName')
  emailElement.classList.add('email')
  firstNameElement.innerText = firstName
  lastNamelElement.innerText = lastName
  emailElement.innerText = email
}

// function addNewHTMLTemplate(firstName, lastName, email){
//   document.querySelector('tbody').innerHTML += `<tr>
//     <td class="firstName">${firstName}</td>
//     <td class="lastName">${lastName}</td>
//     <td class="email">${email}</td>
//   </tr>`
// }
