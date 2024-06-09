const Input = ({
  type = "text",
  value = "",
  handleChange = () => console.log("Typing"),
  placeholder = "Name",
  name = "fullName",
  className = "w-full p-5 text-sm outline-none h-13 focus:border-theme dark:placeholder:text-white/40",
  required = true,
  label = "",
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        className={className}
        required={required}
        onChange={(e) => handleChange(e)}
      />
      {label && <label>{label}</label>}
    </>
  );
};

export default Input;
