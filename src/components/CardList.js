import React, {Component} from 'react'
import Card from "./Card";

class CardList extends Component {
    render() {
        return (
            <div className="row row-cols-1 row-cols-md-1">
                <Card />
                <Card />
            </div>
        );
    }
}

export default CardList