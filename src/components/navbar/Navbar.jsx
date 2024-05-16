

import "./Navbar.sass"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <a href="#"><span>guessing</span> countries</a>
            </div>
            <ul>
                <li>
                    guess
                </li>
                /
                <li>
                    list of countries
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;