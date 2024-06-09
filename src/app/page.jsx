import AboutMe from "@/src/components/home/AboutMe";
import Blog from "@/src/components/home/Blog";
import ContactMe from "@/src/components/home/ContactMe";
import Hero from "@/src/components/home/Hero";
import Portfolio from "@/src/components/home/Portfolio";
import Resume from "@/src/components/home/Resume";
import Service from "@/src/components/home/Service";
import Skills from "@/src/components/home/Skills";
import Testimonial from "@/src/components/home/Testimonial";
import Footer from "@/src/components/shared/Footer";
import Layout from "@/layout/Layout";

export default async function Home() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Service />
      <Skills />
      <Resume />
      <Portfolio />
      <Blog />
      <Testimonial />
      <ContactMe />
      <Footer />
    </Layout>
  );
}
