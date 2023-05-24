import { FC } from "react";
import { TextBlock } from "./TextBlock/TextBlock";
import styles from "./TextBlockGroup.module.scss";

interface TextBlockGroupProps {
  heading: string;
  width: string;
  height: string;
  backgroundColor: string;
}

export const TextBlockGroup: FC<TextBlockGroupProps> = ({
  heading,
  width,
  height,
  backgroundColor,
}) => (
  <article className={styles.group}>
    <h1>{heading}</h1>
    <div className={styles.blocks}>
      <TextBlock
        text="Small text"
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        fontSize="1rem"
      />
      <TextBlock
        text="Middle text"
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        fontSize="2rem"
      />
      <TextBlock
        text="Large text"
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        fontSize="3rem"
      />
    </div>
  </article>
);
