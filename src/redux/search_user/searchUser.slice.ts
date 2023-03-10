import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import { fetchUserData } from './searchUser.actions';

export type UserDataState = {
    login: string;
    name: string;
    bio: string;
    avatar_url: string;
    company: string;
    location: string;
    public_repos: string;
    followers: string;
    following: string;
    public_gists: string
    hireable: boolean
    repos_url: string
};

const initialState: UserDataState = {
    login: '',
    name: '',
    bio: '',
    avatar_url: '',
    company: '',
    location: '',
    public_repos: '',
    followers: '',
    following: '',
    public_gists: '',
    hireable: false,
    repos_url: ''
};

export const searchUserSlice = createSlice({
    name: 'searchUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.fulfilled, (state: UserDataState, action: PayloadAction<UserDataState>) => {
                // console.log('payload ', action.payload);
                state.login = action.payload.login
                state.name = action.payload.name
                state.bio = action.payload.bio
                state.avatar_url = action.payload.avatar_url
                state.public_repos = action.payload.public_repos
                state.followers = action.payload.followers
                state.following = action.payload.following
                state.public_gists = action.payload.public_gists
                state.company = action.payload.company
                state.location = action.payload.location
                state.hireable = action.payload.hireable
                state.repos_url = action.payload.repos_url
            })
    }
});


export default searchUserSlice.reducer
export const selectSearchUser = (state: RootState) => {
    return state.searchUser

}