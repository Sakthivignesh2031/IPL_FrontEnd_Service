import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BaseUrl from '../../../../api/baseUrl';

const updateTeam = createAsyncThunk("team/editTeam", async (team) => {
    const response = await axios.put(BaseUrl + `/api/team/${team.teamId}`, team);
    return response.data;
})

const getTeamDetailsById = createAsyncThunk("team/teamDetails", async (teamId) => {
    const response = await axios.get(BaseUrl + `/api/team/${teamId}`);
    return response.data;
})

export { updateTeam, getTeamDetailsById };