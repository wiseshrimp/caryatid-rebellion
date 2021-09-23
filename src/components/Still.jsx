import createjs from 'createjs-module'
import React from 'react'

import { IMAGE_TYPES } from '../constants'
import { calculateTransform, debounce } from '../utils'

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
        this.props.handleLoad(this.props.id, IMAGE_TYPES.STILLS)
        this.props.stage.addChild(this.stillEl)
    }

    addEventListener = () => {
        window.addEventListener('resize', debounce(this.transform, 100))
    }

    componentDidUpdate = prevProps => {
        if (!prevProps.queue && this.props.queue) {
            this.load()
        }
    }

    handleLoad = data => {
        this.stillEl = new createjs.Bitmap(data.target, this.props.id)
        this.add()
        this.addEventListener()
    }

    load = () => {
        let image = new Image()
        image.src = this.props.src
        image.onload = this.handleLoad
    }

    transform = () => {
        let {width, height} = this.props.stage.canvas

        let {transform, scale} = calculateTransform(width, height, this.state.idx)
        this.stillEl.scaleX = this.stillEl.scaleY = scale
        this.stillEl.x = transform.x
        this.stillEl.y = transform.y
        this.setState({
            transform
        })
    }

    render() {
        return ( 
            <></>
        )
    }
}