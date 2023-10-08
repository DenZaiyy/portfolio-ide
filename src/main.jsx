import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//STYLES
import "./index.css";
//PAGES
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route index path="/" element={<Home/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/projects" element={<Projects/>}/>
					<Route path="/contact" element={<Contact/>}/>
					<Route path="*" element={<NotFound/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)