import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiFolder3Fill,
} from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

const Professional = () => {
  return (
    <>
      <section className="sub-menu">
        <ul className="tabs text-white">
          <li className="item">
            <input
              type="checkbox"
              id="faq1"
              className="peer appearance-none"
              defaultChecked={true}
            />
            <RiArrowRightSFill className="inline peer-checked:hidden" />
            <RiArrowDownSFill className="hidden peer-checked:inline" />
            <label htmlFor="faq1" className="grow cursor-pointer py-2">
              professional-info
            </label>
            <div className="max-h-0 basis-full select-text overflow-hidden border-[var(--lines)] transition-all duration-100 peer-checked:max-h-max peer-checked:border-t-[1px] peer-checked:p-3">
              <ul>
                <li>
                  <NavLink
                    to="/about/pro/test"
                    className="flex flex-row items-center gap-2">
                    <RiFolder3Fill fill="#E99287" />
                    test
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="/about/perso/interests"
                    className="flex flex-row items-center gap-2">
                    interests
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about/perso/education"
                    className="flex flex-row items-center gap-2">
                    <RiFolder3Fill fill="#3A49A4" />
                    education
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </li>
        </ul>
      </section>

      <section className="content-section">{<Outlet />}</section>
    </>
  );
};

export default Professional;
