import "./About.css";

const About = () => {
	return (
		<div className="about-me">
			<section className="type-infos">
				<div className="professional">
					<a href="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<g clipPath="url(#clip0_72_1439)">
								<path
									d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12 15V17H18V15H12ZM8.414 12L5.586 14.828L7 16.243L11.243 12L7 7.757L5.586 9.172L8.414 12Z"
									fill="#607B96"
								/>
							</g>
							<defs>
								<clipPath id="clip0_72_1439">
									<rect width="24" height="24" fill="white"/>
								</clipPath>
							</defs>
						</svg>
					</a>
				</div>
				<div className="personnal">
					<a href="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
						>
							<g clipPath="url(#clip0_64_1620)">
								<path
									d="M5 20.6519H19V22.6519H5V20.6519ZM12 18.6519C9.87827 18.6519 7.84344 17.809 6.34315 16.3087C4.84285 14.8084 4 12.7736 4 10.6519C4 8.53012 4.84285 6.49529 6.34315 4.995C7.84344 3.49471 9.87827 2.65186 12 2.65186C14.1217 2.65186 16.1566 3.49471 17.6569 4.995C19.1571 6.49529 20 8.53012 20 10.6519C20 12.7736 19.1571 14.8084 17.6569 16.3087C16.1566 17.809 14.1217 18.6519 12 18.6519Z"
									fill="#607B96"
								/>
							</g>
							<defs>
								<clipPath id="clip0_64_1620">
									<rect
										width="24"
										height="24"
										fill="white"
										transform="translate(0 0.651855)"
									/>
								</clipPath>
							</defs>
						</svg>
					</a>
				</div>
				<div className="hobbies">
					<a href="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
						>
							<g opacity="0.4" clipPath="url(#clip0_64_1617)">
								<path
									d="M17 4.87793C18.5913 4.87793 20.1174 5.51007 21.2426 6.63529C22.3679 7.76051 23 9.28663 23 10.8779V14.8779C23 16.4692 22.3679 17.9954 21.2426 19.1206C20.1174 20.2458 18.5913 20.8779 17 20.8779H7C5.4087 20.8779 3.88258 20.2458 2.75736 19.1206C1.63214 17.9954 1 16.4692 1 14.8779V10.8779C1 9.28663 1.63214 7.76051 2.75736 6.63529C3.88258 5.51007 5.4087 4.87793 7 4.87793H17ZM10 9.87793H8V11.8779H6V13.8779H7.999L8 15.8779H10L9.999 13.8779H12V11.8779H10V9.87793ZM18 13.8779H16V15.8779H18V13.8779ZM16 9.87793H14V11.8779H16V9.87793Z"
									fill="#607B96"
								/>
							</g>
							<defs>
								<clipPath id="clip0_64_1617">
									<rect
										width="24"
										height="24"
										fill="white"
										transform="translate(0 0.87793)"
									/>
								</clipPath>
							</defs>
						</svg>
					</a>
				</div>
			</section>

			<section className="sub-menu"></section>

			<section className="content-section">
				<div className="content">
					<div className="tab">
						<div className="tab-title">
							<span>about me</span>
						</div>
					</div>
				</div>
				<div className="snippets"></div>
			</section>
		</div>
	);
}
export default About;