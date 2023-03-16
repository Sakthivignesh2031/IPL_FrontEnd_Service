import React from 'react';
import { Link } from 'react-router-dom';
import './PlayerShow.css';

function PlayerShow({ player, onDelete }) {

    return (

        <div className='player-show'>
            <img className='player' src={player.imageUrl} alt='player' /><br></br>
            <h3 className='text-center'>{player.name}</h3>
            <h4 className='player-details'>Age: {player.age}</h4>
            <h4 className='player-details'>{player.speciality}</h4>
            <h5 className='player-details'>
                Team: {player && player.team && player.team.teamName ? player.team.teamName : "Unoccupied"}
            </h5>
            <hr />
            <div className='d-flex justify-content-around'>
                <Link className='btn btn-primary'
                    to={`/editplayer/${player.playerId}`}
                >Edit</Link>
                <button className="btn btn-danger" onClick={() => onDelete(player)}>
                    Delete
                </button>
            </div>
        </div>
    );
}
export default PlayerShow;