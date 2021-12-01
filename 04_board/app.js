const borad = document.querySelector('#board')
const colors = ['#4C6A92', '#92B6D5', '#838487', '#B93A32', '#AF9483', '#AD5D5D', '#006E51', '#D8AE47', '#9E4624', '#B76BA3']
const SQUARES_NUM = 700;

for (let i = 0; i < SQUARES_NUM; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    borad.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 2px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}