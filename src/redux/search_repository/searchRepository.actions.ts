import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

export const fetchRepositoryData = createAsyncThunk(
    'searchRepository/fetchRepositoryData',
    async (repositoryName: string) => {
        console.log('llamada 1');
        const response = await api.get(`/search/repositories?q=${repositoryName}`)
        return response.data;
    }
);

export const fetchUserRepositoryData = createAsyncThunk(
    'searchRepository/fetchUserRepositoryData',
    async (repositoryUrl: string) => {
        console.log('llamada 2');
        const modifiedUrl = repositoryUrl.split('https://api.github.com');
        console.log('modified url ', modifiedUrl[1]);

        const response = await api.get(modifiedUrl[1]);
        console.log('response ', response.data);

        return response.data;
    }
);

