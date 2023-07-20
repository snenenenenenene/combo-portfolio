/* eslint-disable @next/next/no-img-element */
"use client";
import { OrbitControls, SoftShadows } from "@react-three/drei";
import { Suspense, useContext, useState } from "react";
import "react-indiana-drag-scroll/dist/style.css";
import { Canvas } from "react-three-fiber";
import AnchorObserver from "./components/AnchorObserver";
import CornerButton from "./components/CornerButton";
import { Marquee } from "./components/Marquee";
import { Model } from "./components/Model";
import { NavbarContext } from "./components/Navbar";
import { webProjects } from "./data/webProjects";

export default function Home() {
  const [translateX, setTranslateX] = useState(-761);
  const [translateY, setTranslateY] = useState(-1564);
  const [isDragging, setIsDragging] = useState(false);
  const { setBgColour, setNavbarMode } = useContext(NavbarContext);

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    setTranslateX(translateX + e.movementX);
    setTranslateY(translateY + e.movementY);
  };

  return (
    <main className="">
      <AnchorObserver
        onHitTop={() => {
          setBgColour("bg-light-secondary2");
          setNavbarMode("normal");
        }}
      >
        <a href="#aboutme" />
      </AnchorObserver>
      <div
        className="w-screen relative h-screen flex overflow-hidden"
        style={{ fontSize: "1vw" }}
        id="archive"
      >
        <div
          onMouseMove={handleMouseMove}
          onMouseDown={() => {
            setIsDragging(!isDragging);
          }}
          onMouseUp={() => {
            setIsDragging(!isDragging);
          }}
          className="cursor-grabbing bg-light-secondary -z-10 w-[200em] h-[200em] absolute overflow-hidden"
          style={{
            transform: `translateX(${translateX}px) translateY(${translateY}px)`,
            zIndex: 1,
          }}
          // {/* style={{ perspective: "1000px", backfaceVisibility: "hidden" }} */}
          id="desktop"
        >
          {webProjects.map((project) => (
            <a
              href={project.demo ? project.demo : project.link}
              key={project.id}
              className={`w-96 h-96 hover:scale-105 transition-all cursor-pointer duration-300 flex-col z-50 absolute bg-light-secondary2 rounded-xl p-4 text-light-primary text-center flex justify-center items-center`}
              style={{
                left: `${project.left}%`,
                top: `${project.top}%`,
                right: `${project.right}%`,
                bottom: `${project.bottom}%`,
              }}
            >
              <picture className="bg-[#dddddd] rounded-xl h-full flex justify-center items-center p-10">
                <img
                  src={project.images[0]}
                  className="object-cover"
                  alt={project.name}
                />
              </picture>
              <span className="flex justify-start w-full text-lg py-4 items-center">
                <p>{project.name}</p>
              </span>
            </a>
          ))}
        </div>
        <span className="z-10 bg-gradient-to-t from-light-secondary to-transparent pt-20 text-light-primary absolute pointer-events-none px-10 bottom-0 left-0 ">
          <h2 className="w-full font-display pb-10 uppercase text-center">
            Web & Game Developer/Designer
          </h2>
          <span className="flex justify-between pb-10 font-display uppercase">
            <p>Based in Belgium</p>
            <p>Scroll down for more</p>
            <p>Open to Remote</p>
          </span>
        </span>
        <AnchorObserver
          onHitTop={() => {
            setBgColour("bg-light-secondary2");
          }}
        >
          <a href="#aboutme" />
        </AnchorObserver>
      </div>
      <div
        className="h-screen px-20 py-40 font-display w-full relative z-10 bg-light-primary text-light-primary"
        id="about"
      >
        <AnchorObserver
          onHitTop={() => {
            setBgColour("bg-light-secondary");
            setNavbarMode("flush");
          }}
        >
          <a href="#aboutme" />
        </AnchorObserver>
        <span className="text-light-secondary gap-y-8 flex flex-wrap font-bold text-9xl whitespace-pre-wrap">
          <p>SENNE BELS</p>
          <div className="text-xl flex border-2 text-light-tertiary font-display mx-3 border-light-tertiary rounded-full h-10 justify-center items-center px-4">
            Who I Am
          </div>
          <p className="ml-auto">WEB DEV</p>
          <p className="mr-auto">GAME ART</p>
          <p className="ml-auto">3D</p>
          <span className="flex items-center">
            <p className="text-light-tertiary">〔</p>SPECIALISED
            <p className="text-light-tertiary">〕</p>
            <p className="text-2xl px-8">
              Based in Antwerp, Belgium I&apos;m currently looking for a job at
              a company that does something good for the world. I&apos;m
              passionate about sustainability, and environmentallism.
            </p>
          </span>
          <span className="flex flex-wrap gap-y-8">
            <p className="flex">
              IN FRONTEND<p className="text-light-tertiary">/</p>DESIGN
            </p>
            <p className="ml-auto">AI, </p>
            <p>AND THREE</p>
          </span>
        </span>
        <AnchorObserver
          onHitTop={() => {
            setBgColour("bg-light-secondary");
          }}
        >
          <a href="#aboutme" />
        </AnchorObserver>
      </div>

      <div
        className="h-screen p-20 bg-light-secondary w-full relative z-10"
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
        <p className="text-light-primary text-8xl font-bold">
          YOUR NEW 〔DEVELOPMENT〕 PARTNER
        </p>
        <Canvas
          shadows
          orthographic
          camera={{
            zoom: 60,
            position: [0, 10, -60],
          }}
          className="w-full h-full flex absolute inset-0 cursor-grab"
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
        <p className="absolute left-1/2 top-1/2 flex flex-wrap -translate-x-1/2 -translate-y-1/2 text-9xl text-light-primary w-[58rem] justify-center items-center font-bold text-center">
          WE&apos;D BE A GOOD TEAM <p className="text-light-secondary">〔</p>
          TOGETHER<p className="text-light-secondary">〕</p>
        </p>
        <section className="mt-auto font-display text-light-primary text-2xl p-10 w-full justify-between flex">
          <div>
            <p>Designed by Senne Bels</p>
            <p>Developed by Senne Bels</p>
          </div>
          <div className="flex h-10 mt-auto gap-x-10">
            <CornerButton
              href="https://github.com/snenenenenenene"
              name="Github"
            />
            <CornerButton href="https://snenenenene.itch.io/" name="Itch.io" />
            <CornerButton
              href="https://www.linkedin.com/in/sennebels/"
              name="LinkedIn"
            />
          </div>
          <div className="text-end">
            <a>Back to top</a>
            <p>@2023 - All Rights Reserved</p>
          </div>
        </section>
      </div>
    </main>
  );
}
