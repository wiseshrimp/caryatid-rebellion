import React from 'react'
import createjs from 'createjs-module'
import { PLACARDS, FIRST_PLACARD, MARGIN } from '../utils/constants'

export default class Placard extends React.Component {
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
        this.props.stage.addChild(this.spriteEl)
        this.play()
    }

    componentDidMount() {
        this.load()
    }

    handleLoad = sprite => {
        this.spriteEl = new createjs.Sprite(sprite.result, this.id)
        this.props.handleLoad(this.props.id)
        this.add()
    }

    load = () => {
        let loader = new createjs.LoadQueue(false)
        let manifest = {
            src: this.props.src,
            id: this.props.id,
            type: 'spritesheet',
            crossOrigin: true
        }
        loader.loadManifest(manifest, true)
        loader.on("fileload", this.handleLoad)
    }

    play = () => {
        this.spriteEl.play()
    }

    transform = () => {
        let {innerWidth, innerHeight} = window
        let margin = window.innerWidth / 10 < MARGIN.x ? MARGIN.x : window.innerWidth / 10
        let transform = {x: 0, y: 0, w: 0, h: 0}
        let rectWidth = 1440
        let rectHeight = 200
        let toResize = rectWidth + MARGIN.y * 2 > innerWidth
        let isScreenSmall = window.innerWidth <= 600
        transform.w = toResize ? innerWidth - margin : rectWidth
        transform.w = isScreenSmall ? innerWidth : transform.w
        transform.h = (rectHeight / rectWidth) * transform.w
        transform.x = (innerWidth - transform.w) / 2
        transform.x = isScreenSmall ? 0 : transform.x
        let cardHeight = transform.h * 2.4
        let yOffset = this.props.after.idx * cardHeight + (this.props.after.idx + 1) * MARGIN.y * 2
        PLACARDS.forEach(placard => {
            let i = placard.id.split('_')
            let idx = Number(i[i.length - 1]) - 1
            if (this.state.idx > idx) {
                yOffset += transform.h + MARGIN.y * 2
            }
        })
        transform.y = yOffset + innerHeight
        let scale = transform.w / rectWidth
        this.spriteEl.setTransform(transform.x, transform.y, scale, scale)
        this.setState({
            transform
        })
        if (this.props.id === FIRST_PLACARD) {
            this.props.setTransform(transform, 'placards')
        }
    }

    render() {
        return (
            <div></div>
        )
    }
}