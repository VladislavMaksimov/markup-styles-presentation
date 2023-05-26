import { FC } from "react";
import styles from "./CardHeader.module.scss";

export interface CardHeaderProps {
  photoSrc: string;
  name: string;
}

export const CardHeader: FC<CardHeaderProps> = ({ photoSrc, name }) => (
  <header className={styles.header}>
    <img className={styles.photo} alt={`${name}'s face`} src={photoSrc} />
    <span className={styles.name}>{name}</span>
  </header>
);
