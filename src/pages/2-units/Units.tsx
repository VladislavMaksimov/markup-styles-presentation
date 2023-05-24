import { TextBlockGroup } from "./TextBlockGroup/TextBlockGroup";
import styles from "./Units.module.scss";

export const Units = () => {
  return (
    <main className={styles.units}>
      <TextBlockGroup
        heading="PX"
        width="300px"
        height="200px"
        backgroundColor="red"
      />
      <TextBlockGroup
        heading="REM"
        width="30rem"
        height="20rem"
        backgroundColor="orange"
      />
      <TextBlockGroup
        heading="EM"
        width="30em"
        height="20em"
        backgroundColor="yellow"
      />
      <TextBlockGroup
        heading="VW"
        width="30vw"
        height="20vw"
        backgroundColor="green"
      />
      <TextBlockGroup
        heading="VH"
        width="30vh"
        height="20vh"
        backgroundColor="blue"
      />
    </main>
  );
};
