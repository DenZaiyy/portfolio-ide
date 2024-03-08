import { NavLink, Outlet } from "react-router-dom";

const Hobbies = () => {
  return (
    <>
      <section className="sub-menu">
        <ul className="tabs text-white">
          <li className="item">
            <NavLink
              to="/about/hobbies/development"
              className="grow cursor-pointer p-2">
              development
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="/about/hobbies/gaming"
              className="flex grow cursor-pointer items-center space-x-3 p-2">
              gaming
            </NavLink>
          </li>
        </ul>
      </section>

      <section className="content-section">{<Outlet />}</section>
    </>
  );
};

export default Hobbies;
