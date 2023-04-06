import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTeam, getTeamDetailsById } from '../../../redux/store/store'

function EditTeam() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { teamId } = useParams()

    const [team, setTeam] = useState({
        teamName: "",
        teamCity: "",
        teamState: ""
    });

    const { teamName, teamCity, teamState } = team;

    useEffect(() => {
        dispatch(getTeamDetailsById(teamId))
            .then((result) => {
                setTeam(result.payload);
            })
    }, [])

    const onInputChange = (e) => {
        setTeam({ ...team, [e.target.name]: e.target.value });
    }

    const [formError, setFormError] = useState({})

    const validationForm = () => {

        let err = {}

        if (team.teamName === '') {
            err.teamName = 'Team Name is Required...!'
        }
        if (team.teamState === '') {
            err.teamState = 'Team State is Required...!'
        }
        if (team.teamCity === '') {
            err.teamCity = 'Team City is Required...!'
        }
        if (team.ownerName === '') {
            err.ownerName = 'Owner Name is Required...!'
        }
        if (team.email === '') {
            err.email = 'E-mail is Required...!'
        }
        if (team.password === '') {
            err.password = 'Password is Required...!'
        }

        setFormError({ ...err })

        return Object.keys(err).length < 1;
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        let isValid = validationForm()
        if (isValid) {
            dispatch(updateTeam(team))
            navigate('/team')
            window.location.reload(true);
        }
    }
    return (
        <div className='container'>
            <br />
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <div className='card'>
                    <div className='card-header'>
                        <h1 className='text-center text-danger'>
                            Edit Team
                        </h1>
                    </div>
                    <div className='card-body '>
                        <div className='mb-3'>
                            <form onSubmit={(e) => onSubmit(e)}>
                                <label className='d-flex justify-content-around'>Team Name</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='teamName'
                                    placeholder='Enter your Team Name'
                                    value={teamName}
                                    onChange={(e) => onInputChange(e)}
                                /><span className='text-danger'>{formError.teamName}</span>
                                <br />

                                <label className='d-flex justify-content-around'>Team City</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='teamCity'
                                    placeholder='Enter your Team Name'
                                    value={teamCity}
                                    onChange={(e) => onInputChange(e)}
                                /><span className='text-danger'>{formError.teamCity}</span>
                                <br />

                                <label className='d-flex justify-content-around'>Team State</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='teamState'
                                    placeholder='Enter your Team State'
                                    value={teamState}
                                    onChange={(e) => onInputChange(e)}
                                /><span className='text-danger'>{formError.teamState}</span>
                                <br />
                                <hr />

                                <div className='d-flex justify-content-around'>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                    <Link className='btn btn-danger mx-2' to="/team">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default EditTeam;