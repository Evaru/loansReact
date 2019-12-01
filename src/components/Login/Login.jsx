import React, { Component } from "react";
import './Login.scss';
import {Input} from '../UI/index'
import Hedaer from "../Header/Header.jsx";

class Login extends Component {
    constructor(props){  
        super(props);  
        this.state = {};  
    }  
    componentDidMount() {
    }

    handleClick(event){
        
        event.preventDefault()
        const { username, password } = this.state
        localStorage.setItem('username', username);
        localStorage.setItem('password',password);
        if(localStorage.username==="admin" && localStorage.password==='123'){
            this.props.history.push('/api/loans')
            location.reload()
            
        }
        
    }

    onChangeHandle(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleLogOut(){
        localStorage.setItem('username', null);
        localStorage.setItem('password', null);
        location.reload()
    }

    render() {
        
        return (
            <div >
                {!(localStorage.username==="admin" && localStorage.password==='123') ?
                    <div className="container">
                        
                        <div className="container__title">
                            <p>Вход в личный кабинет</p>
                        </div>
                        <div className="container__auth">
                            <form className="container__auth-form"  onSubmit={this.handleClick.bind(this)}>
                                <Input 
                                    name='username'
                                    placeholder="Введите логин"
                                    onChange={(event)=>this.onChangeHandle(event)}
                                    required
                                />
                                <Input
                                    name='password'
                                    placeholder="Введите пароль"
                                    onChange={(event)=>this.onChangeHandle(event)}
                                    required
                                />
                                <div className="container__auth-form__submit">
                                    <button>Вход</button>
                                </div>
                                <span>{this.props.errorMessage}</span>
                            </form>
                        </div>
                    </div>
                    :
                    <div>
                        <Hedaer/>
                        <div className="contentMain">
                            <h1>{localStorage.username}, добро пожаловать в личный кабинет!</h1>
                            <button onClick={this.handleLogOut}>Разлогиниться</button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Login;