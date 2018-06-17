function counterPop () {
  result.className = 'changing'
  setTimeout(function () {
    result.classList.remove('changing')
  }, 200)
}

const result = document.getElementById('result')
const buttons = document.getElementsByTagName('button')

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i]
  button.addEventListener('click', function () {
    if (this.innerHTML === '+') {
      result.innerHTML++
    } else if (this.innerHTML === '-') {
      result.innerHTML--
    }
    counterPop()
  })
}
