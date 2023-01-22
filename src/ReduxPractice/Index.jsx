import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from './store';
const Index = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch()
    const increment = () => {
        dispatch( actions.increment());
    }
    const decrement = () => {
        dispatch(actions.decrement());
    }
    const addbyten = () => {
        dispatch( actions.addbyten(10));
    }
    const reset = () => {
        dispatch( actions.reset(0));
    }
    return (
        <div>
            <h3>Counter App</h3>
            <h4>{counter}</h4>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={addbyten}>Addbyten</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Index