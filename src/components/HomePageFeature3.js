import React from 'react'
import Button from './Button'
import {useQuery} from 'react-query'
import {getItems} from '../api/ApiCalls'
import HomepageYx1Desktop from '../assets/home/desktop/image-earphones-yx1.jpg'
import HomepageYx1Tablet from '../assets/home/tablet/image-earphones-yx1.jpg'
import HomepageYx1Mobile from '../assets/home/mobile/image-earphones-yx1.jpg'

export default function HomePageFeature3() {
    const itemName = 'yx1-earphones';
    const {data} = useQuery("item", getItems);
    const item = data && data.filter(item => item.slug === itemName)
    return (
        <>
        {item && 
        <div className="homepage-feature-three container">
             <picture>
                <source media="(min-width: 1000px)" srcSet={HomepageYx1Desktop}></source>
                <source media="(min-width: 600px)" srcSet={HomepageYx1Tablet}></source>
                <img src={HomepageYx1Mobile} alt="earphones"></img>
            </picture>
            <div className="details-box">
            <h4>YX1 Earphones</h4>
            <Button text={"See Product"} type={"two"} url={`/${item[0].category}/${item[0].slug}`}/>
            </div>
        </div>
        }
        </>
    )
}