import React from 'react'
import createjs from 'createjs-module'

import { FIRST_SPRITE, IMAGE_TYPES } from '../constants'
import { calculateTransform, createManifest, debounce } from '../utils'

export default class Sprite extends React.Component {
    constructor(props) {
        super(props)

        let i = props.data.id.split('_')
        
        this.state = {
            idx: Number(i[i.length - 1]) - 1,
            hasPlayed: false,
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
        this.props.createjs.stage.addChild(this.spriteEl)
    }

    addEventListeners = () => {
        this.spriteEl.addEventListener('click', this.onClick)
        window.addEventListener('resize', debounce(this.transform))
    }
    
    checkBounds = () => {        
        const { transform } = this.state
        const { stage } = this.props.createjs
        const { y } = this.props.data
        const { currentSprite } = this.props.sprite

        if (!transform || currentSprite) return

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
            if (isHeightBiggerThanScreen && -y < transform.y && -y > transform.y + transform.h) {
                this.play()
            } else if (transform.y > -y && transform.y + transform.h < -y + stage.canvas.height) {
                this.play()
            }
        }
    }
    
    checkDuration = () => {
        let hasFinished = this.spriteEl.currentFrame === this.spriteEl.spriteSheet._frames.length - 1
        if (hasFinished) {
            this.stop()
            this.setState({
                hasPlayed: true
            })
            createjs.Ticker.removeEventListener('tick', this.checkDuration)
        }
    }

    componentDidUpdate = prevProps => {
        if (!prevProps.createjs.queue && this.props.createjs.queue) {
            this.load()
        }

        if (!prevProps.data.popup && this.props.data.popup && this.state.isPlaying) {
            this.stop()
        }

        if (prevProps.data.y !== this.props.data.y) {
            // Check if out of bounds
            this.checkBounds()
        }
    }

    handleLoad = sprite => {
        if (sprite.item.id === this.props.data.id) {
            this.spriteEl = new createjs.Sprite(sprite.result, this.id)
            this.props.createjs.handleLoad(this.props.data.id, IMAGE_TYPES.SPRITES)
            this.add()
        }
    }

    load = () => {
        let {src, id} = this.props.data
        let manifest = createManifest(src, id, 'spritesheet')
        this.props.createjs.queue.loadManifest(manifest, true)
        this.props.createjs.queue.on("fileload", this.handleLoad)
    }

    onClick = ev => {
        if (!this.spriteEl) return
        if (this.state.hasPlayed) {
            this.play(true)
        }
    }

    play = force => {
        if (!this.spriteEl) return
        if (this.state.hasPlayed && !force) return

        if (force) {
            this.spriteEl.gotoAndPlay(0)
        } else {
            this.spriteEl.play()
        }
        this.setState({
            isPlaying: true
        })
        createjs.Ticker.addEventListener('tick', this.checkDuration)
        this.props.sprite.setCurrentSprite(this.props.data.id)
    }

    stop = force => {
        if (!force) {
            this.props.sprite.setCurrentSprite(null)
        }
        this.spriteEl.stop()
        this.setState({
            isPlaying: false
        })
    }

    transform = () => {
        const { stage, setTransform } = this.props.createjs
        const { id } = this.props.data

        let {transform, scale} = calculateTransform(stage.canvas.width, stage.canvas.height, this.state.idx)
        this.spriteEl.scaleX = this.spriteEl.scaleY = scale
        this.spriteEl.x = transform.x
        this.spriteEl.y = transform.y

        this.setState({
            transform
        })

        if (id === FIRST_SPRITE) {
            setTransform(transform, IMAGE_TYPES.SPRITES)
        }
    }

    render() {
        return <></>
    }
}