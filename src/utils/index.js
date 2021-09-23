import { changeHue } from './background'
import { calculatePlacardTransform, calculateTransform, calculateYOffset, calculateLowerBound } from './transform'
import { createManifest } from './manifest'

function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0))
}

function getDate() {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var d = new Date()
    var day = days[d.getDay()]
    var hr = d.getHours()
    var min = d.getMinutes()
    if (min < 10) {
        min = "0" + min
    }
    var ampm = "am"
    if (hr > 12) {
        hr -= 12
        ampm = "pm"
    }
    var date = d.getDate()
    var month = months[d.getMonth()]
    var year = d.getFullYear()
    return day + ", " + month + " " + date + ", " + year + " at " + hr + ":" + min + ampm
}

function getScrollPosition(y, lowerBound, touchDirection, touchStartPosition, touchEndPosition, eventLength) {
    const pathLength = touchDirection === 'up' ?
        touchStartPosition - touchEndPosition :
        touchEndPosition - touchStartPosition
    const canvasHeight = document.getElementById('canvas').offsetHeight
    const velocity = pathLength / eventLength
    const velocityScroll = canvasHeight * velocity

    let newY = 0

    if (touchDirection === 'up') {
        if (-(y - velocityScroll) > lowerBound && lowerBound) {
            newY = -lowerBound
        } else {
            newY = y - velocityScroll
        }
    } else {
        if (y + velocityScroll > 0) {
            newY = 0
        } else {
            newY = y + velocityScroll
        }
    }

    return newY
}

let debounce = (func, wait = 100) => {
    let timeout
    return function(...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
}

export { createManifest, debounce, calculatePlacardTransform, calculateLowerBound, changeHue, isTouchDevice, getDate, getScrollPosition, calculateTransform, calculateYOffset }