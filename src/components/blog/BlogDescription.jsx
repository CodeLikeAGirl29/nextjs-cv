import { blogSocials, tags } from "@/src/staticData/blog/blog";
import Image from "next/image";

const BlogDescription = ({ blog }) => {
  return (
    <div>
      <div>
        <h3 className="mb-3 text-lg font-medium text-black dark:text-white xl:text-2xl">
          {blog?.blogInfo?.projectDescription?.descriptionTitle}
        </h3>
        <p className="text-regular leading-[2]">
          {blog?.blogInfo?.projectDescription?.description}
        </p>
        <br />
        <h3 className="mb-3 text-lg font-medium text-black dark:text-white xl:text-2xl">
          {blog?.blogInfo?.projectDescription?.descriptionListsTitle}
        </h3>
        <ul className="text-regular leading-[2] list-disc ml-5 my-4">
          {blog?.blogInfo?.projectDescription?.descriptionLists?.map(
            (item, i) => (
              <li key={i}>{item}</li>
            )
          )}
        </ul>
        <div className="grid gap-5 my-8 sm:grid-cols-2 md:gap-8">
          {blog?.blogInfo?.projectDescription?.projectImage?.map((item, i) => (
            <div key={i} className="overflow-hidden rounded-xl xl:rounded-2xl">
              <Image
                width={300}
                height={300}
                src={item}
                className="w-full"
                alt="Blog Inner Colum Image"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="items-start justify-between gap-8 pt-5 my-10 border-t border-dashed blog-footer max-sm:space-y-4 sm:flex border-greyBlack">
        <div className="flex flex-1 gap-3">
          <p className="text-black dark:text-white">Share:</p>
          <ul className="flex items-center space-x-4">
            {blogSocials?.map((item, i) => (
              <li key={i}>
                <a href={item?.link}>{item?.Icon}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 gap-3">
          <p className="text-black dark:text-white">Tags:</p>
          <div className="flex flex-wrap items-center gap-2.5">
            {tags?.map((tag, i) => (
              <a
                key={i}
                href={tag?.link}
                className="inline-block border border-dashed border-greyBlack rounded-md text-sm py-1.5 px-2 transition-all hover:text-theme dark:hover:text-white"
              >
                {tag?.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
