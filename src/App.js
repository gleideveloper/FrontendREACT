import React, {Component} from 'react'
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container text-center">
                <Navbar/>
            </div>
        )
    }
}

export default App