import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './auth-slice';
import counterSliceReducer from './counter-slice';

const store = configureStore({
    reducer: { counterReducer: counterSliceReducer, authReducer: authSliceReducer }
});

export default store;