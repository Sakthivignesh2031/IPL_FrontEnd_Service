import { createSlice } from '@reduxjs/toolkit';

import { getTeamId, ownerTeamPlayers, removePlayer, addTeamPlayer } from '../thunks/owner/OwnerThunk'

const ownerSlice = createSlice({
    name: "owner",
    initialState: {
        data: [],
    },

    extraReducers(builder) {

        // getTeamIdByOwnerName
        builder.addCase(getTeamId.fulfilled, (state, action) => {
            state.data = action.payload;
        });

        // ownerTeamPlayer'sByTeamId
        builder.addCase(ownerTeamPlayers.fulfilled, (state, action) => {
            state.data = action.payload;
        });

        //removePlayerFromOwnerTeam
        builder.addCase(removePlayer.fulfilled, (state, action) => {
            state.data = state.data.filter(player => {
                return player.playerId !== action.payload.playerId
            });
        });

        // addPlayerToHisTeam
        builder.addCase(addTeamPlayer.fulfilled, (state, action) => {
            state.data = action.payload;
        });

    },
});


export const ownerReducer = ownerSlice.reducer;