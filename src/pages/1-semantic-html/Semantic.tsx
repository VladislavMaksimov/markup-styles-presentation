import { FC } from "react";
import vodka from "../../assets/icons/vodka-russia-svgrepo-com.svg";
import meat from "../../assets/photos/pexels-photo-65175.jpeg";
import styles from "./semantic.module.scss";

export const Semantic: FC = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.h1}>Best page ever</h1>
        <img className={styles.vodka} alt="Best drink ever" src={vodka} />
      </header>

      <main className={styles.main}>
        <article className={styles.article}>
          <h2 className={styles.h2}>Meat and vodka</h2>
          <div className={styles.info}>
            <p className={styles.description}>
              Bacon ipsum dolor amet pancetta salami ball tip hamburger sirloin
              ribeye, pastrami tri-tip shankle pork chop ground round capicola
              sausage pork belly frankfurter. Venison ball tip corned beef strip
              steak shoulder leberkas sausage kevin tri-tip drumstick buffalo
              burgdoggen andouille salami. Ground round jowl burgdoggen, pig
              flank tail beef ribs venison landjaeger porchetta t-bone fatback.
              Chuck landjaeger short loin turducken spare ribs pork loin pork
              chop t-bone sirloin kevin boudin porchetta shankle meatball. Bacon
              bresaola pancetta burgdoggen hamburger tenderloin doner. Buffalo
              pork belly pork chop kielbasa t-bone short loin burgdoggen tail
              brisket.
            </p>
            <dl className={styles.metrics}>
              <div className={styles.metric}>
                <dt className={styles.metricName}>Amount of vodka</dt>
                <dd>100</dd>
              </div>
              <div className={styles.metric}>
                <dt className={styles.metricName}>Amount of bacon</dt>
                <dd>200</dd>
              </div>
              <div className={styles.metric}>
                <dt className={styles.metricName}>Amount of pork</dt>
                <dd>1000</dd>
              </div>
            </dl>
          </div>
        </article>

        <figure className={styles.meat}>
          <img className={styles.meatPicture} alt="Meat" src={meat} />
          <figcaption className={styles.meatCaption}>
            Picture 1. That's definitely meat
          </figcaption>
        </figure>

        <section className={styles.cards}>
          <h2 className={styles.cardsHeader}>Cards</h2>
          <section className={styles.card}>
            <span className={styles.cardName}>Meat 1</span>
          </section>
          <section className={styles.card}>
            <span className={styles.cardName}>Vodka 1</span>
          </section>
          <section className={styles.card}>
            <span className={styles.cardName}>Meat 2</span>
          </section>
          <section className={styles.card}>
            <span className={styles.cardName}>Vodka 2</span>
          </section>
        </section>
      </main>

      <footer className={styles.footer}>
        <section className={styles.contacts}>
          <p>tel: 000000</p>
          <p>mail: vodka@meat.ru</p>
        </section>
      </footer>
    </div>
  );
};
