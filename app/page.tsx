/* eslint-disable @next/next/no-img-element */
"use client";
import { OrbitControls, SoftShadows } from "@react-three/drei";
import { Suspense, useContext } from "react";
import "react-indiana-drag-scroll/dist/style.css";
import { Canvas } from "react-three-fiber";
import AnchorObserver from "./components/AnchorObserver";
import ArchivePage from "./components/ArchivePage";
import CornerButton from "./components/CornerButton";
import { Marquee } from "./components/Marquee";
import { Model } from "./components/Model";
import { NavbarContext } from "./components/Navbar";

export default function Home() {
  const { setBgColour, setNavbarMode } = useContext(NavbarContext);

  return (
    <main>
      <ArchivePage />
      <div
        className="about xl:h-screen h-fit xl:px-20 bg-light-primary px-4 py-10 xl:py-40 font-display w-full relative z-10 text-light-secondary"
        id="about"
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
        <span className="xl:gap-y-8 gap-y-4 flex flex-wrap font-bold xl:text-9xl text-4xl whitespace-pre-wrap">
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
              Based in Antwerp, Belgium I&apos;m currently looking for a job at
              a company that does something good for the world. I&apos;m
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
        <AnchorObserver
          onHitTop={() => {
            setNavbarMode("flush");
            setBgColour("bg-light-secondary");
          }}
        >
          <a href="#aboutme" />
        </AnchorObserver>
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
        <p className="text-light-primary xl:text-8xl text-4xl xl:text-start text-center xl:mb-0 mb-8 font-bold">
          YOUR NEW 〔DEVELOPMENT〕 PARTNER
        </p>
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
        <AnchorObserver
          onHitTop={() => {
            setBgColour("bg-light-secondary2");
          }}
        >
          <a href="#aboutme" />
        </AnchorObserver>
      </div>
      <div
        className="h-[90vh] relative pt-20 bg-light-tertiary flex flex-col -mt-10 w-full"
        id="contact"
      >
        <AnchorObserver
          onHitTop={() => {
            setBgColour("bg-light-secondary");
          }}
        >
          <a href="#aboutme" />
        </AnchorObserver>
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
        <p className="absolute left-1/2 top-1/2 flex flex-wrap -translate-x-1/2 -translate-y-1/2 xl:text-9xl text-4xl text-light-primary xl:w-[58rem] justify-center items-center font-bold text-center">
          WE&apos;D MAKE A GREAT TEAM <p className="text-light-secondary">〔</p>
          TOGETHER<p className="text-light-secondary">〕</p>
        </p>
        <section className="mt-auto font-display text-light-primary xl:text-2xl text-sm xl:p-10 p-4 w-full justify-between flex">
          <div className="xl:flex flex-col hidden">
            <p>Designed by Senne Bels</p>
            <p>Developed by Senne Bels</p>
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
            <a>Back to top</a>
            <p>@2023 - All Rights Reserved</p>
          </div>
        </section>
      </div>
    </main>
  );
}
