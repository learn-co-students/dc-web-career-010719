console.log('connected')

//Programtically add a new row to our table for a new instructor

//Add a new <tr>
//Add three new <td>
//need to connect them to the correct parents
function addNewInstructor(firstName, lastName, email){
  //create a <tr> and appended it to <tbody>
  let trElement = document.createElement('tr')
  // trElement.id = "row-4"

  let tBodyElement = document.querySelector('tbody')
  tBodyElement.appendChild(trElement)

  //create three <td> and appended them to <tr>
  let tdElement1 = document.createElement('td')
  let tdElement2 = document.createElement('td')
  let tdElement3 = document.createElement('td')
  trElement.appendChild(tdElement1)
  trElement.appendChild(tdElement2)
  trElement.appendChild(tdElement3)

  //tdElement1 -> firstName
  tdElement1.classList.add('firstName')
  tdElement2.classList.add('lastName')
  tdElement3.classList.add('email')
  tdElement1.innerText = firstName
  tdElement2.innerText = lastName
  tdElement3.innerText = email
}

function addNewHTMLTemplate(firstName, lastName, email){
  document.querySelector('tbody').innerHTML += `<tr>
    <td class="firstName">${firstName}</td>
    <td class="lastName">${lastName}</td>
    <td class="email">${email}</td>
  </tr>`
}

addNewHTMLTemplate('Jane', "Doe", "jane@gmail.com")
addNewInstructor('Jane', 'Doe', 'jane@gmail.com')






//
