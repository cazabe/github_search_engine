import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

export const fetchRepositoryData = createAsyncThunk(
    'searchRepository/fetchRepositoryData',
    async (repositoryName: string) => {
        try {
            const response = await api.get(`/search/repositories?q=${repositoryName}`)
            return response.data.items;
        } catch (error) {
            return null;
        }
    }
);

export const fetchUserRepositoryData = createAsyncThunk(
    'searchRepository/fetchUserRepositoryData',
    async (repositoryUrl: string) => {
        const modifiedUrl = repositoryUrl.split('https://api.github.com');
        try {
            const response = await api.get(modifiedUrl[1]);
            return response.data;

        } catch (error) {
            return null;
        }

    }
);

