function q (selector){
    return document.querySelector(selector)
}


function markValid (field) {
    // clearError(field)
    field.classList.remove("input-invalid")
    field.classList.add("input-valid")
}

function markInvalid (field, errorMsg) {
    field.classList.remove("input-valid")
    field.classList.add("input-invalid")
    
    if (errorMsg) {
        const errorPara = document.createElement('p')
        errorPara.classList.add('input-hint', 'text-danger', 'error-message')
        errorPara.innerText= errorMsg
        field.appendChild(errorPara)
    }
}

// function clearError (field) {
//     const fieldContainer = field.parentNode
//     for (let msg of fieldContainer.querySelectorAll(.error.message)){ msg.remove}
// }


q('#parking-form').addEventListener('submit', function(event) {
    event.preventDefault()
    let nameField= q('#name-field')
    let nameInput=q("#name").value

    if (!nameInput) {
        markInvalid(nameField,'Oops! Please add name.')
    } else {
        markValid(nameField)
    }  

    let carField= q('#car-field')
    let carInput1=q("#car-year").value
    let carInput2=q('#car-make').value
    let carInput3=q('#car-model').value
    

    if (!carInput1 || !carInput2 || !carInput3) {
        markInvalid(carField, 'Oops! Please fill blanks.')
    } else {
        markValid(carField)
    }

    let dateField= q('#start-date-field')
    let dateInput=q("#start-date")
    let date= dateInput.value

    if (!date) {
        markInvalid(dateField, 'Oops! Please fill in the date.')
    } else {
        markValid(dateField)
    }

    let daysField= q('#days-field')
    let daysInput=q("#days")
    let days= daysInput.value

    if (!days) {
        markInvalid(daysField, 'Oops! Please fill in the number of days.')
    } else {
        markValid(daysField)
    }

    let ccField= q('#credit-card-field')
    let ccInput=q("#credit-card")
    let cc= ccInput.value

    if (!cc) {
        markInvalid(ccField, 'Oops! Please fill in a valid Credit Card number.')
    } else {
        markValid(ccField)
    }

    let cvvField= q('#cvv-field')
    let cvvInput=q("#cvv")
    let cvv= cvvInput.value

    if (!cvv) {
        markInvalid(cvvField, 'Oops! Please fill in a valid CVV.')
    } else {
        markValid(cvvField)
    }

    let expirationField= q('#expiration-field')
    let expirationInput=q("#expiration")
    let expiration= expirationInput.value

    if (!expiration) {
        markInvalid(expirationField, 'Oops! Please fill in the expiration date.')
    } else {
        markValid(expirationField)
    }
}) 