import createjs from 'createjs-module'

class Arrow {
    constructor(stage, container) {
        this.arrowY = 0
        this.container = container
        this.stage = stage

        this.loadArrow()
    }
    addArrow = () => {
        let width = this.stage.canvas.width / 15
        this.arrowEl.setTransform(
            this.stage.canvas.width / 2 - width / 2,
            this.stage.canvas.height / 4 + this.stage.canvas.height / 2 + 10,
            width / this.arrowEl.image.width,
            width / this.arrowEl.image.width
        )

        this.arrowY = this.stage.canvas.height / 4 + this.stage.canvas.height / 2 + 10
        this.container.addChild(this.arrowEl)
        this.animateArrow()
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

    handleLoad = img => {
        this.arrowEl = new createjs.Bitmap(img.target, 'down-arrow')
        this.addArrow()
    }

    loadArrow = () => {
        let image = new Image()
        image.src = './title/down-arrow.png'
        image.onload = this.handleLoad
    }
}

export default Arrow