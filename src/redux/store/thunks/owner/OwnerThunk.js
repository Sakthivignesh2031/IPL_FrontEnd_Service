import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BaseUrl from '../../../../api/baseUrl';


// getTeamIdByOwnerName
const getTeamId = createAsyncThunk('team/getOwnerName', async (ownername) => {
    const response = await axios.get(BaseUrl + `/api/getId/${ownername}`);
    return response.data;
});

// ownerTeamPlayer'sByTeamId
const ownerTeamPlayers = createAsyncThunk('team/getTeamId', async (teamId) => {
    const response = await axios.get(BaseUrl + `/api/teamPlayer/${teamId}`);
    return response.data;
});

// removePlayerFromOwnerTeam
const removePlayer = createAsyncThunk('player/remove', async (player) => {
    await axios.delete(BaseUrl + `/api/teamPlayer/${player.playerId}`);
    return player;
})

// addPlayerToHisTeam
const addTeamPlayer = createAsyncThunk('owner/addTeamPlayer', async () => {
    const response = await axios.get(BaseUrl + `/api/players`);
    return response.data;
});

export { getTeamId, ownerTeamPlayers, removePlayer, addTeamPlayer };