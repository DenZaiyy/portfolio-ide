import { NavLink, Outlet } from "react-router-dom";
import {
  RiFolder3Fill,
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiMailFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Personal = () => {
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
              personal-info
            </label>
            <div className="max-h-0 basis-full select-text overflow-hidden border-[var(--lines)] transition-all duration-100 peer-checked:max-h-max peer-checked:border-t-[1px] peer-checked:p-3">
              <ul>
                <li>
                  <NavLink
                    to="/about/perso/bio"
                    className="flex flex-row items-center gap-2">
                    <RiFolder3Fill fill="#E99287" />
                    bio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about/perso/interests"
                    className="flex flex-row items-center gap-2">
                    <RiFolder3Fill fill="#43D9AD" />
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
                </li>
              </ul>
            </div>
          </li>
          <li className="item !hidden sm:!flex">
            <input type="checkbox" id="faq2" className="peer appearance-none" />
            <RiArrowRightSFill className="inline peer-checked:hidden" />
            <RiArrowDownSFill className="hidden peer-checked:inline" />
            <label
              htmlFor="faq2"
              className="flex grow cursor-pointer items-center space-x-3 py-2">
              contacts
            </label>
            <div className="max-h-0 basis-full select-text overflow-hidden border-[var(--lines)] transition-all duration-100 peer-checked:max-h-max peer-checked:border-t-[1px] peer-checked:p-3">
              <ul>
                <li>
                  <Link
                    to="/contact"
                    className="flex flex-row items-center gap-x-2">
                    <RiMailFill />
                    mail
                  </Link>
                </li>
                {/* <li className="flex flex-row items-center gap-x-2">
                  <a
                    href="tel:+33783452375"
                    rel="noreferrer"
                    className="flex flex-row items-center gap-x-2">
                    <RiPhoneFill />
                    phone
                  </a>
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

export default Personal;
