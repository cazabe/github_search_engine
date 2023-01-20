import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState, AppDispatch } from '../store';
import { fetchUserData } from './searchUser.actions';

export type UserDataState = {
    login: string;
    avatar_url: string;
    location: string;
};

const initialState: UserDataState = {
    login: '',
    avatar_url: '',
    location: ''
};

export const searchUserSlice = createSlice({
    name: 'searchUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.fulfilled, (state: UserDataState, action: PayloadAction<UserDataState>) => {
                console.log('payload ', action.payload);
                state.login = action.payload.login
                state.avatar_url = action.payload.avatar_url
            })
    }
});


export default searchUserSlice.reducer
export const selectSearchUser = (state: RootState) => {
    console.log('state on selector ', state)
    return state.searchUser

}