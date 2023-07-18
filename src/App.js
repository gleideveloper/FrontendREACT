import React, {Component} from 'react'
import CardList from "./components/CardList";

class App extends Component {

    render() {
        const cardList= [
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
        ]
        return (
            <div className="container text-center">
                <CardList DataList={cardList}/>
            </div>
        )
    }
}

export default App