"use client";

import TopToBottom from "@/src/hooks/useTopToBottom";
import { useEffect } from "react";
import { GoMoveToTop } from "react-icons/go";

function BackToTop({ className }) {
  useEffect(() => {
    TopToBottom(".topbutton");
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      id="scroll-top"
      style={{ cursor: "pointer" }}
      className={`topbutton btn-show ${className || ""}`}
    >
      <GoMoveToTop size={25} />
    </div>
  );
}

export default BackToTop;
