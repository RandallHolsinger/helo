import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Auth extends Component {
      constructor(props) {
           super(props) 


           this.state = {
               username: '',
               password: ''
           }
           this.handleUsername = this.handleUsername.bind(this);
           this.handlePassword = this.handlePassword.bind(this);
        }

        handleUsername(e) {
            this.setState({
                username: e.target.value
            })
        }

        handlePassword(e) {
            this.setState({
                password: e.target.value
            })
        }
        
        registerUser = async () => {
            const {username, password} = this.state
            try {
                let res = await axios.post(`/auth/register`, {username, password})
                console.log(res)
                this.props.updateUser(res.data)
                this.props.history.push('/dashboard')
            } catch(err) {
                alert('Username is Taken')
            }
        }

        loginUser = async () => {
            const {username, password} = this.state;
            try {
              let res = await axios.post(`/auth/login`, {username, password})
              console.log(res)
                this.props.updateUser(res.data)
                this.props.history.push('/dashboard')
            } catch {
               alert('incorrect Username or Password')
            }
        }

    render() {
        return(
            <div>
                <h1>Auth</h1>
                <input 
                  value={this.state.username}
                  onChange={this.handleUsername}
                  placeholder='Username'
                />
                <input 
                  value={this.state.password}
                  onChange={this.handlePassword}
                  type='password'
                  placeholder='Password'
                />
                <button onClick={this.loginUser}>LOGIN</button>
                <button onclick={this.registerUser}>Register</button>
            </div>
        )
    }
}

export default connect(null, {updateUser})(Auth)

