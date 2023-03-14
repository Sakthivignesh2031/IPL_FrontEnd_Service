import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../../api/baseUrl';

function OwnerHome() {

    const { ownername } = useParams();
    const [id, setId] = useState([]);
    const [teams, setTeams] = useState([])

    useEffect(() => {
        loadTeam()
    }, [])

    useEffect(() => {
        getid()
    }, [])

    const loadTeam = async () => {
        const result = await axios.get(baseUrl.owner + `/api/teams`);
        setTeams(result.data);
    }

    const getid = async () => {
        const teamResult = await axios.get(baseUrl.owner + `/api/getId/${ownername}`);
        console.log(teamResult.data)
        setId(teamResult.data)
    }

    return (
        <div>
            <hr />
            <h2 className='font-weight-bol text-center text-primary'>Owner Team</h2>
            <hr />
            <div className='container'>
                <div className='card card-header '>
                    <div className='d-flex justify-content-around' key={teams.teamId}>
                        {teams.map((team) => {
                            if (team.teamId === id.teamId) {
                                return <div>
                                    <h2 className='text-danger' >{team.teamName} </h2>
                                </div>
                            }
                        })}
                        <Link className='btn btn-danger mx-2' to={`/teamplayer/${id.teamId}`} >
                            TeamPlayerDetails </Link>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-12'>
                        <hr />
                        <h2 className='font-weight-bol text-center text-success'>Other Team Details</h2>
                        <hr />
                        <table className="table border shadow table-striped ">
                            <thead>
                                <tr>
                                    <th scope='col'>Team Name</th>
                                    <th scope='col'>Team City</th>
                                    <th scope='col'>Team State</th>
                                    <th scope='col'>Owner Name</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {teams.map((team) => {
                                    if (team.teamId !== id.teamId) {
                                        return (
                                            <tr>
                                                <td>{team.teamName}</td>
                                                <td>{team.teamCity}</td>
                                                <td>{team.teamState}</td>
                                                <td>{team.ownerName}</td>
                                                <td>
                                                    <Link className='btn btn-primary mx-2'
                                                        to={`/teamPlayers/${team.teamId}`}
                                                    >TeamPlayers</Link>
                                                </td>
                                            </tr>
                                        )
                                    }
                                }
                                )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <Link className='btn btn-danger' to={"/owner"}>Back</Link>
            </div>
            <hr />
        </div>
    );
}

export default OwnerHome;