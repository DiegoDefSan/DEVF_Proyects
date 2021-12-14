import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/context';
import './styles_register.css';

export class Register extends Component {

    static contextType=DataContext;
    state = {
        email: '',
        username: '',
        password: '',
        repeatPassword: '',
        name: '',
        lastname: ''
    }

    render () {
        const {userSignUp} = this.context;

        const submitHandler = e => {
            e.preventDefault();
        }
        return (
            <section className="sign-up-section">
                <h2>Sign Up</h2>
                <form onSubmit={submitHandler}>
                    <h3>User data</h3>
                    <div className="cont_two">
                        <span>Email<input type="email" 
                                    placeholder="Email"
                                    onChange={(event)=>this.setState({email: event.target.value})}></input></span>
                        <span>Username<input type="text" 
                                        placeholder="Username"
                                        onChange={(event)=>this.setState({username: event.target.value})}></input></span>
                    </div>
                    <div className="cont_two">
                        <span>Password<input type="password" 
                                            placeholder="Password"
                                            onChange={(event)=>this.setState({password: event.target.value})}></input></span>
                        <span>Repeat password<input type="password" 
                                                placeholder="Repeat password"
                                                onChange={(event)=>this.setState({repeatPassword: event.target.value})}></input></span>
                    </div>
                    
                    <h3>Personal data</h3>
                    <div className="cont_two">
                        <span>Name<input type="text"
                                        placeholder="Name"
                                        onChange={(event)=>this.setState({name: event.target.value})}></input></span>
                        <span>Lastname<input 
                                        type="text" 
                                        placeholder="Lastname"
                                        onChange={(event)=>this.setState({lastname: event.target.value})}></input></span>
                    </div>
                    <div className="cont_two">
                        <span>City<input type="text" placeholder="City"></input></span>
                    </div>
                    
                    <div className="cont_two">
                        <span>Street<input type="text" placeholder="Street"></input></span>
                        <span>Number<input type="number" placeholder="Number"></input></span>
                    </div>
                    <div className="cont_two">
                        <span>Zipcode<input type="text" placeholder="Zipcode"></input></span>
                        <span>Cellphone<input type="tel" placeholder="Cellphone"></input></span>
                    </div>
                    
                    <button type="submit" 
                            id="singup-btn"
                            onClick={()=>userSignUp(this.state.email,
                                this.state.username,
                                this.state.password,
                                this.state.repeatPassword,
                                this.state.name,
                                this.state.lastname)}>Sign up</button>
                </form>
                <hr></hr>
                <div className="register-now">
                    <p>Do you have an account?</p>
                    <Link to="/login">Sing in!</Link>
                </div>
            </section>
        )
    }
}

export default Register;