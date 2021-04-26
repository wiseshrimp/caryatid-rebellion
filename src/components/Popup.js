import React from "react"

import TEXT from '../constants/text'

export default class Popup extends React.Component {
    constructor(props) {
        super(props)
    }

    close = () => {
        this.props.setPopup(null)
    }
    renderClose = () => (
        <div className="close-container">
            <div 
                onClick={this.close}
                className="close"></div>
        </div>
    )

    renderText = () => (
        {
            __html: TEXT[this.props.which].html
        }
    )

    render() {
        return (
            <div className="popup-container visible">
                {this.renderClose()}
                <div className="text">
                    <h1>{TEXT[this.props.which].header}</h1>
                </div>
                <div className="description">
                    <div dangerouslySetInnerHTML={this.renderText()} />
                </div>
            </div>
        )
    }
}
