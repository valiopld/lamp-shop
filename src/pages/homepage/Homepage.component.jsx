import React from "react"

import "./Homepage.style.scss"

const Homepage = () => {
    return(
    <div className="Homepage"> 
    <div className="directory-menu">

    <div className="menu-item">
        <div className="content">
            <h1 className="title"> Hats</h1>
            <span className="subtitle">Shop now </span> 
        </div>
    </div>

    <div className="menu-item">
        <div className="content">
            <h1 className="title"> Glasses</h1>
            <span className="subtitle">Shop now </span> 
        </div>
    </div>

        <div className="menu-item">
        <div className="content">
            <h1 className="title"> Switchers</h1>
            <span className="subtitle">Shop now </span> 
        </div>
    </div>

        <div className="menu-item">
        <div className="content">
            <h1 className="title"> Men</h1>
            <span className="subtitle">Shop now </span> 
        </div>
    </div>

        <div className="menu-item">
        <div className="content">
            <h1 className="title"> Women</h1>
            <span className="subtitle">Shop now </span> 
        </div>
    </div>
    </div>
    </div>
    );
}

export default Homepage;