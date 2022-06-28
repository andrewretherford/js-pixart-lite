const input = document.querySelector('#color-field')
const setColor = document.querySelector('#set-color')
const brush = document.querySelector('.brush')
const body = document.querySelector('body')
const swatchOne = document.querySelector('#swatch-one')
const swatchTwo = document.querySelector('#swatch-two')
const swatchThree = document.querySelector('#swatch-three')

// console.log(input, setColor, brush, body)

setColor.addEventListener('click', () => {
    brush.style.backgroundColor = input.value
})

swatchOne.addEventListener('click', () => {
    brush.style.background = window.getComputedStyle(swatchOne, null).getPropertyValue("background-color")
    console.log(swatchOne.style.color)
})

swatchTwo.addEventListener('click', () => {
    brush.style.backgroundColor = window.getComputedStyle(swatchTwo, null).getPropertyValue("background-color")
})

swatchThree.addEventListener('click', () => {
    brush.style.backgroundColor = window.getComputedStyle(swatchThree, null).getPropertyValue("background-color")
})

for(let i=0; i < 8000; i++){
    let div = document.createElement('div')
    div.classList.add('class', 'square')
    div.addEventListener('mouseover', () => div.style.backgroundColor = brush.style.backgroundColor )
    body.appendChild(div)
}

