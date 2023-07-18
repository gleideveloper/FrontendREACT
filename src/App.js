import React, {Component} from 'react'
import Table from './components/Table'

class App extends Component {

    state = {
        fieldsBody: [
            {
                name: 'Nat',
                email: 'nat@mail.com'
            },
            {
                name: 'João',
                email: 'joao@mail.com'
            },
            {
                name: 'José',
                email: 'jose@mail.com'
            },
            {
                name: 'Anna',
                email: 'anna@mail.com'
            },
        ],
    }

    removeCharacter = (index) => {
        const {fieldsBody} = this.state

        this.setState({
            fieldsBody: fieldsBody.filter((character, i) => {
                return i !== index
            }),
        })
    }

    render() {

        const {fieldsBody} = this.state

        return (
            <div className="container text-center">
                <Table characterData={fieldsBody} removeCharacter={this.removeCharacter}/>
            </div>
        )
    }
}

export default App