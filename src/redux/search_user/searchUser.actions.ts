import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api'

export const fetchUserData = createAsyncThunk(
    'searchUser/fetchUserData',
    async (userName: string) => {
        const response = await api.get(`/users/${userName}`)
        return response.data
    }
)

