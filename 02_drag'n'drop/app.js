const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart (event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend (event) {
    event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
    event.preventDefault()
    //console.log('drap over')
}

function dragenter(event) {
    event.target.classList.add('hovered')
    //console.log('drap enter')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
    //console.log('drap leave')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
    //console.log('drap drop')
}