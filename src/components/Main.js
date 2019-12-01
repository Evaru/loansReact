import React, { Component } from "react";
import NotFound from "./NotFound/NotFound.jsx"
import Login from "./Login/Login.jsx"
import LoanDetails from "./Loans/Details/LoanDetails.jsx"
import Loans from "./Loans/Loans.jsx"
import '../styles/Main.scss';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class Main extends Component {
    constructor(){  
        super();  
        this.state = {  
            login: "Admin" ,
            password:"123"
        };  
    }  

    render() {
        return (
            <div>
                <Router>                 
                    <main>
                        <Switch >
                            <Route path="/api/loans" exact component={Loans}/>
                            <Route path="/api/loan/:id/detail" exact component={LoanDetails}/>
                            <Route path="/api/login" exact component={Login}/>
                            <Route path="*" exact component={NotFound}/>   
                        </Switch>
                    </main>
                </Router>
            </div>
        );
    }
}

export default Main;