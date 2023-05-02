import styles from "./index.module.css";

interface IFaqItem {
  question: string;
  answer: JSX.Element;
}

export const FaqItem = ({ question, answer }: IFaqItem) => (
  <details className={styles.container}>
    <summary>{question}</summary>
    <div className={styles.details}>{answer}</div>
  </details>
);
