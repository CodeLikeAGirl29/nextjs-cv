"use client";

import TypeWriterComp from "@/src/components/shared/TypeWriterComp";
import { userDetailsSidebar } from "@/src/staticData/home/home";
import Image from "next/image";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

const SidebarProfile = () => {
  const [change, setChange] = useState(false);
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    setChange(false);
    setCounterStarted(false);
  }, []);

  return (
    <div className="w-full mx-auto minfo__sidebar__wrapper xl:fixed xl:top-1/2 xl:left-4 2xl:left-14 xl:-translate-y-1/2 sm:max-w-sidebar xl:max-2xl:max-w-xs z-999">
      <div className="p-3 max-xl:mb-3 overflow-hidden minfo__sidebar bg-white dark:bg-nightBlack rounded-2xl">
        <div className="mx-4 mt-12 text-center user-info lg:mx-6">
          <Link
            href="/"
            className="mb-2.5 h-36 w-36 block mx-auto border-6 border-platinum dark:border-[#2f2f2f] overflow-hidden rounded-full"
          >
            <Image
              className="hidden dark:block w-full h-full rounded-full"
              src={userDetailsSidebar?.userImage}
              alt={userDetailsSidebar?.userName}
              width={200}
              height={200}
            />
            <Image
              className="dark:hidden w-full h-full rounded-full"
              src={userDetailsSidebar?.userImageLight}
              alt={userDetailsSidebar?.userName}
              width={200}
              height={200}
            />
          </Link>
          <h6 className="mb-1 text-lg font-semibold text-black dark:text-white name">
            {userDetailsSidebar?.userName}
          </h6>
          <div className="leading-none cd-headline clip is-full-width">
            <h6 className="text-sm cd-words-wrapper designation text-theme after:!bg-theme">
              <TypeWriterComp skillsData={userDetailsSidebar?.designations} />
            </h6>
          </div>
        </div>
        <div className="pt-6 mx-4 border-t lg:mx-6 user-meta-info md:mx-7 my-7 border-platinum dark:border-metalBlack">
          <ul className="space-y-3">
            {userDetailsSidebar?.basicInfo?.map((item) => (
              <li key={item?.id} className="flex text-sm">
                <span className="flex-1 font-medium text-black dark:text-white">
                  {item?.field}:
                </span>
                <span>{item?.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-4 py-5 lg:py-6 lg:px-6 rounded-2xl md:px-8 bg-flashWhite dark:bg-metalBlack">
          <div className="text-sm font-medium text-black dark:text-white">
            Skills
          </div>
          <div className="flex items-center justify-between my-4 space-x-4 skills_circle">
            {userDetailsSidebar?.skillsInfo?.map((item) => (
              <div
                key={item?.id}
                className="space-y-2 text-center progressCircle"
              >
                <CountUp
                  start={0}
                  end={item?.value}
                  duration={5}
                  // redraw={true}
                  suffix="%"
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor
                      onChange={(visible) => {
                        if (visible && !counterStarted) {
                          setCounterStarted(true);
                          start();
                          setChange(true);
                        }
                      }}
                    >
                      {({ isVisible }) => {
                        const percentage =
                          isVisible || change ? item?.value : 0;

                        return (
                          <CircularProgressbarWithChildren
                            strokeWidth={3}
                            className="relative w-12 h-12 circle"
                            styles={{
                              root: {},
                              path: {
                                stroke: "#FF4D52",
                                transition: change
                                  ? "stroke-dashoffset 0.5s ease 0s"
                                  : "none",
                                transform: "rotate(0.25turn)",
                                transformOrigin: "center center",
                              },
                              // background: "red",
                              trail: {
                                stroke: "#B7B7B7",
                                strokeLinecap: "butt",
                                transform: "rotate(0.25turn)",
                                transformOrigin: "center center",
                              },
                              text: {
                                // fill: '#f88',
                                // fontSize: '16px',
                              },
                              background: {
                                fill: "#3e98c7",
                              },
                            }}
                            value={percentage}
                          >
                            <div
                              className="absolute inset-0 text-[13px] font-medium label flex-center"
                              ref={countUpRef}
                            >
                              <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">
                                {percentage}
                              </p>
                            </div>
                          </CircularProgressbarWithChildren>
                        );
                      }}
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">
                  {item?.name}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="blank.pdf"
              download
              target="_blank"
              className="text-center text-sm border border-theme bg-theme flex items-center justify-center gap-2 text-white rounded-4xl py-3.5 transition duration-300 text-[15px] font-semibold hover:bg-themeHover hover:border-themeHover"
            >
              DOWNLOAD CV
              <span className="animate-bounce">
                <IoCloudDownloadOutline size={18} />
              </span>
            </Link>
          </div>
        </div>

        <svg className="absolute w-0 h-0">
          <clipPath
            id="my-clip-path"
            clipPathUnits="objectBoundingBox"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M0.001,0.031 C0.001,0.014,0.026,0.001,0.055,0.001 H0.492 C0.506,0.001,0.52,0.004,0.53,0.009 L0.61,0.052 C0.62,0.057,0.634,0.06,0.649,0.06 H0.947 C0.977,0.06,1,0.074,1,0.091 V0.971 C1,0.987,0.977,1,0.947,1 H0.055 C0.026,1,0.001,0.987,0.001,0.971 V0.031"></path>
          </clipPath>
        </svg>
      </div>
    </div>
  );
};

export default SidebarProfile;
