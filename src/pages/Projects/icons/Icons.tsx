interface IconInterface {
	name: string,
	icon: string
}

const Icon = (props: IconInterface) => {
	return <img src={props.icon} alt={`${props.name} Logo`} width={25} height={25} className={`text-white flex align-middle items-center`} />;
};

export default Icon;
