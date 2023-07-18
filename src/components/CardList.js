import React, {Component} from 'react'
import Card from "./Card";

class CardList extends Component {
    render() {
        const { characterData, addToCart } = this.props;
        return (
            <div className="row row-cols-1 row-cols-md-3 g-2">
                {characterData.map((item, index) => (
                    <Card key={index} item={item} addToCart={() => addToCart(item)} />
                ))}
            </div>
        );
    }
}
export default CardList;