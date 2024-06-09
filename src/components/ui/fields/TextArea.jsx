const Textarea = ({
  placeholder = "Message",
  value = "",
  handleChange = () => console.log("Typing"),
  name = "message",
  className = "w-full px-5 py-4 text-sm outline-none focus:border-theme dark:placeholder:text-white/40",
  rows = "5",
  label = "",
  required = true,
}) => {
  return (
    <>
      <textarea
        placeholder={placeholder}
        value={value}
        name={name}
        className={className}
        rows={rows}
        onChange={(e) => handleChange(e)}
        required={required}
      ></textarea>
      {label && <label>{label}</label>}
    </>
  );
};

export default Textarea;
