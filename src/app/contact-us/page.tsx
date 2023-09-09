import Image from "next/image";
import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_INTRO } from "@/const/author";
import Styles from "@/styles/contact-us.module.css";
import { Search } from "@/const/svgs";

// FontAwesomes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faPinterest, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
    title: AUTHOR_NAME + " | Contact Us",
    description: AUTHOR_INTRO,
};  

const ContactUs: React.FC = () => {
  return (
    <main className={Styles.main}>
        <h2>Contact Us</h2>
        <p>Your questions, ideas, and feedback matter to us. At &sbquo;Take Back Manufacturing,&sbquo; we&sbquo;re passionate about the resurgence of industry and fostering insightful discussions. If you have inquiries about the book, want to explore topics related to manufacturing, or simply wish to share your thoughts, we're here to listen. Our commitment to engaging with our audience extends beyond these virtual pages. Reach out to us, and let's continue the conversation. Your input fuels our mission, and we look forward to connecting with you.</p>
        <p>Application for TBM newsletter and events list</p>
        <hr className="hr-horizontal" />
        <form id={Styles.mainform}>
            <div className={Styles["form-group"]}>
                <label htmlFor="name">Name</label>
                <input type="text" className={Styles["form-control"]} id="name" placeholder="Enter Name" />
            </div>
            <div className={Styles["form-group"]}>
                <label htmlFor="company">Company</label>
                <input type="text" className={Styles["form-control"]} id="company" placeholder="Enter Company" />
            </div>
            <div className={Styles["form-group"]}>
                <label htmlFor="address">Address</label>
                <input type="text" className={Styles["form-control"]} id="address" placeholder="Enter Address" />
            </div>
            <div className={Styles["form-group"]}>
                <label htmlFor="email">E-mail Address</label>
                <input type="text" className={Styles["form-control"]} id="email" placeholder="Enter E-mail Address" />
            </div>
            <div className={Styles["form-group"]}>
                <label htmlFor="message">Message</label>
                <textarea className={Styles["form-control"]} id="message" rows={10} placeholder="Enter Message"></textarea>
            </div>
            <button>Send Form</button>
        </form>
    </main>
  );
};

export default ContactUs;