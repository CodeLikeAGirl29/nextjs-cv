"use client";

import { projectTechnologies } from "@/src/staticData/project/project";
import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";
import { useEffect, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const Technologies = () => {
  const [change, setChange] = useState(false);
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    setChange(false);
    setCounterStarted(false);
  }, []);

  return (
    <div>
      <h3 className="mt-12 mb-10 text-2xl font-medium text-black dark:text-white">
        Technologies
      </h3>
      <div className="progressbar-wrap space-y-7">
        {projectTechnologies?.map((item, i) => (
          <div
            key={i}
            className="flex flex-wrap items-center gap-5 progressbar"
          >
            <div className="w-8 icon">
              <Image
                width={100}
                height={100}
                src={item?.image}
                alt={item?.title}
              />
            </div>
            <div className="flex-1 bar" data-percentage="80%">
              <h5 className="mb-2 text-black dark:text-white progress-title-holder text-regular flex items-center justify-between">
                <span className="progress-title">{item?.title}</span>
                <span>{item?.value + "%"}</span>
              </h5>
              <VisibilitySensor
                onChange={(visible) => {
                  if (visible && !counterStarted) {
                    setCounterStarted(true);
                    setChange(true);
                  }
                }}
              >
                {({ isVisible }) => {
                  const percentage = isVisible || change ? item?.value : 0;

                  return (
                    <ProgressBar
                      completed={percentage}
                      bgColor="#00BC91"
                      height="6px"
                      labelColor="#00BC91"
                      animateOnRender
                      transitionDuration="1s"
                    />
                  );
                }}
              </VisibilitySensor>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
