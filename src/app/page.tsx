import Image from "next/image";
import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_INTRO } from "@/const/author";

export const metadata: Metadata = {
  title: AUTHOR_NAME + " | Home",
  description: AUTHOR_INTRO,
};

const Home: React.FC = () => {
  return (
    <main>
      
    </main>
  );
};

export default Home;
