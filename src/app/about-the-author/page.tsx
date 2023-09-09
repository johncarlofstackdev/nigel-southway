import Image from "next/image";
import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_INTRO } from "@/const/author";
import Styles from "@/styles/about-the-author.module.css";
import { Search } from "@/const/svgs";

// FontAwesomes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faPinterest, faAmazon } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
    title: AUTHOR_NAME + " | About the author",
    description: AUTHOR_INTRO,
};  

const AboutTheAuthor: React.FC = () => {
  return (
    <main className={Styles.main}>
        <h2>Meet the Author</h2>
        <p>Delve into the life and experiences that have shaped the creative mind behind the words. Our &apos;About the Author&apos; page offers an intimate glimpse into the journey, passions, and insights of the individual who penned the pages you&apos;ve come to enjoy. Discover the inspirations, motivations, and unique perspective that breathe life into their work. Join us in getting to know the author behind the stories, and find a deeper connection to the literary world you love.</p>
        <div className={Styles.content}>
            <Image 
                src="/images/author.jpg"
                width={300}
                height={300}
                alt="Author Image"
            />
            <div className={Styles.about}>
                <h3>Nigel Southway</h3>
                <p>Nigel Southway is an independent business consultant and the author of Cycle Time Management: The Fast Track to Time-Based Productivity Improvement, a LEAN thinking textbook.</p>
                <p>He consults and educates worldwide on Business Productivity Improvement, Advanced Manufacturing Engineering, and Global Sustainability.</p>
                <p>He is a past chair of the Society of Manufacturing Engineers and the leading advocate for the Take Back Manufacturing Forum, and the North American Reshoring initiative in Canada.</p>
                <h4>Socials</h4>
                <div className={Styles.socials}>
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faPinterest} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faAmazon} />
                    </a>
                </div>
            </div>
        </div>
    </main>
  );
};

export default AboutTheAuthor;