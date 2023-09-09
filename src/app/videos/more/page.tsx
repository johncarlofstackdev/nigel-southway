import Image from "next/image";
import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_INTRO } from "@/const/author";
import Styles from "@/styles/more.module.css";

export const metadata: Metadata = {
  title: AUTHOR_NAME + " | More",
  description: AUTHOR_INTRO,
};

const More: React.FC = () => {
  return (
    <main className={Styles.main}>
      <p className={Styles.last}>Welcome to the &quot;Take Back Manufacturing&quot; video series, where we explore the imperative for Western economies to reclaim manufacturing and recover national prosperity as outlined in this insightful book.</p>
      <div className={Styles.list}>
        <div className={Styles.card}>
          <iframe width="400" height="250" src="https://www.youtube.com/embed/KI72TcxUw7A" title="TBM BOOK intro" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className={Styles.about}>
              <h2>TBM Book Intro</h2>
              <span>Description</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Amet porttitor eget dolor morbi non arcu.</p>
          </div>
        </div>
        <hr className="hr-horizontal" />
        <div className={Styles.card}>
          <iframe width="400" height="250" src="https://www.youtube.com/embed/KI72TcxUw7A" title="TBM BOOK intro" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className={Styles.about}>
              <h2>TBM Book Intro</h2>
              <span>Description</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Amet porttitor eget dolor morbi non arcu.</p>
          </div>
        </div>
        <hr className="hr-horizontal" />
        <div className={Styles.card}>
          <iframe width="400" height="250" src="https://www.youtube.com/embed/KI72TcxUw7A" title="TBM BOOK intro" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className={Styles.about}>
              <h2>TBM Book Intro</h2>
              <span>Description</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Amet porttitor eget dolor morbi non arcu.</p>
          </div>
        </div>
        <hr className="hr-horizontal" />
        <div className={Styles.card}>
          <iframe width="400" height="250" src="https://www.youtube.com/embed/KI72TcxUw7A" title="TBM BOOK intro" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className={Styles.about}>
              <h2>TBM Book Intro</h2>
              <span>Description</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Amet porttitor eget dolor morbi non arcu.</p>
          </div>
        </div>
        <hr className="hr-horizontal" />
      </div>
    </main>
  );
};

export default More;
