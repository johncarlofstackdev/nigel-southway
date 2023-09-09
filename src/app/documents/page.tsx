import Image from "next/image";
import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_INTRO } from "@/const/author";
import Styles from "@/styles/document.module.css";

// FontAwesomes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: AUTHOR_NAME + " | Documents",
  description: AUTHOR_INTRO,
};

const Documents: React.FC = () => {
  return (
    <main className={Styles.main}>
      <h2>General Information</h2>
      <p>Document Page, your central hub for accessing a wealth of comprehensive resources and reports dedicated to the resurgence of industry in Western societies, as discussed in the book. Explore meticulously crafted documents that provide in-depth analysis and strategic insights on the imperative of reclaiming manufacturing and revitalizing national prosperity.</p>
      <div className={Styles.list}>
        <div className={Styles.card}>
          <FontAwesomeIcon icon={faFilePdf} />
          <div className={Styles.fileinfo}>
            <h4>Lorem ipsum dolor sit ame</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <span>Dated added - Aug 20, 2023</span>
            <button className={Styles.downloadbtn}>
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
        </div>
        <div className={Styles.card}>
          <FontAwesomeIcon icon={faFilePdf} />
          <div className={Styles.fileinfo}>
            <h4>Lorem ipsum dolor sit ame</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <span>Dated added - Aug 20, 2023</span>
            <button className={Styles.downloadbtn}>
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
        </div>
        <div className={Styles.card}>
          <FontAwesomeIcon icon={faFilePdf} />
          <div className={Styles.fileinfo}>
            <h4>Lorem ipsum dolor sit ame</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <span>Dated added - Aug 20, 2023</span>
            <button className={Styles.downloadbtn}>
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
        </div>
        <div className={Styles.card}>
          <FontAwesomeIcon icon={faFilePdf} />
          <div className={Styles.fileinfo}>
            <h4>Lorem ipsum dolor sit ame</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <span>Dated added - Aug 20, 2023</span>
            <button className={Styles.downloadbtn}>
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Documents;