import React from 'react';
import {Link} from 'react-router-dom';

const Setting = () => {
    return(
        <div className="Register">
            <h1>Manage Profile</h1>
            <div className="Gap-Bottom">
                <input type="text" className="Form-Field" name="fname" placeholder="Full name" readOnly />
            </div>
            <div className="Gap-Bottom">
                <input type="text" className="Form-Field" name="email" placeholder="Email" readOnly />
            </div>
            <div className="Gap-Bottom">
                <input type="password" className="Form-Field" name="currPassword" placeholder="Current Password" />
            </div>
            <div className="Gap-Bottom">
                <input type="password" className="Form-Field" name="newPassword" placeholder="New Password" />
            </div>
            <div className="Gap-Bottom">
                <input type="password" className="Form-Field" name="confNewPassword" placeholder="Confirm New Password" />
            </div>
            <div className="Gap-Bottom">
                <input type="submit" className="Form-Field" name="update" value="Update" />
            </div>
            <p>Back to <Link to="/Home">Home</Link></p>
        </div>
    );
}

export default Setting;