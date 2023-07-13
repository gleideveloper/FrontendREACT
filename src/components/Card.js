import React, {Component} from 'react'
const CardImage = () =>{
    return(
        <svg className="bd-placeholder-img card-img-top" width="100%" height="140"
             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap"
             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
        </svg>
    );
}

const CardBody = () =>{
    return (
        <div className="card">
            <CardImage/>
            <div className="card-body">
                <h5 className="card-title">Nome: </h5>
                <h5 className="card-title">Preço: </h5>
            </div>
        </div>
    );
}

class Card extends Component {
    render() {
        return (
            <div className="row row-cols-1 row-cols-md-3 g-2">
                <div className="col">
                    <CardBody/>
                </div>
                <div className="col">
                    <CardBody/>
                </div>
                <div className="col">
                    <CardBody/>
                </div>
            </div>
        )
    }
}

export default Card