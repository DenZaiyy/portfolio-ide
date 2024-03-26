interface ButtonInterface {
  link: string;
  text: string;
}

const PrimaryButton = (props: ButtonInterface) => {
  return (
    <a
      href={props.link}
      className="block sm:text-sm md:text-md max-w-max rounded-md bg-[#FEA55F] px-[14px] py-[10px] text-[#01080E]"
      target="_blank">
      {props.text}
    </a>
  );
};

export default PrimaryButton;
