import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(prevState) {
            prevState.counter++;
        },
        decrement(prevState) {
            prevState.counter--;
        },
        increase(prevState, action) {
            prevState.counter = prevState.counter + action.payload;
        },
        toggleCounter(prevState) {
            prevState.showCounter = !prevState.showCounter;
        }
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;