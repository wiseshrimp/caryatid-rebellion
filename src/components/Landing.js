import React from 'react'
import createjs from 'createjs-module'

export default class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasAddedToStage: false
        }
    }

    create = () => {
        this.load()
        this.createContainer()
        this.createTitle()
        this.createInstructions()
        this.add()
        this.addEventListener()
    }

    addEventListener = () => {
        window.addEventListener('resize', this.resize)
    }

    componentDidUpdate = prevProps => {
        if (this.props.stage && !this.state.hasAddedToStage) {
            this.create()
            this.setState({
                hasAddedToStage: true
            })
        }
        if (!prevProps.hasScrolled && this.props.hasScrolled) {
            this.addClickInstructions()
        }
        if (this.props.loadedPercentage !== prevProps.loadedPercentage) {
            this.addLoading()
        }
    }

    add = () => {
        this.props.stage.addChild(this.container)
    }

    addArrow = () => {
        let width = window.innerWidth / 15
        this.arrowEl.setTransform(
            this.props.stage.canvas.width / 2 - width / 2, 
            window.innerHeight / 4 + this.props.stage.canvas.height / 2 + 10,
            width / this.arrowEl.image.width,
            width / this.arrowEl.image.width
        )

        this.arrowY = window.innerHeight / 4 + this.props.stage.canvas.height / 2 + 10
        this.container.addChild(this.arrowEl)
        this.animateArrow()
    }

    addClickInstructions = () => {
        let arrowHeight = window.innerWidth / 15 + 10
        let fontSize = window.innerHeight / 20
        let y = window.innerHeight / 4 + this.props.stage.canvas.height / 2 + 20 + arrowHeight
        let text = new createjs.Text().set({
            text: 'CLICK TO REPLAY COMICS',
            x: 0,
            y,
            font: `${fontSize}px custard, sans-serif`,
            lineWidth: window.innerWidth - 30
        })
        this.container.addChild(text)
        text.x = this.props.stage.canvas.width / 2
        text.textAlign = 'center'
    }

    addLoading = () => {
        let scaleX = this.props.loadedPercentage
        if (scaleX >= 1) {
            this.container.removeChild(this.fill)
            this.container.removeChild(this.bar)
            return
        }

        createjs.Tween
            .get(this.fill, {override: true})
            .to({
                scaleX
            }, 150)
    }

    animateArrow = () => {
        this.arrowTween = createjs.Tween
            .get(this.arrowEl)
            .to({
                y: this.arrowY - 10
            }, 500)
            .to({
                y: this.arrowY + 10
            }, 500)
            .call(() => {
                this.animateArrow()
        })
    }

    createContainer = () => {
        let container = new createjs.Container()
        this.container = container
        container.setBounds(0, 0, window.innerWidth, window.innerHeight)
        if (!this.props.hasLoaded) {
            let {bar, fill} = this.createLoadingBar()
            container.addChild(bar)
            container.addChild(fill)
            this.fill = fill
            this.bar = bar
        }
        this.setState({
            scale: {x: window.innerWidth, y: window.innerHeight}
        })
    }

    createInstructions = () => {
        let fontSize = window.innerHeight / 20
        let text = new createjs.Text().set({
            text: 'SCROLL',
            x: 0,
            y: window.innerHeight / 5 + this.props.stage.canvas.height / 2,
            font: `${fontSize}px custard, sans-serif`,
            lineWidth: window.innerWidth - 30
        })
        text.x = this.props.stage.canvas.width / 2
        text.textAlign = 'center'
        this.container.addChild(text)
    }

    createLoadingBar = () => {
        let bar = new createjs.Shape()
        let width = window.innerWidth / 4
        let y = this.props.stage.canvas.height / 2
        bar.graphics.setStrokeStyle(3)
            .beginStroke('black')
            .drawRoundRectComplex((window.innerWidth - width) / 2, y, width, 30, 5, 5, 5, 5)
            .endStroke()

        let fill = new createjs.Shape()
            .set({
                scaleX: 0,
                x: (window.innerWidth - width) / 2 + 1.5,
                y: y + 1.5
            })
        fill.graphics
            .beginLinearGradientFill(["#4158D0","#C850C0", "#FFCC70"],  [0, .46, 1], 0, 100, 200, 300)
            .drawRoundRectComplex(0, 0, width - 3, 27, 5, 5, 5, 5)

        return {bar, fill}
    }

    createTitle = () => {
        let textContainer = new createjs.Container()
        let fontSize = window.innerHeight / 10
        let text = new createjs.Text().set({
            text: 'THE CARYATID REVOLUTION',
            x: 0,
            y: 0,
            font: `${fontSize}px custard, sans-serif`,
            lineWidth: window.innerWidth - 30
        })
        textContainer.addChild(text)
        text.textAlign = 'center'
        textContainer.x = this.props.stage.canvas.width / 2
        textContainer.y = this.props.stage.canvas.height / 2 - this.props.stage.canvas.height / 5
        this.container.addChild(textContainer)
    }

    handleLoad = data => {
        this.arrowEl = new createjs.Bitmap(data.target, 'down-arrow')
        this.addArrow()
    }

    load = () => {
        let image = new Image()
        image.src = './title/down-arrow.png'
        image.onload = this.handleLoad
    }

    removeLoading = () => {
        this.container.removeChild(this.fill)
        this.container.removeChild(this.bar)
    }

    resize = () => {
        this.props.stage.removeChild(this.container)
        this.props.stage.removeChild(this.arrowEl)
        createjs.Tween.removeAllTweens()        
        this.createContainer()
        this.createTitle()
        this.createInstructions()
        this.addArrow()
        this.add()
    }
    
    render() {
        return null
    }
}