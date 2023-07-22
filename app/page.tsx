/* eslint-disable @next/next/no-img-element */
"use client";
import { OrbitControls, SoftShadows } from "@react-three/drei";
import GSAP from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Suspense, useContext } from "react";
import "react-indiana-drag-scroll/dist/style.css";
import { Canvas } from "react-three-fiber";
import AnchorObserver from "./components/AnchorObserver";
import ArchivePage from "./components/ArchivePage";
import ContactPage from "./components/ContactPage";
import { Model } from "./components/Model";
import { NavbarContext } from "./components/Navbar";
export default function Home() {
  const { setBgColour } = useContext(NavbarContext);
  GSAP.registerPlugin(ScrollTrigger);

  if (typeof window !== "undefined") {
    const aboutMeScroll = GSAP.timeline({
      scrollTrigger: {
        trigger: "#aboutme",
        start: "top",
        end: "bottom",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });

    aboutMeScroll.fromTo(
      ".sentences",
      {
        x: "-100%",
        duration: 1,
      },
      {
        x: "0%",
        duration: 2,
      }
    );
  }

  return (
    <main>
      <ArchivePage />
      <div
        corner-cut="all"
        className="about xl:h-screen h-fit xl:px-20 bg-light-primary px-4 py-10 xl:py-40 font-display w-full relative z-10 text-light-secondary"
      >
        {/* <section id="blinds" className="fixed inset-0">
          <div id="blind1" className="h-[10%] flex items-end">
            <section className="blind bg-light-primary w-full h-full"></section>
          </div>
          <div id="blind2" className="h-[10%] flex items-end">
            <section className="blind bg-light-primary w-full h-full"></section>
          </div>
          <div id="blind3" className=" h-[10%] flex items-end">
            <section className="blind bg-light-primary w-full h-full"></section>
          </div>
          <div id="blind4" className="h-[10%] flex items-end">
            <section className="blind bg-light-primary w-full h-full"></section>
          </div>
          <div id="blind5" className="h-[10%] flex items-end">
            <section className="blind bg-light-primary w-full h-full"></section>
          </div>
          <div id="blind6" className="h-[10%] flex items-end">
            <section className="blind bg-light-primary w-full h-full"></section>
          </div>
          <div id="blind7" className="h-[10%] flex items-end">
            <section className="blind bg-light-primary w-full h-full"></section>
          </div>
          <div id="blind8" className="h-[10%] flex items-end">
            <section className="blind bg-light-primary w-full h-full"></section>
          </div>
          <div id="blind9" className="h-[10%] flex items-end">
            <section className="blind bg-light-primary w-full h-full"></section>
          </div>
          <div id="blind10" className="h-[10%] flex items-end">
            <section className="blind bg-light-primary w-full h-full"></section>
          </div>
        </section> */}
        <section id="about" className="overflow-hidden">
          <span className="sentences xl:gap-y-8 gap-y-4 flex flex-wrap font-bold xl:text-9xl text-4xl whitespace-pre-wrap">
            <p>SENNE BELS</p>
            <div className="xl:text-xl text-lg flex border-2 text-light-tertiary font-display mx-3 border-light-tertiary rounded-full h-10 justify-center items-center px-4">
              Who I Am
            </div>
            <p className="ml-auto">WEB DEV</p>
            <p className="mr-auto">GAME ART</p>
            <p className="ml-auto">3D</p>
            <span className="flex justify-center items-center flex-col xl:flex-row">
              <span className="flex">
                <p className="text-light-tertiary">〔</p>SPECIALISED
                <p className="text-light-tertiary">〕</p>
              </span>
              <p className="xltext-2xl text-xl xl:px-8 xl:py-0 py-4 px-4">
                Based in Antwerp, Belgium I&apos;m currently looking for a job
                at a company that does something good for the world. I&apos;m
                passionate about sustainability, and environmentallism.
              </p>
            </span>
            <span className="flex flex-wrap xl:gap-y-8">
              <p className="flex">
                IN FRONTEND<p className="text-light-tertiary">/</p>DESIGN
              </p>
              <p className="ml-auto">AI, </p>
              <p>AND THREE</p>
            </span>
          </span>
        </section>
        {/* <AnchorObserver
          onHitTop={() => {
            setNavbarMode("flush");
            setBgColour("bg-light-secondary");
          }}
        >
          <a href="#" />
        </AnchorObserver> */}
      </div>

      <div
        className="h-screen xl:p-20 p-4 bg-light-secondary w-full relative z-10"
        corner-cut="all"
        id="3DShowcase"
      >
        <AnchorObserver
          onHitTop={() => {
            setBgColour("bg-light-secondary2");
          }}
        >
          <a href="#3D" />
        </AnchorObserver>
        <span className="text-light-primary justify-center gap-x-4 xl:text-8xl text-4xl xl:text-start flex pb-10 text-center xl:mb-0 mb-8 font-bold">
          YOUR NEW <p className="text-light-tertiary">〔</p>DEVELOPMENT{" "}
          <p className="text-light-tertiary">〕</p>PARTNER
        </span>
        <div className="flex w-full h-full">
          <section className="w-full">
            <p className="text-light-primary px-20 text-justify text-2xl font-display">
              I&apos;m{" "}
              <b className="text-light-tertiary font-bold">Senne Bels</b>, a
              22-year old IT-graduate - and human.
              <br />
              <br />
              After having graduated in 2022, I started working as a frontend
              developer at the Agency of Home Affairs of Flanders, Belgium.
              However, my hunger for knowledge and my passion for technology led
              me to combine my job with another degree in Multimedia and
              Creative Technologies.
              <br />
              <br />
              It&apos;s always been my main ambition & dream to move abroad! --
              and I&apos;m hoping to find a job that will allow me to do so.
              <br />
              <br />
              I&apos;m specialised as a web developer, but I majored in Big Data
              &amp; Artificial Intelligence. This, as well as the myriad
              business &amp; management courses I took, has blessed me with a
              very broad view on the world of IT.
              <br />
              <br />
              Outside of IT, I&apos;m a passionate gamer, and I love to create.
              Whether it&apos;s 3D, 2D, or even music, I&apos;m always looking
              for new ways to express myself. I&apos;m also a huge fan of the
              outdoors, and I am a huge zoology and history nerd.
              <br />
              <br />
              <b className="font-bold">Fun fact</b>: I love Okapi&apos;s and
              visit them in my local zoo whenever I can. This is what inspired
              my logo.
            </p>
          </section>
          <Canvas
            shadows
            orthographic
            camera={{
              zoom: 60,
              position: [0, 10, -60],
            }}
            className="w-full lg:pointer-events-auto pointer-events-none h-full flex absolute inset-0 cursor-grab"
          >
            <SoftShadows samples={100} />
            <OrbitControls
              enableZoom={false}
              minAzimuthAngle={0}
              maxAzimuthAngle={Math.PI * 1.9999}
              minPolarAngle={Math.PI * 0.2}
              maxPolarAngle={Math.PI * 0.5}
              autoRotate
              autoRotateSpeed={0.3}
            />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
            {/* add a big rectange underneath the object */}
          </Canvas>
        </div>
        <AnchorObserver
          onHitTop={() => {
            setBgColour("bg-light-secondary2");
          }}
        >
          <a href="#aboutme" />
        </AnchorObserver>
      </div>
      <ContactPage />
    </main>
  );
}
