import Image from "next/image";
import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_INTRO } from "@/const/author";

export const metadata: Metadata = {
  title: AUTHOR_NAME + " | More",
  description: AUTHOR_INTRO,
};

const More: React.FC = () => {
  return (
    <main>
      More
    </main>
  );
};

export default More;
