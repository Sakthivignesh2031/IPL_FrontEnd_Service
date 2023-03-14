import React from 'react';

function OwnerTeamPlayerShow({ player, onDelete }) {

    const handleRemovePlayer = () => {
        onDelete(player.playerId)
    }
    return (
        <div className='player-show'>
            <img className='player' src={player.imageUrl} alt='player' /><br></br>
            <h3 className='text-center'>{player.name}</h3>
            <h4 className='player-details'>{player.foreign ? 'Foreigner' : 'India'}</h4>
            <h4 className='player-details'>Age: {player.age}</h4>
            <h4 className='player-details'>{player.speciality}</h4><hr />
            <button className="btn btn-danger mx-4" onClick={handleRemovePlayer}>
                Remove Player
            </button>
        </div>
    );
}

export default OwnerTeamPlayerShow;