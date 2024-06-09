const IntroduceJob = ({ icon, title }) => {
  return (
    <li className="flex items-center text-regular">
      {icon}
      {title}
    </li>
  );
};

export default IntroduceJob;
