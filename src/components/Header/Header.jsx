import React, { Component } from "react";
import {NavLink} from 'react-router-dom'

import './Header.scss';

class Header extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    componentDidMount(){
        if(localStorage.username==="admin" && localStorage.password==='123'){
            this.setState({
                ...this.state,
                title:'Личный кабинет'
            })
        } else{
            this.setState({
                ...this.state,
                title:'Войти'
            })
        }
    }
    render() {
        const path = location.pathname;
        return (
            <div className="top">
                <header>
                    <div className="logo"></div>
                    <div className="phone">
                        <div className="row">
                            <div className="region region-phone-top">
                                <div className="block">
                                    <div className="content">
                                        <a href="tel:87007007707 ">
                                            <strong>+7 (700) 700 77 07</strong>
                                        </a>
                                        <p>9:00 — 21:00, без выходных.</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="private_office">
                        { path!=='/api/login' ?
                            <NavLink to="/api/login"  className="normal" activeClassName="active" exact>{this.state.title}</NavLink>
                        :
                            null
                        }
                    </div>

                </header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/api/loans"  className="normal" activeClassName="active" exact >Займы</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;