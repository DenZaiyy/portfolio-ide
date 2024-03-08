import { Link } from "react-router-dom";
import "../../assets/styles/variables.css";

const NotFound = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <h1>_404</h1>
      <p>// The page you are looking for does not exist.</p>
      <p>// Please check the url or back to home</p>
      <Link
        to="/"
        className="rounded border-[1px] border-[#FEA55F] bg-[#FEA55F] p-3 text-white duration-300 hover:border-white hover:underline">
        _homepage
      </Link>
    </div>
  );
};
export default NotFound;
