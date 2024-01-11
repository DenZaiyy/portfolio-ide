import {JSX} from "react";

export interface CollaboratorInterface {
	name: string
}

export interface LanguageInterface {
	name: string,
	icon: JSX.Element
}

export interface ProjectInterface {
	index: number,
	name: string,
	description?: string,
	image: string,
	languages: LanguageInterface[],
	code: string,
	preview?: string,
	collaborators?: CollaboratorInterface[]
}

export interface ProjectsInterface {
	name: string,
	description?: string,
	image: string,
	languages: LanguageInterface[],
	code: string,
	preview?: string,
	collaborators?: CollaboratorInterface[]
}

