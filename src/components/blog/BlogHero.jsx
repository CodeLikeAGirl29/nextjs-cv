import Image from "next/image";

const BlogHero = ({ blog }) => {
  return (
    <div>
      <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
        {blog?.blogInfo?.projectHeading?.icon}
        {blog?.blogInfo?.projectHeading?.title}
      </div>

      <h2 className="text-2xl font-semibold leading-normal text-black dark:text-white mt-7 lg:mt-10 article-title lg:text-3xl lg:leading-normal">
        {blog?.title}
      </h2>
      <div className="mb-4 overflow-hidden mt-7 xl:my-8 thumb rounded-xl xl:rounded-2xl">
        <Image
          width={500}
          height={500}
          src={blog?.image?.image || "/assets/img/blog/article1.png"}
          className="w-full"
          alt="Blog Thumbnail Image"
        />
      </div>
      <div className="post-meta sm:flex items-center justify-between my-8 mb-10 max-sm:space-y-3.5">
        {blog?.blogInfo?.projectInfo?.map((item, i) => (
          <div key={i}>
            <h6 className="text-black dark:text-white">{item?.field}</h6>
            <p className="text-regular">{item?.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogHero;
