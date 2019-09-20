function q (selector){
    return document.querySelector(selector)
}

function validateInput(input) {
    return (input) !== ""
    }

Function Main() {
    q('#parking-form').addEventListener('submit', function(event) {
        event.preventDefault()

        function Name() {
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
        }
        
        function date() {
            let dateField= q('#start-date-field')
            let dateInput= q('#start-date')
            let date= dateInput.value

            if () {
                dateField.classList.remove("input-valid")
                dateField.classList.add("input-invalid")
            }   else {
                dateField.classList.remove("input-invalid")
                dateField.classList.add("input-valid")
            }
        }
        
    })
}

