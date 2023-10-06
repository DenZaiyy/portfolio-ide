import {useState} from "react";
//LIBRARIES
import SyntaxHighlighter from "react-syntax-highlighter";
import {nightOwl} from "react-syntax-highlighter/dist/cjs/styles/hljs/index.js";
//COMPONENTS
import Snippet from "../../components/Home/Snippet/Snippet.jsx";
//ASSETS
import scrollToTop from './assets/scrollToTop.txt';
import phpTest from './assets/phpTest.txt';

export default function Home() {
	const [text, setText] = useState();
	function fetchCode(file) {
		fetch(file)
			.then((response) => response.text())
			.then((textContent) => {
				setText(textContent);
			});
		return text || "Loading...";
	}

	const descGithubLinkUsingJS =
		'const githubLink = "https://github.com/DenZaiyy/portfolio-ide"';

	const snippets = [
		{
			title      : "Scroll to top button",
			code       : fetchCode(scrollToTop),
			language   : "javascript",
			lineNumbers: false,
		},
		{
			title      : "Test for snippet2",
			code       : fetchCode(phpTest),
			language   : "php",
			lineNumbers: false,
		},
	];

	return (
		<div className="content" id="Home">
			<div className="about">
				<div className="intro">
					<p className="text-[var(--white-0)]">Hi all, I am</p>
					<h1 className="text-[var(--white-0)]">Kevin GRISCHKO</h1>
					<h2 className="text-[var(--secondary-2)]">
						&gt; Back-end developer
					</h2>
				</div>

				<div className="description">
					<span>// you can also see it on my Github Repository</span>

					<SyntaxHighlighter
						language="javascript"
						style={nightOwl}
						className="!bg-transparent !p-0"
					>
						{descGithubLinkUsingJS}
					</SyntaxHighlighter>
				</div>
			</div>
			<div className="snippets">
				{snippets.map((snippet, index) => (
					<Snippet key={index} snippet={snippet}/>
				))}
			</div>
		</div>
	);
}
