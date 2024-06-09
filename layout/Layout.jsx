"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedLine from "@/src/components/ui/AnimatedLine";
import useMediaQuery from "@/src/hooks/useMediaQuery";
import RightNav from "@/layout/RightNav";
import SidebarProfile from "@/layout/SidebarProfile";
import MobileMenuBar from "@/layout/mobile/MobileMenuBar";
import MobileNav from "@/layout/mobile/MobileNav";
import Preloader from "@/src/components/shared/Preloader";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loader, setLoader] = useState(true);
  const isMobile = useMediaQuery("(max-width: 1199px)");
  const midContainer = useRef(null);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (!isMobile && isOpen) {
      toggleDrawer();
    }
  }, [isMobile]);

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      setLoader(false);
    } else {
      const preloaderElement = document.getElementById("preloader");

      const preloadedTimeout = setTimeout(() => {
        preloaderElement && preloaderElement.classList.add("preloaded");
      }, 1000);

      const loaderTimeout = setTimeout(() => {
        setLoader(false);
      }, 2000);

      return () => {
        clearTimeout(preloadedTimeout);
        clearTimeout(loaderTimeout);
      };
    }
  }, []);

  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash.substr(1);
      const section = document.getElementById(hash);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToSection();

    const handleHashChange = () => {
      scrollToSection();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [loader]);

  if (loader && pathname === "/") {
    return <Preloader />;
  }

  return (
    <div>
      <div className="relative pt-10 minfo__app max-xl:pt-20">
        {/* <div className="menu-overlay fixed top-0 left-0 w-full h-full bg-black/60 transition-all duration-200 z-999 opacity-0 invisible [&.is-menu-open]:visible [&.is-menu-open]:opacity-100"></div> */}
        <div className="max-lg:px-4">
          <MobileMenuBar toggleDrawer={toggleDrawer} />
          <MobileNav isOpen={isOpen} toggleDrawer={toggleDrawer} />
          <SidebarProfile />
          <RightNav midContainer={midContainer} />
          <div
            className="relative mx-auto minfo__contentBox max-w-container xl:max-2xl:max-w-65rem"
            ref={midContainer}
          >
            {children}
          </div>
        </div>
      </div>
      <AnimatedLine />
    </div>
  );
};

export default Layout;
