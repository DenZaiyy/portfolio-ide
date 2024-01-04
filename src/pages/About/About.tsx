import "./About.css";
import {NavLink, Outlet} from "react-router-dom";
import {RiGamepadFill, RiTerminalBoxFill, RiUser4Fill} from "react-icons/ri";

const About = () => {
	return (
		<div className="about-me">
			<section className="type-infos">
				<div className="professional">
					<NavLink to="/about/pro">
						<RiTerminalBoxFill />
					</NavLink>
				</div>
				<div className="personnal">
					<NavLink to="/about/perso">
						<RiUser4Fill />
					</NavLink>
				</div>
				<div className="hobbies">
					<NavLink to="/about/hobbies">
						<RiGamepadFill />
					</NavLink>
				</div>
			</section>

			<section className="content-section">{<Outlet/>}</section>
		</div>
	);
};
export default About;
