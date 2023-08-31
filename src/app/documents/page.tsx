import Image from "next/image";
import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_INTRO } from "@/const/author";

export const metadata: Metadata = {
  title: AUTHOR_NAME + " | Documents",
  description: AUTHOR_INTRO,
};

const Documents: React.FC = () => {
  return (
    <main>
      Documents
    </main>
  );
};

export default Documents;