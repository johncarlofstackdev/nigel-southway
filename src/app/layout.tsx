"use client";
import "@/styles/globals.css"; // React library for building UI components
import { Lexend_Deca } from "next/font/google"; // Google Fonts
import React, { useState, useEffect } from "react";

// Components
import Sidebar from "@/components/sideBar";
import Breadcrumbs from "@/components/breadcrumbs";
import TopBar from "@/components/topBar";
import Overlay from "@/components/overlay";

// Styles
import left from "@/styles/left.module.css";
import right from "@/styles/right.module.css";

// FontAwesomes
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faListSquares } from "@fortawesome/free-solid-svg-icons";


const lexend_deca = Lexend_Deca({ subsets: ["latin"] });
config.autoAddCss = false;

export default function RootLayout({ children }: { children: React.ReactNode, title: string }) {
  const [openNav, openNavSet] = useState(false);

  const updateOpenNav = () => {
    if (window.innerWidth > 940) {
      openNavSet(false);
    }
  };

  // Add event listener when the component mounts
  useEffect(() => {
    // Initial check and event listener
    window.addEventListener("resize", updateOpenNav);
    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateOpenNav);
    };
  }, []);

  return (
    <html lang="en">
      <body className={lexend_deca.className}>
        <div className="wrapper">
          <div className={!openNav ? left.wrapper : left.openNav}>
            <Sidebar styles={left} nav={openNavSet} />
          </div>
          <div className={right.wrapper}>
            <TopBar styles={right} nav={openNavSet} />
            <Breadcrumbs styles={right} />
            {children}
            <footer className={right.footerarea}>
              <p>© Copyright 2023 <span className={right.footername}>NIGEL SOUTHWAY</span>. All Rights Reserved.</p>
            </footer>
          </div>
        </div>
        <Overlay styles={right} nav={openNavSet} isOpen={openNav} />
      </body>
    </html>
  );
};