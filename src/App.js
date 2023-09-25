import './App.css';
import { RouterProvider } from "react-router-dom";
import routes from './routes';

function App() {
	return (
		<div className="App">
			<RouterProvider router={routes} />
			Learn react
		</div>
	);
}

export default App;