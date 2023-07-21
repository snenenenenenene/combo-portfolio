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
      "#archive",
      {
        y: "0%",
        duration: 1,
      },
      {
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
          className="cursor-grabbing bg-light-secondary transition-all duration-100 -z-10 w-[300em] h-[300em] xl:w-[300em] xl:h-[200em] absolute overflow-hidden"
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
              className={`xl:w-96 xl:h-96 h-40 w-40 hover:scale-105 transition-all cursor-pointer duration-300 flex-col z-50 absolute bg-light-secondary2 rounded-xl xl:p-4 p-2 text-light-primary text-center flex justify-center items-center`}
              style={{
                left: `${project.left}%`,
                top: `${project.top}%`,
                right: `${project.right}%`,
                bottom: `${project.bottom}%`,
              }}
            >
              <picture className="bg-[#dddddd] rounded-xl h-full flex justify-center items-center xl:p-10 p-4">
                <img
                  src={project.images[0]}
                  className="object-cover"
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
          <span className="flex justify-between xl:pb-10 pb-4 xl:text-inherit text-xs text-center xl:text-start font-display uppercase">
            <p>Based in Belgium</p>
            <p>Scroll down for more</p>
            <p>Open to Remote</p>
          </span>
        </span>
      </div>
    </>
  );
}
