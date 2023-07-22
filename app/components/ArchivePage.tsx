"use client";

import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useEffect, useState } from "react";
import { webProjects } from "../data/webProjects";
import AnchorObserver from "./AnchorObserver";
import { NavbarContext } from "./Navbar";
import Preloader from "./Preloader";
export default function ArchivePage() {
  GSAP.registerPlugin(ScrollTrigger);

  const scrollIntoArchive = () => {
    const archiveScroll = GSAP.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top",
        end: "bottom",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });

    archiveScroll.fromTo(
      "#navbar",
      {
        // set bg to white
        backgroundColor: "rgba(255,255,255, 0.8)",
        color: "black",
        delay: 5,
        duration: 0.5,
      },
      {
        backgroundColor: " rgba(0,0,0)",
        color: "white",
        duration: 0.5,
      }
    );

    archiveScroll.fromTo(
      "#archive",
      {
        opacity: "100%",
        y: "0%",
        duration: 1,
      },
      {
        opacity: "0%",
        y: "100%",
        duration: 2,
      }
    );

    // archiveScroll.fromTo(
    //   "#about",
    //   {
    //     opacity: "100%",
    //   },
    //   {
    //     opacity: "0%",
    //     duration: 2,
    //   }
    // );
  };

  useEffect(() => {
    scrollIntoArchive();
  }, []);

  var previousTouch: any;
  const { setBgColour, setNavbarMode } = useContext(NavbarContext);
  const [translateX, setTranslateX] = useState<number>(
    typeof window !== "undefined" ? (window?.innerWidth / 2) * -1 : 0
  );

  const [translateY, setTranslateY] = useState<number>(
    typeof window !== "undefined" ? (window?.innerHeight / 2) * -1 : 0
  );

  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;

    setTranslateX(translateX + e.movementX);
    setTranslateY(translateY + e.movementY);

    if (translateX > 0) {
      setTranslateX(0);
    }
    if (translateY > 0) {
      setTranslateY(0);
    }
    if (translateX < window?.innerWidth * -1) {
      setTranslateX(window?.innerWidth * -1);
    }
    if (translateY < window?.innerHeight * -1) {
      setTranslateY(window?.innerHeight * -1);
    }
  };

  return (
    <>
      <AnchorObserver
        onHitTop={() => {
          setBgColour("bg-light-secondary2");
          setNavbarMode("normal");
        }}
      >
        <a href="#archive" />
      </AnchorObserver>
      <div
        className={`w-screen h-screen flex overflow-hidden`}
        style={{ fontSize: "1vw" }}
        id="archive"
      >
        <Preloader />

        <div
          onMouseMove={handleMouseMove}
          onMouseDown={() => {
            setIsDragging(true);
          }}
          onMouseUp={() => {
            setIsDragging(false);
          }}
          onTouchStart={() => {
            setIsDragging(true);
          }}
          onTouchEnd={() => {
            setIsDragging(false);
          }}
          onMouseLeave={() => {
            setIsDragging(false);
          }}
          onTouchMove={(e) => {
            if (!isDragging) return;
            const touch = e.touches[0];
            if (previousTouch) {
              setTranslateX(translateX + touch.clientX - previousTouch.clientX);
              setTranslateY(translateY + touch.clientY - previousTouch.clientY);
            }

            // stop it from going past the edges
            if (translateX > 0) {
              setTranslateX(0);
            }
            if (translateY > 0) {
              setTranslateY(0);
            }
            if (translateX < window?.innerWidth * -1) {
              setTranslateX(window?.innerWidth * -1);
            }
            if (translateY < window?.innerHeight * -1) {
              setTranslateY(window?.innerHeight * -1);
            }

            previousTouch = touch;
          }}
          className="cursor-grabbing bg-light-secondary2 select-none -z-10 w-[300em] h-[300em] xl:w-[300em] xl:h-[200em] absolute overflow-hidden"
          style={{
            transform: `translate(${translateX}px, ${translateY}px)`,
            // backgroundImage: `url(/assets/logo.svg)`,
            // backgroundImage: `url(/dots2.avif)`,
            // backgroundSize: "200vh, 200vh",
            // filter: "invert(1)",
            backgroundAttachment: "fixed",

            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            zIndex: 1,
          }}
          // {/* style={{ perspective: "1000px", backfaceVisibility: "hidden" }} */}
          id="desktop"
        >
          {webProjects.map((project) => (
            <a
              href={!isDragging && project.demo ? project.demo : project.link}
              key={project.id}
              draggable={false}
              className={`xl:w-[40vh] xl:h-[33vh] min-h-fit h-40 w-40 hover:scale-105 transition-all cursor-pointer duration-300 flex-col z-50 absolute bg-light-secondary rounded-xl xl:p-4 p-2 text-light-primary text-center flex justify-center items-center`}
              style={{
                left: `${project.left}%`,
                top: `${project.top}%`,
                right: `${project.right}%`,
                bottom: `${project.bottom}%`,
              }}
            >
              <picture className="bg-[#dddddd] overflow-hidden rounded-xl h-full flex justify-center items-center xl:p-10 p-4">
                <img
                  src={project.images[0]}
                  className="object-cover pointer-events-none"
                  draggable={false}
                  alt={project.name}
                />
              </picture>
              <span className="flex justify-start w-full text-lg xl:py-4 py-2 items-center">
                <p>{project.name}</p>
              </span>
            </a>
          ))}
        </div>
        <span className="z-10 bg-gradient-to-t from-light-secondary to-transparent xl:pt-20 text-light-primary absolute pointer-events-none xl:px-10 px-4 bottom-0 left-0 ">
          <h2 className="w-full font-display xl:pb-10 pb-4 uppercase text-center">
            Web & Game Developer/Designer
          </h2>
          <span className="flex justify-between xl:pb-10 pb-4 xl:text-xl text-xs text-center xl:text-start font-display uppercase">
            <p>Based in Belgium</p>
            <p>Scroll down for more</p>
            <section className="flex gap-x-2 items-center justify-end">
              <div className="w-2 h-2  animate-ping bg-light-tertiary rounded-full" />
              <p className="text-light-tertiary">DRAG TO EXPLORE</p>
            </section>
          </span>
        </span>
      </div>
    </>
  );
}
