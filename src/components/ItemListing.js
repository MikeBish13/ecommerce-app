import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import Button from './Button'

export default function ItemListing({item}) {
    let {url} = useRouteMatch();
    return (
        <li className="item-listing">
            <picture className="item-listing-img">
                <source media="(min-width: 1000px)" srcSet={`./assets/category-${item.category}/desktop/image-${item.slug}.jpg`}></source>
                <source media="(min-width: 600px)" srcSet={`./assets/category-${item.category}/tablet/image-${item.slug}.jpg`}></source>
                <img src={`./assets/category-${item.category}/mobile/image-${item.slug}.jpg`} alt="product"></img>
            </picture>
            <div className="item-listing-details">
                {item.new && <p className="new-product-txt">New Product</p>}
            <h2>{item.name}</h2>
            <p className="main-para">{item.description}</p>
            <Button url={`${url}/${item.slug}`} type={"one"} text={"See Product"}/>
        </div>
        </li>

    )
}
