import CornerButton from "./CornerButton";
import { Marquee } from "./Marquee";

export default function ContactPage() {
  // GSAP.registerPlugin(ScrollTrigger);

  // if (typeof window !== "undefined") {
  //   const contactScroll = GSAP.timeline({
  //     scrollTrigger: {
  //       trigger: "#contact",
  //       start: "top",
  //       end: "bottom",
  //       scrub: 0.6,
  //       invalidateOnRefresh: true,
  //     },
  //   });

  //   contactScroll.fromTo(
  //     "#contact-btm",
  //     {
  //       x: "0%",
  //       duration: 1,
  //     },
  //     {
  //       x: "100%",
  //       duration: 1,
  //     }
  //   );
  // }
  return (
    <div
      className="h-full min-h-screen relative overflow-hidden pt-20 bg-light-tertiary flex flex-col -pt-10 z-10 pb-10 2xl:pb-0 w-full"
      id="contact"
    >
      <a href="#contact" />

      <Marquee
        className="mx-auto cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText("sennebels@gmail.com");
        }}
        wordList={[
          "sennebels@gmail.com",
          "sennebels@gmail.com",
          "sennebels@gmail.com",
          "sennebels@gmail.com",
          "sennebels@gmail.com",
          "sennebels@gmail.com",
          "sennebels@gmail.com",
        ]}
      />
      <span className="absolute left-1/2 top-1/2 flex flex-wrap -translate-x-1/2 -translate-y-1/2 xl:text-9xl text-4xl text-light-primary xl:w-[58rem] justify-center items-center font-bold text-center">
        WE&apos;D MAKE A GREAT TEAM
        <span className="flex">
          <p className="text-light-secondary">〔</p>
          <p>TOGETHER</p>
          <p className="text-light-secondary">〕</p>
        </span>
      </span>
      <section
        id="contact-btm"
        className="contact-btm mt-auto font-display text-light-primary xl:text-2xl text-sm xl:p-10 p-4 w-full justify-between flex"
      >
        <div className="xl:flex flex-col hidden">
          <p>Designed/Developed</p>
          <p> by Senne Bels</p>
        </div>
        <div className="flex xl:flex-row flex-col xl:justify-center w-full mt-auto xl:gap-x-10 gap-y-2 ">
          <CornerButton
            className="h-12 xl:h-10"
            href="https://github.com/snenenenenenene"
            name="Github"
          />
          <CornerButton
            className="h-12 xl:h-10"
            href="https://snenenenene.itch.io/"
            name="Itch.io"
          />
          <CornerButton
            className="h-12 xl:h-10"
            href="https://www.linkedin.com/in/sennebels/"
            name="LinkedIn"
          />
        </div>
        <div className="text-end xl:flex flex-col hidden">
          <a href="#archive" className="hover:text-light-secondary">
            Back to top
          </a>
          <p>@2023 - All Rights Reserved</p>
        </div>
      </section>
    </div>
  );
}
