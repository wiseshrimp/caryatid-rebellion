import createjs from 'createjs-module'

import { INSTRUCTIONS_TEXT } from '../../constants'

class Instructions {
    constructor(stage, container) {
        this.container = container
        this.stage = stage

        this.addClickInstructions()
        this.addScrollInstructions()
    }

    addClickInstructions = () => {
        let arrowHeight = this.stage.canvas.width / 15 + 10
        let fontSize = this.stage.canvas.height / 20
        let y = this.stage.canvas.height / 4 + this.stage.canvas.height / 2 + 20 + arrowHeight

        let text = new createjs.Text().set({
            text: INSTRUCTIONS_TEXT,
            x: 0,
            y,
            font: `${fontSize}px custard, sans-serif`,
            lineWidth: this.stage.canvas.width - 30
        })

        this.container.addChild(text)
        text.x = this.stage.canvas.width / 2
        text.textAlign = 'center'
    }

    addScrollInstructions = () => {
        let fontSize = this.stage.canvas.height / 20
        let text = new createjs.Text().set({
            text: 'SCROLL',
            x: 0,
            y: this.stage.canvas.height / 5 + this.stage.canvas.height / 2,
            font: `${fontSize}px custard, sans-serif`,
            lineWidth: this.stage.canvas.width - 30
        })
        text.x = this.stage.canvas.width / 2
        text.textAlign = 'center'
        this.container.addChild(text)
    }
}

export default Instructions