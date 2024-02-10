import {useEffect, useState} from "react";
import DefaultButton from "../Button/Default.tsx";
import {ProjectInterface} from "../../utils/interfaces.ts"

const Project = (props: ProjectInterface) => {

	const getCollabInfos = async (name: string) => {
		const res = await fetch(`https://api.github.com/users/${name}`);
		const data = await res.json();

		const link = data.html_url;
		const avatar_url = data.avatar_url;

		return {link, avatar_url};
	};

	const [collabData, setCollabData] = useState<{ link: string; avatar_url: string }[]>([]);

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

	return (<div className="text-white flex flex-wrap max-w-md opacity-0">
		<div className="title flex gap-2 mb-4">
			<span className="text-[#5565E8]">Project {props.index + 1}</span><span
			className="text-[#607B96]">// _{props.name}</span>
		</div>
		<div
			className="relative flex flex-col rounded-[15px] bg-[#011221] text-[#607B96] border-[1px] border-[#1E2D3D] min-h-[350px] overflow-hidden">
			<div className="image max-h-[150px] shrink-0 overflow-hidden">
				<img src={props.image ? props.image : "/project_default.webp"} alt={`preview for ${props.name} project`} className="object-fill hover:scale-105 duration-200"/>
			</div>
			<div className="techno">
				{props.languages.slice(0, 1).map((language, i) => {
					return (<div
						className={`absolute top-2 right-2 z-10 p-1 bg-white/[0.15] backdrop-blur drop-shadow border-[1px] border-blue/40 rounded cursor-pointer`}
						key={i}>
						{language.projectIcon}
					</div>)
				})}
			</div>
			<div
				className="description border-[#1E2D3D] border-t-[1px] flex flex-col flex-grow items-center justify-evenly gap-5 px-6 py-3">
				<p className="text-justify text-base">{props.description}</p>
				<div className="buttons w-full flex flex-row justify-evenly">
					{props?.preview && <DefaultButton link={props.preview} text="view-project"/>}
					{props.code && <DefaultButton link={props.code} text="view-source"/>}
				</div>

			</div>
			{props?.collaborators && <div className="collaborators py-[10px] px-[14px] border-t-[1px] border-[#1E2D3D]">
				<div className="title text-[#607B96] text-center mb-2">Collaborators</div>
				<div className="list flex flex-row gap-x-2 mt-2 items-center justify-center">
					{collabData.map((collabInfo, i) => (<a
						href={collabInfo.link}
						className="flex flex-col gap-y-1 items-center justify-center"
						target="_blank"
						rel="noopener noreferrer"
						key={i}
					>
						<img
							src={collabInfo.avatar_url}
							alt={`avatar for collaborator ${i + 1}`}
							className="rounded-full w-[50px] h-[50px] object-fill"
						/>
						<span className="text-[#607B96]">{props?.collaborators?.[i].name}</span>
					</a>))}
				</div>
			</div>}
		</div>
	</div>);
};

export default Project;
