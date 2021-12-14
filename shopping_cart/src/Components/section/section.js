import React, { Component } from 'react';
import Products from './product';
import Details from './details';
import Cart from '../cart/cart';
import Login from '../login_section/login';
import Register from '../login_section/register_section';
import AddProduct from '../login_section/addproduct';
import {
    Routes,
    Route,
} from "react-router-dom";

export class Section extends Component {
    render () {
        return (
            <section>
                <Routes>
                    <Route path='/' element={<Products/>}/>
                    <Route path='/product' element={<Products/>}/>
                    <Route path='/product/:id' element={<Details/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/add_product' element={<AddProduct/>}></Route>
                </Routes>
            </section>
        )
    }
}

export default Section;