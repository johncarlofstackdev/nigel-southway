import Image from "next/image";
import Styles from "@/styles/home.module.css"
import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_INTRO } from "@/const/author";

export const metadata: Metadata = {
  title: AUTHOR_NAME + " | Home",
  description: AUTHOR_INTRO,
};

const Home: React.FC = () => {
  return (
    <main className={Styles.main}>
      <figure>
        <Image 
          alt="Featured Book"
          src="/images/featured-book.png"
          height={480}
          width={370} />
      </figure>
      <div className={Styles.featured}>
        <p>This new book is about the ongoing destruction of our manufacturing sectors in our western societies, with significant loss of national prosperity, and why the imperative for western economies must be to TAKE BACK MANUFACTURING.</p>
        <p>It provides a justification and detailed guide for the reshoring of our Western industries.</p>
        <p className={Styles.last}>It has been written for all Western citizens, industry leaders and their governments to understand that Take Back Manufacturing is an imperative for the Western economies and explains the journey we must all take to recover our industrial and national productivity and prosperity</p>
        <div className={Styles.action}>
          <button>Get Your Book Now</button>
          <button>Help us & Take Survey</button>
        </div>
      </div>
    </main>
  );
};

export default Home;
