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
    document.addEventListener('mousewheel', this.onScroll)
    document.addEventListener('DOMMouseScroll', this.onScroll)
    if (isTouchDevice()) {
      document.getElementById('canvas').addEventListener('touchend', this.onMouseUp)
      document.getElementById('canvas').addEventListener('touchstart', this.onMouseDown)  
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
    this.setState({
      mouseY: ev.pageY
    })

    document.getElementById('canvas').addEventListener('touchmove', this.onMouseMove)

  }

  onMouseMove = ev => {
    this.scroll(this.state.y + (ev.pageY - this.state.mouseY) / 40)
  }

  onMouseUp = ev => {
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
    this.stage.scaleX = window.innerWidth / this.stage.canvas.width
    this.stage.scaleY = window.innerHeight / this.stage.canvas.height

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
    return (
      <div>
        <canvas 
          id="canvas" 
          className={`${this.state.popup ? 'blurred' : ''}`}
          width="640"
          height="480"></canvas>
        <Buttons
          showButtons={this.state.areButtonsShowing}
          setPopup={this.setPopup}
        />
        {this.state.popup ? this.renderPopup() : null}
        {this.renderLanding()}
        {SPRITE_SHEETS.map(this.renderSprite)}
        {STILLS.map(this.renderStill)}
        {PLACARDS.map(this.renderPlacard)}
      </div>
    )
  }
}
export default Stage
