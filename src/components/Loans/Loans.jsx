import React, { Component } from "react";
import './Loans.scss';
import {Redirect} from 'react-router-dom'
const libraries = require('./Loans.json');
import Hedaer from "../Header/Header.jsx";

class Loans extends Component {
    constructor(props){
        super(props)
        this.state={}
    }

    handleTableClick(item){
           localStorage.setItem ("data", JSON.stringify(item));
           let data =JSON.parse(localStorage.getItem("data"));
           this.props.history.push(`/api/loan/${data.data.number}/detail`)
    }

    render(){
        return(
            (localStorage.username==="admin" && localStorage.password==='123') ?
            <div>
                <Hedaer/>
                <div className="contentMain">
                    <h1>История займов</h1>
                    <table className="List">
                        <thead className="List__head">
                            <tr>
                                <th>Номер</th>
                                <th>Статус</th>
                                <th>Процентная ставка по займу</th>
                                <th>Дата выдачи займа</th>
                                <th>Планируемая дата закрытия займа</th>
                                <th>Сумма выдачи займа</th>
                            </tr>
                        </thead>
                        <tbody>
                        {libraries.map((item,i)=>{
                            const data=item.data
                        return(
                                <tr key={i} id={data.number}  onClick={() => this.handleTableClick(item)}>
                                    <td data-label="Номер" >{data.number}</td>
                                    <td data-label="Статус" >{data.status_name}</td>
                                    <td data-label="Процентная ставка по займу" >{`${data.interest}%`}</td>
                                    <td data-label="Дата выдачи займа" >{data.issue_date}</td>
                                    <td data-label="Планируемая дата закрытия займа" >{data.return_date}</td>
                                    <td data-label="Сумма выдачи займа" >{data.issue_amount}</td>
                                </tr>
                        )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            :
            <Redirect to='/api/login'/>
            
        )
    }
}

export default Loans