const UserDetail = ({ field, value }) => {
  return (
    <li className="flex items-center">
      <span className="flex-[0_0_6rem]">{field}</span>
      <span className="flex-[0_0_2rem]">:</span>
      <span className="text-black dark:text-white">{value}</span>
    </li>
  );
};

export default UserDetail;
