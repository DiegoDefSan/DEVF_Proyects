import React, { Component } from 'react';

export const DataContext = React.createContext({});

export class DataProvider extends Component {
    state = {
        loading: true,
        products: [],
        cart: [],
        users: [],
        searchTerm: '',
        login: false,
        admin: false, 
        user: null
    }

    async componentDidMount() {
        const getDataProducts = async (id) => {
            const res=await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await res.json();
            return data;
        }
        const getDataUsers = async (id) => {
            let res = await fetch(`https://fakestoreapi.com/users/${id}`);
            let data = await res.json();
            data.admin=false;
            return data;
        }
        //Products
        try {
            for (let i=0; i<20; i++)
            {
                let dataProduct=await getDataProducts(i+1);
                this.state.products.push(dataProduct);
            }
        }
        catch (error) {
            console.log(error);
        }
        //Users
        let userAdmin = {
            "address": 
            {
                "geolocation": 
                {
                    "lat": "-37.3159",
                    "long": "81.1496"
                },
                "city": "Lima",
                "street": "Domingo Orue",
                "number": 649,
                "zipcode": "15047"
            },
            "id": 11,
            "email": "defsan35@gmail.com",
            "username": "defsan35",
            "password": "1234",
            "name": 
            {
                "firstname": "diego",
                "lastname": "defilippi"
            },
            "phone": "956251220",
            "__v": 0,
            "admin": true
        }
        try {
            for (let i=0; i<10; i++)
            {
                let dataUser = await getDataUsers(i+1);
                this.state.users.push(dataUser);
            }
            this.state.users.push(userAdmin);
            console.log(this.state.users);
        }
        catch (error) {
            console.log(error);
        }
        this.setState({loading: false})
    }

    addCart = (id) => {
        const {products, cart, login} = this.state;
        const check = cart.every(e => {
            return e.id!==id;
        })
        if (login) {
            if (check) {
                const data = products.filter(e => {
                    if (e.id===id) {
                        e.count=1;
                        return e.id===id;
                    }
                })
                this.setState({cart: [...cart, ...data]});
            }
            else {
                alert('The item is already in your cart.');
            }
        }
        else {
            alert('You have to be log in to add a product to your cart.');
        }
    }

    increase = (id) => {
        const {cart} = this.state;
        cart.forEach(e => {
            if (e.id===id) {
                e.count++;
            }
        })
        this.setState({cart: cart});
    }

    decrease = (id) => {
        const {cart} = this.state;
        cart.forEach(e => {
            if (e.id===id) {
                e.count===1 ? e.count=1: e.count--;
            }
        })
        this.setState({cart: cart});
    }

    removeProduct = (id) => {
        const {cart} = this.state;
        cart.forEach((e, index) => {
            if (e.id===id) {
                cart.splice(index, 1);
            }
            this.setState({cart: cart});
        })
    }

    sumOfPrices = () => {
        const {cart} = this.state;
        let suma=0;
        cart.forEach(e => {
            suma+=e.price*e.count;
        })
        return Math.round(suma*100)/100;
    }

    searchAnItem = (event) => {
        this.setState({searchTerm: event.target.value});
    }

    validateEmail = (element) => {
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(element);
    }

    userInLogin = (email, password) => {
        const {users} = this.state;
        if (!this.validateEmail(email) || password.length===0) {
            alert('Email o contraseña invalido')
            return false;
        }
        else {
            for (let i=0; i<users.length; i++)
            {
                if (users[i].email===email && users[i].password===password) {
                    this.setState({login: true});

                    if (users[i].admin) {
                        this.setState({admin:true});
                    }

                    this.setState({user: users[i]});
                    console.log(this.state.user);
                    return true;
                }
            }
            alert('Inicio fallido'); return false;
        }
    }

    userLogOut = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            this.setState({login: false, admin: false, user: null, cart: []});
        }
    }

    freeUserToRegister = (username) => {
        const {users} = this.state;
        for (let i=0; i<users.length; i++) {
            if (users[i].username===username) {
                return false;
            }
        }
        return true;
    }
    freeEmailToRegister = (email) => {
        const {users} = this.state;
        for (let i=0; i<users.length; i++) {
            if (users[i].email===email) {
                return false;
            }
        }
        return true;
    }
    
    userSignUp = (email, username, password, repeatPassword, name, lastname) => {
        
        if (!this.validateEmail(email)||!this.freeEmailToRegister(email)) {
            alert('Correo invalido');
            return false;
        } else if (username.length<=5 ||!this.freeUserToRegister(username)) {
            alert('Username invalido.');
            return false;
        } else if (password!==repeatPassword || password.length<=5) {
            alert('Password invalido');
            return false;
        } else {
            let us1 = {
                "address": {
                    "geolocation": {
                        "lat": "40.3467",
                        "long": "-30.1310"
                    },
                    "city": "Cullman",
                    "street": "Frances Ct",
                    "number": 86,
                    "zipcode": "29567-1452"
                },
                "id": this.state.users.length+1,
                "email": email,
                "username": username,
                "password": password,
                "name": {
                    "firstname": name,
                    "lastname": lastname
                },
                  "phone": "1-567-094-1345",
                  "__v": 0
            }
            this.state.users.push(us1);
            this.setState({user: us1});
            console.log(this.state.users);
            return true;
        }
    }

    addAProductToTheShop = (title, price, desc, cat, image) => {
        let pattern = /(https?:\/\/.*\.(?:png|jpg))/i;
        if (title.length===0) {
            alert('Invalid title');
            return false;
        } else if (price===0) {
            alert('Invalid price');
            return false;
        } 
        else if (desc.length===0) {
            alert('Invalid description.');
            return false;
        } else if (cat.length===0) {
            alert('Invalid category');
            return false;
        } else if (image.length===0 || !pattern.test(image)) {
            alert('Invalid URL');
            return false;
        }
        else {
            let p1 = {
                "id": this.state.products.length+1,
                "title": title,
                "price": price,
                "description": desc,
                "category": cat,
                "image": image,
                "rating": {
                    "rate": 0,
                    "count": 0
                }
            }
            
            this.state.products.push(p1);
            console.log(this.state.products);
            alert('Product added successfully');
            return true;
        }
    }
    
    render () {
        const {loading, products, cart, searchTerm, login, admin, user} = this.state;
        const {addCart, increase, decrease, removeProduct, sumOfPrices,
            searchAnItem, userInLogin, userLogOut, userSignUp, addAProductToTheShop} = this;
        return (
            <DataContext.Provider value={{loading, products, addCart, cart, increase, decrease,
                removeProduct, sumOfPrices, searchTerm,searchAnItem, login, admin,
                userInLogin, user, userLogOut,userSignUp, addAProductToTheShop}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default DataProvider