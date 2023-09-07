import Image from "next/image";
import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_INTRO } from "@/const/author";
import Styles from "@/styles/introduction.module.css";

export const metadata: Metadata = {
  title: AUTHOR_NAME + " | Introduction",
  description: AUTHOR_INTRO,
};

const Introduction: React.FC = () => {
  return (
    <main className={Styles.main}>
      <iframe
        src="https://www.youtube-nocookie.com/embed/plw-7T_yayc?si=oLRZy7fgu8e6AEUl"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={Styles.introvideo}
      ></iframe>
    </main>
  );
};

export default Introduction;
