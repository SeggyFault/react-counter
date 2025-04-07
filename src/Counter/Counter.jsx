import styles from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";

function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  let color = "#0277BD";
  if (counter < 0) color = "#BF360C";
  else if (counter > 0) color = "#2E7D32";

  return(
    <div className={styles.counterBlock}>
      <h1>Counter</h1>
      <span className={styles.counter} style={{color}}>{counter}</span>
      <div className={styles.counterButtons}>
        <button onClick={() => dispatch(decrement())} className={styles.decrementButton}>-</button>
        <button onClick={() => dispatch(reset())} className={styles.resetButton}>Reset</button>
        <button onClick={() => dispatch(increment())} className={styles.incrementButton}>+</button>
      </div>
    </div>
  )
}

export default Counter;