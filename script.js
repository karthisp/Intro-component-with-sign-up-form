const introForm = document.querySelector('.intro-form');
const inputBoxes = introForm.querySelectorAll('.intro-form-input')
const textMatch = /[a-z]{4,20}/
const emailMatch = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
const passwordMatch = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

function validateInputValue(inputRef, type) {
    const inputValue = inputRef.value
    if(type === 'text' && !textMatch.test(inputValue)) {
        showError(inputRef)
    }

    if(type === 'email' && !emailMatch.test(inputValue)) {
        showError(inputRef)
    }

    if(type === 'password' && !passwordMatch.test(inputValue)) {
        showError(inputRef)
    }


}

function showError(node){
    const errorImage = node.querySelector('.intro-form-error-icon')
    const errorReason = node.querySelector('.intro-form-error-msg')
    errorImage.classList.remove('intro-hide-elm')
    errorReason.classList.remove('intro-hide-elm')
}

function hideErrorMsg(node){
    const errorImage = node.querySelector('.intro-form-error-icon')
    const errorReason = node.querySelector('.intro-form-error-msg') 
    errorImage.classList.add('intro-hide-elm')
    errorReason.classList.add('intro-hide-elm')
}

introForm.addEventListener('submit', function(e){
    e.preventDefault();
    const formContents = this;

    // first name validation
    validateInputValue(formContents.firstName, formContents.firstName.type)

    // last name validation
    validateInputValue(formContents.lastName, formContents.lastName.type)

    // email validation
    validateInputValue(formContents.email, formContents.email.type)

    // password validation
    validateInputValue(formContents.password, formContents.password.type)
})

inputBoxes.forEach(inputBox => {
    inputBox.addEventListener('focus', function() {
        hideErrorMsg(this.parentNode)
    })
})