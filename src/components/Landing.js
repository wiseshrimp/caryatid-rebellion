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
        const { hasAddedToStage } = this.state
        const { stage, hasScrolled, loadedPercentage } = this.props
        if (stage && !hasAddedToStage) {
            this.create()
            this.setState({
                hasAddedToStage: true
            })
        }
        if (!prevProps.hasScrolled && hasScrolled) {
            this.addClickInstructions()
        }
        if (loadedPercentage !== prevProps.loadedPercentage) {
            this.addLoading()
        }
    }

    add = () => {
        const { stage } = this.props

        stage.addChild(this.container)
    }

    addArrow = () => {
        const { stage } = this.props
        let width = stage.canvas.width / 15
        this.arrowEl.setTransform(
            stage.canvas.width / 2 - width / 2, 
            stage.canvas.height / 4 + stage.canvas.height / 2 + 10,
            width / this.arrowEl.image.width,
            width / this.arrowEl.image.width
        )

        this.arrowY = stage.canvas.height / 4 + stage.canvas.height / 2 + 10
        this.container.addChild(this.arrowEl)
        this.animateArrow()
    }

    addClickInstructions = () => {
        const { stage } = this.props
        let arrowHeight = stage.canvas.width / 15 + 10
        let fontSize = stage.canvas.height / 20
        let y = stage.canvas.height / 4 + stage.canvas.height / 2 + 20 + arrowHeight
        let text = new createjs.Text().set({
            text: 'CLICK TO REPLAY COMICS',
            x: 0,
            y,
            font: `${fontSize}px custard, sans-serif`,
            lineWidth: stage.canvas.width - 30
        })
        this.container.addChild(text)
        text.x = stage.canvas.width / 2
        text.textAlign = 'center'
    }

    addLoading = () => {
        const { loadedPercentage } = this.props

        let scaleX = loadedPercentage
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
        const { stage } = this.props

        let container = new createjs.Container()
        this.container = container
        container.setBounds(0, 0, stage.canvas.width, stage.canvas.height)
        if (!this.props.hasLoaded) {
            let {bar, fill} = this.createLoadingBar()
            container.addChild(bar)
            container.addChild(fill)
            this.fill = fill
            this.bar = bar
        }
        this.setState({
            scale: {x: stage.canvas.width, y: stage.canvas.height}
        })
    }

    createInstructions = () => {
        const { stage } = this.props

        let fontSize = stage.canvas.height / 20
        let text = new createjs.Text().set({
            text: 'SCROLL',
            x: 0,
            y: stage.canvas.height / 5 + stage.canvas.height / 2,
            font: `${fontSize}px custard, sans-serif`,
            lineWidth: stage.canvas.width - 30
        })
        text.x = stage.canvas.width / 2
        text.textAlign = 'center'
        this.container.addChild(text)
    }

    createLoadingBar = () => {
        const { stage } = this.props

        let bar = new createjs.Shape()
        let width = stage.canvas.width / 4
        let y = stage.canvas.height / 2
        bar.graphics.setStrokeStyle(3)
            .beginStroke('black')
            .drawRoundRectComplex((stage.canvas.width - width) / 2, y, width, 30, 5, 5, 5, 5)
            .endStroke()

        let fill = new createjs.Shape()
            .set({
                scaleX: 0,
                x: (stage.canvas.width - width) / 2 + 1.5,
                y: y + 1.5
            })
        fill.graphics
            .beginLinearGradientFill(["#4158D0","#C850C0", "#FFCC70"],  [0, .46, 1], 0, 100, 200, 300)
            .drawRoundRectComplex(0, 0, width - 3, 27, 5, 5, 5, 5)

        return {bar, fill}
    }

    createTitle = () => {
        const { stage } = this.props

        let textContainer = new createjs.Container()
        let fontSize = stage.canvas.height / 10
        let text = new createjs.Text().set({
            text: 'THE CARYATID REVOLUTION',
            x: 0,
            y: 0,
            font: `${fontSize}px custard, sans-serif`,
            lineWidth: stage.canvas.width - 30
        })
        textContainer.addChild(text)
        text.textAlign = 'center'
        textContainer.x = stage.canvas.width / 2
        textContainer.y = stage.canvas.height / 2 - stage.canvas.height / 5
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