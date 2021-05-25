import React, { useState } from 'react'

export default function OnOffToggle(props) {
    const [ status, setStatus ] = useState(props.status);

    return (
        <div>
            Here you can toggle the state: <button onClick={() => setStatus(status === 'ON' ? 'OFF' : 'ON')}>{status}</button>
        </div>
    )
}
