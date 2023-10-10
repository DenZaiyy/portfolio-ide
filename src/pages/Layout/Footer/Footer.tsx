import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="px-5 py-3">find me in:</div>
			<div className="icons">
				<div className="first">
					<a
						href="https://www.linkedin.com/in/kevin-grischko/"
						target="_blank"
						rel="noreferrer"
						className="linkedin"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24"
							fill="none"
						>
							<path
								d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
						</svg>
					</a>
					<a href="" className="discord">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24"
							fill="none"
						>
							<path
								d="M19.3034 5.33716C17.9344 4.71103 16.4805 4.2547 14.9629 4C14.7719 4.32899 14.5596 4.77471 14.411 5.12492C12.7969 4.89144 11.1944 4.89144 9.60255 5.12492C9.45397 4.77471 9.2311 4.32899 9.05068 4C7.52251 4.2547 6.06861 4.71103 4.70915 5.33716C1.96053 9.39111 1.21766 13.3495 1.5891 17.2549C3.41443 18.5815 5.17612 19.388 6.90701 19.9187C7.33151 19.3456 7.71356 18.73 8.04255 18.0827C7.41641 17.8492 6.82211 17.5627 6.24904 17.2231C6.39762 17.117 6.5462 17.0003 6.68416 16.8835C10.1438 18.4648 13.8911 18.4648 17.3082 16.8835C17.4568 17.0003 17.5948 17.117 17.7434 17.2231C17.1703 17.5627 16.576 17.8492 15.9499 18.0827C16.2789 18.73 16.6609 19.3456 17.0854 19.9187C18.8152 19.388 20.5875 18.5815 22.4033 17.2549C22.8596 12.7341 21.6806 8.80747 19.3034 5.33716ZM8.5201 14.8459C7.48007 14.8459 6.63107 13.9014 6.63107 12.7447C6.63107 11.5879 7.45884 10.6434 8.5201 10.6434C9.57071 10.6434 10.4303 11.5879 10.4091 12.7447C10.4091 13.9014 9.57071 14.8459 8.5201 14.8459ZM15.4936 14.8459C14.4535 14.8459 13.6034 13.9014 13.6034 12.7447C13.6034 11.5879 14.4323 10.6434 15.4936 10.6434C16.5442 10.6434 17.4038 11.5879 17.3825 12.7447C17.3825 13.9014 16.5548 14.8459 15.4936 14.8459Z"></path>
						</svg>
					</a>
				</div>
				<a
					href="https://github.com/DenZaiyy"
					target="_blank"
					rel="noreferrer"
					className="github"
				>
					<span>@DenZaiyy</span>
					<div className="icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24"
							fill="none"
						>
							<g clipPath="url(#clip0_42_270)">
								<path
									d="M12.9771 2.27808C7.45205 2.27808 2.97705 6.75308 2.97705 12.2781C2.97592 14.3774 3.63587 16.4237 4.86327 18.1268C6.09067 19.8298 7.8232 21.1031 9.81505 21.7661C10.3151 21.8531 10.5021 21.5531 10.5021 21.2901C10.5021 21.0531 10.4891 20.2661 10.4891 19.4281C7.97705 19.8911 7.32705 18.8161 7.12705 18.2531C7.01405 17.9651 6.52705 17.0781 6.10205 16.8401C5.75205 16.6531 5.25205 16.1901 6.08905 16.1781C6.87705 16.1651 7.43905 16.9031 7.62705 17.2031C8.52705 18.7151 9.96505 18.2901 10.5391 18.0281C10.6271 17.3781 10.8891 16.9411 11.1771 16.6911C8.95205 16.4411 6.62705 15.5781 6.62705 11.7531C6.62705 10.6651 7.01405 9.76608 7.65205 9.06508C7.55205 8.81508 7.20205 7.79008 7.75205 6.41508C7.75205 6.41508 8.58905 6.15308 10.5021 7.44108C11.3161 7.21514 12.1572 7.10142 13.0021 7.10308C13.8521 7.10308 14.7021 7.21508 15.5021 7.44008C17.4141 6.14008 18.2521 6.41608 18.2521 6.41608C18.8021 7.79108 18.4521 8.81608 18.3521 9.06608C18.9891 9.76608 19.3771 10.6531 19.3771 11.7531C19.3771 15.5911 17.0401 16.4411 14.8151 16.6911C15.1771 17.0031 15.4901 17.6031 15.4901 18.5411C15.4901 19.8781 15.4771 20.9531 15.4771 21.2911C15.4771 21.5531 15.6651 21.8651 16.1651 21.7651C18.1501 21.0949 19.875 19.8191 21.097 18.1172C22.3189 16.4154 22.9765 14.3732 22.9771 12.2781C22.9771 6.75308 18.5021 2.27808 12.9771 2.27808Z"
									fill="#607B96"
								/>
							</g>
							<defs>
								<clipPath id="clip0_42_270">
									<rect
										width="24"
										height="24"
										fill="white"
										transform="translate(0.977051 0.278076)"
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
				</a>
			</div>
		</footer>
	);
}

export default Footer;