import React from 'react'
import createjs from 'createjs-module'
import {PLACARDS, MARGIN} from '../utils/constants'

export default class Still extends React.Component {
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
        this.props.stage.addChild(this.stillEl)
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

    componentDidMount() {
        this.load()
    }

    handleLoad = data => {
        this.stillEl = new createjs.Bitmap(data.target, this.props.id)
        this.props.handleLoad(this.props.id, 'stills')
        this.add()
    }

    load = () => {
        let image = new Image()
        image.src = this.props.src
        image.onload = this.handleLoad
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
        this.stillEl.scaleX = scale
        this.stillEl.scaleY = scale
        this.stillEl.x = transform.x
        this.stillEl.y = transform.y
        this.setState({
            transform
        })
    }

    render() {
        return (
            <div></div>
        )
    }
}
