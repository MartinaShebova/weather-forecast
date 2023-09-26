import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul className="navigation">
                    <li>
                        <NavLink to="/">
                            Favourite city
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/your-location">
                            Your location
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;