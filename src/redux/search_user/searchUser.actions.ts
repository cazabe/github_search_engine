import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api'

export const fetchUserData = createAsyncThunk(
    'searchUser/fetchUserData',
    async (userName: string) => {
        console.log('llamada');
        const response = await api.get(`/${userName}`)
        return response.data
    }
)

