import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/context';
import './styles_login.css';

export class Login extends Component {

    static contextType=DataContext;
    state = {
        email: '',
        password: ''
    }

    render() {
        const {userInLogin, login, user, userLogOut, admin} = this.context;

        const submitHandler = e => {
            e.preventDefault();
        }

        return (
            <div>
                {!login ? 
                    <section className="login-section">
                        <h2>Login</h2>
                        <form onSubmit={submitHandler}>
                            <input type="email" 
                                    placeholder="Email"
                                    onChange={(event) => this.setState({email: event.target.value})}
                                    ></input>
                            <input type="password" 
                                    placeholder="Password"
                                    onChange={(event) => this.setState({password: event.target.value})}
                                    ></input>
                            <button type="submit" id="log-btn"
                            onClick={()=>userInLogin(this.state.email, this.state.password)}>Log in</button>
                        </form>
                        <hr></hr>
                        <div className="register-now">
                            <p>Don't you have an account?</p>
                            <Link to="/register">Register here!</Link>
                        </div>
                    </section>
                : <section className="login-section">
                        <h2>Welcome, {user.username}!</h2>
                        <h3>What do you want to do now?</h3>
                        <div className='final-buttons'>
                            <Link to='/product'><button type='submit' className='logout-btn'>See the products</button></Link>
                            {admin ? 
                            <Link to='/add_product'><button type='submit' className='logout-btn'>Add products to the shop</button></Link>
                            : null}
                            <button type='submit' className='logout-btn' 
                                    onClick={()=>userLogOut()}>Log out</button>
                        </div>
                    </section>}
            </div>
            
        )
    }
}

export default Login;