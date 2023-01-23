import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api'

export const fetchRepositoryData = createAsyncThunk(
    'searchUser/fetchUserData',
    async (userName: string) => {
        console.log('llamada');
        const response = await api.get(`/users/${userName}`)
        return response.data
    }
)

export const fetchUserRepositoryData = createAsyncThunk(
    'searchUser/fetchUserData',
    async (userName: string) => {
        console.log('llamada');
        const response = await api.get(`/users/${userName}`)
        return response.data
    }
)

