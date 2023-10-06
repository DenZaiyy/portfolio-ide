import {Link, NavLink} from 'react-router-dom';
import {useState} from "react";
// import './Header.css';

const Header = () => {

	const [openNav, setOpenNav] = useState(false);

	return (
		<header>
			<Link className="logo" to='/'><span>grischko-kevin</span></Link>
			<nav className={openNav ? 'responsive-nav' : ''}>
				<NavLink
					to='/'
					onClick={() => setOpenNav(false)}
				>
					_home
				</NavLink>
				<NavLink
					to='/about'
					onClick={() => setOpenNav(false)}
				>
					_about-me
				</NavLink>
				<NavLink
					to='/projects'
					onClick={() => setOpenNav(false)}
				>
					_projects
				</NavLink>
				<NavLink
					to='/contact'
					className="contact"
					onClick={() => setOpenNav(false)}
				>
					_contact
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
