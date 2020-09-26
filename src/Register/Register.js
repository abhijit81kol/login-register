import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            fname: '',
            email: '',
            password:'',
            confPassword:'',
            isPasswordConfirmed: false,
            isSubmitActive: 'disabled'
        }
    }

    fnameHandler = (event) => {
        this.setState({fname: event.target.value});
    }
    emailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    passwordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    confPasswordHandler = (event) => {
        this.setState({confPassword: event.target.value});
    }

    registrationhandler = () => {
        if(this.state.password===this.state.confPassword){
            const userData = {
                fullname: this.state.fname,
                email: this.state.email,
                password: this.state.password,
                loginTime: ''
            } 
            axios.post('https://login-register-d5d96.firebaseio.com/users.json', userData)
            .then(response=>{
                console.log(response);
            }).catch(error=>{
                console.log(error);
            });

            this.props.history.push({
                pathname: '/'
              });
        }
    }

    render(){
        //console.log(this.props);
        return(
            
            <div className="Register">
                <h1>Register</h1>
                
                <div className="Gap-Bottom">
                    <input type="text" 
                           className="Form-Field" 
                           name="fname" 
                           value={this.state.fname} 
                           onChange={this.fnameHandler}
                           placeholder="Full name" />
                </div>
                <div className="Gap-Bottom">
                    <input type="text" 
                           className="Form-Field" 
                           value={this.state.email} 
                           onChange={this.emailHandler}
                           name="email" 
                           placeholder="Email" />
                </div>
                <div className="Gap-Bottom">
                    <input type="password" 
                           className="Form-Field" 
                           value={this.state.password} 
                           onChange={this.passwordHandler}
                           name="password" 
                           placeholder="Password" />
                </div>
                <div className="Gap-Bottom">
                    <input type="password" 
                           className="Form-Field" 
                           value={this.state.confPassword} 
                           onChange={this.confPasswordHandler}
                           name="confPassword" 
                           placeholder="Confirm Password" />
                    {(this.state.password===this.state.confPassword) ?
                        <div><small>Password matched</small></div>
                        : <div><small>Password didn't match</small></div>
                    }
                </div>
                <div className="Gap-Bottom">
                    <input type="submit" 
                           className="Form-Field" 
                           onClick={this.registrationhandler} 
                           name="register" 
                           value="Register" />
                </div>

                <p>Already have an account? <Link to="/">Login</Link> here</p>
            </div>
        );
    }
}

export default Register;