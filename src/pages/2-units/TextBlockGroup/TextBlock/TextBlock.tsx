import { FC } from "react";
import styles from "./TextBlock.module.scss";

interface TextBlockProps {
  text: string;
  width: string;
  height: string;
  backgroundColor: string;
  fontSize: string;
}

export const TextBlock: FC<TextBlockProps> = ({
  text,
  width,
  height,
  backgroundColor,
  fontSize,
}) => (
  <div
    className={styles.block}
    style={{ fontSize, width, height, backgroundColor }}
  >
    <span className={styles.text}>{text}</span>
  </div>
);
