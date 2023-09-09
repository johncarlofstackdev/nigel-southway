import Image from "next/image";
import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_INTRO } from "@/const/author";
import { Search } from "@/const/svgs";
import Styles from "@/styles/tbm-articles.module.css";

// FontAwesomes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faShareFromSquare } from "@fortawesome/free-regular-svg-icons";

export const metadata: Metadata = {
  title: AUTHOR_NAME + " | TBM Articles",
  description: AUTHOR_INTRO,
};

const TBMArticles: React.FC = () => {
  return (
    <main className={Styles.main}>
      <p>Welcome to the &quot;Take Back Manufacturing&quot; Articles Page, your destination for in-depth insights on reviving Western manufacturing sectors as discussed in the book. Explore the imperative of restoring national prosperity and the strategies to achieve it through our carefully curated articles.</p>
      <div className={Styles.content}>
        <div className={Styles.list}>
          <div className={Styles.blogtab}>
              <div className={Styles.filter}>
                <a href="#" className={Styles.active}>New</a>
                <a href="#">Top</a>
                <a href="#">Community</a>
              </div>
              <button className={Styles.searcharticle}>{Search}</button>
          </div>
          <div className={Styles.cardblog}>
            <div className={Styles.cardcontent}>
                <section>
                   <h1>Big Oil&#96;s evergreen false solution is now Republicans&apos; climate plan</h1>
                   <p>Major fossil fuel companies have been selling tree planting as an alternative to getting off oil and gas since the 1980s.</p>
                   <span>Date Posted - August 20, 2023</span>
                </section>
                <Image
                  src="https://substackcdn.com/image/fetch/w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6f2c9c61-6119-424f-a1d8-17ead197f164_2500x1314.png"
                  height={200}
                  width={200}
                  alt="Blog" />
            </div>
            <div className={Styles.cardtab}>
                <a href="#">
                  <FontAwesomeIcon icon={faHeart} />
                  <span>20</span>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faComment} />
                  <span>10</span>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faShareFromSquare} />
                </a>
            </div>
          </div>
          <hr className="hr-horizontal" />
          <div className={Styles.cardblog}>
            <div className={Styles.cardcontent}>
                <section>
                   <h1>Big Oil&apos;s evergreen false solution is now Republicans&apos; climate plan</h1>
                   <p>Major fossil fuel companies have been selling tree planting as an alternative to getting off oil and gas since the 1980s.</p>
                   <span>Date Posted - August 20, 2023</span>
                </section>
                <Image
                  src="https://substackcdn.com/image/fetch/w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6f2c9c61-6119-424f-a1d8-17ead197f164_2500x1314.png"
                  height={200}
                  width={200}
                  alt="Blog" />
            </div>
            <div className={Styles.cardtab}>
                <a href="#">
                  <FontAwesomeIcon icon={faHeart} />
                  <span>20</span>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faComment} />
                  <span>10</span>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faShareFromSquare} />
                </a>
            </div>
          </div>
          <hr className="hr-horizontal" />
          <div className={Styles.cardblog}>
            <div className={Styles.cardcontent}>
                <section>
                   <h1>Big Oil&apos;s evergreen false solution is now Republicans&apos; climate plan</h1>
                   <p>Major fossil fuel companies have been selling tree planting as an alternative to getting off oil and gas since the 1980s.</p>
                   <span>Date Posted - August 20, 2023</span>
                </section>
                <Image
                  src="https://substackcdn.com/image/fetch/w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6f2c9c61-6119-424f-a1d8-17ead197f164_2500x1314.png"
                  height={200}
                  width={200}
                  alt="Blog" />
            </div>
            <div className={Styles.cardtab}>
                <a href="#">
                  <FontAwesomeIcon icon={faHeart} />
                  <span>20</span>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faComment} />
                  <span>10</span>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faShareFromSquare} />
                </a>
            </div>
          </div>
          <hr className="hr-horizontal" />
          <div className={Styles.cardblog}>
            <div className={Styles.cardcontent}>
                <section>
                   <h1>Big Oil&apos;s evergreen false solution is now Republicans&apos; climate plan</h1>
                   <p>Major fossil fuel companies have been selling tree planting as an alternative to getting off oil and gas since the 1980s.</p>
                   <span>Date Posted - August 20, 2023</span>
                </section>
                <Image
                  src="https://substackcdn.com/image/fetch/w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6f2c9c61-6119-424f-a1d8-17ead197f164_2500x1314.png"
                  height={200}
                  width={200}
                  alt="Blog" />
            </div>
            <div className={Styles.cardtab}>
                <a href="#">
                  <FontAwesomeIcon icon={faHeart} />
                  <span>20</span>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faComment} />
                  <span>10</span>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faShareFromSquare} />
                </a>
            </div>
          </div>
        </div>
        <div className={Styles.leftblog}>
          <h4>Recent Post</h4>
          <div className={Styles.recentpost}>
            <div className={Styles.postcard}>
               <span>egestas</span>
               <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={Styles.postcard}>
               <span>egestas</span>
               <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={Styles.postcard}>
               <span>egestas</span>
               <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={Styles.postcard}>
               <span>egestas</span>
               <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={Styles.postcard}>
               <span>egestas</span>
               <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TBMArticles;