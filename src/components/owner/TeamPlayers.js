import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import baseUrl from '../../api/baseUrl';

function TeamPlayers(props) {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        viewPlayers();
    }, []);

    const { id } = useParams();

    const viewPlayers = async () => {
        const result = await axios.get(baseUrl + `/api/teamPlayer/${id}`);
        setPlayers(result.data);
    }

    return (
        <div>
            <hr />
            <h2 className='font-weight-bol text-center text-success'>Other Team Player's</h2>
            <hr />
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <table className="table border shadow table-striped ">
                            <thead>
                                <tr className='table-dark'>
                                    <th scope='col'>S.no</th>
                                    <th scope='col'>Image</th>
                                    <th scope='col'>Player ID</th>
                                    <th scope='col'>PLayer Name</th>
                                    <th scope='col'>Player Age</th>
                                    <th scope='col'>Speciality</th>
                                    <th scope='col'>isForeign</th>
                                </tr>
                            </thead>

                            <tbody>
                                {players.map((player, index) => (
                                    <tr className='table-success'>
                                        <th scope='row' key={index}>{index + 1}</th>
                                        <td><img src={player.imageUrl} width="50" height="50" /></td>
                                        <td>{player.playerId}</td>
                                        <td>{player.name}</td>
                                        <td>{player.age}</td>
                                        <td>{player.speciality}</td>
                                        <td>{player.foreign ? 'True' : 'False'}</td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default TeamPlayers;