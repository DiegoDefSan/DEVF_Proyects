import React, { Component } from 'react';
import CartIcon from '../svg/shopping-cart-solid.svg';
import SearchIcon from '../svg/icons8-search.svg';
import './styles_header.css';
import { DataContext } from '../context/context';
import {
    Link
} from "react-router-dom";

export class Header extends Component {
    
    static contextType = DataContext;

    state = {
        toggle: false,
        inputMenu: false,
        crossOptions: false
    }
    menuToggle = () => {
        this.setState({toggle: !this.state.toggle, 
            crossOptions: !this.state.crossOptions})
    }
    inputToggle = () => {
        this.setState({
            inputMenu: !this.state.inputMenu
        })
    }
    render () {
        const {cart, searchAnItem, login, admin, user} = this.context;
        return (
            <header>
                <div className={this.state.crossOptions ? "opt-active" : "options"} 
                onClick={this.menuToggle}>
                    <div className="arrow1"></div>
                    <div className="arrow2"></div>
                </div>
                <div className="logo">
                    <h1><Link to='/'> DEV:F Shopping</Link></h1>
                </div>
                <nav>
                    <ul className={this.state.toggle ? "toggle" : ""}>
                        <li><Link to='/'> Home</Link></li>
                        <li><Link to='/product'> Product</Link></li>
                        <li><Link to='/contact'> Contact</Link></li>
                        <li><Link to='/about'> About</Link></li>
                        {
                            (!login && !admin) ? <li><Link to='/login'> Login / Register</Link></li> :
                            <li><Link to='login'> {user.username}</Link></li>
                        }
                        
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt="" width="20"></img>
                        </Link>
                    </div>
                    <div className="input-container" onClick={this.inputToggle}>
                        <img src={SearchIcon} alt="" width="20"></img>
                    </div>
                </nav>
                <div className={this.state.inputMenu ? "input-active" : "input-not"}>
                    <input id="input-text" 
                        type="text" 
                        placeholder="¿Qué deseas buscar?"
                        onChange={(event) => searchAnItem(event)}
                        ></input>
                </div>
            </header>
        )
    }

}

export default Header