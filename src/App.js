import React from "react";
//import Navbar from "./components/Navbar";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
// import Pickup from "./pages/pickup";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				{/* <Route path="/pickup" element={<Pickup />} /> */}
			</Routes>
			{/* <Home /> */}
		</Router>
	);
}

export default App;
