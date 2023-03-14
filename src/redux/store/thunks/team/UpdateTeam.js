import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BaseUrl from '../../../../api/baseUrl';

const updateTeam = createAsyncThunk("team/editTeam", async (team) => {
    const response = await axios.put(BaseUrl.admin + `/team/${team.teamId}`, team);
    return response.data;
})

const getTeamDetailsById = createAsyncThunk("team/teamDetails", async (teamId) => {
    const response = await axios.get(BaseUrl.admin + `/team/${teamId}`);
    return response.data;
})

export { updateTeam, getTeamDetailsById };