import { createSlice } from '@reduxjs/toolkit';

import { fetchPlayer } from '../thunks/player/FetchPlayer';
import { addPlayer } from '../thunks/player/AddPlayer';
import { deletePlayer } from '../thunks/player/DeletePlayer';
import { updatePlayer, getPlayerDetailsById } from '../thunks/player/UpdatePlayer';


const playerSlice = createSlice({
    name: "player",
    initialState: {
        data: [],
    },
    extraReducers(builder) {

        builder.addCase(fetchPlayer.fulfilled, (state, action) => {
            state.data = action.payload;
        });

        builder.addCase(addPlayer.fulfilled, (state, action) => {
            state.data.push(action.payload);
        });

        builder.addCase(deletePlayer.fulfilled, (state, action) => {
            state.data = state.data.filter(player => {
                return player.playerId !== action.payload.playerId
            });
        });

        builder.addCase(updatePlayer.fulfilled, (state, action) => {
            state.data = state.data.filter(player => {
                return player.playerId !== action.payload.playerId
            });
        });

        builder.addCase(getPlayerDetailsById.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    }
})

export const playerReducer = playerSlice.reducer;