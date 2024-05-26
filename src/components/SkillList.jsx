const SkillList = ({ w, icon, heading }) => {
  return (
    <div className="flex items-center">
      <div>
        <div className={` ${w ? w : "w-[80px]"}  h-1 border-b bg-baseColor`} />
      </div>
      <div className="h-auto flex flex-col items-center">
        {icon}
        <h1 className="text-center">{heading}</h1>
      </div>
    </div>
  );
};

export default SkillList;
