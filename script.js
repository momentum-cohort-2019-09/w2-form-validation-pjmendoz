function q (selector){
    return document.querySelector(selector)
}

function qs(selector){
    return document.querySelectorAll(selector)
}


function markValid (field) {
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

function clearMsg () {
    let errorKids = qs(".text-danger")
    for (let i = 0; i < errorKids.length; i++){
        errorKids[i].remove()
    }
}

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

function isDateTodayOrLater (date) {
    let now = new Date()
    let userDate = new Date(date)
    console.log (now)
    return userDate <= now
}

q('#parking-form').addEventListener('submit', function(event) {
    event.preventDefault()

    clearMsg()

    let nameField= q('#name-field')
    let nameInput=q("#name").value

    if (!nameInput) {
        markInvalid(nameField,'Oops! Name Required.')
    } else {
        markValid(nameField)
    }  

    let carField= q('#car-field')
    let carInput1=q("#car-year").value
    let carInput2=q('#car-make').value
    let carInput3=q('#car-model').value
    

    if (!carInput1 || !carInput2 || !carInput3) {
        markInvalid(carField, 'Oops! Please fill blanks.')
    } else if (isNaN(carInput1) || carInput1 < 1900 || carInput1 > 2019) {
        markInvalid(carField, 'Oops! Please fill in valid car year')
    } else {
        markValid(carField)     
    }

    let dateField= q('#start-date-field')
    let dateInput=q("#start-date")
    let dateText= dateInput.value

    if (!dateText) {
        markInvalid(dateField, 'Oops! Please fill in the date.')
    } else if (isDateTodayOrLater(dateText)) {
        markInvalid(dateField, 'Oops! Please fill in a future date.')
    } else {
        markValid(dateField)
    }

    let daysField= q('#days-field')
    let daysInput=q("#days")
    let days= daysInput.value

    if (!days || isNaN(days) || days > 30) {
        markInvalid(daysField, 'Oops! Please fill in the number of days.')
    } else {
        markValid(daysField)
    }

    let ccField= q('#credit-card-field')
    let ccInput=q("#credit-card")
    let cc= ccInput.value

    if (!cc || isNaN(cc) || validateCardNumber(cc) === false) {
        markInvalid(ccField, 'Oops! Please fill in a valid Credit Card number.')
    } else {
        markValid(ccField)
    }

    let cvvField= q('#cvv-field')
    let cvvInput=q("#cvv")
    let cvv= cvvInput.value

    if (!cvv || cvv.length !== 3) {
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