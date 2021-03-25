import { countDown } from './countDown.js'

// const targetDateUTC =

let hasRedirected = false
const targetDateUTC = new Date().getTime() + 10000
const url = 'https://cnn.com'
const delayId = document.getElementById('delayValue')

// valid ONLY when `targetdateUTC` is greater than `now`
const isNowValid = (now) =>
  targetDateUTC > now

const accessLink = () => {
  !hasRedirected && window.open(url)
  hasRedirected = true
}

// This is the Community sale UTC time
const now = new Date().getTime()

if (!isNowValid(now)) {
  accessLink()
}

const entryTimes = [
  200,
  500,
  800,
  1000,
  2000,
  3000,
  10
]

const len = entryTimes.length
const index = Math.floor(Math.random() * 10) % len
const delay = targetDateUTC + entryTimes[index]
const actualWaitTime = delay - now

delayId.innerHTML = entryTimes[index]

// display countdown to the sale event, entering the sale event at the delay
countDown(delay)

setTimeout(accessLink, actualWaitTime)
