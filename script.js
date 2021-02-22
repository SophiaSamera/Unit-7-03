document.getElementById('button').addEventListener('click', comparison)
let userInput = 0

function comparison () {
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)
  if (userInput >= 17) {
    document.getElementById('answer').innerHTML = 'You can see an R rated movie alone.'
  } else if (userInput >= 13) {
    document.getElementById('answer').innerHTML = 'You can see a PG-13 movie alone.'
  } else if (userInput >= 5) {
    document.getElementById('answer').innerHTML = 'You can see a G or PG movie alone.'
  } else {
    document.getElementById('answer').innerHTML = 'Youre too young for most things.'
  }
}
