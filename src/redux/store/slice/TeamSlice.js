import { createSlice } from '@reduxjs/toolkit';

import { fetchTeam } from '../thunks/team/FetchTeam';
import { addTeam } from '../thunks/team/AddTeam';
import { deleteTeam } from '../thunks/team/DeleteTeam';
import { getTeamDetailsById, updateTeam } from '../thunks/team/UpdateTeam';

const teamSlice = createSlice({
    name: "team",
    initialState: {
        data: [],
    },

    extraReducers(builder) {

        // fetchTeam
        builder.addCase(fetchTeam.fulfilled, (state, action) => {
            state.data = action.payload;
        });

        // addTeam
        builder.addCase(addTeam.fulfilled, (state, action) => {
            state.data.push(action.payload);
        });

        // deleteTeam
        builder.addCase(deleteTeam.fulfilled, (state, action) => {
            state.data = state.data.filter(team => {
                return team.teamId !== action.payload.teamId
            });
        });

        // updateTeam
        builder.addCase(updateTeam.fulfilled, (state, action) => {
            state.data = state.data.filter(team => {
                return team.teamId !== action.payload.teamId
            });
        });

        //getTeamDetailsById
        builder.addCase(getTeamDetailsById.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});


export const teamReducer = teamSlice.reducer;