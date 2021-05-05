import React from 'react'
import createjs from 'createjs-module'

import {FIRST_SPRITE, MARGIN, PLACARDS} from '../constants/constants'

export default class Sprite extends React.Component {
    constructor(props) {
        super(props)
        let i = props.id.split('_')
        this.state = {
            idx: Number(i[i.length - 1]) - 1,
            transform: {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            }
        }
    }

    add = () => {
        this.transform()
        this.stop()
        this.addEventListeners()
        this.props.stage.addChild(this.spriteEl)
    }

    addEventListeners = () => {
        this.spriteEl.addEventListener('click', this.onClick)
        window.addEventListener('resize', this.transform)
    }

    calculateYOffset = height => {
        let yOffset = 0
        PLACARDS.forEach(placard => {
            let idx = placard.after.idx
            if (this.state.idx >= idx) {
                yOffset += height * 5 / 12 + MARGIN.y * 2
            }
        })
        return yOffset
    }

    checkBounds = () => {
        // if (this.props.currentSprite) return
        // Use const for state declarations, since they should never be changed by assigning a new value ( setState )
        // A good practice is declaring all props the same way you do with the state. Clears up the code and you do not have to repeat this.props... 
        const { transform } = this.state
        const { stage, y, currentSprite } = this.props
        let isHeightBiggerThanScreen = transform.h > stage.canvas.height
        if (this.state.isPlaying) {
            if (isHeightBiggerThanScreen) {
                if (-y < transform.y && -y > transform.y + transform.h) {
                    this.stop()
                }
            } else if (transform.y < -y || transform.y + transform.h > -y + stage.canvas.height) {
                this.stop()
            }
        } else {
            if (!transform || this.state.hasPlayed || currentSprite) return
            if (isHeightBiggerThanScreen && -y < transform.y && -y > transform.y + transform.h) {
                this.play()
            } else if (transform.y > -y && transform.y + transform.h < -y + stage.canvas.height) {
                this.play()
            }
        }
    }

    componentDidUpdate = prevProps => {

        if (!prevProps.queue && this.props.queue) {
            this.load()
        }

        if (!prevProps.popup && this.props.popup && this.state.isPlaying) {
            this.stop()
        }

        if (prevProps.y !== this.props.y) {
            // Check if out of bounds
            this.checkBounds()
        }
    }

    check = () => {
        let hasFinished = this.spriteEl.currentFrame === this.spriteEl.spriteSheet._frames.length - 1
        if (hasFinished) {
            this.stop()
            this.setState({
                hasPlayed: true
            })
            createjs.Ticker.removeEventListener('tick', this.check)
        }
    }

    handleLoad = sprite => {
        if (sprite.item.id === this.props.id) {
            this.spriteEl = new createjs.Sprite(sprite.result, this.id)
            this.props.handleLoad(this.props.id, 'sprites')
            this.add()
        }

        // this.add()
    }

    load = () => {
        let manifest = {
            src: this.props.src,
            id: this.props.id,
            type: 'spritesheet',
            crossOrigin: true
        }
        this.props.queue.loadManifest(manifest, true)
        this.props.queue.on("fileload", this.handleLoad)
    }

    onClick = ev => {
        if (!this.spriteEl) return
        if (this.state.hasPlayed) {
            this.play(true)
        }
    }

    play = force => {
        if (!this.spriteEl) return

        if (this.state.hasPlayed) {
            this.spriteEl.gotoAndPlay(0)
            this.setState({
                hasPlayed: false
            })
        } else {
            this.setState({
                isPlaying: true
            })
            this.spriteEl.play()
        }
        createjs.Ticker.addEventListener('tick', this.check)
        this.props.setCurrentSprite(this.props.id)
    }

    stop = force => {
        if (!force) {
            this.props.setCurrentSprite(null)
        }
        this.spriteEl.stop()
        this.setState({
            isPlaying: false
        })
    }

    transform = () => {
        // Using window dimensions like this is considered a bad practice. Since they already are used for our canvas we can take them from there.
        // I did this change whereever possible.
        // Also even if you have to use them I would recommend that you save them in a variable and reuse that everywhere
        // Here you had them saved but there were still checks with window.innerWidth which causes a browser reflow and can slow down the page
        const { stage, id, setTransform } = this.props;
        let margin = stage.canvas.width / 10 < MARGIN.x ? MARGIN.x : stage.canvas.width / 10
        let transform = {x: 0, y: 0, w: 0, h: 0}
        let rectWidth = 1440
        let rectHeight = 480
        let toResize = rectWidth + MARGIN.y * 2 > stage.canvas.width
        let isScreenSmall = stage.canvas.width <= 600

        transform.w = toResize ? stage.canvas.width - margin : rectWidth
        transform.w = isScreenSmall ? stage.canvas.width : transform.w
        transform.h = (rectHeight / rectWidth) * transform.w
        transform.x = (stage.canvas.width - transform.w) / 2
        transform.x = isScreenSmall ? 0 : transform.x
        transform.y = stage.canvas.height + transform.h * this.state.idx + MARGIN.y * 2 * (this.state.idx + 1)
        transform.y += this.calculateYOffset(transform.h)
        let scale = transform.w / rectWidth
        this.spriteEl.scaleX = scale
        this.spriteEl.scaleY = scale
        this.spriteEl.x = transform.x
        this.spriteEl.y = transform.y
        this.setState({
            transform
        })
        if (id === FIRST_SPRITE) {
            setTransform(transform, 'sprites')
        }
    }

    render() {
        return null
    }
}