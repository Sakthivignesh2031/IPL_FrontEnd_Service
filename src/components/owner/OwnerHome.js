import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import useThunk from '../../redux/hooks/use-thunk';
import { fetchTeam } from '../../redux/store/store';
import { getTeamId } from '../../redux/store/store';
import './Design.css';

function OwnerHome() {

    const { ownername } = useParams();

    const [id, setId] = useState([]);

    const [viewTeams] = useThunk(fetchTeam);
    const dispatch = useDispatch();

    const { data } = useSelector((state) => {
        return state.team;
    });

    useEffect(() => {
        viewTeams()
    }, [viewTeams])

    useEffect(() => {
        dispatch(getTeamId(ownername)).then((result) => {
            setId(result.payload)
        })
    }, [])

    return (
        <div>
            <hr />
            <h2 className='font-weight-bol text-center Text-Color-1'>Owner Team</h2>
            <hr />
            <div className='container'>
                <div className='card card-header bg-info'>
                    <div className='d-flex justify-content-around' key={data.teamId}>
                        {data.map((team) => {
                            if (team.teamId === id.teamId) {
                                return <div>
                                    <h2 className='Text-Color-3' >{team.teamName} </h2>
                                </div>
                            }
                        })}
                        <Link className='btn btn-dark btn-lg' to={`/teamplayer/${id.teamId}`} >
                            TeamPlayerDetails </Link>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-12'>
                        <hr />
                        <h2 className='font-weight-bol text-center Text-Color-2'>Other Team Details</h2>
                        <hr />
                        <table className="table border shadow table-striped ">
                            <thead >
                                <tr className='table-dark'>
                                    <th scope='col'>Team Name</th>
                                    <th scope='col'>Team City</th>
                                    <th scope='col'>Team State</th>
                                    <th scope='col'>Owner Name</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((team) => {
                                    if (team.teamId !== id.teamId) {
                                        return (
                                            <tr className='table-info'>
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
            </div>
            <hr />
        </div >
    );
}

export default OwnerHome;