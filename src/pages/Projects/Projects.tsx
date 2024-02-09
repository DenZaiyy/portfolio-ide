// CSS
import "./Projects.css";
import "../../assets/styles/styles.css";
import {RiArrowDownSFill, RiArrowRightSFill} from "react-icons/ri";
import {JSX, useEffect, useRef, useState} from "react";
import Icon from "./icons/Icons.tsx";
import Tab from "../../components/Tabs/tab.tsx";
import Project from "../../components/Project/Project.tsx";

//icons
import sfLogo from "./icons/symfony.svg";
import jsLogo from "./icons/js.svg";
import reactLogo from "./icons/react.svg";
import phpLogo from "./icons/php.svg";
import nodeJSLogo from "./icons/nodejs.svg";
import gsap from "gsap";

//images
import portfolioReact from "/portfolio-react.webp";
import kGaming from "/k-gaming.webp";
import forumMVC from "/forum-mvc.webp";
import brasserieImhoff from "/brasserie-imhoff.webp";
import landingPage from "/landing-page.webp";

//interfaces
import {LanguageInterface, ProjectsInterface} from "../../utils/interfaces.ts"


const Projects = () => {

	const languages: LanguageInterface[] = [{
		name: "JS", icon: <Icon name="Javascript" icon={jsLogo}/>
	}, {
		name: "PHP", icon: <Icon name="PHP" icon={phpLogo}/>
	}, {
		name: "React", icon: <Icon name="Javascript" icon={reactLogo}/>
	}, {
		name: "Symfony", icon: <Icon name="Symfony" icon={sfLogo}/>
	}, {
		name: "NodeJS", icon: <Icon name="NodeJS" icon={nodeJSLogo}/>
	}]

	const projectsArr: ProjectsInterface[] = [{
		name: "portfolio-react",
		description: "My first portfolio made with React and TailwindCSS",
		image: portfolioReact,
		languages: [languages[2]],
		code: "https://github.com/DenZaiyy/Portfolio-React",
		preview: "https://k-grischko.fr/"
	}, {
		name: "k-gaming",
		description: "E-commerce website for sell video games developed with Symfony 6.2 and PHP 8.2",
		image: kGaming,
		languages: [languages[3]],
		code: "https://github.com/DenZaiyy/K-Gaming",
		preview: "https://k-gaming.k-grischko.fr/"
	}, {
		name: "forum-mvc",
		description: "Forum developed with PHP 8.2 and MVC architecture with a custom framework",
		image: forumMVC,
		languages: [languages[1]],
		code: "https://github.com/DenZaiyy/SQL_Forum",
		preview: "https://forum.k-grischko.fr/"
	}, {
		name: "session",
		description: "Small project to learn how to use Symfony",
		image: "",
		languages: [languages[3]],
		code: "https://github.com/DenZaiyy/sfSessionTW",
		preview: "https://session.k-grischko.fr/"
	}, {
		name: "brasserie-imhoff",
		description: "Website made with HTML CSS and JS for commercial student project",
		image: brasserieImhoff,
		languages: [languages[0]],
		code: "https://github.com/DenZaiyy/BrasserieIMHOFF",
		preview: "https://brasserie-imhoff.netlify.app/"
	}, {
		name: "landing-page",
		description: "Website made with HTML CSS and JS to manipulate DOM",
		image: landingPage,
		languages: [languages[0]],
		code: "https://github.com/DenZaiyy/Landing-page",
		preview: "https://landing-page-denz.netlify.app/"
	}, {
		name: "discord-bot",
		description: "Discord BOT made on collaboration with @Cirec-Coder, for this we used NodeJS and DiscordJS",
		image: "",
		languages: [languages[4]],
		code: "https://github.com/DenZaiyy/cirec_bot",
		collaborators: [{
			name: "Cirec-Coder"
		}]
	},]

	function getChecked() {
		const checkedLang = document.querySelectorAll("input[type=checkbox]:checked")

		return Array.from(checkedLang).filter((lang) => lang.id !== "faq1" && lang.id !== "faq2").map((l) => l.id).join("; ")
	}

	// const [check, setCheck] = useState( false)

	const [checkedLanguages, setCheckedLanguages] = useState<Record<string, boolean | JSX.Element>>({});

	const handleChange = (langName: string, langIcon: JSX.Element) => {
		setCheckedLanguages((prevCheckedLanguages) => ({
			...prevCheckedLanguages, [langName]: !prevCheckedLanguages[langName], langIcon: langIcon,
		}));
	};

	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;

		if (container) {
			const projectsArray = Array.from(container.children) as HTMLDivElement[];
			if (projectsArray.length > 0) {
				gsap.to(projectsArray, {
					opacity: 1, duration: 1.5, stagger: 0.2,
				})
			}
		}
	}, [checkedLanguages]);

	return (<div className="projects">
		<section className="menu">
			<ul className="tabs text-white">
				<li className="item">
					<input
						type="checkbox"
						id="faq1"
						className="peer appearance-none"
						defaultChecked={true}
					/>
					<div className="title border-b-[1px]">
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
						className="peer-checked:max-h-max peer-checked:p-3 peer-checked:border-b-[1px] basis-full border-[var(--lines)] max-h-0 overflow-hidden transition-all duration-100 select-text">
						<ul className="gap-y-2">
							{languages.map((lang, i) => (<li className="gap-x-6 items-center cursor-pointer" key={i}>
								<input
									type="checkbox"
									className={`relative cursor-pointer duration-200 peer appearance-none w-[18px] h-[18px] border-[1px] border-blue bg-dark-blue rounded-sm focus:stroke-[2px] focus:stroke-stroke-color focus:border-[#607B96] checked:border-0 checked:bg-[#607B96] checked:text-white`}
									onChange={() => handleChange(lang.name, lang.icon)}
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
							</li>))}
						</ul>
					</div>
				</li>
			</ul>
		</section>

		<section className="content-section">
			<div className="content !border-r-0">
				<div className="tab">
					<Tab name={getChecked() || "nothing selected"}/>
				</div>
				<div className="tab-content flex flex-wrap gap-10 h-full items-center justify-center" ref={containerRef}>
					{projectsArr.filter((project) => project.languages.some((lang) => checkedLanguages[lang.name])).map((project, i) => (<Project
						name={project.name}
						description={project?.description}
						image={project?.image}
						languages={project.languages}
						code={project.code}
						preview={project?.preview}
						collaborators={project?.collaborators}
						index={i}
						key={i}
					/>))}
				</div>
			</div>
		</section>
	</div>);
};

export default Projects;
