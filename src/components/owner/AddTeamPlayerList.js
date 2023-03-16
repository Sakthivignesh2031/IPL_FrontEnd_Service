import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useLocation } from 'react-router-dom'

import baseUrl from '../../api/baseUrl';

function AddTeamPlayerList(props) {

    const [players, setPlayers] = useState([])

    const { teamId } = useParams()

    const location = useLocation()

    const totalPlayers = location.state.data.total

    // const foreign = location.state.data.foreign

    useEffect(() => {
        viewPlayers()
    }, [])


    const viewPlayers = async () => {
        const result = await axios.get(baseUrl + `/api/players`);
        setPlayers(result.data.filter(e => e.team === null));
    }

    const addPlayer = async (e, playerId, foreign) => {
        e.preventDefault()
        if (totalPlayers < 15) {
            if (foreign !== true) {
                if (foreign < 6) {
                    await axios.post(baseUrl + `/api/teamPlayer/${teamId}/${playerId}`)
                    viewPlayers()
                }
            }
            else {
                await axios.post(baseUrl + `/api/teamPlayer/${teamId}/${playerId}`)
                viewPlayers()
            }
        }


    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <hr />
                    <h2 className='font-weight-bol text-center text-white'>Player List</h2>

                    <hr />

                    <table className="table border shadow table-striped ">
                        <thead>
                            <tr className='table-dark'>
                                <th scope='col'>Image</th>
                                <th scope='col'>Player ID</th>
                                <th scope='col'>PLayer Name</th>
                                <th scope='col'>Player Age</th>
                                <th scope='col'>Speciality</th>
                                <th scope='col'>isForeign</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {players.map((player) => (
                                <tr className='bg-light'>
                                    <td><img src={player.imageUrl} width="50" height="50" alt='player' /></td>
                                    <td>{player.playerId}</td>
                                    <td>{player.name}</td>
                                    <td>{player.age}</td>
                                    <td>{player.speciality}</td>
                                    <td>{player.foreign ? 'True' : 'False'}</td>
                                    <td>
                                        <button className='btn btn-primary' onClick={(e) => addPlayer(e, player.playerId, player.foreign)} >Add</button>
                                    </td>
                                </tr>
                            ))
                            }

                        </tbody>
                    </table>

                </div>

            </div>
            <hr />

        </div>
    );
}

export default AddTeamPlayerList;