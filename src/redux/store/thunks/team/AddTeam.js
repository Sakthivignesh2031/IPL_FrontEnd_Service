import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BaseUrl from '../../../../api/baseUrl';


const addTeam = createAsyncThunk('team/add', async (team) => {
    const response = await axios.post(BaseUrl + `/api/team`, team)
    return response.data;
});

export { addTeam };