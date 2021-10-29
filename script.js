const count = document.querySelector('.count')
const buttons = document.querySelector('.buttons')

buttons.addEventListener('click', (e) => {
  const btn = e.target.closest('button')
  if (btn.classList.contains('add')) count.innerHTML++
  if (btn.classList.contains('subtract')) count.innerHTML--
  if (btn.classList.contains('reset')) count.innerHTML = 0
  setColor()
})

function setColor() {
  count.style.color = '#fff'
  if (count.innerHTML > 0) count.style.color = 'yellow'
  if (count.innerHTML < 0) count.style.color = 'orangered'
}
