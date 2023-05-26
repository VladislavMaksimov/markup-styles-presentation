import { useCallback, useEffect, useState } from "react";
import styles from "./Bonus.module.scss";
import { Counter } from "./Counter/Counter";
import { CorruptedCounter } from "./CorruptedCounter/CorruptedCounter";

export const Bonus = () => {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [thirdCount, setThirdCount] = useState(0);

  const addFirstCount = useCallback(() => setFirstCount((prev) => ++prev), []);
  const addSecondCount = useCallback(
    () => setSecondCount((prev) => ++prev),
    []
  );
  const addThirdCount = useCallback(() => setThirdCount((prev) => ++prev), []);

  const showCounters = useCallback(() => {
    console.log("=== SHOW COUNTERS ===");
    console.log("First counter: ", firstCount);
    console.log("Second counter: ", secondCount);
    console.log("Corrupted counter: ", thirdCount);
  }, [firstCount, secondCount, thirdCount]);

  useEffect(() => {
    const showInterval = setInterval(showCounters, 30000);
    return () => clearInterval(showInterval);
  }, [showCounters]);

  return (
    <main className={styles.bonus}>
      <Counter
        name="First Counter"
        currentCount={firstCount}
        addCount={addFirstCount}
      />
      <Counter
        name="Second Counter"
        currentCount={secondCount}
        addCount={addSecondCount}
      />
      <CorruptedCounter
        name="Corrupted Counter"
        currentCount={thirdCount}
        addCount={addThirdCount}
      />
    </main>
  );
};
