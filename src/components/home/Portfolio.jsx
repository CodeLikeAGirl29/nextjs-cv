import Link from "next/link";
import Button from "../ui/Button";
import SectionHeading from "../shared/SectionHeading";
import { portfolio } from "@/src/staticData/home/home";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div
      data-scroll-index="5"
      id="portfolio"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
        <SectionHeading {...portfolio?.portfolioHeading} />

        <div className="portfolio_wrapper grid sm:grid-cols-2 gap-4 lg:gap-7.5">
          {portfolio?.projectsData?.map((portfolio, i) => (
            <div
              key={portfolio?.id}
              className={`relative item z-1 group ${
                i === 1 || i === 2 ? "md:col-span-1" : "md:col-span-2"
              }`}
            >
              <Link
                href={`/project/${portfolio?.slug}`}
                className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
              >
                <div className="img-wrapper">
                  <Image
                    width={800}
                    height={300}
                    src={portfolio?.image?.thumbnail}
                    className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                    alt="portfolio"
                  />
                  <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                </div>
                <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                  {portfolio?.image?.thumbnailText1}
                  <br />
                  <span>{portfolio?.image?.thumbnailText2}</span>
                </div>
              </Link>
              <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
                  >
                    {portfolio?.type}
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center more-blogs md:mt-13">
          <Button text="More Projects" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
