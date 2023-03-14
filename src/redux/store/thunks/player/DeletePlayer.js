import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BaseUrl from '../../../../api/baseUrl';

const deletePlayer = createAsyncThunk('player/delete', async (player) => {
    await axios.delete(BaseUrl.admin + `/player/${player.playerId}`);
    return player;
})

export { deletePlayer };