function setDate() {
  const now = new Date()
  const secondHand = document.querySelector('.second-hand')
  const seconds = now.getSeconds()
  const secondsDegrees = (seconds / 60) * 360 + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  const minuteHand = document.querySelector('.min-hand')
  const minutes = now.getMinutes()
  const minutesDegrees = (minutes / 60) * 360 + 90
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

  const hourHand = document.querySelector('.hour-hand')
  const hourDegrees = (minutes / 12) * 360 + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000)
