import Image from "next/image";
import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_INTRO } from "@/const/author";

export const metadata: Metadata = {
  title: AUTHOR_NAME + " | TBM Articles",
  description: AUTHOR_INTRO,
};

const TBMArticles: React.FC = () => {
  return (
    <main>
      TBM Articles
    </main>
  );
};

export default TBMArticles;