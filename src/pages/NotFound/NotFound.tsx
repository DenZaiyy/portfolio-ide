import {Link} from "react-router-dom";
import "../../assets/styles/variables.css"

const NotFound = () => {
	return (
		<div className="flex flex-col gap-10 items-center justify-center w-full">
			<h1>_404</h1>
			<p>// The page you are looking for does not exist.</p>
			<p>// Please check the url or back to home</p>
			<Link to="/" className="text-white border-[1px] border-[#FEA55F] hover:underline p-3 bg-[#FEA55F] hover:border-white rounded duration-300">_homepage</Link>
		</div>
	);
}
export default NotFound;