import React from 'react'
import createjs from 'createjs-module'

import { calculatePlacardTransform, createManifest, debounce } from '../utils'
import { FIRST_PLACARD } from '../constants'

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
        this.addEventListener()
        this.props.stage.addChild(this.spriteEl)
        this.play()
    }

    addEventListener = () => {
        window.addEventListener('resize', debounce(this.transform))
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
        const { src, id } = this.props;

        let loader = new createjs.LoadQueue(false)
        let manifest = createManifest(src, id, 'spritesheet')
        loader.loadManifest(manifest, true)
        loader.on("fileload", this.handleLoad)
    }

    play = () => {
        this.spriteEl.play()
    }

    transform = () => {
        const { stage, after, id, setTransform } = this.props
        let {transform, scale} = calculatePlacardTransform(stage.canvas.width, stage.canvas.height, this.state.idx, after)
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
            <></>
        )
    }
}