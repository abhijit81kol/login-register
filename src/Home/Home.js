import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className="Login">
            <h1>Welcome, Abhijit Bhattacharya</h1>
            <p>Manage your profile <Link to="/Setting">here</Link></p>
        </div>
    );
}

export default Home;