// CSS
import { JSX, useEffect, useRef, useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiJavascriptFill,
} from "react-icons/ri";
import "../../assets/styles/styles.css";
import Project from "../../components/Project/Project.tsx";
import Tab from "../../components/Tabs/tab.tsx";
import "./Projects.css";

//icons
// import gsap from "gsap";
import { FaNodeJs, FaReact, FaSymfony } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

//images
import brasserieImhoff from "/brasserie-imhoff.webp";
import forumMVC from "/forum-mvc.webp";
import kGaming from "/k-gaming.webp";
import landingPage from "/landing-page.webp";
import portfolioReact from "/portfolio-react.webp";

//interfaces
import { AnimatePresence, motion } from "framer-motion";
import {
  LanguageInterface,
  ProjectsInterface,
} from "../../utils/interfaces.ts";

const Projects = () => {
  const languages: LanguageInterface[] = [
    {
      name: "JS",
      icon: (
        <RiJavascriptFill
          color="#607B96"
          size="1.5em"
          title="Javascript icon"
        />
      ),
      projectIcon: (
        <RiJavascriptFill color="#F0DB4F" size="2em" title="Javascript icon" />
      ),
    },
    {
      name: "PHP",
      icon: <SiPhp color="#607B96" size="1.5em" title="Php icon" />,
      projectIcon: <SiPhp color="#777BB3" size="2em" title="Php icon" />,
    },
    {
      name: "React",
      icon: <FaReact color="#607B96" size="1.5em" title="React icon" />,
      projectIcon: <FaReact color="#61DBFB" size="2em" title="React icon" />,
    },
    {
      name: "Symfony",
      icon: <FaSymfony color="#607B96" size="1.5em" title="Symfony icon" />,
      projectIcon: (
        <FaSymfony size="2em" color="#000000" title="Symfony icon" />
      ),
    },
    {
      name: "NodeJS",
      icon: <FaNodeJs color="#607B96" size="1.5em" title="NodeJS icon" />,
      projectIcon: <FaNodeJs color="#3C873A" size="2em" title="NodeJS icon" />,
    },
  ];

  const projectsArr: ProjectsInterface[] = [
    {
      name: "portfolio-react",
      description: "My first portfolio made with React and TailwindCSS",
      image: portfolioReact,
      languages: [languages[2]],
      code: "https://github.com/DenZaiyy/Portfolio-React",
      preview: "https://k-grischko.fr/",
    },
    {
      name: "k-gaming",
      description:
        "E-commerce website for sell video games developed with Symfony 6.2 and PHP 8.2",
      image: kGaming,
      languages: [languages[3]],
      code: "https://github.com/DenZaiyy/K-Gaming",
      preview: "https://k-gaming.k-grischko.fr/",
    },
    {
      name: "forum-mvc",
      description:
        "Forum developed with PHP 8.2 and MVC architecture with a custom framework",
      image: forumMVC,
      languages: [languages[1]],
      code: "https://github.com/DenZaiyy/SQL_Forum",
      preview: "https://forum.k-grischko.fr/",
    },
    {
      name: "session",
      description: "Small project to learn how to use Symfony",
      image: "",
      languages: [languages[3]],
      code: "https://github.com/DenZaiyy/sfSessionTW",
      preview: "https://session.k-grischko.fr/",
    },
    {
      name: "brasserie-imhoff",
      description:
        "Website made with HTML CSS and JS for commercial student project",
      image: brasserieImhoff,
      languages: [languages[0]],
      code: "https://github.com/DenZaiyy/BrasserieIMHOFF",
      preview: "https://brasserie-imhoff.netlify.app/",
    },
    {
      name: "landing-page",
      description: "Website made with HTML CSS and JS to manipulate DOM",
      image: landingPage,
      languages: [languages[0]],
      code: "https://github.com/DenZaiyy/Landing-page",
      preview: "https://landing-page-denz.netlify.app/",
    },
    {
      name: "discord-bot",
      description:
        "Discord BOT made on collaboration with @Cirec-Coder, for this we used NodeJS and DiscordJS",
      image: "",
      languages: [languages[4]],
      code: "https://github.com/DenZaiyy/cirec_bot",
      collaborators: [
        {
          name: "Cirec-Coder",
        },
      ],
    },
  ];

  function getChecked(): string[] {
    const checkedLang = document.querySelectorAll(
      "input[type=checkbox]:checked",
    );

    return Array.from(checkedLang)
      .filter((lang) => lang.id !== "faq1" && lang.id !== "faq2")
      .map((l) => l.id);
  }

  // const [check, setCheck] = useState( false)

  const [checkedLanguages, setCheckedLanguages] = useState<
    Record<string, boolean | JSX.Element>
  >({});

  const [filteredProjects, setFilteredProjects] = useState<ProjectsInterface[]>(
    [],
  );

  // Function to filter projects based on checked languages
  const filterProjects = () => {
    const filtered = projectsArr.filter((project) =>
      project.languages.some((lang) => checkedLanguages[lang.name]),
    );
    setFilteredProjects(filtered);
  };

  // useEffect to filter projects whenever checkedLanguages changes
  useEffect(() => {
    filterProjects();
  }, [checkedLanguages]);

  const handleCloseTab = (lang: string) => {
    setCheckedLanguages((prevCheckedLanguages) => ({
      ...prevCheckedLanguages,
      [lang]: false,
    }));
  };

  const handleChange = (langName: string, langIcon: JSX.Element) => {
    setCheckedLanguages((prevCheckedLanguages) => ({
      ...prevCheckedLanguages,
      [langName]: !prevCheckedLanguages[langName],
      langIcon: langIcon,
    }));
  };

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="projects">
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
              <RiArrowRightSFill className="inline peer-checked:hidden" />
              <RiArrowDownSFill className="hidden peer-checked:inline" />
              <label htmlFor="faq1" className="grow cursor-pointer py-2">
                projects
              </label>
            </div>
            <div className="max-h-0 basis-full select-text overflow-hidden border-[var(--lines)] transition-all duration-100 peer-checked:max-h-max peer-checked:border-b-[1px] peer-checked:p-3">
              <ul className="gap-y-2">
                {languages.map((lang, i) => (
                  <li className="cursor-pointer items-center gap-x-6" key={i}>
                    <input
                      type="checkbox"
                      className={`peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-sm border-[1px] border-blue bg-dark-blue duration-200 checked:border-0 checked:bg-[#607B96] checked:text-white focus:border-[#607B96] focus:stroke-stroke-color focus:stroke-[2px]`}
                      onChange={() => handleChange(lang.name, lang.icon)}
                      value={lang.name}
                      name={lang.name}
                      id={lang.name}
                      checked={checkedLanguages[lang.name] as boolean}
                    />
                    <svg
                      className="pointer-events-none absolute hidden h-[18px] w-[18px] peer-checked:block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <label
                      htmlFor={lang.name}
                      className={`flex cursor-pointer items-center gap-x-2 duration-200 ${checkedLanguages[lang.name] ? "text-white opacity-100" : "text-[#607B96] opacity-40"}`}>
                      {lang.icon}
                      {lang.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <div className="content !border-r-0">
          <div className="tab">
            {getChecked().length > 0 ? (
              getChecked().map((lang, i) => (
                <Tab
                  key={i}
                  name={lang}
                  handleClose={() => handleCloseTab(lang)}
                />
              ))
            ) : (
              <Tab name={"nothing selected"} />
            )}
          </div>
          <div
            className="tab-content flex h-full flex-wrap items-center justify-center gap-10"
            ref={containerRef}>
            <AnimatePresence>
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.2 }}>
                  <Project
                    name={project.name}
                    description={project?.description}
                    image={project?.image}
                    languages={project.languages}
                    code={project.code}
                    preview={project?.preview}
                    collaborators={project?.collaborators}
                    index={i}
                    key={i}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
