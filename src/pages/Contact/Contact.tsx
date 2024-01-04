import "./Contact.css";
import {atomOneDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import React, {useState} from "react";
import dedent from "dedent-js";
import {RiArrowDownSFill, RiArrowRightSFill} from "react-icons/ri";

function externalLinks(key: number, link: string, name: string) {
	return (
		<li key={key}>
			<a href={link} target="_blank" rel=" noreferrer" className=" flex flex-row items-center gap-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
					<path
						d="M6.22222 2.66667V4.44444H1.77778V14.2222H11.5556V9.77778H13.3333V15.1111C13.3333 15.3469 13.2397 15.573 13.073 15.7397C12.9063 15.9064 12.6802 16 12.4444 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V3.55556C0 3.31981 0.0936505 3.09372 0.260349 2.92702C0.427048 2.76032 0.653141 2.66667 0.888889 2.66667H6.22222ZM16 0V7.11111H14.2222V3.03378L7.29511 9.96178L6.03822 8.70489L12.9644 1.77778H8.88889V0H16Z"
						fill="#607B96"/>
				</svg>
				{name}
			</a>
		</li>
	);
}

interface ExternalLinks {
	link: string,
	name: string
}

const externalLinksList: ExternalLinks[] = [
	{
		link: "https://www.twitch.tv/denzdev",
		name: "Twitch channel"
	},
	{
		link: "https://www.linkedin.com/in/kevin-grischko/",
		name: "LinkedIn"
	},
	{
		link: "https://github.com/DenZaiyy",
		name: "Github"
	}
];

const Contact = () => {

	const [inputName, setInputName] = useState<string>('')
	const [inputEmail, setInputEmail] = useState<string>('')
	const [inputMessage, setInputMessage] = useState<string>('')
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (event.target.name === 'name') setInputName(event.target.value)
		if (event.target.name === 'email') setInputEmail(event.target.value)
		if (event.target.name === 'message') setInputMessage(event.target.value)
	}

	const currentDate = new Date();
	const formatter = new Intl.DateTimeFormat('en-US', {dateStyle: 'medium'});
	const date = formatter.format(currentDate);

	return (
		<div className="contact-me">
			<section className="sub-menu">
				<ul className="tabs text-white">
					<li className="item">
						<input type="checkbox" id="faq1" className="peer appearance-none"/>
						<RiArrowRightSFill className="peer-checked:hidden inline"/>
						<RiArrowDownSFill className="peer-checked:inline hidden"/>
						<label htmlFor="faq1" className="py-2 cursor-pointer grow flex items-center space-x-3">
							contacts
						</label>
						<div
							className="peer-checked:max-h-max basis-full peer-checked:border-t-[1px] border-[var(--lines)] peer-checked:p-3 max-h-0 overflow-hidden transition-all duration-100 select-text">
							<ul>
								<li>
									<a href="mailto:grischko.kevin@gmail.com" rel="noreferrer" className="flex flex-row items-center gap-x-2">
										<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
											<path
												d="M0.811096 0.548828H15.4108C15.6259 0.548828 15.8322 0.634283 15.9844 0.786393C16.1365 0.938503 16.2219 1.14481 16.2219 1.35992V14.3375C16.2219 14.5526 16.1365 14.7589 15.9844 14.911C15.8322 15.0631 15.6259 15.1486 15.4108 15.1486H0.811096C0.59598 15.1486 0.389675 15.0631 0.237565 14.911C0.0854545 14.7589 0 14.5526 0 14.3375V1.35992C0 1.14481 0.0854545 0.938503 0.237565 0.786393C0.389675 0.634283 0.59598 0.548828 0.811096 0.548828ZM8.15963 7.59158L2.95888 3.17516L1.90851 4.41127L8.17017 9.728L14.3191 4.40721L13.2582 3.18002L8.16044 7.59158H8.15963Z"
												fill="#607B96"/>
										</svg>
										mail
									</a>
								</li>
								<li className="flex flex-row items-center gap-x-2">
									<a href="tel:+33783452375" rel="noreferrer" className="flex flex-row items-center gap-x-2">
										<svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
											<path
												d="M16.221 13.0453V16.2319C16.2211 16.46 16.1347 16.6797 15.9791 16.8466C15.8236 17.0136 15.6105 17.1153 15.3829 17.1312C14.9891 17.1583 14.6674 17.1727 14.4187 17.1727C6.45507 17.1727 0 10.7176 0 2.754C0 2.50527 0.0135175 2.18356 0.0414537 1.78975C0.0574246 1.56215 0.159129 1.34908 0.326046 1.19354C0.492962 1.038 0.712664 0.951557 0.940819 0.95166H4.12735C4.23913 0.951547 4.34696 0.992987 4.4299 1.06793C4.51283 1.14287 4.56495 1.24597 4.57613 1.35719C4.59686 1.56445 4.61578 1.72937 4.63381 1.85463C4.8129 3.10448 5.17992 4.32008 5.72242 5.4602C5.80803 5.64044 5.75215 5.85582 5.58994 5.97117L3.64522 7.36077C4.83427 10.1314 7.04222 12.3393 9.81282 13.5284L11.2006 11.5872C11.2573 11.5079 11.3401 11.4511 11.4345 11.4265C11.5288 11.402 11.6288 11.4113 11.717 11.453C12.857 11.9945 14.0723 12.3606 15.3217 12.5389C15.4469 12.5569 15.6118 12.5767 15.8173 12.5966C15.9284 12.6079 16.0312 12.6601 16.106 12.7431C16.1807 12.826 16.2221 12.9337 16.2219 13.0453H16.221Z"
												fill="#607B96"/>
										</svg>
										phone
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="item">
						<input type="checkbox" id="faq2" className="peer appearance-none"/>
						<RiArrowRightSFill className="peer-checked:hidden inline"/>
						<RiArrowDownSFill className="peer-checked:inline hidden"/>
						<label htmlFor="faq2" className="py-2 cursor-pointer grow flex items-center space-x-3">
							find-me-also-in
						</label
						>
						<div
							className="peer-checked:max-h-max basis-full peer-checked:border-t-[1px] border-[var(--lines)] peer-checked:p-3 max-h-0 overflow-hidden transition-all duration-100 select-text">
							<ul>
								{externalLinksList.map((item, index) => externalLinks(index, item.link, item.name))}
							</ul>
						</div>
					</li>
				</ul>
			</section>

			<section className="content-section">
				<div className="content">
					<div className="tab">
						<div className="tab-title">
							<span>contacts</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
								<g clipPath="url(#clip0_64_1646)">
									<path
										d="M9.34771 8.71879L13.0602 5.00629L14.1207 6.06679L10.4082 9.77929L14.1207 13.4918L13.0602 14.5523L9.34771 10.8398L5.63521 14.5523L4.57471 13.4918L8.28721 9.77929L4.57471 6.06679L5.63521 5.00629L9.34771 8.71879Z"
										fill="#607B96"/>
								</g>
								<defs>
									<clipPath id="clip0_64_1646">
										<rect width="18" height="18" fill="white" transform="translate(0.347656 0.779297)"/>
									</clipPath>
								</defs>
							</svg>
						</div>
					</div>
					<div className="tab-content">
						<form action="" method="post">
							<div className="form-group">
								<label htmlFor="name">_name</label>
								<input type="text" name="name" id="name" onChange={handleInputChange} placeholder="name"/>
							</div>

							<div className="form-group">
								<label htmlFor="email">_email</label>
								<input type="email" name="email" id="email" onChange={handleInputChange} placeholder="example@example.com"/>
							</div>

							<div className="form-group">
								<label htmlFor="message">_message</label>
								<textarea name="message" onChange={handleInputChange} id="message"></textarea>
							</div>
							<button type="submit" id="sendBtn" className="btn btn-default w-auto">submit-message
							</button>
						</form>
					</div>
				</div>
				<div className="snippets">
					<div className="tab"></div>
					<div className="tab-content">
						<SyntaxHighlighter
							language={"javascript"}
							wrapLines={true}
							wrapLongLines={true}
							showLineNumbers={true}
							showInlineLineNumbers={true}
							style={atomOneDark}
							lineProps={{
								style: {display: "block !important", width: "100%"},
							}}
							className="!bg-transparent !overflow-hidden"
						>
							{dedent(`const button = document.querySelector("#sendBtn");
								
							const message = {
								name: "${inputName}",
								email: "${inputEmail}",
								message: "${inputMessage}"
								date: "${date}"
							}
							
							button.addEventListener("click", () => {
								form.send(message);
							});
							`)}
						</SyntaxHighlighter>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
