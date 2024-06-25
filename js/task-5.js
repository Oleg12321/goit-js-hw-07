function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyBackgroundColor = document.querySelector('body')
const btn = document.querySelector('.change-color')
const spanText = document.querySelector('.color')
btn.addEventListener('click', () => {
    bodyBackgroundColor.style.backgroundColor = getRandomHexColor()
    spanText.textContent = getRandomHexColor()
})
