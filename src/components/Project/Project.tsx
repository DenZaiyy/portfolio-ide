import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ProjectInterface } from "../../utils/interfaces.ts";
import DefaultButton from "../Button/Default.tsx";

const Project = (props: ProjectInterface) => {
  const getCollabInfos = async (name: string) => {
    const res = await fetch(`https://api.github.com/users/${name}`);
    const data = await res.json();

    const link = data.html_url;
    const avatar_url = data.avatar_url;

    return { link, avatar_url };
  };

  const [collabData, setCollabData] = useState<
    { link: string; avatar_url: string }[]
  >([]);

  useEffect(() => {
    const fetchCollaboratorData = async () => {
      if (props?.collaborators) {
        const promises = props.collaborators.map(async (collaborator) => {
          return await getCollabInfos(collaborator.name);
        });

        const resolvedData = await Promise.all(promises);
        setCollabData(resolvedData);
      }
    };

    fetchCollaboratorData();
  }, [props?.collaborators]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="group flex h-full max-w-md flex-col text-white">
        <div className="title sm:text-sm md:text-md mb-4 flex gap-2">
          <span className="text-[#5565E8]">Project {props.index + 1}</span>
          <span className="text-[#607B96]">// _{props.name}</span>
        </div>
        <div className="relative flex h-full min-h-[350px] flex-col overflow-hidden rounded-[15px] border-[1px] border-[#1E2D3D] bg-[#011221] text-[#607B96]">
          <div className="image max-h-[150px] shrink-0 overflow-hidden">
            <img
              src={props.image ? props.image : "/project_default.webp"}
              alt={`preview for ${props.name} project`}
              className="object-fill grayscale duration-200 md:group-hover:scale-105 md:group-hover:grayscale-0"
            />
          </div>
          <div className="techno">
            {props.languages.slice(0, 1).map((language, i) => {
              return (
                <div
                  className={`absolute right-2 top-2 z-10 rounded border-[1px] border-blue/40 bg-white/[0.15] p-1 drop-shadow backdrop-blur`}
                  key={i}>
                  {language.projectIcon}
                </div>
              );
            })}
          </div>
          <div className="description flex flex-grow flex-col items-center justify-evenly gap-5 border-t-[1px] border-[#1E2D3D] p-3 md:px-6 md:py-3">
            <p className="text-justify sm:text-sm text-base">{props.description}</p>
            <div className="buttons flex w-full flex-row justify-evenly gap-2">
              {props?.preview && (
                <DefaultButton link={props.preview} text="view-project" />
              )}
              {props.code && (
                <DefaultButton link={props.code} text="view-source" />
              )}
            </div>
          </div>
          {props?.collaborators && (
            <div className="collaborators text-base sm:text-sm md:text-md border-t-[1px] border-[#1E2D3D] px-[14px] py-[10px]">
              <div className="title mb-2 text-center text-[#607B96]">
                Collaborators
              </div>
              <div className="list mt-2 flex flex-row items-center justify-center gap-x-2">
                {collabData.map((collabInfo, i) => (
                  <a
                    href={collabInfo.link}
                    className="flex flex-col items-center justify-center gap-y-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}>
                    <img
                      src={collabInfo.avatar_url}
                      alt={`avatar for collaborator ${i + 1}`}
                      className="h-[50px] w-[50px] rounded-full object-fill"
                    />
                    <span className="text-[#607B96]">
                      {props?.collaborators?.[i].name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Project;
