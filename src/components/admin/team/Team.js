import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchTeam, deleteTeam } from '../../../redux/store/store'
import useThunk from '../../../redux/hooks/use-thunk';

function Team() {

    const [doFetchTeam] = useThunk(fetchTeam);
    const [doDeleteTeam] = useThunk(deleteTeam);
    const isDeleted = useState(false);

    const { data } = useSelector((state) => {
        return state.team;
    });

    useEffect(() => {
        doFetchTeam()
    }, []);

    const handleTeamDelete = (team) => {
        const confirmed = window.confirm('Are you sure you want to delete this Team?');
        if (confirmed) {
            doDeleteTeam(team);
            isDeleted(true)
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <br /><br />
                    <h1 className='font-weight-bol text-center text-white'>Team Details</h1>
                    <hr />
                    <div className='d-flex justify-content-around'>
                        <Link className='btn btn-warning btn-lg' to='/addteam'>Add Team</Link>
                        <Link className="btn btn-dark btn-lg" to='/player'> Player Details</Link>
                    </div>
                    <hr />

                    <table className="table border shadow table-striped ">
                        <thead >
                            <tr className='table-dark'>
                                <th scope='col'>S.no</th>
                                <th scope='col'>Team ID</th>
                                <th scope='col'>Team Name</th>
                                <th scope='col'>Team City</th>
                                <th scope='col'>Team State</th>
                                <th scope='col'>Owner Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((team, index) => (
                                <tr className='table-primary' key={index}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{team.teamId}</td>
                                    <td>{team.teamName}</td>
                                    <td>{team.teamCity}</td>
                                    <td>{team.teamState}</td>
                                    <td>{team.ownerName}</td>
                                    <td>{team.email}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/editTeam/${team.teamId}`}
                                        >Edit</Link>
                                        <button
                                            className='btn btn-danger mx-2'
                                            onClick={() => handleTeamDelete(team)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Team;