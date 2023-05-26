import { MacaquesBand } from "./MacaquesBand/MacaquesBand";
import { MacaquesSearch } from "./MacaquesSearch/MacaquesSearch";
import { StylesHeader } from "./StylesHeader/StylesHeader";
import styles from "./Styles.module.scss";
import { macaques } from "./macaques";

export const Styles = () => {
  return (
    <div className={styles.page}>
      <StylesHeader />
      <main className={styles.main}>
        <MacaquesSearch />
        <MacaquesBand macaques={macaques} />
      </main>
    </div>
  );
};
