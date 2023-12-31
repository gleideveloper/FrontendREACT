import React, { Component } from 'react';

class Cart extends Component {
    render() {
        const { cartItems, removeFromCart } = this.props;

        if (cartItems.length === 0) {
            return <div>Seu carrinho está vazio.</div>;
        }

        return (
            <div id="cart">
                <h2>Carrinho de Compras</h2>
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className="mt-2">
                            {item.name} - {item.price}{' '}
                            <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Remover</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Cart;