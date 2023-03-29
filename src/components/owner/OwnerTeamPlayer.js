import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import OwnerTeamPlayerShow from './OwnerTeamPlayerShow'
import { useDispatch } from 'react-redux';
import { ownerTeamPlayers, removePlayer } from '../../redux/store/store';
import useThunk from '../../redux/hooks/use-thunk';


function OwnerTeamPlayer(props) {
    const [players, setPlayers] = useState([])

    const { teamId } = useParams();
    const [deletePlayer] = useThunk(removePlayer)
    const isDeleted = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ownerTeamPlayers(teamId)).then((result) => {
            setPlayers(result.payload)
        })
    }, []);

    const handleRemovePlayer = (player) => {
        const confirmed = window.confirm('Are you sure..!! Do you want to Remove this Player ?');
        if (confirmed) {
            deletePlayer(player);
            window.location.reload(true);
            isDeleted(true)
        }
    }

    const sort = () => {
        let totalPlayers = players.length
        let foreign = players.filter(player => player.foreign !== 'true').length
        let data = {
            total: totalPlayers,
            foreign: foreign
        }
        return data
    }

    const playerList = players.map((player, index) => {
        return <OwnerTeamPlayerShow key={index} player={player} onDelete={handleRemovePlayer} />;
    })

    return (

        <div className='container'>
            <br />
            <div className='d-flex justify-content-between'>
                <Link className='btn btn-dark' state={{ data: sort() }} to={`/addplayerList/${teamId}`}>Add Player</Link>
            </div>
            <hr />
            <div className='row'>
                <div className='col-12'>
                    <h2 className='font-weight-bol text-center text-white'>Owner Team Players</h2>
                    <hr />
                </div>
            </div>

            <div className='d-flex flex-row flex-wrap justify-content-center'>
                {playerList}
            </div>
        </div>

    );
}


export default OwnerTeamPlayer;