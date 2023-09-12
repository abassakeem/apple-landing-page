import React from "react";
import iphone from "../assets/images/Iphone-14.jpg"
import holidingIphone from "../assets/images/iphone-hand.png"
function Jumbotron() {
    const handleLearnMore = () => {
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top:element?.getBoundingClientRect().top,
            left: 0,
            behavior:"smooth"
        })
    }
    return ( 
        <div className="jumbotron-section wrapper">
            <div className="title">New</div>
            <img className="logo" src={iphone} alt = "iphone 14 pro" />
            <p className="text">Big and bigger</p>
            <span className="description">
                from $41.62/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                 </li>
                 <li>
                    <a className="link" onClick={handleLearnMore}>learn more</a>
                 </li>
                 <img className="iphone-img" src={holidingIphone} alt="iphone" />
            </ul>
        </div>
     );
}

export default Jumbotron;