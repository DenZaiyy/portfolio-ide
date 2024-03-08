interface ButtonInterface {
  link: string;
  text: string;
}

const DefaultButton = (props: ButtonInterface) => {
  return (
    <a
      href={props.link}
      className="block max-w-max rounded-md bg-[#1C2B3A] px-[14px] py-[10px] text-white transition-all duration-300 hover:bg-[#607B96]"
      target="_blank"
      aria-label={props.text}>
      {props.text}
    </a>
  );
};

export default DefaultButton;
