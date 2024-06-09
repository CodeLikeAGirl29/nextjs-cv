import { siteSettings } from "@/src/staticData/siteSettings";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";

const MobileMenuBar = ({ toggleDrawer }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-2 px-3 bg-white/10 mobile-menu-bar sm:px-6 backdrop-blur-md xl:hidden">
      <div className="text-lg font-medium name">
        <Link
          href={siteSettings?.logo?.url}
          className="flex items-center gap-2 text-black dark:text-white"
        >
          <Image
            width={30}
            height={30}
            src={siteSettings?.logo?.image}
            alt={siteSettings?.logo?.alt}
          />
          <span>{siteSettings?.logo?.text}</span>
        </Link>
      </div>
      <button
        className="w-12 h-12 border rounded-full hamburger menu_toggle bg-white dark:bg-nightBlack border-platinum dark:border-greyBlack flex-center"
        type="button"
        aria-label="Open Mobile Menu"
        onClick={toggleDrawer}
      >
        <RiMenu3Fill color="#00BC91" size={23} />
      </button>
    </div>
  );
};

export default MobileMenuBar;
