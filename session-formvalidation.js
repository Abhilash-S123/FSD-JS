const signUpform = document.querySelector('#signup-form')
const userName = document.querySelector('#name')
const emailId = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const successMessage = document.querySelector('#success-message')

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Helper functions
function showError(fieldId, message) {
     document.querySelector(`#${fieldId}-error`).textContent = message
     document.querySelector(`#${fieldId}`).classList.add('is-invalid')
}

function clearError(fieldId) {
     document.querySelector(`#${fieldId}-error`).textContent = ''
     document.querySelector(`#${fieldId}`).classList.remove('is-invalid')
}



userName.addEventListener('input', (e) => {
   const name = userName.value.trim()
    if ( name.length === 0 ) {   
        showError("name", 'Please enter a name')
      //  document.querySelector('#name-error').textContent = 'Please enter a name'
    } else if (name.length < 3) {
        showError('name', 'Name should be atleast 3 characters')
    } else {
        clearError('name')
         //document.querySelector('#name-error').textContent = ''
    }
})

emailId.addEventListener('input', (e) => {
    const email = emailId.value.trim()
    if( email.length === 0) {
        showError('email', 'please enter a email')
    } else if (!emailRegex.test(email)) {
        showError('email', 'Enter a valid email id')
    } else {
        clearError('email')
    }
})



signUpform.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = userName.value.trim()
    const email = emailId.value.trim()
    const passWord = password.value.trim()
    const confirmpassWord = confirmPassword.value.trim()


    if ( name.length === 0 ) {   
           showError("name", 'Please enter a name')
    } 

    if ( email.length === 0 ) {   
           showError("email", 'Please enter a email')
    } 

    if ( passWord.length === 0 ) {   
           showError("password", 'Please enter a password')
    } 
})

