import React, { Component } from 'react';
import {DataContext} from '../context/context';
import './styles_details.css';

export class Details extends Component {

    static contextType = DataContext;

    render () {
        const urlArr = window.location.href.split('/');
        const id = parseInt(urlArr[urlArr.length -1]);
        const {products}=this.context;
        const product=products[id-1];

        return (
            <section>
                <div className="container">
                    <div className="cont1">
                        <img src={product.image} alt="img"></img>
                    </div>
                    <div className="cont2">
                        <h2>{product.title}</h2>
                        <div className="price-cat">
                            <span><b>Price:</b> ${product.price}</span>
                            <span><b>Category:</b> {product.category}</span>
                        </div>
                        <p>Description: {product.description}</p>
                        <div className="rating">
                            <span> <b>Rate:</b> {product.rating.rate}</span>
                            <span><b>Opinions:</b> {product.rating.count}</span>
                        </div>
                        <button className="add-cart" onClick={() => this.context.addCart(product.id)}>Add to cart</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Details;