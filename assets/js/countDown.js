
export const countDown = (delay) => {
  // Update the count down every 1 second
  let intVl = setInterval(() => {
    // Find the wait between now and the count down date
    // If the count down is finished, write some text

    let distance = delay - new Date().getTime()

    console.log('distance: ', distance)

    if (distance < 0) {
      document.getElementById('countDown').innerHTML = 'EXPIRED - Sale is On!!!'
      clearInterval(intVl)
    }

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Display the result in the element with id="demo"
    document.getElementById('countDown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
  }, 1000)
}
