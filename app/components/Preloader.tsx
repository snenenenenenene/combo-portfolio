"use client";
import GSAP from "gsap";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const timeline = GSAP.timeline();

  useEffect(() => {
    timeline
      .to(".intro-text", {
        duration: 1,
        y: "-200%",
        ease: "power2.inOut",
      })
      .to(".intro-text", {
        duration: 1,
        y: "100%",
        opacity: 0,
        ease: "power2.inOut",
      })
      .to(".preloader", {
        duration: 1,
        y: "100%",
        opacity: 5,
        ease: "power2.inOut",
        yoyoEase: "power2.inOut",
        onComplete: () => {
          setLoaded(true);
        },
      });
  }, []);

  return (
    <div
      className={` preloader inset-0 w-screen h-screen flex fixed opacity-100 pointer-events-none bg-light-primary text-light-tertiary z-50 ${
        loaded ? "hidden" : ""
      }`}
    >
      <span className="absolute bottom-0 translate-y-full pb-20 w-full justify-center items-center flex">
        <h1 className="intro-text text-9xl font-bold uppercase">Senne Bels</h1>
      </span>
    </div>
  );
}
