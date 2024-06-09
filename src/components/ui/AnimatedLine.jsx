const AnimatedLine = () => {
  return (
    <div className="bg-lines fixed inset-0 -z-1 md:max-xl:max-w-[45rem] xl:max-w-60rem 2xl:max-w-container mx-auto max-sm:px-8 sm:max-xl:px-12">
      <div className="line-wrapper max-w-[1130px] w-full h-full ml-auto 2xl:-mr-24 relative flex justify-between">
        <div className="relative w-px h-full border-r border-dashed line line1 border-slate-300 dark:border-metalBlack before:absolute before:w-2 before:h-2 before:bg-theme before:rotate-45 before:-left-1 before:animate-top_bottom"></div>

        <div className="relative w-px h-full border-r border-dashed line line2 border-slate-300 dark:border-metalBlack before:absolute before:bottom-0 before:w-2 before:h-2 before:bg-theme before:rotate-45 before:-left-1 before:animate-bottom_top before:animate-delay-3s"></div>

        <div className="relative w-px h-full border-r border-dashed line line3 border-slate-300 dark:border-metalBlack before:absolute before:w-2 before:h-2 before:bg-theme before:rotate-45 before:-left-1 before:animate-top_bottom before:animate-delay-3s"></div>

        <div className="relative w-px h-full border-r border-dashed line line4 border-slate-300 dark:border-metalBlack before:absolute before:bottom-0 before:w-2 before:h-2 before:bg-theme before:rotate-45 before:-left-1 before:animate-bottom_top before:animate-delay-2s"></div>
      </div>
    </div>
  );
};

export default AnimatedLine;
