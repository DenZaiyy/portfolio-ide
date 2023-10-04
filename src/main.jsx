import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Contact from './pages/Contact/Contact.jsx'
import './index.css'
import Layout from "./pages/Layout/Layout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About/About.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route index path="/home" element={<Home/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/projects" element={<Projects/>}/>
					<Route path="/contact" element={<Contact/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
)
