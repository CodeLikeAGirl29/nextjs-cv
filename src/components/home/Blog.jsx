"use client";

import { blogs } from "@/src/staticData/home/home";
import Button from "../ui/Button";
import SectionHeading from "../shared/SectionHeading";
import SingleBlog from "./SingleBlog";
import { useState } from "react";

const Blog = () => {
  const [showMore, setShowMore] = useState(3);

  return (
    <div
      data-scroll-index="6"
      id="blog"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
        <SectionHeading {...blogs?.blogsHeading} />

        <div className="blog-list md:space-y-7.5 space-y-5">
          {blogs?.blogsData
            ?.map((blog, i) => <SingleBlog key={i} blog={blog} />)
            .splice(0, showMore)}
        </div>

        {showMore !== blogs?.blogsData?.length && (
          <div className="mt-10 text-center more-blogs md:mt-13">
            <Button
              text="More Post"
              onClick={() => setShowMore(blogs?.blogsData?.length)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
