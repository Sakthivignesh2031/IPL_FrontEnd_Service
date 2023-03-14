import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import baseUrl from '../../api/baseUrl';
import OwnerTeamPlayerShow from './OwnerTeamPlayerShow'

function OwnerTeamPlayer(props) {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        viewPlayers();
    }, []);

    const { teamId } = useParams();

    const viewPlayers = async () => {
        const result = await axios.get(baseUrl.owner + `/api/teamPlayer/${teamId}`);
        setPlayers(result.data);
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

    const removePlayer = async (playerId) => {
        await axios.delete(baseUrl.owner + `/api/teamPlayer/${playerId}`)
        viewPlayers()
    }
    const playerList = players.map((player, index) => {
        return <OwnerTeamPlayerShow key={index} player={player} onDelete={removePlayer} />;
    })

    return (

        <div className='container'>
            <hr />
            <div className='d-flex justify-content-between'>
                <Link className='btn btn-outline-primary' state={{ data: sort() }} to={`/addplayerList/${teamId}`}>Add Player</Link>
                <Link className='btn btn-outline-danger' to={`/ownerhome/${teamId}`}>Back</Link>
            </div>
            <hr />
            <div className='row'>
                <div className='col-12'>
                    <h2 className='font-weight-bol text-center text-success'>Owner Team Players</h2>
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