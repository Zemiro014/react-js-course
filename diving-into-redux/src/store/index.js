import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true, };
const initialAuthState = { isAuthenticated: false };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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
}
);

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(prevState) {
            prevState.isAuthenticated = true;
        },
        logout(prevState) {
            prevState.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer: { counterReducer: counterSlice.reducer, authReducer: authSlice.reducer }
});

export const authenticationActions = authSlice.actions;
export const counterActions = counterSlice.actions;

export default store;