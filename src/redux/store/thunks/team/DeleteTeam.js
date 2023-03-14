import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BaseUrl from '../../../../api/baseUrl';

const deleteTeam = createAsyncThunk('team/delete', async (team) => {
    await axios.delete(BaseUrl + `/api/team/${team.teamId}`);
    return team;
})

export { deleteTeam };