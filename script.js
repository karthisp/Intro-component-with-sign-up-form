const introForm = document.querySelector('.intro-form');
const inputBoxes = introForm.querySelectorAll('.intro-form-input')

introForm.addEventListener('submit', function(e){
    e.preventDefault();
    const formContents = this;
    
    if(!formContents.firstName.value) {
        console.log(formContents.firstName)
        showError(formContents.firstName.parentNode)
    }
    
    if(!formContents.lastName.value) {
        console.log(formContents.lastName)
        showError(formContents.lastName.parentNode)
    }

    if(!formContents.email.value) {
        console.log(formContents.email.parentNode)
        showError(formContents.email.parentNode)
    }

    if(!formContents.password.value) {
        console.log(formContents.password)
        showError(formContents.password.parentNode)
    }
})

inputBoxes.forEach(inputBox => {
    inputBox.addEventListener('focus', function() {
        hideErrorMsg(this.parentNode)
    })
})

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
