import React from 'react'
import createjs from 'createjs-module'

import Arrow from './Arrow'
import Instructions from './Instructions'
import Title from './Title'

export default class Landing extends React.Component {
    create = () => {
        this.createContainer()
        this.createTitle()
        this.createInstructions()
        this.addArrow()
        this.addContainer()
        this.addEventListener()
    }

    addArrow = () => {
        this.arrow = new Arrow(this.props.stage, this.container)
    }

    addContainer = () => {
        this.props.stage.addChild(this.container)
    }

    addEventListener = () => {
        window.addEventListener('resize', this.resize)
    }

    componentDidUpdate = prevProps => {
        if (this.props.stage && !prevProps.stage) {
            this.create()
        }
    }

    createContainer = () => {
        const { stage } = this.props

        let container = new createjs.Container()
        this.container = container
        container.setBounds(0, 0, stage.canvas.width, stage.canvas.height)
    }

    createInstructions = () => {
        this.instructions = new Instructions(this.props.stage, this.container)
    }

    createTitle = () => {
        this.title = new Title(this.props.stage, this.container)
    }

    resize = () => {
        this.props.stage.removeChild(this.container)
        this.props.stage.removeChild(this.arrowEl)

        createjs.Tween.removeAllTweens()
        this.createContainer()
        this.createTitle()
        this.createInstructions()
        this.addArrow()
        this.addContainer()
    }
    
    render() {
        return <></>
    }
}