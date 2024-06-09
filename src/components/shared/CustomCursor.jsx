"use client";

import React, { useEffect } from "react";

export default function CustomCursor() {
  const cursorDotOutline = React.useRef();
  const cursorDot = React.useRef();
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();

  let [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [width, setWidth] = React.useState(null);
  const [height, setHeight] = React.useState(null);
  let cursorVisible = React.useState(false);
  let cursorEnlarged = React.useState(false);

  /**
   * Mouse Moves
   */
  const onMouseMove = (event) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
    positionDot(event);
  };

  const onMouseEnter = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const onMouseLeave = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const onMouseDown = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const onMouseUp = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const onResize = (event) => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  /**
   * @desc controlling states in client with window object
   */
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  /**
   * Hooks
   */
  React.useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", onResize);
    requestRef.current = requestAnimationFrame(animateDotOutline);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  let { x, y } = mousePosition;
  const winDimensions = { width, height };
  let endX = winDimensions.width / 2;
  let endY = winDimensions.height / 2;

  /**
   * Position Dot (cursor)
   * @param {event}
   */
  function positionDot(e) {
    cursorVisible.current = true;
    toggleCursorVisibility();
    // Position the dot
    endX = e.pageX;
    endY = e.pageY;
    cursorDot.current.style.top = endY + "px";
    cursorDot.current.style.left = endX + "px";
  }

  /**
   * Toggle Cursor Visiblity
   */
  function toggleCursorVisibility() {
    if (cursorVisible.current) {
      cursorDot.current.style.opacity = 1;
      cursorDotOutline.current.style.opacity = 1;
    } else {
      cursorDot.current.style.opacity = 0;
      cursorDotOutline.current.style.opacity = 0;
    }
  }

  /**
   * Toggle Cursor Size
   */
  function toggleCursorSize() {
    if (cursorEnlarged.current) {
      cursorDot.current.style.transform = "translate(-50%, -50%) scale(0.7)";
      cursorDotOutline.current.style.transform =
        "translate(-50%, -50%) scale(5)";
    } else {
      cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
      cursorDotOutline.current.style.transform =
        "translate(-50%, -50%) scale(1)";
    }
  }

  /**
   * Animate Dot Outline
   * Aniamtes cursor outline with trailing effect.
   * @param {number} time
   */
  const animateDotOutline = (time) => {
    if (previousTimeRef.current !== undefined) {
      x += (endX - x) / 8;
      y += (endY - y) / 8;
      cursorDotOutline.current.style.top = y + "px";
      cursorDotOutline.current.style.left = x + "px";
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };
  return (
    <>
      <div
        ref={cursorDotOutline}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-transform duration-150 ease-in-out mix-blend-difference pointer-events-none z-50 w-1 h-1 bg-[#cbd5e0]"
      />
      <div
        ref={cursorDot}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-solid border-[#cbd5e0] rounded-full opacity-0 transition-transform duration-150 ease-in-out mix-blend-difference pointer-events-none z-50 w-8 h-8"
      />
    </>
  );
}
