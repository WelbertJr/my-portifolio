import { EmblaOptionsType } from "embla-carousel";
import { Technologies } from "../../components/Technologies";
import { Timeline } from "../../components/Timeline";
import { MyProjects } from "../../components/MyProjects/index";
import { Navbar } from "../../components/NavBar";
import { Introduction } from "../../components/Introduction";
import { Footer } from "../../components/Footer";

const OPTIONS: EmblaOptionsType = { containScroll: false };
const SLIDE_COUNT = 11;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const Home = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-full bg-primary flex-col pt-52 pr-28 pb-20 pl-36 font-poppins max-[1366px]:pr-12 max-[1366px]:pl-12 max-[900px]:pr-4 max-[900px]:pl-4">
        <div className="w-full max-w-[1920px] mx-auto">
          <Introduction />
          <MyProjects slides={SLIDES} options={OPTIONS} />
          <Technologies />
          <Timeline />
        </div>
      </main>
      <Footer />
    </>
  );
};
