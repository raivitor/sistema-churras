import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {

    render() {
        return (
            <div className="col-md-8 center">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">Churras Garantido!</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to='/dashboard' >Dashboard</Link></li>
                                <li><Link to='/company/new' >Cadastrar nova empresa</Link></li>
                                <li><Link to='/order/new' >Novo pedido</Link></li>
                                <li><Link to='/account/' >Minha conta</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to='/' >LOGOUT</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}