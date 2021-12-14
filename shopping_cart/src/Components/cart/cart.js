import React, { Component } from 'react';
import { DataContext } from '../context/context';
import './styles_cart.css';

export class Cart extends Component {

    static contextType = DataContext;

    render() {
        const {cart, increase, decrease, removeProduct, sumOfPrices} = this.context;

        return (
            <div className = {cart.length!==0 ? 'main-container':'a'}>
                {cart.map(product=> (
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
                            <div className="cantity">
                                <button className="btn" id="minus" onClick={() => decrease(product.id)}>-</button>
                                <span className="num-items">{product.count}</span>
                                <button className="btn" id="plus" onClick={() => increase(product.id)}>+</button>
                            </div>
                            <button className="delete" onClick={() => removeProduct(product.id)}>Delete item</button>
                        </div>
                    </div>
                ))}
                {cart.length!==0 ? <div className="total"><b>Payment:</b> $<span>{sumOfPrices()}</span></div> : 
                    <div className="none-cart">You don't have anything on your cart. Buy now on the store!</div>}
            </div>
        )
    }
}

export default Cart;