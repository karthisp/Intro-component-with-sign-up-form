const introForm = document.querySelector('.intro-form');
const inputBoxes = introForm.querySelectorAll('.intro-form-input')

function validateInputValue(inputRef, type) {
    const inputValue = inputRef.value
    const patternsToMatch = {
        text: /[a-z]{4,}/,
        email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    }

    if(!patternsToMatch[inputRef.type].test(inputValue)) {
        showError(inputRef)
    }
}

function showError(node){
    const errorImage = node.parentNode.querySelector('.intro-form-error-icon')
    const errorReason = node.parentNode.querySelector('.intro-form-error-msg')
    node.classList.add('error-highlight')
    errorImage.classList.remove('intro-hide-elm')
    errorReason.classList.remove('intro-hide-elm')
}

function hideErrorMsg(node){
    const errorImage = node.parentNode.querySelector('.intro-form-error-icon')
    const errorReason = node.parentNode.querySelector('.intro-form-error-msg') 
    node.classList.remove('error-highlight')
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
        console.log('inside ')
        hideErrorMsg(this)
    })
})