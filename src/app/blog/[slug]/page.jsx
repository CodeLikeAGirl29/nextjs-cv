"use client";

import BlogComment from "@/src/components/blog/BlogComment";
import BlogDescription from "@/src/components/blog/BlogDescription";
import BlogHero from "@/src/components/blog/BlogHero";
import Footer from "@/src/components/shared/Footer";
import Layout from "@/layout/Layout";
import { blogs } from "@/src/staticData/home/home";
import { useEffect, useState } from "react";

export default function SingleBlog({ params }) {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const blog = blogs?.blogsData?.find(
      (project) => project?.slug === params?.slug
    );
    setBlog(blog);
  }, [params?.slug]);

  return (
    <Layout>
      <div
        className="py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
        id="blog"
      >
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
          <BlogHero blog={blog} />

          <BlogDescription blog={blog} />
          <BlogComment />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
