import Image from "next/image";
import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_INTRO } from "@/const/author";
import Styles from "@/styles/book-ordering.module.css";

export const metadata: Metadata = {
    title: AUTHOR_NAME + " | Book Ordering",
    description: AUTHOR_INTRO,
};  

const BookOrdering: React.FC = () => {
  return (
    <main className={Styles.main}>
      <p>Book ordering page, where you can take the first step towards unlocking a world of knowledge and exploration. Our carefully curated selection of books offers a wealth of insights, stories, and wisdom waiting to be discovered. Whether you&apos;re seeking inspiration, information, or simply a captivating story, we invite you to browse our collection and find the perfect book that resonates with your interests. Ordering a book is not just a transaction; it&apos;s an invitation to embark on a journey of discovery, and we&apos;re here to help you every step of the way. Start your reading adventure today!</p>
      <div className={Styles.book}>
        <Image 
          src="/images/Free Editable Book Cover Mockup.png"
          height={500}
          width={500}
          alt="Book" />
        <div className={Styles.about}>
          <p>This book is about how in less than one lifetime we have experienced the destruction of the manufacturing sectors in our western societies. and the significant loss of national prosperity, and why the imperative for western economies must be to ….Take Back Manufacturing! The globalized manufacturing approach with efficient supply chains supported by liberalized free trade agreements has been the business norm in the last four decades and has been the prime reason for the <q>hollowing out</q> of our Western industrial base. But now many experts predict yet another significant change regarding global and national economic conditions that will, for many reasons, provide an opportunity for our western economies to move back to more localized trade blocs, and the reshoring of their manufacturing. Some nations, including Canada, are not considered a logical reshoring destination, and experts predict further decline in manufacturing, but this book provides a perspective and outlook that suggests that with the correct political will and focus they could recover their manufacturing industries and improve future prosperity. </p>
          <p>Nigel Southway is an independent business consultant and the author of Cycle Time Management: The Fast Track to Time-Based Productivity Improvement, a LEAN thinking textbook. He consults and educates worldwide on Business Productivity Improvement, Advanced Manufacturing Engineering, and Global Sustainability. He is a past chair of the Society of Manufacturing Engineers and the leading advocate for the Take Back Manufacturing Forum, and the North American Reshoring initiative in Canada. www.nigelsouthway.com</p>
        </div>
      </div>
      <h3>Now Available</h3>
      <div className={Styles.list}>
          <a href="#">
            <Image 
              src="/images/Amazon-Purchase-Book.png"
              width={100}
              height={100}
              alt="Amazon" />
          </a>
          <a href="#">
          <Image 
            src="/images/Amazon-Canada-Purchase-Book.png"
            width={100}
            height={100}
            alt="Amazon" />
          </a>
          <a href="#">
          <Image 
            src="/images/Amazon-Kindle-Purchase-Book.png"
            width={100}
            height={100}
            alt="Amazon" />
            </a>
          <a href="#">
          <Image 
            src="/images/Indigo-Canada.png"
            width={100}
            height={100}
            alt="Amazon" />
          </a>
          <a href="#">
          <Image 
            src="/images/Smashwords-Purchase-Book.png"
            width={100}
            height={100}
            alt="Amazon" />
            </a>
          <a href="#">
          <Image 
            src="/images/abe.jpg"
            width={100}
            height={100}
            alt="Amazon" />
          </a>
      </div>
    </main>
  );
};

export default BookOrdering;