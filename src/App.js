import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Addreview from "./components/Addreview";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/review" element={<Addreview />}></Route>
			</Routes>
		</>
	);
}

export default App;
