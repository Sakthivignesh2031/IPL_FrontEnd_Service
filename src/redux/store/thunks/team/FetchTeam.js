import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BaseUrl from '../../../../api/baseUrl';


const fetchTeam = createAsyncThunk('team/fetch', async () => {
    const response = await axios.get(BaseUrl.admin + `/teams`);
    return response.data;
});

export { fetchTeam };