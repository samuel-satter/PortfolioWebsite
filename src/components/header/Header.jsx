import React from "react";
import "./header.css"
import CTA from "./CTA";
import cat from '../../assets/cat.png'
import headerSocials from "./HeaderSocials";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Samuel Sätter</h1>
                <h5 className={"text-light"}>Java Developer</h5>
                <CTA/>
                <HeaderSocials/>

                <div className="cat">
                    <img src={cat} alt="cat"/>
                </div>

                <a href="#contact" className='scroll__down'>Scroll down</a>
            </div>
        </header>
    )
}

export default Header