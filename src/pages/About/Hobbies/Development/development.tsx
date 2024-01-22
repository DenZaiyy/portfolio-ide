import Tab from "../../../../components/Tabs/tab.tsx";
import SyntaxHighlighter from "react-syntax-highlighter";
import {nightOwl} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import test from "./content.txt";
import {useEffect, useState} from "react";

const Development = () => {

	const [content, setContent] = useState("")

	useEffect(() => {
		async function fetchSnippet(file: string): Promise<void> {
			try {
				const response = await fetch(file);
				const textContent = await response.text();
				setContent(textContent);
			} catch (error) {
				console.error(`Error fetching file: ${error}`);
			}
		}

		fetchSnippet(test);
	}, []);

	return (
		<>
			<div className="content">
				<div className="tab">
					<Tab name={"Development"}/>
				</div>
				<div className="tab-content md:!p-5 lg:!p-10">
					<SyntaxHighlighter
						language="javascript"
						wrapLongLines={true}
						wrapLines={true}
						showLineNumbers={true}
						lineNumberStyle={{color: "var(--secondary-0)", paddingRight: "4rem", width: "1rem"}}
						style={nightOwl}
					>
						{content}
					</SyntaxHighlighter>
				</div>
			</div>
		</>
	);
};

export default Development;
