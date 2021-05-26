import React from 'react'
import HeadphoneImg from '../assets/shared/desktop/image-headphones.png'
import Button from '../components/Button'

export default function HeadphoneLink() {
    return (
        <div className="link-card">
            <img src={HeadphoneImg} alt="a pair of headphones"></img>
            <h6>Headphones</h6>
            <Button text={"shop"} type={'four'} url={"/headphones"}/>
        </div>
    )
}
