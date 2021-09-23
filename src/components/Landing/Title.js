import createjs from "createjs-module"

import { TITLE } from '../../constants'

class Title {
    constructor(stage, container) {
        this.container = container
        this.stage = stage

        this.addTitle()
    }

    addTitle = () => {
        let textContainer = new createjs.Container()
        let fontSize = this.stage.canvas.height / 10
        let text = new createjs.Text().set({
            text: TITLE,
            x: 0,
            y: 0,
            font: `${fontSize}px custard, sans-serif`,
            lineWidth: this.stage.canvas.width - 30
        })
        textContainer.addChild(text)
        text.textAlign = 'center'
        textContainer.x = this.stage.canvas.width / 2
        textContainer.y = this.stage.canvas.height / 2 - this.stage.canvas.height / 5
        this.container.addChild(textContainer)
    }
}

export default Title