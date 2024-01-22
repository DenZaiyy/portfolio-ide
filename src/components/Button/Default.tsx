interface ButtonInterface {
	link: string,
	text: string,
}

const DefaultButton = (props: ButtonInterface) => {
	return (
		<a
			href={props.link}
			className="bg-[#1C2B3A] py-[10px] px-[14px] rounded-md max-w-max block text-white hover:bg-[#607B96] transition-all duration-300"
			target="_blank"
			aria-label={props.text}
		>
			{props.text}
		</a>
	);
};

export default DefaultButton;
