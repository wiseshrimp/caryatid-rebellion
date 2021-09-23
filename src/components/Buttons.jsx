import React from "react"

import '../styles/buttons.css'

import { BOTTOM_BUTTONS, BUTTONS } from "../constants"

export default class Buttons extends React.Component {
    onButtonClick = ev => {
        this.props.setPopup(ev.target.id)
    }

    renderButton = text => (
        <div
            key={text}
            id={text}
            className="button"
            onClick={this.onButtonClick}>{text}</div>
    )

    render() {
        return (
            <div className={`buttons ${this.props.showButtons ? 'visible' : 'hidden'}`}>
                <div id="buttons-container" className="buttons-container">
                    {Object.values(BUTTONS).map(this.renderButton)}
                </div>
                <div id="bottom-buttons-container" className="bottom-button-container">
                    {Object.values(BOTTOM_BUTTONS).map(this.renderButton)}
                </div>
            </div>
        )
    }
}
