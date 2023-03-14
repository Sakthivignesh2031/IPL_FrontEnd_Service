import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { deletePlayer, fetchPlayer } from '../../../redux/store/store';
import useThunk from '../../../redux/hooks/use-thunk';
import { Link } from 'react-router-dom';
import PlayerShow from './PlayerShow';

function Player(props) {

    const [doFetchPlayer] = useThunk(fetchPlayer);
    const [doDeletePlayer] = useThunk(deletePlayer);

    const { data } = useSelector((state) => {
        return state.player;
    });

    useEffect(() => {
        doFetchPlayer()
    }, [doFetchPlayer]);

    const handlePlayerDelete = (player) => {
        doDeletePlayer(player);
    }

    const playerList = data.map((player, index) => {
        return <PlayerShow key={index} player={player} onDelete={handlePlayerDelete} />;
    })

    return (

        <div className='container'>
            <div className=''>
                <br /><br />
                <h1 className='font-weight-bol text-center text-white'>Player Details</h1>
                <hr />
                <div className='d-flex justify-content-around'>
                    <Link className='btn btn-warning btn-lg ' to='/addPlayer'>Add Player</Link>
                    <Link className='btn btn-dark btn-lg' to='/team'>Team Details</Link>
                </div>
            </div>
            <hr />
            <div className=' d-flex flex-row flex-wrap justify-content-center'>
                {playerList}
            </div>
        </div>




    );
}

export default Player;