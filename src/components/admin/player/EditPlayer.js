import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updatePlayer, getPlayerDetailsById } from '../../../redux/store/store'
function EditPlayer() {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { playerId } = useParams();

    const [player, setPlayer] = useState({
        name: "",
        age: "",
        imageUrl: "",
        speciality: "",
        foreign: "",
        available: ""

    })

    const { name, age, imageUrl, speciality, foreign, available } = player;

    const onInputChange = (e) => {
        setPlayer({ ...player, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        dispatch(getPlayerDetailsById(playerId))
            .then((response) => {
                setPlayer(response.payload);
            })
    }, [])

    const [formError, setFormError] = useState({})

    const validationForm = () => {

        let err = {}

        if (player.name === '') {
            err.name = 'Player name is Required...!'
        }
        if (player.age === '') {
            err.age = 'Player age is Required...!'
        }
        if (player.imageUrl === '') {
            err.imageUrl = 'Player imageUrl is Required...!'
        }
        if (player.speciality === '') {
            err.speciality = 'Player speciality is Required...!'
        }
        if (player.foreign === '') {
            err.foreign = 'Player isForeign is Required...!'
        }

        setFormError({ ...err })

        return Object.keys(err).length < 1;
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let isValid = validationForm()

        if (isValid) {
            dispatch(updatePlayer(player))
            navigate('/player')
            window.location.reload(false);
        }
    }
    return (
        <div className='container'>
            <br />
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <div className='card'>
                    <div className='card-header'>
                        <h1 className='text-center text-danger'>
                            Edit Player
                        </h1>
                    </div>
                    <div className='card-body '>
                        <div className='mb-3'>
                            <form onSubmit={(e) => onSubmit(e)}>

                                <label className='d-flex justify-content-around'>Player Name:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='name'
                                    placeholder='Enter Player Name'
                                    value={name}
                                    onChange={(e) => onInputChange(e)}
                                /><span className='text-danger'>{formError.name}</span>
                                <br />

                                <label className='d-flex justify-content-around'>Player age:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='age'
                                    placeholder='Enter Player age'
                                    value={age}
                                    onChange={(e) => onInputChange(e)}
                                />
                                <span className='text-danger'>{formError.age}</span>
                                <br />

                                <label className='d-flex justify-content-around'>Player Image URL:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='imageUrl'
                                    placeholder='Enter your Player Image URL'
                                    value={imageUrl}
                                    onChange={(e) => onInputChange(e)}
                                />
                                <span className='text-danger'>{formError.imageUrl}</span>
                                <br />

                                <label className='d-flex justify-content-around'> Player Speciality:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='speciality'
                                    placeholder='Enter Player speciality'
                                    value={speciality}
                                    onChange={(e) => onInputChange(e)}
                                />
                                <span className='text-danger'>{formError.speciality}</span>
                                <br />

                                <label className='d-flex justify-content-around'> IsForeign:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='foreign'
                                    placeholder='Enter Player IsForeign'
                                    value={foreign}
                                    onChange={(e) => onInputChange(e)}
                                />
                                <span className='text-danger'>{formError.foreign}</span>
                                <br />

                                <label className='d-flex justify-content-around'> PLayer IsAvailable:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='available'
                                    placeholder='Enter  PLayer IsAvailable'
                                    value={available}
                                    onChange={(e) => onInputChange(e)}
                                /><br />
                                <hr />

                                <div className='d-flex justify-content-around'>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                    <Link className='btn btn-danger mx-2' to="/player">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default EditPlayer;