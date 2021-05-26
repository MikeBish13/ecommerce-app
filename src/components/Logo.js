import React from 'react'
import {Link} from 'react-router-dom'
import AudiophileLogo from '../assets/shared/desktop/logo.svg'

export default function Logo() {
    return (
        <Link className="logo" to='/'><img src={AudiophileLogo} alt="audiophile logo"></img></Link>
    )
}
