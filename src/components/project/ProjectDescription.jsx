"use client";

import Technologies from "@/src/components/project/Technologies";
import Image from "next/image";

const ProjectDescription = ({ project }) => {
  return (
    <div>
      <h3 className="mb-3 text-lg font-medium text-black dark:text-white xl:text-2xl">
        {project?.projectDescription?.descriptionTitle}
      </h3>
      <p className="text-regular !leading-[2]">
        {project?.projectDescription?.description}
      </p>
      <ul className="text-regular !leading-[2] list-disc ml-6 my-4">
        {project?.projectDescription?.descriptionLists?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className="grid gap-5 my-8 sm:grid-cols-2 md:gap-8">
        {project?.projectDescription?.projectImage?.map((item, i) => (
          <div className="overflow-hidden rounded-xl xl:rounded-2xl" key={i}>
            <Image
              width={300}
              height={300}
              src={item}
              className="w-full"
              alt="Project Inner Colum Image"
            />
          </div>
        ))}
      </div>

      <Technologies />
    </div>
  );
};

export default ProjectDescription;
