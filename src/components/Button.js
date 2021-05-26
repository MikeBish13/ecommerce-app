import React from 'react'
import {Link} from 'react-router-dom'

export default function Button({text, url, type}) {
    return (
        <Link className={`btn btn-${type}`} to={url}>{text}</Link>
    )
}
