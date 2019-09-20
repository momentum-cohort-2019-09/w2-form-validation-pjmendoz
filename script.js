function q (selector){
    return document.querySelector(selector)
}

function validateInput(input) {
    return (input) !== ""
    }


q('#parking-form').addEventListener('submit', function(event) {
    event.preventDefault()
    let nameField= q('#name-field')
    let nameInput=q("#name")
    let name= nameInput.value

    if (!name) {
        nameField.classList.remove("input-valid")
        nameField.classList.add("input-invalid")
    } else {
        nameField.classList.remove("input-invalid")
        nameField.classList.add("input-valid")
    }   

    let dateField= q('#start-date-field')
    let dateInput=q("#start-date")
    let date= dateInput.value

    if (!date) {
        dateField.classList.remove("input-valid")
        dateField.classList.add("input-invalid")
    } else {
        dateField.classList.remove("input-invalid")
        dateField.classList.add("input-valid")
    } 

    let daysField= q('#days-field')
    let daysInput=q("#days")
    let days= daysInput.value

    if (!days) {
        daysField.classList.remove("input-valid")
        daysField.classList.add("input-invalid")
    } else {
        daysField.classList.remove("input-invalid")
        daysField.classList.add("input-valid")
    } 

    let ccField= q('#credit-card-field')
    let ccInput=q("#credit-card")
    let cc= ccInput.value

    if (!cc) {
        ccField.classList.remove("input-valid")
        ccField.classList.add("input-invalid")
    } else {
        ccField.classList.remove("input-invalid")
        ccField.classList.add("input-valid")
    } 

    let cvvField= q('#cvv-field')
    let cvvInput=q("#cvv")
    let cvv= cvvInput.value

    if (!cvv) {
        cvvField.classList.remove("input-valid")
        cvvField.classList.add("input-invalid")
    } else {
        cvvField.classList.remove("input-invalid")
        cvvField.classList.add("input-valid")
    } 

    let expirationField= q('#expiration-field')
    let expirationInput=q("#expiration")
    let expiration= expirationInput.value

    if (!expiration) {
        expirationField.classList.remove("input-valid")
        expirationField.classList.add("input-invalid")
    } else {
        expirationField.classList.remove("input-invalid")
        expirationField.classList.add("input-valid")
    }     
})

