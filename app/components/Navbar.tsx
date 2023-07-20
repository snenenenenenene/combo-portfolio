/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import Logo from "./Logo";

export const NavbarContext = createContext({
  bgColour: "bg-light-tertiary",
  setBgColour: (bgColour: string) => {},
  setNavbarMode: (mode: "flush" | "normal") => {},
  navbarMode: "normal",
});

export function NavbarContextC({ children }: { children: ReactNode }) {
  const [bgColour, setBgColour] = useState("bg-light-primary");
  const [navbarMode, setNavbarMode] = useState<"flush" | "normal">("normal");

  return (
    <NavbarContext.Provider
      value={{ bgColour, setBgColour, setNavbarMode, navbarMode }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Me",
    link: "/#aboutme",
  },
  {
    name: "services",
    link: "/#services",
  },
  {
    name: "contact",
    link: "/#contact",
  },
];

export default function Navbar() {
  const [clickedMenu, setClickedMenu] = useState(false);
  const { bgColour, navbarMode } = useContext(NavbarContext);

  return (
    <div className="flex w-full h-16 fixed justify-center z-20">
      <nav
        border-cut="nav-bar"
        className={` p-[2px] h-16 z-50 flex overflow-hidden justify-between px-10 transition-all duration-200 ${
          clickedMenu
            ? "top-4 right-4 absolute w-[48.2%] bg-light-secondary"
            : navbarMode === "flush"
            ? `w-full top-0 left-0  ${bgColour} ${
                bgColour === "bg-light-tertiary"
                  ? "text-light-secondary shadow-xl"
                  : "text-light-primary"
              }`
            : `w-[99%] translate-y-4 bg-light-secondary2 text-light-primary`
        }
        `}
        corner-cut="bottom-right"
      >
        <span className="h-full w-16 p-2 flex">
          <Logo className="rounded-full" />
        </span>
        <button
          className={`text-xl flex gap-x-10 uppercase font-bold justify-center items-center z-50`}
          onClick={() => setClickedMenu(!clickedMenu)}
        >
          <p>Menu</p>
          <section className="group flex flex-col gap-y-1 hover:gap-y-2 transition-all duration-200">
            <div className="bg-light-tertiary w-[1.5em] h-[2px] mb-1"></div>
            <div className="bg-light-tertiary w-[1.5em] h-[2px]"></div>
          </section>
        </button>
      </nav>
      {/* create a cutout rectangle that is transparent */}
      {clickedMenu && (
        <div className="w-screen flex h-screen z-40  fixed">
          <div className="w-1/2 text-light-secondary flex-col flex bg-light-secondary h-full absolute left-0 top-4">
            <section
              border-cut="top-right"
              className="bg-light-secondary left-1/2 -translate-x-[49.1%] flex w-[95%] h-5/6 absolute"
            >
              <ul className="uppercase p-10 gap-y-8 flex flex-col pointer-events-auto text-7xl text-light-primary font-bold">
                {links.map((link, i) => (
                  <li
                    key={link.name}
                    className="cursor-pointer relative overflow-hidden group flex ml-8"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/640333b292c9610b133ff0c5/64034d54472efbbb59ea63cd_arrow-top_right.svg"
                      loading="lazy"
                      alt="arrow"
                      className="absolute w-10 h-10 transition-all group-hover:opacity-100 opacity-0 duration-200 -bottom-12 left-0 group-hover:-translate-y-16"
                    />
                    <a
                      href={link.link}
                      target="_blank"
                      className="group-hover:pl-14 transition-all duration-200"
                    >
                      {link.name}
                    </a>
                    <div className="rounded-full w-10 justify-center items-center h-6 ml-4 border-2 text-lg flex border-light-tertiary text-light-tertiary">
                      0{i + 1}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section
              className="bg-light-secondary bottom-0 left-1/2 -translate-x-[49.1%] flex w-[95%] h-1/6 absolute"
              border-cut="top"
            ></section>
          </div>
          <div
            className="w-1/2 text-light-secondary h-full absolute right-0 top-0 bg-light-secondary"
            style={{
              clipPath:
                "polygon(0% 0%, 0% 100%, 1% 100%, 1% 1%, 99% 1%, 99% 99%, 1% 99%,1% 100%, 100% 100%, 100% 0%)",
            }}
          ></div>
          <section
            className="w-[49.1%] right-2 h-[98.4%] cursor-pointer mt-[8px] fixed bg-[#00000090] z-10 "
            border-cut="bottom-left"
            onClick={() => setClickedMenu(!clickedMenu)}
          ></section>
        </div>
      )}
    </div>
  );
}
