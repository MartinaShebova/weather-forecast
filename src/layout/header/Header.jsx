import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
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
                </ul>
            </nav>
        </header>
    );
}

export default Header;