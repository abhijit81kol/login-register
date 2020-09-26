import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Login extends  Component {
    constructor(props){
        super(props);
        this.state={
            users: null,
            username:'',
            passWord:'',
            isLoginSuccess: null
        }
        this.loginHandler = this.loginHandler.bind(this);
    }

    usernameHandler = (event) => {
        this.setState({username: event.target.value})
    }

    passwordHandler = (event) => {
        this.setState({passWord: event.target.value})
    }

    loginHandler() {
        axios.get("https://login-register-d5d96.firebaseio.com/users.json").then((response)=>{
            /* this.setState({users: response.data});
            this.state.users.map(user=>{
                console.log(user);
            }); */
            //const uname = this.state.username;
            const userData=response.data;
                Object.keys(userData).map(user => {
                    if(userData[user]['email']===this.state.username) {
                        if(userData[user]['password']===this.state.passWord) {
                            //const logTime=new Date();
                            //axios.post("https://login-register-d5d96.firebaseio.com/users/"+userData[user]+"/loginTime", logTime);
                            this.props.history.push({
                                pathname: '/home',
                                search: '?user='+userData[user]['fullname']
                              });
                              this.setState({isLoginSuccess: true});
                        } else {
                            this.setState({isLoginSuccess: false});
                        }
                    } else {
                        this.setState({isLoginSuccess: false});
                    }
                });

        }).catch((error)=>{
            console.log(error);
        });
    }

    componentDidMount(){
        if(this.state.isLoginSuccess===true) {
            this.props.history.push({
                pathname: '/home'
              });
        }
    }

    render(){
        const isSuccess = (this.state.isLoginSuccess===false ? <div className="Error">Sorry! Username/Password doesn't exist</div>:null);
        return(
            <div className="Login">
                <h1>Login</h1>
                {isSuccess}
                <form>
                    <div className="Gap-Bottom">
                        <input type="text" 
                            name="username" 
                            className="Form-Field"
                            value={this.state.username} 
                            onChange={this.usernameHandler} 
                            placeholder="Username" />
                        </div>
                    <div className="Gap-Bottom">
                        <input type="password" 
                            name="password" 
                            className="Form-Field"
                            value={this.state.passWord} 
                            onChange={this.passwordHandler} 
                            placeholder="Password" />
                        </div>
                    <div className="Gap-Bottom">
                        <input type="button" 
                            name="submit" 
                            className="Form-Field"
                            value="Login"
                            onClick={this.loginHandler} />
                    </div>
                </form>
                <p>Don't have an account? <Link to="/Register">Register</Link> here</p>
            </div>
        );
    }
}

export default Login;