import { FC } from "react";
import styles from "./MacaqueAchievements.module.scss";

export interface Achievement {
  pictureSrc: string;
  title: string;
}

export interface MacaqueAchievementsProps {
  achievements: Achievement[];
}

export const MacaqueAchievements: FC<MacaqueAchievementsProps> = ({
  achievements,
}) => (
  <section className={styles.wrapper}>
    <h3 className={styles.heading}>Achievements</h3>
    <div className={styles.achievements}>
      {achievements.map((achievement) => (
        <img
          className={styles.achievement}
          alt="achievement"
          src={achievement.pictureSrc}
          title={achievement.title}
        />
      ))}
    </div>
  </section>
);
