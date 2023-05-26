import { FC } from "react";
import {
  MacaqueAchievements,
  MacaqueAchievementsProps,
} from "./MacaqueAchievements/MacaqueAchievements";
import { MacaqueLevel, MacaqueLevelProps } from "./MacaqueLevel/MacaqueLevel";
import {
  MacaqueSkills,
  MacaqueSkillsProps,
} from "./MacaqueSkills/MacaqueSkills";
import styles from "./CardBody.module.scss";

export type CardBodyProps = MacaqueLevelProps &
  MacaqueSkillsProps &
  MacaqueAchievementsProps;

export const CardBody: FC<CardBodyProps> = ({
  level,
  skills,
  achievements,
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.contentRow}>
        <MacaqueSkills skills={skills} />
        <MacaqueLevel level={level} />
      </div>
      <MacaqueAchievements achievements={achievements} />
    </div>
  );
};
