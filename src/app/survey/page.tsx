import Image from "next/image";
import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_INTRO } from "@/const/author";
import Styles from "@/styles/survey.module.css";

export const metadata: Metadata = {
  title: AUTHOR_NAME + " | More",
  description: AUTHOR_INTRO,
};

const Survey: React.FC = () => {
  return (
    <main className={Styles.main}>
        <h2>Survey</h2>
        <p>We value your insights and opinions immensely. Our &apos;Survey Page&apos; is your platform to share your thoughts and contribute to the ongoing dialogue. By participating in our surveys, you become an essential part of our mission to understand and address the challenges and opportunities within the manufacturing landscape. Your input informs our strategies and guides our efforts toward a brighter industrial future. Thank you for taking the time to make your voice heard, and together, we can shape the path forward.</p>
        <p>The survey will assist the Author and the TBM Forum understand the general opinion toward the future of manufacturing and the support for our industry sectors.</p>
        <div className={Styles.questions}>
            <div className={Styles.container}>
                <p><span>1.</span> Are you involved in industry or manufacturing in any way?</p>
                <div className={Styles.choices}>
                   <label>
                    <input type="radio" name="question1" id="question-1" />
                    <span>Yes</span>
                   </label>
                   <label>
                    <input type="radio" name="question1" id="question-1" />
                    <span>No</span>
                   </label>
                </div>
            </div>
            <div className={Styles.container}>
                <p><span>2.</span> Are you involved in industry or manufacturing in any way?</p>
                <div className={Styles.choices}>
                   <label>
                    <input type="radio" name="question2" id="question-2" />
                    <span>Yes</span>
                   </label>
                   <label>
                    <input type="radio" name="question2" id="question-2" />
                    <span>No</span>
                   </label>
                </div>
            </div>
            <div className={Styles.container}>
                <p><span>3.</span> Are you involved in industry or manufacturing in any way?</p>
                <div className={Styles.choices}>
                   <label>
                    <input type="radio" name="question3" id="question-3" />
                    <span>Yes</span>
                   </label>
                   <label>
                    <input type="radio" name="question3" id="question-3" />
                    <span>No</span>
                   </label>
                </div>
            </div>
            <div className={Styles.container}>
                <p><span>4.</span> Are you involved in industry or manufacturing in any way?</p>
                <div className={Styles.choices}>
                   <label>
                    <input type="radio" name="question4" id="question-4" />
                    <span>Yes</span>
                   </label>
                   <label>
                    <input type="radio" name="question4" id="question-4" />
                    <span>No</span>
                   </label>
                </div>
            </div>
            <div className={Styles.container}>
                <p><span>5.</span> Are you involved in industry or manufacturing in any way?</p>
                <div className={Styles.choices}>
                   <label>
                    <input type="radio" name="question5" id="question-5" />
                    <span>Yes</span>
                   </label>
                   <label>
                    <input type="radio" name="question5" id="question-5" />
                    <span>No</span>
                   </label>
                </div>
            </div>
            <button>Submit Survey</button>
        </div>
    </main>
  );
};

export default Survey;