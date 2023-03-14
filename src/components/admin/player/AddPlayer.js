import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useThunk from '../../../redux/hooks/use-thunk';
import { addPlayer } from '../../../redux/store/store';
function AddPlayer(props) {

    const navigate = useNavigate();
    const [doAddPlayer] = useThunk(addPlayer);
    const [player, setPlayer] = useState({
        name: "",
        age: "",
        imageUrl: "",
        speciality: "",
        foreign: "",
    })

    const { name, age, imageUrl, speciality, foreign } = player;

    const onInputChange = (e) => {
        setPlayer({ ...player, [e.target.name]: e.target.value });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        doAddPlayer(player)
        navigate('/player');
        window.location.reload(false);
    }
    return (
        <div className='container'>
            <hr />

            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <div className='card'>
                    <div className='card-header'>
                        <h1 className='text-center text-danger'>
                            Add Player
                        </h1>
                    </div>
                    <div className='card-body '>

                        <div className='mb-3'>

                            <form onSubmit={onSubmit}>

                                <label className='d-flex justify-content-around'>Player Name:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='name'
                                    placeholder='Enter Player Name'
                                    value={name}
                                    onChange={(e) => onInputChange(e)}
                                />


                                <label className='d-flex justify-content-around'>Player age:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='age'
                                    placeholder='Enter Player age'
                                    value={age}
                                    onChange={(e) => onInputChange(e)}
                                />

                                <label className='d-flex justify-content-around'> Player Speciality:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='speciality'
                                    placeholder='Enter Player Speciality'
                                    value={speciality}
                                    onChange={(e) => onInputChange(e)}
                                />


                                <label className='d-flex justify-content-around'> Player IsForeign</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='foreign'
                                    placeholder='Enter Player isForeign'
                                    value={foreign}
                                    onChange={(e) => onInputChange(e)}
                                />

                                <label className='d-flex justify-content-around'> Image URL</label><br />
                                <input
                                    className='form-control'
                                    type='link'
                                    name='imageUrl'
                                    placeholder='Enter Player Image Url'
                                    value={imageUrl}
                                    onChange={(e) => onInputChange(e)}
                                />


                                <button type='submit' className='btn btn-primary'>Submit</button>

                                <Link className='btn btn-danger mx-2' to="/player">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default AddPlayer;