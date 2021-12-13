import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import {CounterAction} from '../store/counterstore';

const Counter = () => {
  
  const dispatch=useDispatch();

  const incrementhandler = () => {
    dispatch(CounterAction.increment())
  }
  const decrementhandler = () => {
    dispatch(CounterAction.decrement())
  }
  const increasehandler =() => {
    dispatch(CounterAction.increase(10))
  }
  
  const toggleCounterHandler = () => {
    dispatch(CounterAction.toogle())
  }
  const counter = useSelector(state =>state.counter.counter )
  const show=useSelector(state=>state.counter.showCounter)
  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show&&<div className={classes.value}>{counter}</div> }
      <button onClick={incrementhandler}>Increment</button>
      <button onClick={decrementhandler}>Decrement</button>
      <button onClick={increasehandler}>Increase 10</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
