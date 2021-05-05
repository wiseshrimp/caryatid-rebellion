import React from 'react'
import createjs from 'createjs-module'
import { PLACARDS, FIRST_PLACARD, MARGIN } from '../constants/constants'

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
        const { stage } = this.props;
        this.transform()
        this.addEventListener()
        stage.addChild(this.spriteEl)
        this.play()
    }

    addEventListener = () => {
        window.addEventListener('resize', this.transform)
    }

    componentDidMount() {
        this.load()
    }

    handleLoad = sprite => {
        const { handleLoad, id } = this.props
        this.spriteEl = new createjs.Sprite(sprite.result, this.id)
        handleLoad(id)
        this.add()
    }

    load = () => {
        const { src, id } = this.props;

        let loader = new createjs.LoadQueue(false)
        let manifest = {
            src: src,
            id: id,
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
        const { stage, after, id, setTransform } = this.props;
        let margin = stage.canvas.width / 10 < MARGIN.x ? MARGIN.x : stage.canvas.width / 10
        let transform = {x: 0, y: 0, w: 0, h: 0}
        let rectWidth = 1440
        let rectHeight = 200
        let toResize = rectWidth + MARGIN.y * 2 > stage.canvas.width
        let isScreenSmall = stage.canvas.width <= 600
        transform.w = toResize ? stage.canvas.width - margin : rectWidth
        transform.w = isScreenSmall ? stage.canvas.width : transform.w
        transform.h = (rectHeight / rectWidth) * transform.w
        transform.x = (stage.canvas.width - transform.w) / 2
        transform.x = isScreenSmall ? 0 : transform.x
        let cardHeight = transform.h * 2.4
        let yOffset = after.idx * cardHeight + (after.idx + 1) * MARGIN.y * 2
        PLACARDS.forEach(placard => {
            let i = placard.id.split('_')
            let idx = Number(i[i.length - 1]) - 1
            if (this.state.idx > idx) {
                yOffset += transform.h + MARGIN.y * 2
            }
        })
        transform.y = yOffset + stage.canvas.height
        let scale = transform.w / rectWidth
        this.spriteEl.setTransform(transform.x, transform.y, scale, scale)
        this.setState({
            transform
        })
        if (id === FIRST_PLACARD) {
            setTransform(transform, 'placards')
        }
    }

    render() {
        return (
            <div></div>
        )
    }
}