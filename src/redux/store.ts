import { configureStore } from '@reduxjs/toolkit'
import searchUserReducer from './search_user/searchUser.slice';

const store = configureStore({
    reducer: {
        searchUser: searchUserReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;