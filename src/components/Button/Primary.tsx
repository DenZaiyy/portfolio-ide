interface ButtonInterface {
	link: string,
	text: string,
}

const PrimaryButton = (props: ButtonInterface) => {
	return (
		<a href={props.link} className="bg-[#FEA55F] py-[10px] px-[14px] rounded-md max-w-max block text-[#01080E]"
		   target="_blank">{props.text}</a>
	);
};

export default PrimaryButton;
