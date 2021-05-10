import React from 'react'
import createjs from 'createjs-module'

import Landing from './Landing'
import Placard from './Placard'
import Sprite from './Sprite'
import Still from './Still'
import Buttons from './Buttons'
import {FRAMERATE, SPRITE_SHEETS, TOTAL_ASSETS, MARGIN, STILLS, PLACARDS, POPUPS} from '../constants/constants'
import Popup from './Popup'

import {isTouchDevice} from '../utils/utils'

window.createjs = createjs

class Stage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      areButtonsShowing: false,
      assetTransform: {sprites: {}, placards: {}},
      currentSprite: null,
      hasLoaded: false,
      hasScrolled: false,
      y: 0,
      mouseY: 0,
      touchStartTimestamp: 0,
      touchEndTimestamp: 0,
      touchDirection: 0,
      touchStartPosition: 0,
      touchEndPosition: 0,
      isTouchDevice: false,
      popup: null,
      lowerBound: 0,
      loadedElements: 0,
      loaded: {sprites: 0, placards: 0}
    }
  }

  componentDidMount() {
    this.setState({
      isTouchDevice: this.isTouchDevice()
    })
    this.setup()
    this.addEventListeners()
    this.changeBackground()
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousewheel', this.scroll)
    document.removeEventListener('DOMMouseScroll', this.scroll)
    window.removeEventListener('resize', this.resize)
    clearInterval(this.changeHue)
  }

  addEventListeners = () => {
  
    if (isTouchDevice()) {
      document.getElementById('canvas').addEventListener('touchend', this.onMouseUp)
      document.getElementById('canvas').addEventListener('touchstart', this.onMouseDown)  
    } else {
      document.addEventListener('mousewheel', this.onScroll)
      document.addEventListener('DOMMouseScroll', this.onScroll)
    }
    window.addEventListener('resize', this.resize)
  }

  calculateLowerBound = () => {
    let numOfSprites = SPRITE_SHEETS.length + STILLS.length
    let numOfPlacards = PLACARDS.length
    let lowerBound = numOfSprites * this.state.assetTransform.sprites.h + numOfPlacards * this.state.assetTransform.placards.h
    lowerBound += TOTAL_ASSETS * MARGIN.y * 2 + MARGIN.y * 4
    this.setState({
      lowerBound
    })
    return lowerBound
  }

  changeBackground = () => {
    let hue = 360

    let changeHue = () => {
        var col1 = Math.abs((hue % 720) - 360)
        var col2 = Math.abs(((hue+90) % 720) - 360)
        hue++

        document.body.style.background = 'linear-gradient(to right, hsl(' + col1 + ',70%, 75%) 0%,hsl(' + col2 + ',90%,75%) 100%)'
    }

    this.changeHue = setInterval(changeHue, 64)
  }

  draw = () => {
    this.stage.update()
  }

  isTouchDevice = () => {
    return (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0))
  }

  onLoad = () => {
    let hasLoaded = this.state.loadedElements + 1 === TOTAL_ASSETS

    this.setState({
      loadedElements: this.state.loadedElements + 1,
      hasLoaded,
      // loaded: Object.assign({}, {[type]: [...this.state.loaded[type], id]}, this.state.loaded)
    })

    if (hasLoaded) {
      this.calculateLowerBound()
    }
  }

  onMouseDown = ev => {
    // Touch events are deeper into the event object, the only thing wrong was that using ev.pageY returned undefined and the scroll function was getting NaN passed
    this.setState({
      mouseY: ev.touches[0].pageY,
      touchStartTimestamp: ev.timeStamp,
      touchStartPosition: ev.touches[0].pageY
    })

    document.getElementById('canvas').addEventListener('touchmove', this.onMouseMove)

  }

  onMouseMove = ev => {
    this.scroll(this.state.y + (ev.touches[0].pageY - this.state.mouseY))
    this.setState({
      mouseY: ev.touches[0].pageY,
      touchDirection: ev.touches[0].pageY > this.state.mouseY ?  'down' : 'up',
      touchEndPosition: ev.touches[0].pageY
    })
  }

  onMouseUp = ev => {
    this.setState({
      touchEndTimestamp: ev.timeStamp,
    })
    const { y } = this.state
    const eventLength = this.state.touchEndTimestamp - this.state.touchStartTimestamp
    const pathLength = this.state.touchDirection === 'up' ? this.state.touchStartPosition - this.state.touchEndPosition : this.state.touchEndPosition - this.state.touchStartPosition
    const canvasHeight = document.getElementById('canvas').offsetHeight;
    const velocity = pathLength/eventLength;
    const velocityScroll = canvasHeight * velocity;
    let newScroll = 0
    if (this.state.touchDirection === 'up') {
      if(-(y - velocityScroll) > this.state.lowerBound && this.state.lowerBound) {
        newScroll = -this.state.lowerBound
      } else {
        newScroll = y - velocityScroll
      }
    } else {
      if (y + velocityScroll > 0) {
        newScroll = 0
      } else {
        newScroll = y + velocityScroll
      }
    }
    createjs.Tween.get(this.stage, {override: true}).to({
        y: newScroll
    }, 500, createjs.Ease.sineOut)
    this.setState({y: newScroll})
    document.getElementById('canvas').removeEventListener('touchmove', this.onMouseMove)
  }

  onScroll = ev => {
    let y  = this.state.y - ev.deltaY
    this.scroll(y)
  }

  scroll = y => {
    if (this.state.popup) return

    if (Math.abs(y) > window.innerHeight && !this.state.areButtonsShowing) {
      this.setState({
        areButtonsShowing: true
      })
    } else if (Math.abs(this.state.y) < window.innerHeight && this.state.areButtonsShowing) {
      // Hide buttons
      this.setState({
        areButtonsShowing: false
      })
    }

    if (y > 0) {
        return
    }

    if (-y > this.state.lowerBound && this.state.lowerBound) {
        return
    }
    
    this.setState({
      hasScrolled: true,
      y
    })

    createjs.Tween.get(this.stage, {override: true}).to({
        y
    }, 100, createjs.Ease.sineOut)
  }

  setCurrentSprite = currentSprite => {
    this.setState({
      currentSprite
    })
  }

  setTransform = (spriteTransform, type) => {
    this.setState({
      assetTransform: Object.assign({}, this.state.assetTransform, {[type]: spriteTransform})
    })
  }

  setup = () => {
    this.stage = new createjs.Stage('canvas')
    this.stage.snapToPixelEnabled = true
    this.stage.snapToPixel = true
    let ctx = this.stage.canvas.getContext('2d')
    ctx.webkitImageSmoothingEnabled = ctx.mozImageSmoothingEnabled = ctx.imageSmoothingEnabled = true
    createjs.Touch.enable(this.stage)

    this.resize()

    // Ticker
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED
    createjs.Ticker.framerate = FRAMERATE
    createjs.Ticker.on('tick', this.draw)
    
    this.queue = new createjs.LoadQueue(true)
    this.queue.maintainScriptOrder = true

    this.stage.enableMouseOver(20)
  }

  renderLanding = () => (
    <Landing
      stage={this.stage}
      loadedPercentage={this.state.loadedElements / TOTAL_ASSETS}
      hasScrolled={this.state.hasScrolled}
    />
  )

  renderPlacard = ({id, src, after}) => {
    return <Placard 
      key={id}
      id={id} 
      stage={this.stage}
      handleLoad={this.onLoad}
      setTransform={this.setTransform}
      src={src}
      after={after}
    />
  }

  renderPopup = () => (
    <Popup
      setPopup={this.setPopup}
      which={this.state.popup}
    />
  )

  renderSprite = ({id, src}) => {
    return <Sprite 
      key={id}
      id={id} 
      stage={this.stage}
      handleLoad={this.onLoad}
      setTransform={this.setTransform}
      queue={this.queue}
      src={src}
      y={this.state.y}
      popup={this.state.popup}
      loaded={this.state.loaded}
      setCurrentSprite={this.setCurrentSprite}
      currentSprite={this.state.currentSprite}
     />
  }

  renderStill = ({id, src}) => (
    <Still 
      key={id}
      id={id} 
      stage={this.stage}
      handleLoad={this.onLoad}
      src={src}
     /> 
    )

  resize = () => {
    let currentPos = this.state.y / this.state.lowerBound
    this.stage.canvas.width = window.innerWidth
    this.stage.canvas.height = window.innerHeight
     /* The issue with scaling was a tough one to crack. It is a canvas issue that browsers can't handle very well. Scaling an image distorts it. 
     What I did was using your mobile check, then if in mobile I overset the canvas width and height with a 5:9 but the window width is the same.
     This ends up using a smaller scale for the sprites ~ 0.42 instead of 0.21. Your calculations were not wrong, but with the smaller scale down,
     the image is not as distorted as it was. and still fits.
     TLDR: The canvas becomes bigger than the screen but everything is still fit to the screen **/

    if (window.innerWidth < 600) {
      this.stage.canvas.width = 700
      this.stage.canvas.height = 1260
    }
    if (this.state.hasLoaded) {
      setTimeout(() => {
        let lowerBound = this.calculateLowerBound()
        let y = currentPos * lowerBound
        this.scroll(y)
      }, 100)
    }
  }

  setPopup = popup => {
    let areButtonsShowing = !popup
    this.setState({
      popup,
      areButtonsShowing
    })
  }

  render() {
    const { popup, areButtonsShowing } = this.state
    // Initially setting the canvas dimensions was causing a flicker for the first load after the browser calculated the dimensions.
    return (
      <div>
        <canvas 
          id="canvas" 
          className={`${popup ? 'blurred' : ''}`}
          ></canvas>
        <Buttons
          showButtons={areButtonsShowing}
          setPopup={this.setPopup}
        />
        {popup ? this.renderPopup() : null}
        {this.renderLanding()}
        {SPRITE_SHEETS.map(this.renderSprite)}
        {STILLS.map(this.renderStill)}
        {PLACARDS.map(this.renderPlacard)}
      </div>
    )
  }
}
export default Stage
