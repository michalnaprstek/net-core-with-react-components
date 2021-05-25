import React from 'react'
import ReactDOM from 'react-dom';
import OnOffToggle from './on-of-toggle'

const Parent = () => {

    return (
        <div>
            <span>This is a parent component with a sub component:</span>
            <OnOffToggle status="ON" />
        </div>
    )
}

ReactDOM.render(<Parent />, document.getElementById("parent"));