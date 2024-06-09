const ContactInfo = ({ Icon, field, data }) => {
  return (
    <li className="flex flex-wrap items-center gap-5 ">
      <div className="flex justify-center w-12 icon">{Icon}</div>
      <div className="flex-1">
        <h6 className="text-lg text-black dark:text-white">{field}</h6>
        <p className="text-sm">{data}</p>
      </div>
    </li>
  );
};

export default ContactInfo;
