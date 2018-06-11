function _getElement (id) {
  return document.getElementById(id)
}

function counterPop () {
  result.className = 'changing'
  setTimeout(function () {
    result.classList.remove('changing')
  }, 200)
}

const result = _getElement('result')
const subtract = _getElement('subtract')
const add = _getElement('add')

add.addEventListener('click', function () {
  console.log(`Hey, world, this is ${add.innerHTML}`)
  result.innerHTML++
  counterPop()
})

subtract.addEventListener('click', function () {
  console.log(`Hey, world, this is ${subtract.innerHTML}`)
  result.innerHTML--
  counterPop()
})
