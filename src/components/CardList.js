import React, {Component} from 'react'

const CardImage = ({ imageSrc }) => {
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
            <image href={imageSrc} width="100%" height="100%" />
        </svg>
    );
};

const CardBody = ({ item }) => {
    return (
        <div className="card">
            <CardImage imageSrc={item.imageSrc} />
            <div className="card-body">
                <h5 className="card-title">Nome: {item.name}</h5>
                <h5 className="card-title">Preço: {item.price}</h5>
            </div>
        </div>
    );
};

class CardList extends Component {
    render() {
        return (
            <div className="row row-cols-1 row-cols-md-3 g-2">
                {this.props.characterData.map((item, index) => (
                    <div className="col" key={index}>
                        <CardBody item={item} />
                    </div>
                ))}
            </div>
        );
    }
}

export default CardList;