import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/greatbritishpounds">Great British Pounds</Link></li>
            <li><Link to="/euros">Euros</Link></li>
            <li><Link to="/unitedstatesdollars">United States Dollars</Link></li>
        </ul>
    )
}

export default NavBar