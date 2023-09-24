import './Header.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <div className="logo">
                <img src="/assets/weather-forecast-logo.jpeg" alt="Weather forecast logo" onClick={() => navigate("/")}/>
            </div>
            <nav>
                <ul className="navigation">
                    <li>
                        <NavLink exact to="/" activeClassName="active-link">
                            Favourite city
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/your-location" activeClassName="active-link">
                            Your location
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active-link">
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;