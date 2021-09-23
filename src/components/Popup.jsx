import React from "react"

import '../styles/popups.css'

import {TEXT} from '../constants/text'

const Popup = ({setPopup, which}) => {
    let renderClose = () => (
        <div className="close-container">
            <div 
                onClick={ev => setPopup()}
                className="close"></div>
        </div>
    )

    let renderText = () => (
        {
            __html: TEXT[which].html
        }
    )

    return (
        <div className="popup-container visible">
            { renderClose() }
            <div className="text">
                <h1>{TEXT[which].header}</h1>
            </div>
            <div className="description">
                <div dangerouslySetInnerHTML={renderText()} />
            </div>
        </div>
    )
}

export default Popup
