import React, {Component} from 'react'
import CardList from "./components/CardList";
import Navbar from "./components/Navbar";

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
            {
                name: "Produto 4",
                price: "$40",
                imageSrc: "https://www.svgrepo.com/show/269884/transportation-big.svg"
            },
            {
                name: "Produto 5",
                price: "$50",
                imageSrc: "https://www.svgrepo.com/show/269884/transportation-big.svg"
            },
            {
                name: "Produto 6",
                price: "$60",
                imageSrc: "https://www.svgrepo.com/show/269884/transportation-big.svg"
            },
        ]
        return (
            <div className="container text-center">
                <Navbar/>
                <div className="mt-2">
                    <CardList characterData={cardList} />
                </div>
            </div>
        )
    }
}

export default App