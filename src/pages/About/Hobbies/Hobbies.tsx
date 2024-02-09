import {NavLink, Outlet} from "react-router-dom";

const Hobbies = () => {
	return (
		<>
			<section className="sub-menu">
				<ul className="tabs text-white">
					<li className="item">
						<NavLink to="/about/hobbies/development" className="p-2 cursor-pointer grow">
							development
						</NavLink>
					</li>
					<li className="item">
						<NavLink
							to="/about/hobbies/gaming"
							className="p-2 cursor-pointer grow flex items-center space-x-3">
							gaming
						</NavLink>
					</li>
				</ul>
			</section>

			<section className="content-section">{<Outlet/>}</section>
		</>
	)
}

export default Hobbies