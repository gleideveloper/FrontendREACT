import React, {Component} from 'react';

class CardImage extends Component {
    render() {
        const {imageSrc} = this.props;
        return (
            <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Image cap"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <image href={imageSrc} width="100%" height="100%"/>
            </svg>
        );
    }
}

class CardBody extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className="card">
                <CardImage imageSrc={item.imageSrc}/>
                <div className="card-body">
                    <h5 className="card-title">Nome: {item.name}</h5>
                    <h5 className="card-title">Preço: {item.price}</h5>
                </div>
            </div>
        );
    }
}

class Card extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className="col">
                <CardBody item={item}/>
            </div>
        );
    }
}

export default Card;
