import React, {Component} from 'react';
import CardList from './components/CardList';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
        };
    }

    addToCart = (item) => {
        this.setState((prevState) => ({
            cartItems: [...prevState.cartItems, item],
        }));
    };

    removeFromCart = (index) => {
        this.setState((prevState) => {
            const updatedCartItems = [...prevState.cartItems];
            updatedCartItems.splice(index, 1);
            return {
                cartItems: updatedCartItems,
            };
        });
    };

    render() {
        const cardList = [
            {
                name: "Produto 1",
                price: "$10",
                imageSrc: "https://www.svgrepo.com/show/269884/transportation-big.svg"
            },
            {
                name: "Produto 2",
                price: "$20",
                imageSrc: "https://www.svgrepo.com/show/269884/transportation-big.svg"
            },
            {
                name: "Produto 3",
                price: "$30",
                imageSrc: "https://www.svgrepo.com/show/269884/transportation-big.svg"
            },
        ];

        const {cartItems} = this.state;

        return (
            <div className="container text-center">
                <Navbar cartItemCount={cartItems.length}/>
                <div className="mt-2">
                    <CardList characterData={cardList} addToCart={this.addToCart}/>
                </div>
                <div className="mt-2">
                    <Cart cartItems={cartItems} removeFromCart={this.removeFromCart}/>
                </div>
            </div>
        );
    }
}

export default App;
