"use client";

import { GrTasks } from "react-icons/gr";
import Image from "next/image";

const ProjectHero = ({ project }) => {
  return (
    <div>
      <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
        {project?.projectHeading?.icon || <GrTasks className="text-theme" />}
        {project?.projectHeading?.title || "Project Details"}
      </div>

      <h2 className="text-2xl font-semibold leading-normal text-black dark:text-white mt-7 lg:mt-10 article-title lg:text-3xl lg:leading-normal">
        {project?.title}
      </h2>
      <div className="mb-4 overflow-hidden mt-7 xl:my-8 thumb rounded-xl xl:rounded-2xl">
        <Image
          src={project?.image?.image || "/assets/img/portfolio/portfolio-img1"}
          width={500}
          height={500}
          className="w-full h-auto"
          alt="Project Thumbnail Image"
          priority
        />
      </div>
      <div className="post-meta sm:flex items-center justify-between my-8 mb-10 max-sm:space-y-3.5">
        {project?.projectInfo?.map((item, i) => (
          <div key={i}>
            <h6 className="text-black dark:text-white">{item?.field}</h6>
            <p className="text-regular">{item?.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHero;
