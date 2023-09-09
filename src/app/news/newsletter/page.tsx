import Image from "next/image";
import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_INTRO } from "@/const/author";
import { Search } from "@/const/svgs";

// FontAwesomes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faShareFromSquare } from "@fortawesome/free-regular-svg-icons";

export const metadata: Metadata = {
    title: AUTHOR_NAME + " | Latest",
    description: AUTHOR_INTRO,
};  

const Newsletter: React.FC = () => {
  return (
    <main>
     <p>Welcome to our website. We&apos;re currently in the midst of refreshing our introduction to provide you with an even better experience. Stay tuned for our updated intro that will reflect our mission and offerings more accurately. In the meantime, please explore the rest of our site, and if you have any questions or need assistance, don&apos;t hesitate to reach out. Thank you for your patience as we work on these improvements.</p>
     <br />
    </main>
  );
};

export default Newsletter;