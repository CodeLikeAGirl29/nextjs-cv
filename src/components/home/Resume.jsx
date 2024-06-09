import { educations, resume } from "@/src/staticData/home/home";
import SectionHeading from "../shared/SectionHeading";
import SingleExperience from "./SingleExperience";
import SingleEducation from "./SingleEducation";

const Resume = () => {
  return (
    <div
      data-scroll-index="4"
      id="resume"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
        <SectionHeading {...resume?.resumeHeading} />

        <div className="experience">
          <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2">
            {resume?.resumeData?.map((item, i) => (
              <SingleExperience key={i} {...item} />
            ))}
          </ul>
        </div>
        <br />
        <SectionHeading {...educations?.educationsHeading} />

        <div className="experience">
          <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2">
            {educations?.educationsData?.map((item, i) => (
              <SingleEducation key={i} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
