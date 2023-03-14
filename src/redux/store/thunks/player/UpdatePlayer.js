import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BaseUrl from '../../../../api/baseUrl';

const updatePlayer = createAsyncThunk("player/editPlayer", async (player) => {
    const response = await axios.put(BaseUrl + `/api/player/${player.playerId}`, player);
    return response.data;
})

const getPlayerDetailsById = createAsyncThunk("player/PlayerDetails", async (playerId) => {
    const response = await axios.get(BaseUrl + `/api/player/${playerId}`);
    return response.data;
})

export { updatePlayer, getPlayerDetailsById };