import React from "react";
import StaticMobileImg from "../assets/shared/mobile/image-best-gear.jpg";
import StaticTabletImg from "../assets/shared/tablet/image-best-gear.jpg";
import StaticDesktopImg from "../assets/shared/desktop/image-best-gear.jpg";

export default function StaticDetails() {
  return (
    <div className="static-details container">
      <picture className="static-details-img">
        <source srcSet={StaticDesktopImg} media="(min-width: 1000px)" />
        <source srcSet={StaticTabletImg} media="(min-width: 700px)" />
        <img
          src={StaticMobileImg}
          alt="man listening to music with headphones on"
        ></img>
      </picture>
      <div className="static-details-text">
        <h2>
          Bringing you the <span>best</span> audio gear
        </h2>
        <p className="main-para">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
