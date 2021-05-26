import React, {useState} from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import Hamburger from '../assets/shared/tablet/icon-hamburger.svg'
import { displayStore, useStore } from "../store";
import CardLinks from './CardLinks';

export default function Header({page}) {
  const { setDisplayCart } = displayStore();
  const {cart} = useStore();
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className={page === "home" ? "header header-home" : "header"}>
      <div className="header-container container">
      <img className="hamburger-icon" src={Hamburger} alt="hamburger icon" onClick={() => setMobileNav(!mobileNav)}></img>
      <Logo />
      <Nav position={"top"} />
      <div className="cart-logo" onClick={setDisplayCart}>{cart.length > 0 && <div className="cart-total">{cart.length}</div>}</div>
      {mobileNav && <div className="mobile-nav">
        <CardLinks position={"mobile"} />
      </div>}
      </div>
    </header>
  );
}
