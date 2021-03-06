import { countDown } from './countDown.js'

// const targetDateUTC =

let hasRedirected = false
const targetDateUTC = 1616713200000 // test: new Date().getTime() - 20000
const url = 'https://sales.coinlist.co/casper-option-3'
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
  500,
  600,
  800,
  1000,
  2000,
  3000
]

const len = entryTimes.length
const index = Math.floor(Math.random() * 10) % len
const delay = targetDateUTC + entryTimes[index]
const actualWaitTime = delay - now

delayId.innerHTML = entryTimes[index]

// display countdown to the sale event, entering the sale event at the delay
countDown(delay)

setTimeout(accessLink, actualWaitTime)
