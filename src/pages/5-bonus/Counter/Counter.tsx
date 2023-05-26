import { FC, memo } from "react";
import styles from "./Counter.module.scss";
import { CounterProps } from "../types";

export const Counter: FC<CounterProps> = memo(
  ({ name, currentCount, addCount }) => {
    console.log(`${name} is rendered!`);
    return (
      <section>
        <p>Current count: {currentCount}</p>
        <button className={styles.add} onClick={addCount}>
          +
        </button>
      </section>
    );
  }
);
