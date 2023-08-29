import "@/styles/globals.css"; // React library for building UI components
import { Lexend_Deca } from "next/font/google"; // Google Fonts

// Components
import Sidebar from "@/compnents/sidebar";

// Styles
import left from "@/styles/left.module.css";
import right from "@/styles/right.module.css";

// FontAwesomes
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Search } from "@/const/svgs";

const lexend_deca = Lexend_Deca({ subsets: ["latin"] });
config.autoAddCss = false;

export default function RootLayout({ children }: { children: React.ReactNode, title: string }) {
  return (
    <html lang="en">
      <body className={lexend_deca.className}>
        <div className="wrapper">
          <div className={left.wrapper}>
            <Sidebar styles={left} />
          </div>
          <div className={right.wrapper}>
            <div className={right.bar}>
              <div>
                <h1>TAKE BACK MANUFACTURING</h1>
                <span>An Imperative for Western Economies</span>
              </div>
              <div className={right.search}>
                <i className={right.icon}>{Search}</i>
                <input type="text" placeholder="Write Something..." />
              </div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};