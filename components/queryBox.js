import { useState } from "react";
import styles from "../styles/queryBox.module.css";

export default function QueryBox() {
  const [question, setQuestion] = useState("");

  const submitQuestion = () => {
    if (question.trim()) {
      alert("Your question has been submitted: " + question);
      setQuestion("");
    } else {
      alert("Please enter a question before submitting.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundOrange}></div>
      <div className={styles.backgroundPurple}></div>
      <div className={styles.content}>
        <div className={styles.heading}>Also more<br />question? let us know</div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="Enter your question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button className={styles.submitButton} onClick={submitQuestion}>
            Submit Now
          </button>
        </div>
      </div>
    </div>
  );
}