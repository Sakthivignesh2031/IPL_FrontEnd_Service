import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary justify-content-between text-white font-weight-bol fixed-top">
                <img src='https://www.iplt20.com/assets/images/ipl-logo-new-old.png' alt='logo' height={70} />
                <h2> IPL Dashboard </h2>
                <Link className='btn btn-primary btn-lg' to='/login'>Login</Link>
            </nav>



        </div>
    );
}

export default NavBar;