import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BaseUrl from '../../../../api/baseUrl';


const fetchPlayer = createAsyncThunk('players/fetch', async () => {
    const response = await axios.get(BaseUrl + `/api/players`);
    return response.data;
});

export { fetchPlayer };