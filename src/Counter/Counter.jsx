import styles from "./Counter.module.css";
import {useState, useEffect} from "react";

function Counter() {

  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("#0277BD");

  useEffect(() => {
    if (counter < 0) {
      setColor(c => c = "#BF360C");
    } else if (counter > 0) {
      setColor(c => c = "#2E7D32");
    } else {
      setColor(c => c = "#0277BD");
    }
  }, [counter, color]);

  const decrementCounter = () => {
    setCounter(c => c - 1);
  }

  const incrementCounter = () => {
    setCounter(c => c + 1);
  }

  const resetCounter = () => {
    setCounter(c => c = 0);
  }

  return(
    <div className={styles.counterBlock}>
      <h1>Counter</h1>
      <span className={styles.counter} style={{color: color}}>{counter}</span>
      <div className={styles.counterButtons}>
        <button onClick={decrementCounter} className={styles.decrementButton}>-</button>
        <button onClick={resetCounter} className={styles.resetButton}>Reset</button>
        <button onClick={incrementCounter} className={styles.incrementButton}>+</button>
      </div>
    </div>
  )
}

export default Counter;