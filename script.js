function q (selector){
    return document.querySelector(selector)
}

function markValid (field){
    field.parentNode.classList.remove("input-invalid")
    field.parentNode.classList.add("input-valid")
}

function markInvalid (field){
    field.parentNode.classList.remove("input-valid")
    field.parentNode.classList.add("input-invalid")
}    

function main () {
q('#parking-form').addEventListener('submit', function(event) {
    event.preventDefault()
    let nameField= q('.input-field')
    let name= nameField.value.trim

    if (!name) {
        markInvalid(nameField)
    } else {
        markValid(nameField)
    }   
    
})
}

