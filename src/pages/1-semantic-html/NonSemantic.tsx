import vodka from "../../assets/icons/vodka-russia-svgrepo-com.svg";
import meat from "../../assets/photos/pexels-photo-65175.jpeg";
import styles from "./semantic.module.scss";

export const NonSemantic = () => {
  return (
    <div className={styles.page}>
      {/* Header width heading 1 */}
      <div className={styles.header}>
        <span className={styles.h1}>Best page ever</span>
        <img className={styles.vodka} alt="Best drink ever" src={vodka} />
      </div>

      <div className={styles.main}>
        {/* Text with heading 2 and metric table */}
        <div className={styles.article}>
          <span className={styles.h2}>Meat and vodka</span>
          <div className={styles.info}>
            <span className={styles.description}>
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
            </span>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <span className={styles.metricName}>Amount of vodka</span>
                <span>100</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricName}>Amount of bacon</span>
                <span>200</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricName}>Amount of pork</span>
                <span>1000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image with caption */}
        <div className={styles.meat}>
          <img className={styles.meatPicture} alt="Meat" src={meat} />
          <span className={styles.meatCaption}>
            Picture 1. That's definitely meat
          </span>
        </div>

        {/* Cards */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <span className={styles.cardName}>Meat 1</span>
          </div>
          <div className={styles.card}>
            <span className={styles.cardName}>Vodka 1</span>
          </div>
          <div className={styles.card}>
            <span className={styles.cardName}>Meat 2</span>
          </div>
          <div className={styles.card}>
            <span className={styles.cardName}>Vodka 2</span>
          </div>
        </div>
      </div>

      {/* Footer with contacts */}
      <div className={styles.footer}>
        <div className={styles.contacts}>
          <span>tel: 000000</span>
          <span>mail: vodka@meat.ru</span>
        </div>
      </div>
    </div>
  );
};
