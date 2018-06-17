function counterPop () {
  result.className = 'changing'
  setTimeout(function () {
    result.classList.remove('changing')
  }, 200)
}

const result = document.getElementById('result')
const buttons = document.getElementsByTagName('button')

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
