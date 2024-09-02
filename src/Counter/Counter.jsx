import styles from "./Counter.module.css";
import {useState} from "react";

function Counter() {

  const [counter, setCounter] = useState(0);

  const decrementCounter = () => {
    counter <= 0 ? setCounter(0) : setCounter(c => c - 1);
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
      <span className={styles.counter}>{counter}</span>
      <div className={styles.counterButtons}>
        <button onClick={decrementCounter} className={styles.decrementButton}>-</button>
        <button onClick={resetCounter} className={styles.resetButton}>Reset</button>
        <button onClick={incrementCounter} className={styles.incrementButton}>+</button>
      </div>
    </div>
  )
}

export default Counter;