"use client";

import { useEffect, useState } from "react";
import ProjectDescription from "@/src/components/project/ProjectDescription";
import ProjectHero from "@/src/components/project/ProjectHero";
import Layout from "@/layout/Layout";
import { portfolio } from "@/src/staticData/home/home";
import Footer from "@/src/components/shared/Footer";

export default function SingleProject({ params }) {
  const [project, setProject] = useState({});
  useEffect(() => {
    const project = portfolio?.projectsData?.find(
      (project) => project?.slug === params?.slug
    );
    setProject(project);
  }, [params?.slug]);

  return (
    <Layout>
      <div
        className="py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
        id="portfolio"
      >
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
          <ProjectHero project={project} />
          <ProjectDescription project={project} />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
