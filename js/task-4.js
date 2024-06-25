const loginForm = document.querySelector('.login-form')
const obj = {}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.elements.email.value
    const password = form.elements.password.value
    if (email.trim() === '' || password.trim() === '') {
        alert('All form fields must be filled in')
	} else {
        obj.email = email.trim()
		obj.password = password.trim()
        form.reset()
    }
   
    console.log(obj)
    
})
