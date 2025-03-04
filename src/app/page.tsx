import Image from "next/image";
import Header from "./components/Header";
import ProfileIntro from "./components/ProfileIntro";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src="/images/header-bg-color.png"
          className="w-full"
          alt="background-layer-image"
          width={1920}
          height={1080}
        />
      </div>
      <Header />
      <ProfileIntro />
      <AboutMe />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
