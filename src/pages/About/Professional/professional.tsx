import {RiArrowDownSFill, RiArrowRightSFill, RiFolder3Fill, RiMailFill, RiPhoneFill} from "react-icons/ri";
import {NavLink, Outlet} from "react-router-dom";

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
						<RiArrowRightSFill className="peer-checked:hidden inline"/>
						<RiArrowDownSFill className="peer-checked:inline hidden"/>
						<label
							htmlFor="faq1"
							className="py-2 cursor-pointer grow"
						>
							personal-info
						</label>
						<div
							className="peer-checked:max-h-max peer-checked:border-t-[1px] peer-checked:p-3 basis-full border-[var(--lines)] max-h-0 overflow-hidden transition-all duration-100 select-text">
							<ul>
								<li>
									<NavLink
										to="/about/perso/bio"
										className="flex flex-row items-center gap-2"
									>
										<RiFolder3Fill fill="#E99287"/>
										bio
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/about/perso/interests"
										className="flex flex-row items-center gap-2"
									>
										<RiFolder3Fill fill="#43D9AD"/>
										interests
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/about/perso/education"
										className="flex flex-row items-center gap-2"
									>
										<RiFolder3Fill fill="#3A49A4"/>
										education
									</NavLink>
								</li>
							</ul>
						</div>
					</li>
					<li className="!hidden sm:!flex item">
						<input
							type="checkbox"
							id="faq2"
							className="peer appearance-none"
						/>
						<RiArrowRightSFill className="peer-checked:hidden inline"/>
						<RiArrowDownSFill className="peer-checked:inline hidden"/>
						<label
							htmlFor="faq2"
							className="py-2 cursor-pointer grow flex items-center space-x-3"
						>
							contacts
						</label>
						<div
							className="peer-checked:max-h-max basis-full peer-checked:border-t-[1px] border-[var(--lines)] peer-checked:p-3 max-h-0 overflow-hidden transition-all duration-100 select-text">
							<ul>
								<li>
									<a
										href="mailto:grischko.kevin@gmail.com"
										rel="noreferrer"
										className="flex flex-row items-center gap-x-2"
									>
										<RiMailFill/>
										mail
									</a>
								</li>
								<li className="flex flex-row items-center gap-x-2">
									<a
										href="tel:+33783452375"
										rel="noreferrer"
										className="flex flex-row items-center gap-x-2"
									>
										<RiPhoneFill/>
										phone
									</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</section>

			<section className="content-section">{<Outlet/>}</section>
		</>
	)
}

export default Professional