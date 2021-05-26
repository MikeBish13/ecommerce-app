import React from "react";
import Button from "./Button";
import { useQuery } from "react-query";
import { getItems } from "../api/ApiCalls";
import HeroImageMobile from "../assets/home/mobile/image-header.jpg";
import HeroImageTablet from "../assets/home/tablet/image-header.jpg";
import HeroImageDesktop from "../assets/home/desktop/image-hero.jpg";

export default function HomePageHero() {
  const itemName = "xx99-mark-two-headphones";
  const { data } = useQuery("item", getItems);
  const item = data && data.filter((item) => item.slug === itemName);
  return (
    <>
      {item && (
        <div className="homepage-hero container">
          <picture>
            <source media="(min-width: 1000px)" srcSet={HeroImageDesktop}></source>
            <source media="(min-width: 600px)" srcSet={HeroImageTablet}></source>
            <img className="hero-img" src={HeroImageMobile} alt="headphones"></img>
          </picture>
          <p className="new-product-txt">New Product</p>
          <h1>{item[0].name}</h1>
          <p className="hero-text">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            text={"See Product"}
            type={"one"}
            url={`/${item[0].category}/${item[0].slug}`}
          />
        </div>
      )}
    </>
  );
}
