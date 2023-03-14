import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/pages/NavBar';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Team from './components/admin/team/Team';
import AddTeam from './components/admin/team/AddTeam';
import EditTeam from './components/admin/team/EditTeam';
import Player from './components/admin/player/Player';
import AddPlayer from './components/admin/player/AddPlayer';
import EditPlayer from './components/admin/player/EditPlayer';
import OwnerHome from './components/owner/OwnerHome';
import OwnerTeamPlayer from './components/owner/OwnerTeamPlayer';
import TeamPlayers from './components/owner/TeamPlayers';
import AddTeamPlayerList from './components/owner/AddTeamPlayerList';

function App() {
  return (


    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/team" element={<Team />} />
        <Route path="/addTeam" element={<AddTeam />} />
        <Route path="/editTeam/:teamId" element={<EditTeam />} />
        <Route path="/player" element={<Player />} />
        <Route path="/addPlayer" element={<AddPlayer />} />
        <Route path="/editPlayer/:playerId" element={<EditPlayer />} />
        <Route path="/owner/:ownername" element={<OwnerHome />} />
        <Route path="/teamplayer/:teamId" element={<OwnerTeamPlayer />} />
        <Route path="/teamPlayers/:id" element={<TeamPlayers />} />
        <Route path="/addplayerList/:teamId" element={<AddTeamPlayerList />} />
      </Routes>
    </div>

  );
}

export default App;