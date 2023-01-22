import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import { fetchUserData } from './searchUser.actions';

export type UserDataState = {
    login: string;
    avatar_url: string;
    location: string;
    public_repos: string;
    followers: string;
    following: string;
    public_gists: string
};

const initialState: UserDataState = {
    login: '',
    avatar_url: '',
    location: '',
    public_repos: '',
    followers: '',
    following: '',
    public_gists: ''
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
                state.public_repos = action.payload.public_repos
                state.followers = action.payload.followers
                state.following = action.payload.following
                state.public_gists = action.payload.public_gists
            })
    }
});


export default searchUserSlice.reducer
// Other code such as selectors can use the imported `RootState` type
export const selectSearchUser = (state: RootState) => {
    console.log('state on selector ', state)
    return state.searchUser

}