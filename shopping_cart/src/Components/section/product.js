import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {DataContext} from '../context/context';
import './styles_products.css';

export class Products extends Component {

    static contextType = DataContext;

    render () {
        const {loading, products, searchTerm}=this.context;

        return (
            <div className='product'>
                {loading ? <div className="circle"></div> :
                products.filter((val) => {
                    if (searchTerm==='') {return val;}
                    else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    {
                        return val
                    }
                }).map(e => (
                        <div className="card" key={e.id}>
                            <div className="img-container">
                                <Link to={`/product/${e.id}`}>
                                    <img src={e.image} alt="img"/>
                                </Link>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link to={`/product/${e.id}`}>{
                                        e.title.length < 40 ? e.title :
                                        e.title.slice(0, 34) + '...'
                                    }</Link>
                                </h3>
                                <div className="price">Price: ${e.price}</div>
                                <button onClick={() => this.context.addCart(e.id)}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Products;
