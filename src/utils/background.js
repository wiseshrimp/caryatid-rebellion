let changeHue = () => {
    let hue = 360
    var col1 = Math.abs((hue % 720) - 360)
    var col2 = Math.abs(((hue + 90) % 720) - 360)
    hue++

    document.body.style.background = 'linear-gradient(to right, hsl(' + col1 + ',70%, 75%) 0%,hsl(' + col2 + ',90%,75%) 100%)'
}

export { changeHue }