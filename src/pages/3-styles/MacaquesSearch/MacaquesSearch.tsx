import styles from "./MacaquesSearch.module.scss";

export const MacaquesSearch = () => (
  <section className={styles.search}>
    <input placeholder="Search param 1" disabled />
    <input placeholder="Search param 2" disabled />
    <button disabled>Search</button>
  </section>
);
