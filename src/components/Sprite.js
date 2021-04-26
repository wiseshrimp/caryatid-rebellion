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
        let {transform} = this.state
        let isHeightBiggerThanScreen = transform.h > this.props.stage.canvas.height
        if (this.state.isPlaying) {
            if (isHeightBiggerThanScreen) {
                if (-this.props.y < transform.y && -this.props.y > transform.y + transform.h) {
                    this.stop()
                }
            } else if (transform.y < -this.props.y || transform.y + transform.h > -this.props.y + this.props.stage.canvas.height) {
                this.stop()
            }
        } else {
            if (!transform || this.state.hasPlayed) return
            if (isHeightBiggerThanScreen && -this.props.y < transform.y && -this.props.y > transform.y + transform.h) {
                this.play()
            } else if (transform.y > -this.props.y && transform.y + transform.h < -this.props.y + this.props.stage.canvas.height) {
                this.play()
            }
        }
    }

    componentDidUpdate = prevProps => {
        if (prevProps.y !== this.props.y) {
            // Check if out of bounds
            this.checkBounds()
        }

        if (!prevProps.queue && this.props.queue) {
            this.load()
        }

        if (!prevProps.popup && this.props.popup && this.state.isPlaying) {
            this.stop()
        }
    }

    check = () => {
        let hasFinished = this.spriteEl.currentFrame === this.spriteEl.spriteSheet._frames.length - 1
        if (hasFinished) {
            this.stop()
            this.setState({
                hasPlayed: true
            })
            createjs.Ticker.off('tick', this.check)
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
        console.log(this.props.queue)
        this.props.queue.loadManifest(manifest, true)
        this.props.queue.on("fileload", this.handleLoad)
    }

    onClick = ev => {
        if (this.state.hasPlayed) {
            this.play()
            // this.props.changeCurrent(this.id, true)
        }
    }

    play = () => {
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
            createjs.Ticker.on('tick', this.check)
        }
    }

    stop = () => {
        this.spriteEl.stop()
        this.setState({
            isPlaying: false
        })
    }

    transform = () => {
        let {innerWidth, innerHeight} = window
        let margin = window.innerWidth / 10 < MARGIN.x ? MARGIN.x : window.innerWidth / 10
        let transform = {x: 0, y: 0, w: 0, h: 0}
        let rectWidth = 1440
        let rectHeight = 480
        let toResize = rectWidth + MARGIN.y * 2 > innerWidth
        let isScreenSmall = window.innerWidth <= 600

        transform.w = toResize ? innerWidth - margin : rectWidth
        transform.w = isScreenSmall ? innerWidth : transform.w
        transform.h = (rectHeight / rectWidth) * transform.w
        transform.x = (innerWidth - transform.w) / 2
        transform.x = isScreenSmall ? 0 : transform.x
        transform.y = innerHeight + transform.h * this.state.idx + MARGIN.y * 2 * (this.state.idx + 1)
        transform.y += this.calculateYOffset(transform.h)
        let scale = transform.w / rectWidth
        this.spriteEl.scaleX = scale
        this.spriteEl.scaleY = scale
        this.spriteEl.x = transform.x
        this.spriteEl.y = transform.y
        this.setState({
            transform
        })
        if (this.props.id === FIRST_SPRITE) {
            this.props.setTransform(transform, 'sprites')
        }
    }

    render() {
        return null
    }
}