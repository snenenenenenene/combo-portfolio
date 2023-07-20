"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";
import { NavbarContextC } from "./Navbar";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NavbarContextC>
      <ReactLenis root>{children}</ReactLenis>
    </NavbarContextC>
  );
}
