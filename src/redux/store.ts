import { configureStore } from '@reduxjs/toolkit'
import searchUserReducer from './search_user/searchUser.slice';
import searchRepositoryReducer from './search_repository/searchRepository.slice';

const store = configureStore({
    reducer: {
        searchUser: searchUserReducer,
        repositories: searchRepositoryReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;