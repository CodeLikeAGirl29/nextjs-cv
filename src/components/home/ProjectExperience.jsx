"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const ProjectExperience = ({ count, postFix, title }) => {
  const [_change, setChange] = useState(false);
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    setChange(false);
    setCounterStarted(false);
  }, []);

  return (
    <li className="">
      <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
        {/* <span>{count}</span>
        {postFix && "+"} */}
        <CountUp start={1} end={count} duration={5} redraw={true} suffix="+">
          {({ countUpRef, start }) => (
            <VisibilitySensor
              onChange={(visible) => {
                if (visible && !counterStarted) {
                  setCounterStarted(true);
                  start();
                  setChange(true);
                }
              }}
              delayedCall
            >
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
      </div>
      <div className="text-sm">{title}</div>
    </li>
  );
};

export default ProjectExperience;
