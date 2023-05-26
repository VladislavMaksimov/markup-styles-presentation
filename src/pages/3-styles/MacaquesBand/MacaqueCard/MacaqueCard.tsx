import { FC } from "react";
import { CardBody, CardBodyProps } from "./CardBody/CardBody";
import { CardHeader, CardHeaderProps } from "./CardHeader/CardHeader";
import styles from "./MacaqueCard.module.scss";

export type MacaqueCardProps = CardHeaderProps & CardBodyProps;

export const MacaqueCard: FC<MacaqueCardProps> = ({
  photoSrc,
  name,
  level,
  skills,
  achievements,
}) => (
  <section className={styles.card}>
    <h2 className={styles.heading}>Macaque card</h2>
    <div className={styles.marker} />
    <div className={styles.content}>
      <CardHeader photoSrc={photoSrc} name={name} />
      <CardBody level={level} skills={skills} achievements={achievements} />
    </div>
  </section>
);
