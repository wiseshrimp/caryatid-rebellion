import React from 'react'
import createjs from 'createjs-module'
import {PLACARDS, MARGIN} from '../constants/constants'

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

    debounce = function(func, wait = 100) {
        let timeout;
        return function(...args) {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            func.apply(this, args);
          }, wait);
        };
      }

    addEventListener = () => {
        // It is a good practice to have resize callbacks debounced. It is not a huge issue here but since there are calculations in the transform function, 
        // not debouncing the function might fill the browser memmory since it will fire constantly until the resize stops
        window.addEventListener('resize', this.debounce(this.transform, 100))
    }

    add = () => {
        const { stage } = this.props

        this.transform()
        stage.addChild(this.stillEl)
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
        const { handleLoad, id } = this.props
        this.stillEl = new createjs.Bitmap(data.target, id)
        handleLoad(id, 'stills')
        this.add()
        this.addEventListener()
    }

    load = () => {
        let image = new Image()
        image.src = this.props.src
        image.onload = this.handleLoad
    }

    transform = () => {
        const { idx } = this.state
        const { stage } = this.props
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
        transform.y = stage.canvas.height + transform.h * idx + MARGIN.y * 2 * (idx + 1)
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
