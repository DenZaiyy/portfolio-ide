import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import "./Header.css";

const Header = () => {
	const [openNav, setOpenNav] = useState(false);

	return (
		<header>
			<nav className={openNav ? "responsive-nav" : ""}>
				<div className="flex justify-between w-full flex-wrap">
					<Link className="logo" to="/">
						<span>grischko-kevin</span>
					</Link>
					<button
						className="burger"
						onClick={() => setOpenNav(!openNav)}
					>
						{openNav ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
							>
								<path
									d="M8 6.2225L14.2225 0L16 1.7775L9.7775 8L16 14.2225L14.2225 16L8 9.7775L1.7775 16L0 14.2225L6.2225 8L0 1.7775L1.7775 0L8 6.2225Z"
									fill="#607B96"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="16"
								viewBox="0 0 18 16"
								fill="none"
							>
								<path
									d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z"
									fill="#607B96"
								/>
							</svg>
						)}
					</button>
					<div className={openNav ? "menu active-menu" : "menu"}>
						<ul>
							<div className="first">
								<li>
									<NavLink
										to="/"
										onClick={() => setOpenNav(false)}
									>
										_home
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/about"
										onClick={() => setOpenNav(false)}
									>
										_about-me
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/projects"
										onClick={() => setOpenNav(false)}
									>
										_projects
									</NavLink>
								</li>
							</div>
							<li className="contact">
								<NavLink
									to="/contact"
									onClick={() => setOpenNav(false)}
								>
									_contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
