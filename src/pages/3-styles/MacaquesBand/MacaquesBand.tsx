import { FC } from "react";
import { MacaqueCard, MacaqueCardProps } from "./MacaqueCard/MacaqueCard";
import styles from "./MacaquesBand.module.scss";

interface MacaquesBandProps {
  macaques: MacaqueCardProps[];
}

export const MacaquesBand: FC<MacaquesBandProps> = ({ macaques }) => (
  <section className={styles.band}>
    {macaques.map((macaque, index) => (
      <MacaqueCard key={index} {...macaque} />
    ))}
  </section>
);
