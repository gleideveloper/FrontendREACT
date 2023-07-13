import React, {Component} from 'react'

const NavbarDropdownList = () => {
    return (
        <ul className="dropdown-menu">
            {/* eslint-disable-next-line*/}
            <li><a className="dropdown-item" href="#">Cadastrar</a></li>
                {/* eslint-disable-next-line*/}
            <li><a className="dropdown-item" href="#">Editar</a></li>
            {/* eslint-disable-next-line*/}
            <li><a className="dropdown-item" href="#">Deletar</a></li>
        </ul>
    );
}
const NavbarItemList = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                {/* eslint-disable-next-line*/}
                <a className="nav-link active" aria-current="page" href="#">Login</a>
            </li>
            <li className="nav-item">
                {/* eslint-disable-next-line*/}
                <a className="nav-link" href="#">Signup</a>
            </li>
            <li className="nav-item dropdown">
                {/* eslint-disable-next-line*/}
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                   aria-expanded="false">
                    Produtos
                </a>
                <NavbarDropdownList/>
            </li>
        </ul>
    );
}

const NavbarFormSearch = () => {
    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search"
                   aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
}
const NavbarBodyContent = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavbarItemList/>
            <NavbarFormSearch/>
        </div>
    );
}
const NavbarBody = () => {
    return (
        <div className="container-fluid">
            {/* eslint-disable-next-line*/}
            <a className="navbar-brand" href="#">Navbar</a>
            <NavbarBodyContent/>
        </div>
    );
}

class Navbar extends Component {
    render() {
        return (<nav className="navbar navbar-expand-lg bg-primary">
            <NavbarBody/>
        </nav>)
    }
}

export default Navbar