import React from 'react'
import Nav from './Nav'
import Logo from './Logo'
import SocialIcons from './SocialIcons'

export default function Footer() {
    return (
        <footer>
            <div className="footer-details container">
            <Logo />
            <Nav position={"bottom"}/>
            <p className="main-para-light footer-text">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <p className="main-para-light copyright">Copyright 2021. All rights reserved</p>
            <SocialIcons />
            </div>
        </footer>
    )
}
