import React from 'react'
import createjs from 'createjs-module'

import Landing from './Landing'
import Placard from './Placard'
import Sprite from './Sprite'
import Still from './Still'
import {FRAMERATE, SPRITE_SHEETS, TOTAL_ASSETS, MARGIN, STILLS, PLACARDS} from '../utils/constants'

window.createjs = createjs

class Stage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      areButtonsShowing: false,
      assetTransform: {sprites: {}, placards: {}},
      hasLoaded: false,
      hasScrolled: false,
      y: 0,
      lowerBound: 0,
      loadedElements: 0
    }
  }

  componentDidMount() {
    this.setup()
    this.addEventListeners()
    this.changeBackground()
  }

  addEventListeners = () => {
    document.addEventListener('mousewheel', this.scroll)
    document.addEventListener('DOMMouseScroll', this.scroll)
    window.addEventListener('resize', this.resize)
  }

  calculateLowerBound = () => {
    let numOfSprites = SPRITE_SHEETS.length + STILLS.length
    let numOfPlacards = PLACARDS.length
    let lowerBound = numOfSprites * this.state.assetTransform.sprites.h + numOfPlacards * this.state.assetTransform.placards.h
    lowerBound += TOTAL_ASSETS * MARGIN.y * 2
    this.setState({
      lowerBound
    })
  }

  changeBackground = () => {
    let hue = 360

    let changeHue = () => {
        var col1 = Math.abs((hue % 720) - 360)
        var col2 = Math.abs(((hue+90) % 720) - 360)
        hue++

        document.body.style.background = 'linear-gradient(to right, hsl(' + col1 + ',70%, 75%) 0%,hsl(' + col2 + ',90%,75%) 100%)'
    }

    setInterval(changeHue, 64)
  }

  draw = () => {
    this.stage.update()
  }

  onLoad = () => {
    let hasLoaded = this.state.loadedElements + 1 === TOTAL_ASSETS
    this.setState({
      loadedElements: this.state.loadedElements + 1,
      hasLoaded
    })
    if (hasLoaded) {
      this.calculateLowerBound()
    }
  }

  scroll = ev => {
    let y = this.state.y - ev.deltaY / 2
    if (Math.abs(y) > window.innerHeight && !this.areButtonsShowing) {
      // Show buttons
    } else if (Math.abs(this.state.y) < window.innerHeight && this.areButtonsShowing) {
      // Hide buttons
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
    }, 300)
  }

  setTransform = (spriteTransform, type) => {
    this.setState({
      assetTransform: Object.assign({}, this.state.assetTransform, {[type]: spriteTransform})
    })
  }

  setup = () => {
    this.stage = new createjs.Stage('canvas')
    let ctx = this.stage.canvas.getContext('2d')
    ctx.webkitImageSmoothingEnabled = ctx.mozImageSmoothingEnabled = true

    this.resize()

    // Ticker
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED
    createjs.Ticker.framerate = FRAMERATE
    createjs.Ticker.on('tick', this.draw)
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

  renderSprite = ({id, src}) => {
    return <Sprite 
      key={id}
      id={id} 
      stage={this.stage}
      handleLoad={this.onLoad}
      setTransform={this.setTransform}
      src={src}
      y={this.state.y}
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
        this.calculateLowerBound()
        // this.landing.resize()

        let deltaY = this.state.y - currentPos * this.state.lowerBound
        let y = this.state.y - deltaY

        if (y > this.lowerBound) {
            y = -this.lowerBound
        }

        createjs.Tween.get(this.stage).to({
          y
        }, 200)

        this.setState({
          y
        })

        this.stage.update()
    }
  }

  render() {
    return (
      <div>
        <canvas id="canvas"></canvas>
        {this.renderLanding()}
        {SPRITE_SHEETS.map(this.renderSprite)}
        {STILLS.map(this.renderStill)}
        {PLACARDS.map(this.renderPlacard)}
      </div>
    )
  }
}
export default Stage
