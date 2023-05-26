import { FC } from "react";
import styles from "./MacaqueSkills.module.scss";

export interface MacaqueSkillsProps {
  skills: string[];
}

export const MacaqueSkills: FC<MacaqueSkillsProps> = ({ skills }) => (
  <section className={styles.skills}>
    <h3 className={styles.heading}>Skills</h3>
    <ul className={styles.list}>
      {skills.map((skill) => (
        <li>- {skill}</li>
      ))}
    </ul>
  </section>
);
