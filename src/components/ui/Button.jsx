"use client";

const defaultClass =
  "inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover";

const Button = ({
  text = "DOWNLOAD CV",
  btnClassName = defaultClass,
  onClick,
  type = "button",
  suffix = "",
  prefix = "",
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log("Button clicked from component!");
    }
  };
  return (
    <button className={btnClassName} onClick={handleClick} type={type}>
      {prefix && prefix}
      {text}
      {suffix && suffix}
    </button>
  );
};

export default Button;
