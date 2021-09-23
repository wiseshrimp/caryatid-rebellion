import React from 'react'
import createjs from 'createjs-module'

import Buttons from './Buttons'
import Landing from './Landing'
import Placard from './Placard'
import Popup from './Popup'
import Sprite from './Sprite'
import Still from './Still'

import { FRAMERATE, PLACARDS, SPRITE_SHEETS, STILLS, TOTAL_ASSETS } from '../constants'
import { calculateLowerBound, changeHue, getScrollPosition, isTouchDevice } from '../utils'

window.createjs = createjs

class Stage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            areButtonsShowing: false,
            assetTransform: { 
                sprites: {}, 
                placards: {} 
            },
            currentSprite: null,
            lowerBound: 0,
            loadedElements: 0,
            mouseY: 0,
            popup: null,
            touchStartTimestamp: 0,
            touchEndTimestamp: 0,
            touchDirection: 0,
            touchStartPosition: 0,
            touchEndPosition: 0,
            y: 0 // Canvas y
        }
    }

    addEventListeners = () => {
        if (isTouchDevice()) {
            document.getElementById('canvas').addEventListener('touchend', this.onMouseUp)
            document.getElementById('canvas').addEventListener('touchstart', this.onMouseDown)
            document.addEventListener('wheel', this.onScroll)
        } else {
            document.addEventListener('wheel', this.onScroll)
        }

        window.addEventListener('resize', this.resize)
    }

    calculateLowerBound = () => {
        let lowerBound = calculateLowerBound(this.state.assetTransform.sprites.h, this.state.assetTransform.placards.h)
        
        this.setState({
            lowerBound
        })

        return lowerBound
    }

    changeBackground = () => {
        this.changeHue = setInterval(changeHue, 100)
    }

    checkButtons = y => {
        let areButtonsShowing = Math.abs(y) > window.innerHeight
        if (areButtonsShowing !== this.state.areButtonsShowing) {
            this.setState({
                areButtonsShowing
            })
        }
    }

    componentDidMount() {
        this.setup()
        this.addEventListeners()
        this.changeBackground()
    }

    draw = () => {
        this.stage.update()
    }

    onLoad = () => {
        this.setState({
            loadedElements: this.state.loadedElements + 1,
        })

        if (this.state.loadedElements + 1 === TOTAL_ASSETS) {
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
        let {pageY} = ev.touches[0]
        this.scroll(this.state.y + (pageY - this.state.mouseY))
        this.setState({
            mouseY: pageY,
            touchDirection: pageY > this.state.mouseY ? 'down' : 'up',
            touchEndPosition: pageY
        })
    }

    onMouseUp = ev => {
        const { y, lowerBound, touchDirection, touchStartPosition, touchEndPosition } = this.state
        const eventLength = this.state.touchEndTimestamp - this.state.touchStartTimestamp

        this.setState({
            touchEndTimestamp: ev.timeStamp,
        })

        if (eventLength < 150) return

        let newY = getScrollPosition(y, lowerBound, touchDirection, touchStartPosition, touchEndPosition, eventLength)
        
        createjs.Tween.get(this.stage, { override: true }).to({
            y: newY
        }, 500, createjs.Ease.sineOut)

        this.setState({ 
            y: newY 
        })
        
        document.getElementById('canvas').removeEventListener('touchmove', this.onMouseMove)
    }

    onScroll = ev => {
        let y = this.state.y - ev.deltaY
        this.scroll(y)
    }

    renderButtons = () => (
        <Buttons    
            showButtons = { this.state.areButtonsShowing }
            setPopup = { this.setPopup } />
    )

    renderLanding = () => ( 
        <Landing 
            stage = { this.stage }
            y = { this.state.y }
        />
    )

    renderPlacard = ({ id, src, after }) => (
        <Placard
            key = { id }
            id = { id }
            stage = { this.stage }
            handleLoad = { this.onLoad }
            setTransform = { this.setTransform }
            src = { src }
            after = { after }
        />
    )

    renderPopup = () => ( 
        <Popup 
            setPopup = { this.setPopup }
            which = { this.state.popup }
        />
    )

    renderSprite = ({ id, src }) => {
        let sprite = {
            currentSprite: this.state.currentSprite,
            setCurrentSprite: this.setCurrentSprite
        }

        let createjs = {
            stage: this.stage,
            queue: this.queue,
            setTransform: this.setTransform,
            handleLoad: this.onLoad
        }

        let data = {
            id,
            src,
            y: this.state.y,
            popup: this.state.popup
        }

        return (
            <Sprite
                key={id}
                sprite={sprite}
                createjs={createjs}
                data={data}
            />
        )
    }

    renderStill = ({ id, src }) => ( 
        <Still 
            key = { id }
            id = { id }
            stage = { this.stage }
            handleLoad = { this.onLoad }
            queue={this.queue}
            src = { src }
        /> 
    )

    resize = () => {
        let currentPos = this.state.y / this.state.lowerBound
        this.stage.canvas.width = window.innerWidth
        this.stage.canvas.height = window.innerHeight

        // Fixing pixelated scaling
        if (window.innerWidth < 600) {
            this.stage.canvas.width = 700
            this.stage.canvas.height = 1260
        }

        if (this.state.loadedElements + 1 === TOTAL_ASSETS) {
            setTimeout(() => {
                // Rescroll to current position
                let lowerBound = this.calculateLowerBound()
                let y = currentPos * lowerBound
                this.scroll(y)
            }, 100)
        }
    }

    scroll = y => {
        // Don't scroll if popup is open
        if (this.state.popup) {
            return
        }

        // Check to see if above or below scroll window
        if (y > 0) {
            return
        }

        if (-y > this.state.lowerBound && this.state.lowerBound) {
            return
        }

        this.checkButtons(y)

        this.setState({
            y
        })

        createjs.Tween.get(this.stage, { override: true }).to({
            y
        }, 500, createjs.Ease.sineOut)
    }

    setCurrentSprite = currentSprite => {
        this.setState({
            currentSprite
        })
    }

    setPopup = (popup = null) => {
        let areButtonsShowing = !popup

        this.setState({
            popup,
            areButtonsShowing
        })
    }

    setTransform = (spriteTransform, type) => {
        this.setState({
            assetTransform: Object.assign({}, this.state.assetTransform, {
                [type]: spriteTransform
            })
        })
    }

    setup = () => {
        // Setup stage
        this.stage = new createjs.Stage('canvas')
        this.stage.snapToPixelEnabled = true // Snap to nearest pixel
        this.stage.snapToPixel = true
        this.stage.enableMouseOver(20) // Update per second
        let ctx = this.stage.canvas.getContext('2d')
        ctx.webkitImageSmoothingEnabled = ctx.mozImageSmoothingEnabled = ctx.imageSmoothingEnabled = true
        createjs.Touch.enable(this.stage)

        this.resize()

        // Ticker
        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED
        createjs.Ticker.framerate = FRAMERATE
        createjs.Ticker.on('tick', this.draw)

        // Loading queue
        this.queue = new createjs.LoadQueue(true)
        this.queue.maintainScriptOrder = true
    }

    render() {
        return ( 
            <>
                <canvas 
                    id="canvas"
                    className = { `${this.state.popup && 'blurred'}` } />

                { this.renderLanding() }
                { this.renderButtons() }
                { this.state.popup && this.renderPopup() } 
                
                { SPRITE_SHEETS.map(this.renderSprite) } 
                { STILLS.map(this.renderStill) } 
                { PLACARDS.map(this.renderPlacard) }
            </>
        )
    }
}
export default Stage
