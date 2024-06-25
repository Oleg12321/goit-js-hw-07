function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, '0')}`
}

const controls = document.getElementById('controls')
const input = controls.querySelector('input')
const createBtn = controls.querySelector('[data-create]')
const destroyBtn = controls.querySelector('[data-destroy]')
const boxes = document.getElementById('boxes')

createBtn.addEventListener('click', () => {
	const amount = parseInt(input.value)
	if (amount >= 1 && amount <= 100) {
		createBoxes(amount)
		input.value = '' 
	}
})

destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
	destroyBoxes() 

	const fragment = document.createDocumentFragment()
	let size = 30

	for (let i = 0; i < amount; i++) {
		const div = document.createElement('div')
		div.classList.add('box')
		div.style.width = `${size}px`
		div.style.height = `${size}px`
		div.style.backgroundColor = getRandomHexColor()
		div.textContent = `${size} x ${size}`
		fragment.appendChild(div)
		size += 10 
	}

	boxes.appendChild(fragment) 
}

function destroyBoxes() {
	boxes.innerHTML = '' 
}
