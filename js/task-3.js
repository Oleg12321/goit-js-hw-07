const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')
nameInput.addEventListener('input', (event) => {
    nameOutput.textContent = event.target.value
    if (event.target.value.trim() === '') {
        nameOutput.textContent = 'Anonymous'
    }
})