import React from "react"
import Header from '../components/Header'
import CardLinks from "../components/CardLinks"
import StaticDetails from "../components/StaticDetails"
import { useParams } from "react-router-dom"
import {useQuery} from 'react-query'
import { getItems } from "../api/ApiCalls"
import {formatNumber} from '../Helpers/Helpers'
import BackButton from "../components/BackButton"
import RecommendedItem from '../components/RecommendedItem'
import AddToCart from '../components/AddToCart'

export default function ProductPage() {
  const { slug } = useParams();
  const { data, isLoading, isError } = useQuery("item", getItems);
  const item = data && data.filter(item => item.slug === slug);

  if (isLoading) {
    return (
      <div>
        <Header />
        <h1>Finding item.....</h1>
      </div>
    )
  }

  if (isError) {
    return (
    <div>
      <Header />
      <h1>Oops. Product not found</h1>
    </div>
    )
  }

  return (
    <div>
      <Header />
      {item && (
        <div className="product-page container">
          <BackButton />
          <div className="product-page-head">
          <picture>
            <source media="(min-width: 1000px)" srcSet={`.${item[0].image.desktop}`}></source>
            <source media="(min-width: 600px)" srcSet={`.${item[0].image.tablet}`}></source>
            <img className="product-image product-image-main" src={`.${item[0].image.mobile}`} alt="product" /> 
          </picture>
          <div className="product-page-head-details">
          {item[0].new && <p className="new-product-txt">New Product</p>}
          <h2>{item[0].name}</h2>
          <p className="main-para product-page-desc">{item[0].description}</p>
          <p className="para-bold product-page-price">$ {formatNumber(item[0].price)}</p>
          <AddToCart item={item[0]}/>
          </div>
          </div>
          <div className="product-page-desktop-flex">
          <div className="product-page-features">
          <h3>Features</h3>
          <p className="main-para">{item[0].features}</p>
          </div>
          <div className="product-page-box">
          <h3>In the box</h3>
          <ul>
            {item[0].includes.map((item, index) => (
              <li key={index}>
                <p className="main-para"><span>{item.quantity}x</span> {item.item}</p>
              </li>
            ))}
          </ul>
          </div>
          </div>
          <div className="product-page-gallery">
          <picture className="product-image-one">
            <source media="(min-width: 1000px)" srcSet={`.${item[0].gallery.first.desktop}`}></source>
            <source media="(min-width: 600px)" srcSet={`.${item[0].gallery.first.tablet}`}></source>
            <img className="product-image" src={`.${item[0].gallery.first.mobile}`} alt="product one"></img>
          </picture>
          <picture className="product-image-two">
            <source media="(min-width: 1000px)" srcSet={`.${item[0].gallery.second.desktop}`}></source>
            <source media="(min-width: 600px)" srcSet={`.${item[0].gallery.second.tablet}`}></source>
            <img className="product-image" src={`.${item[0].gallery.second.mobile}`} alt="product two"></img>
          </picture>
          <picture className="product-image-three">
            <source media="(min-width: 1000px)" srcSet={`.${item[0].gallery.third.desktop}`}></source>
            <source media="(min-width: 600px)" srcSet={`.${item[0].gallery.third.tablet}`}></source>
            <img className="product-image" src={`.${item[0].gallery.third.mobile}`} alt="product three"></img>
          </picture>
          </div>
          <div className="product-page-related-items">
          <h3>You may also like</h3>
          <ul>
          {item[0].others.map(item => (
            <li key={item.slug}><RecommendedItem item={item} /></li>
          ))}
          </ul>
          </div>
        </div>
      )}
      <CardLinks position={"category-page"} />
      <StaticDetails />
    </div>
  );
}
