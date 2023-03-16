import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addTeam } from '../../../redux/store/store';
import useThunk from '../../../redux/hooks/use-thunk';

function AddTeam() {

    const navigate = useNavigate();

    const [doAddTeam] = useThunk(addTeam);

    const [team, setTeam] = useState({
        teamName: "",
        teamCity: "",
        teamState: "",
        ownerName: "",
        email: "",
        password: ""
    })

    const { teamName, teamCity, teamState, ownerName, email, password } = team;

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

    const onSubmit = (e) => {
        e.preventDefault();
        let isValid = validationForm()
        if (isValid) {
            doAddTeam(team)
            navigate('/team');
        }
    }

    return (
        <div className='container'>
            <br />
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <div className='card'>
                    <div className='card-header'>
                        <h1 className='text-center text-danger'>
                            Add New Team
                        </h1>
                    </div>
                    <div className='card-body '>

                        <div className='mb-3'>

                            <form onSubmit={onSubmit}>
                                <label className='d-flex justify-content-around'>Team Name</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='teamName'
                                    placeholder='Enter your Team Name'
                                    value={teamName}
                                    onChange={(e) => onInputChange(e)}
                                />
                                <span className='text-danger'>{formError.teamName}</span>
                                <br />
                                <label className='d-flex justify-content-around'>Team City</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='teamCity'
                                    placeholder='Enter your Team City'
                                    value={teamCity}
                                    onChange={(e) => onInputChange(e)}
                                />
                                <span className='text-danger'>{formError.teamCity}</span>
                                <br />
                                <label className='d-flex justify-content-around'>Team State</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='teamState'
                                    placeholder='Enter your Team State'
                                    value={teamState}
                                    onChange={(e) => onInputChange(e)}
                                />
                                <span className='text-danger'>{formError.teamState}</span>
                                <br />
                                <label className='d-flex justify-content-around'> Owner Name</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='ownerName'
                                    placeholder='Enter your Owner Name'
                                    value={ownerName}
                                    onChange={(e) => onInputChange(e)}
                                />
                                <span className='text-danger'>{formError.ownerName}</span>
                                <br />
                                <label className='d-flex justify-content-around'> Email</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='email'
                                    placeholder='Enter your Email'
                                    value={email}
                                    onChange={(e) => onInputChange(e)}
                                />
                                <span className='text-danger'>{formError.email}</span>
                                <br />
                                <label className='d-flex justify-content-around'> Password</label><br />
                                <input
                                    className='form-control'
                                    type='password'
                                    name='password'
                                    placeholder='Enter your Password'
                                    value={password}
                                    onChange={(e) => onInputChange(e)}
                                />
                                <span className='text-danger'>{formError.password}</span>
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

export default AddTeam;