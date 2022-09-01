import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter-slice'; 

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counterReducer.counter);
  const showCounter = useSelector(state => state.counterReducer.showCounter);

  const incrementHander = () => {
    dispatch(counterActions.increment())
  }

  const increaseHander = () => {
    dispatch(counterActions.increase(10))
  }

  const decrementHander = () => {
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button className={classes.button} onClick={incrementHander}>Increment</button>
        <button className={classes.button} onClick={increaseHander}>Increase by 10</button>
        <button className={classes.button} onClick={decrementHander}>Decrement</button>
      </div>
      <button className={classes.button} onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
