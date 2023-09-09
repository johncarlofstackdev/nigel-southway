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
      <div className={Styles.book}>
        <figure>
          <Image 
            alt="Featured Book"
            src="/images/featured-book.png"
            height={480}
            width={370} />
        </figure>
      </div>
      <div className={Styles.featured}>
        <h1>Featured Book</h1>
        <p>This book is about how in less than one lifetime we have experienced the destruction of the manufacturing sectors in our western societies. and the significant loss of national prosperity, and why the imperative for western economies must be to ….Take Back Manufacturing!</p>
        <p>The globalized manufacturing approach with efficient supply chains supported by liberalized free trade agreements has been the business norm in the last four decades and has been the prime reason for the “hollowing out” of our Western industrial base.</p>
        <p>But now many experts predict yet another significant change regarding global and national economic conditions that will, for many reasons, provide an opportunity for our western economies to move back to more localized trade blocs, and the reshoring of their manufacturing.</p>
        <p className={Styles.last}>Some nations, including Canada, are not considered a logical reshoring destination, and experts predict further decline in manufacturing, but this book provides a perspective and outlook that suggests that with the correct political will and focus they could recover their manufacturing industries and improve future prosperity.</p>
        <div className={Styles.action}>
          <button>Get Your Book Now</button>
          <button>Help us & Take Survey</button>
        </div>
      </div>
    </main>
  );
};

export default Home;
