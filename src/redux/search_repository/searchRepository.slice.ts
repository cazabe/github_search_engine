import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import { fetchRepositoryData, fetchUserRepositoryData } from './searchRepository.actions';
export type userRepoDataState = {
    data: Array<any>,
};

const initialState: userRepoDataState = {
    data: []
};

export const searchRepositorySlice = createSlice({
    name: 'searchUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepositoryData.fulfilled, (state: userRepoDataState, action: PayloadAction<any>) => {
                state.data = action.payload
            })
            .addCase(fetchUserRepositoryData.fulfilled, (state: userRepoDataState, action: any) => {
                state.data = action.payload
            })
    }
});


export default searchRepositorySlice.reducer
// Other code such as selectors can use the imported `RootState` type
export const selectRepository = (state: RootState) => {
    return state.repositories

}