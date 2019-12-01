import React, { Component } from "react";
import {Redirect} from 'react-router-dom'
import Hedaer from "../Header/Header.jsx";

class NotFound extends Component {
    render() {
        return (
            (localStorage.username==="admin" && localStorage.password==='123') ?
            <div>
                <Hedaer/>
                <div className="contentMain">
                    <h1>404!</h1>
                </div>
            </div>
            :
            <Redirect to='/api/login'/>
        );
    }
}

export default NotFound;