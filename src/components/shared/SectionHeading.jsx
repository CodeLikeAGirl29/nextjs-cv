const SectionHeading = ({
  icon,
  title,
  heading,
  coloredHeading,
  description,
}) => {
  return (
    <div>
      {icon && title && (
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          {icon}
          {title}
        </div>
      )}
      <div className="mb-8 mt-7 md:my-10 section-title">
        {heading && coloredHeading && (
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            {heading}{" "}
            <span className="font-semibold text-theme">{coloredHeading}</span>
          </h2>
        )}
        <p className="max-w-xl mt-4 md:mt-6 subtitle">{description}</p>
      </div>
    </div>
  );
};

export default SectionHeading;
