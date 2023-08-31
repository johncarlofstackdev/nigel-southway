import Image from "next/image";
import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_INTRO } from "@/const/author";

export const metadata: Metadata = {
  title: AUTHOR_NAME + " | Introduction",
  description: AUTHOR_INTRO,
};

const Introduction: React.FC = () => {
  return (
    <main>
      Introduction
    </main>
  );
};

export default Introduction;
