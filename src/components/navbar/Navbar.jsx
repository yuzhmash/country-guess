

import "./Navbar.sass"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <a href="#"><span>guessing</span> countries</a>
            </div>
            <ul>
                <li>
                    World
                </li>
                /
                <li>
                    Europa
                </li>
                /
                <li>
                    Africa
                </li>
                /
                <li>
                    Americas
                </li>
                /
                <li>
                    Oceania
                </li>
                /
                <li>
                    Asia
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;