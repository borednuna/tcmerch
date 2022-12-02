import React, { useState } from "react";
import "./Header.scss";

function Header() {
    const [isExpanded, setExpanded] = useState(false);

    return(
        <div className="header">
            <div className="title">Internship</div>
            <div className={isExpanded ? "expanded" : "navmenu"}>
                <ul>
                    <li>Home</li>
                    <li>Category</li>
                    <li>New Arrival</li>
                    <li>Featured Products</li>
                    <li>Contact</li>
                </ul>
                <div className="hamburger"
                    onClick={() => {
                        setExpanded(!isExpanded);
                    }}
                >
                    =
                </div>
            </div>
        </div>
    )
}

export default Header;
