import { configureStore } from '@reduxjs/toolkit';
import { teamReducer } from './slice/TeamSlice';
import { playerReducer } from './slice/PlayerSlice';
export const store = configureStore({

    reducer: {
        team: teamReducer,
        player: playerReducer,
    }
});

export * from './thunks/team/FetchTeam';
export * from './thunks/team/AddTeam';
export * from './thunks/team/DeleteTeam';
export * from './thunks/team/UpdateTeam';

export * from './thunks/player/FetchPlayer';
export * from './thunks/player/AddPlayer';
export * from './thunks/player/DeletePlayer';
export * from './thunks/player/UpdatePlayer';