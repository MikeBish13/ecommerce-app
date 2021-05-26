import React from 'react'
import Button from './Button'
import {useQuery} from 'react-query'
import {getItems} from '../api/ApiCalls'

export default function HomePageFeature2() {
    const itemName = 'zx7-speaker';
    const {data} = useQuery("item", getItems);
    const item = data && data.filter(item => item.slug === itemName)
    return (
        <>
        {item && 
        <div className="homepage-feature-two container">
            <div>
            <h4>{item[0].name}</h4>
            <Button text={"See Product"} type={"two"} url={`/${item[0].category}/${item[0].slug}`}/>
            </div>
        </div>
        }
        </>
    )
}