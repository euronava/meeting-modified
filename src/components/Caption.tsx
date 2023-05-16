import React from 'react';
import {useHistory} from 'react-router-dom'

export const Caption = () => {
    const history = useHistory();
    return (
        <div>
            <button onClick={()=>history.push(-1)}>Back</button>
            <p>Send soemthing to the captions</p>
            <input />
            <button>Send</button>
        </div>
    )
}
