import { countDown } from './countDown.js'

const targetDateUTC = 1616626800000
const url = 'https://sales.coinlist.co/casper-option-2'
const delayId = document.getElementById('delayValue')

// valid ONLY when `targetdateUTC` is greater than `now`
const isNowValid = (now) =>
  targetDateUTC > now.getTime()

const timeToAlert = () => {
  window.open(url)
}

// This is the Community sale UTC time
const now = new Date()

if (!isNowValid(now)) {
  timeToAlert()
}

const entryTimes = [
  30, // Enters sale 0.03 second before
  20,
  10,
  5,
  1,
  0

]

const len = entryTimes.length
const index = Math.floor(Math.random() * 10) % len
const delay = targetDateUTC - entryTimes[index]
const actualWaitTime = delay - now

delayId.innerHTML = entryTimes[index]

// display countdown to the sale event, entering the sale event at the delay
countDown(delay)

setTimeout(timeToAlert, actualWaitTime)

// const getReadableDate = delay => {
//   const date = new Date(delay)
//   const d = [
//     date.getFullYear(),
//     date.getMonth() + 1,
//     date.getDate(),
//     date.getHours(),
//     date.getMinutes(),
//     date.getSeconds()
//   ]
//   return `${d[1]}/${d[2]}/${d[0]} - ${d[3]}:${d[4]}:${d[5]}`
// }
