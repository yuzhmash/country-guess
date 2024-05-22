import {Link, NavLink} from "react-router-dom"

import "./Navbar.sass"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/"><span>guessing</span> countries</Link>
            </div>
            <ul>
                <li>
                    <NavLink exact to="/" activeStyle={{color: "rgb(159, 0, 19)"}}>guess</NavLink>
                </li>
                /
                <li>
                    <NavLink exact to="/countrieslist" activeStyle={{color: "rgb(159, 0, 19)"}}>list of countries</NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;