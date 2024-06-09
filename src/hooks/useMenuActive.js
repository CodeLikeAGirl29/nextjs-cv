"use client";

import { useState, useEffect } from "react";

const useMenuActive = (ref, selector) => {
  const [activeMenuItem, setActiveMenuItem] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const rightContainer = ref?.current;
      if (!rightContainer) return;

      const scrollPosition = window.scrollY;

      // Determine the active menu item based on scroll position
      const menuItems = document.querySelectorAll(selector);

      let activeMenu = null;
      menuItems.forEach((menuItem) => {
        const targetSection = document.querySelector(
          menuItem.getAttribute("data-section")
        );

        if (!targetSection) return;

        const targetSectionOffset = targetSection.offsetTop;
        const targetSectionHeight = targetSection.offsetHeight;

        // Adjust the conditions to consider both start and end points of the section
        if (
          scrollPosition >= targetSectionOffset &&
          scrollPosition < targetSectionOffset + targetSectionHeight
        ) {
          activeMenu = menuItem.getAttribute("data-section");
        } else if (
          // Add a condition for the bottom of the section
          scrollPosition >= targetSectionOffset - window.innerHeight / 2 &&
          scrollPosition < targetSectionOffset
        ) {
          activeMenu = menuItem.getAttribute("data-section");
        }
      });

      setActiveMenuItem(activeMenu);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeMenuItem;
};

export default useMenuActive;
