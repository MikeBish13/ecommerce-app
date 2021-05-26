import React from 'react'
import EarphoneImg from '../assets/shared/desktop/image-earphones.png'
import Button from '../components/Button'

export default function SpeakersLink() {
    return (
        <div className="link-card">
            <img src={EarphoneImg} alt="a pair of earphones"></img>
            <h6>Earphones</h6>
            <Button text={"shop"} type={'four'} url={"/earphones"} />
        </div>
    )
}