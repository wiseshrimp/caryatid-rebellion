import React from "react";

export default class Buttons extends React.Component {
    constructor(props) {
        super(props)
    }

    onButtonClick = ev => {
        this.props.setPopup(ev.target.id)
    }

    render() {
        return (
            <div className={`buttons ${this.props.showButtons ? 'visible' : 'hidden'}`}>
                <div id="buttons-container" className="buttons-container">
                    <div id="audrey" className="button" onClick={this.onButtonClick}>AUDREY</div>
                    <div id="doris" className="button" onClick={this.onButtonClick}>DORIS</div>
                    <div id="hettie" className="button" onClick={this.onButtonClick}>HETTIE</div>
                </div>
                <div id="bottom-buttons-container" className="bottom-button-container">
                    <div id="about" className="button" onClick={this.onButtonClick}>ABOUT</div>
                    <div id="video" className="button" onClick={this.onButtonClick}>THE VIDEO</div>
                </div>
            </div>
        )
    }
}
