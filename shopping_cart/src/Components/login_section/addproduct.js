import React, { Component } from 'react';
import { DataContext } from '../context/context';

export class AddProduct extends Component {
    static contextType=DataContext
    
    state = {
        title: '',
        price: null,
        description: '',
        category: '',
        image: '',
    }

    render () {
        const {addAProductToTheShop} = this.context;

        const submitHandler = e => {
            e.preventDefault();
        }

        return (
            <section className='sign-up-section'>
                <h2>Add a product to the list</h2>
                <form onSubmit={submitHandler}>
                    <div className="cont_two">
                        <span>Title<input type="text" 
                            placeholder="Title"
                            onChange={(event)=>this.setState({title: event.target.value})}></input></span>
                        <span>Price<input type="number" 
                            placeholder="Price" min='1' step='0.01'
                            onChange={(event)=>this.setState({price: event.target.value})}></input></span>
                    
                    </div>
                    <div className='cont_two'>
                        <span>Description<textarea placeholder="Description"
                            onChange={(event)=>this.setState({description: event.target.value})}>
                            </textarea>
                    </span>
                    </div>
                    
                    <div className='cont_two'>
                        <span>Category<input type="Category" 
                            placeholder="Password"
                            onChange={(event)=>this.setState({category: event.target.value})}></input></span>
                    </div>
                    <div className='cont_two'>
                        <span>Image<input type="text"
                            placeholder='URL'
                            onChange={(event)=>this.setState({image: event.target.value})}></input></span>
                    </div>
                    
                    <button type="submit" 
                            id="singup-btn"
                            onClick={() => {addAProductToTheShop(
                                this.state.title, this.state.price,
                                this.state.description, this.state.category,
                                this.state.image
                            )}}>
                                Add
                            </button>
                </form>
            </section>
        )
    }
}

export default AddProduct;