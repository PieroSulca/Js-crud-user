import { users } from './users.js'


function htmlRowsUsers(filterUsers) {
    const html = filterUsers.map(function (user, index) {
      return `<tr>
                      <td>${++index}</td>
                      <td>${user.name}</td>
                      <td>${user.email}</td>
                      <td>${user.age}</td>
                      <td>${
                        user.gender == "female" ? "femenimo" : "masculino"
                      }</td>
                      <td>
                          <button onclick="deleteUser(${index})" class="btn btn-danger">Eliminar</button>
                      </td>
                  </tr>`
    })
    return html.join("")
}

// obtenemos id de la tabla
function getTablebody() {
    return document.getElementById("table-body")
}

// Imprimir usuarios
function printUsers(filterUsers) {
    const htmlDataUsers = htmlRowsUsers(filterUsers)
    const tableBody = getTablebody()
    tableBody.innerHTML = htmlDataUsers
}

// obtenemos datos del nuevo usuario
function getNewUser() {
    const inputName = document.getElementById("input-name")
    const inputEmail = document.getElementById("input-email")
    const inputAge = document.getElementById("input-age")
    const inputGender = document.getElementById("select-age")
    const newUser = {
        name: inputName.value,
        email: inputEmail.value,
        age: inputAge.value,
        gender: inputGender.value,
    }
    return newUser
}

// añadir nuevo usuario
function addUser() {
    const newUser = getNewUser()
    users.unshift(newUser)
    printUsers(users)
}

// eliminar usuario 
function deleteUser(index) {
    users.splice(index - 1, 1)
    printUsers(users)
}

printUsers(users) // imprimir al recargar la página
window.addUser = addUser // añadir usuario
window.deleteUser = deleteUser // eliminar usuario
window.filter = filter // filtrar 


// recibimos como argumento el value de la opcion del HTML
function filter(value) {
    // filtrar por género
    if (value == "female") {
        const filterByGender = users.filter(user => {
            return user.gender == "female"
        })
        printUsers(filterByGender)
    }
    // filtrar por correo
    if (value == "academlo") {
        const filterByEmail = users.filter(user => {
            return user.email.endsWith('@academlo.com')
        })
        printUsers(filterByEmail)
    }
    // filtrar por nombre
    if (value == 'sort') {
        const sortNames = users.sort((a, b) => {
            if (a.name > b.name){return 1}
            else {return -1}
        })
        printUsers(sortNames)
    }
}
