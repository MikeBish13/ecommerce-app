import React from 'react'
import {useHistory} from 'react-router-dom'

export default function BackButton() {
    const history = useHistory();
    return (
        <button className="btn-back" onClick={() => history.goBack()}>Go Back</button>
    )
}
