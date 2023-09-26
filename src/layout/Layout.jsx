import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Outlet } from 'react-router-dom';
import './Layout.css';

function Layout() {
	return (
		<div className="Layout">
			<Header />
			<div className="main-content">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default Layout;
