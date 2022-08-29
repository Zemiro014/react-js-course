import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const incrementHander = () => {
    dispatch({ type: 'increment' })
  }

  const increaseHander = () => {
    dispatch({ type: 'increase', amount: 5 })
  }

  const decrementHander = () => {
    dispatch({ type: 'decrement' })
  }
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button className={classes.button} onClick={incrementHander}>Increment</button>
        <button className={classes.button} onClick={increaseHander}>Increase by 5</button>
        <button className={classes.button} onClick={decrementHander}>Decrement</button>
      </div>
      <button className={classes.button} onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
