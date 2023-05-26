import { FC } from "react";
import styles from "./CorruptedCounter.module.scss";
import { CounterProps } from "../types";

export const CorruptedCounter: FC<CounterProps> = ({
  name,
  currentCount,
  addCount,
}) => {
  console.log(`${name} is rendered!`);
  return (
    <section>
      <p>Current count: {currentCount}</p>
      <button className={styles.add} onClick={addCount}>
        +
      </button>
    </section>
  );
};
