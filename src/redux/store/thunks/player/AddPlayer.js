import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BaseUrl from '../../../../api/baseUrl';


const addPlayer = createAsyncThunk('player/add', async (player) => {
    const response = await axios.post(BaseUrl.admin + `/player`, player)
    return response.data;
});

export { addPlayer };