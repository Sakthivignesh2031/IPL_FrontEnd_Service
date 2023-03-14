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
            <hr />

            <Link className='btn btn-primary  mx-4'
                to={`/editplayer/${player.playerId}`}
            >Edit</Link>
            <button className="btn btn-danger mx-4" onClick={() => onDelete(player)}>
                Delete
            </button>
        </div>
    );
}
export default PlayerShow;