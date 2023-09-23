import Footer from "./footer/Footer";
import Header from "./header/Header";
import './Layout.css';

function Layout() {

	// useEffect(() => {
	// 	getRequest(GET_CITY_WEATHER())
	// 		.then((data) => {
	// 			console.log(data);

	// 		})

	// }, []);

	return (
		<div className="Layout">
			<Header />
            
            <Footer />
		</div>
	);
}

export default Layout;
