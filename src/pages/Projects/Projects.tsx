// CSS
import "./Projects.css";
import "../../assets/styles/styles.css";
import {RiArrowDownSFill, RiArrowRightSFill} from "react-icons/ri";
import {JSX, useState} from "react";
import Icon from "./icons/Icons.tsx";
import Tab from "../../components/Tabs/tab.tsx";

//icons
import sfLogo from "./icons/symfony.svg";
import cssLogo from "./icons/css.svg";
import htmlLogo from "./icons/html.svg";
import jsLogo from "./icons/js.svg";
import reactLogo from "./icons/react.svg";
import phpLogo from "./icons/php.svg";

interface LanguageInterface {
	name: string,
	icon: JSX.Element
}

const Projects = () => {

	const languages: LanguageInterface[] = [
		{
			name: "HTML",
			icon: <Icon name="HTML" icon={htmlLogo}/>
		},
		{
			name: "CSS",
			icon: <Icon name="CSS" icon={cssLogo}/>
		},
		{
			name: "JS",
			icon: <Icon name="Javascript" icon={jsLogo}/>
		},
		{
			name: "PHP",
			icon: <Icon name="PHP" icon={phpLogo}/>
		},
		{
			name: "React",
			icon: <Icon name="Javascript" icon={reactLogo}/>
		},
		{
			name: "Symfony",
			icon: <Icon name="Symfony" icon={sfLogo}/>
		}
	]

	function getChecked() {
		const checkedLang = document.querySelectorAll("input[type=checkbox]:checked")

		return Array.from(checkedLang).filter((lang) => lang.id !== "faq1").map((l) => l.id).join(" ; ")
	}

	// const [check, setCheck] = useState( false)

	const [checkedLanguages, setCheckedLanguages] = useState<Record<string, boolean>>({});

	const handleChange = (langName: string) => {
		setCheckedLanguages((prevCheckedLanguages) => ({
			...prevCheckedLanguages,
			[langName]: !prevCheckedLanguages[langName],
		}));
	};

	return (
		<div className="projects">
			<section className="menu">
				<ul className="tabs text-white">
					<li className="item">
						<input
							type="checkbox"
							id="faq1"
							className="peer appearance-none"
						/>
						<div className="title">
							<RiArrowRightSFill className="peer-checked:hidden inline"/>
							<RiArrowDownSFill className="peer-checked:inline hidden"/>
							<label
								htmlFor="faq1"
								className="py-2 cursor-pointer grow"
							>
								projects
							</label>
						</div>
						<div
							className="peer-checked:max-h-max peer-checked:border-t-[1px] peer-checked:p-3 basis-full border-[var(--lines)] max-h-0 overflow-hidden transition-all duration-100 select-text">
							<ul className="gap-y-2">
								{languages.map((lang, i) => (
									<li className="gap-x-6 items-center cursor-pointer" key={i}>
										<input
											type="checkbox"
											className={`relative cursor-pointer duration-200 peer appearance-none w-[18px] h-[18px] border-[1px] border-blue bg-dark-blue rounded-sm focus:stroke-[2px] focus:stroke-stroke-color focus:border-[#607B96] checked:border-0 checked:bg-[#607B96] checked:text-white`}
											onChange={() => handleChange(lang.name)}
											value={lang.name}
											name={lang.name}
											id={lang.name}
										/>
										<svg
											className="absolute w-[18px] h-[18px] hidden peer-checked:block pointer-events-none"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 25 25"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
										<label htmlFor={lang.name}
										       className={`flex cursor-pointer items-center gap-x-2 duration-200 ${checkedLanguages[lang.name] ? 'opacity-100 text-white' : 'opacity-40 text-[#607B96]'}`}>
											{lang.icon}
											{lang.name}
										</label>
									</li>
									// <Checkbox name={lang.name} changeEvent={getChecked()} icon={lang.icon} key={i}/>
								))}
							</ul>
						</div>
					</li>
				</ul>
			</section>

			<section className="content-section">
				<div className="content">
					<div className="tab">
						<Tab name={getChecked() || "nothing selected"}/>
					</div>
					<div className="tab-content"></div>
				</div>
				<div className="snippets">
					<div className="tab"></div>
					<div className="tab-content"></div>
				</div>
			</section>
		</div>
	);
};

export default Projects;
