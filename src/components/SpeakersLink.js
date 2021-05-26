import React from 'react'
import SpeakerImg from '../assets/shared/desktop/image-speakers.png'
import Button from '../components/Button'

export default function SpeakersLink() {
    return (
        <div className="link-card">
            <img src={SpeakerImg} alt="a pair of speakers"></img>
            <h6>Speakers</h6>
            <Button text={"shop"} type={"four"} url={"/speakers"} />
        </div>
    )
}