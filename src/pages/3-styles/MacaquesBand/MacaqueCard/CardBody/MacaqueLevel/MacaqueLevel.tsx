import { FC } from "react";
import styles from "./MacaqueLevel.module.scss";

export interface MacaqueLevelProps {
  level: number;
}

export const MacaqueLevel: FC<MacaqueLevelProps> = ({ level }) => (
  <dl className={styles.level}>
    <div className={styles.info}>
      <dt className={styles.name}>LVL</dt>
      <dd className={styles.value}>{level}</dd>
    </div>
  </dl>
);
