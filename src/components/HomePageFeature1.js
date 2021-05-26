import React from 'react'
import Button from './Button'
import {useQuery} from 'react-query'
import {getItems} from '../api/ApiCalls'
import HomepageZx9Mobile from '../assets/home/mobile/image-speaker-zx9.png'
import HomepageZx9Tablet from '../assets/home/tablet/image-speaker-zx9.png'
import HomepageZx9Desktop from '../assets/home/desktop/image-speaker-zx9.png'


export default function HomePageFeature1() {
    const itemName = 'zx9-speaker';
    const {data} = useQuery("item", getItems);
    const item = data && data.filter(item => item.slug === itemName)
    return (
        <>
        {item && 
        <div className="homepage-feature-one container">
            <picture>
                <source media="(min-width: 1000px)" srcSet={HomepageZx9Desktop}></source>
                <source media="(min-width: 600px)" srcSet={HomepageZx9Tablet}></source>
                <img className="hero-img" src={HomepageZx9Mobile} alt="speaker"></img>
            </picture>
            <div>
            <h1>{item[0].name}</h1>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Button text={"See Product"} type={"three"} url={`/${item[0].category}/${item[0].slug}`}/>
            </div>
        </div>
        }
        </>
    )
}