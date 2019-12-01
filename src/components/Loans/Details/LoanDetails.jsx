import React, { Component } from "react";
import './LoanDetails.scss';
import {TextField} from '../../UI/index'
import {Redirect} from 'react-router-dom'
import Hedaer from "../../Header/Header.jsx";

class LoanDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            disabled:true,
            classButton:'Redact'
        }
    }

    handleClickRedact(){
        this.setState({
            ...this.state,
            disabled:false,
            classButton:'Save'
        })
    }
    handleClickSave(){
        this.setState({
            ...this.state,
            disabled:true,
            classButton:'Redact'
        })
    }

    render(){
        let data =JSON.parse(localStorage.getItem("data"));
        const { disabled, classButton } = this.state

        return(
            (localStorage.username==="admin" && localStorage.password==='123') ?
            <div>
                <Hedaer/>
                <div className="contentMain">
                {[data].map(function(item,i){
                    const data=item.data
                    const issueDetails = data.issue_method.issue_method_details
                return(
                    <div key={i} className="LoansForm ">
                        <h1>Детали займа №{data.number}</h1>
                        <div className="LoansForm__details">
                            <TextField 
                                name="number"
                                label='Номер'
                                disabled={disabled}
                                value={data.number} 
                                
                            />
                            <TextField 
                                name="status"
                                label='Статус'
                                disabled={disabled}
                                value={data.status_name} 
                            />
                            <TextField 
                                name="interest"
                                label='Процентная ставка по займу'
                                disabled={disabled}
                                value={`${data.interest}%`}
                            />
                            <TextField 
                                name="issue_date"
                                label='Дата выдачи займа'
                                disabled={disabled}
                                value={data.issue_date} 
                            />
                            <TextField 
                                name="return_date"
                                label='Планируемая дата закрытия займа'
                                disabled={disabled}
                                value={data.return_date} 
                            />
                            <TextField 
                                name="issue_amount"
                                label='Сумма выдачи займа'
                                disabled={disabled}
                                value={data.issue_amount} 
                            />
                            <TextField 
                                name="issue_term"
                                label='Выбранный срок займа на момент выдачи'
                                disabled={disabled}
                                value={data.issue_term} 
                            />
                            <TextField 
                                name="issue_term"
                                label='Выбранный срок займа на момент выдачи'
                                disabled={disabled}
                                value={data.issue_term} 
                            />
                            <TextField 
                                name="repaid_amount"
                                label='Общая сумма оплат по займу'
                                disabled={disabled}
                                value={data.repaid_amount} 
                            />
                            <TextField 
                                name="overdue_days"
                                label='Количство дней просрочки'
                                disabled={disabled}
                                value={data.overdue_days} 
                            />
                            <TextField 
                                name="issue_type"
                                label='Тип выдачи BankCard / IBAN'
                                disabled={disabled}
                                value={data.issue_method.issue_type} 
                            />
                            <TextField 
                                name="issueNumber"
                                label='Номер банковского счёта/карты'
                                disabled={disabled}
                                value={data.issue_method.issue_type!=='IBAN' ? issueDetails.number : null} 
                            />
                            <TextField 
                                name="is_active"
                                label='Активность'
                                disabled={disabled}
                                value={(issueDetails.is_active===true && data.issue_method.issue_type!=='IBAN') ? 'Активна': data.issue_method.issue_type==='IBAN' ? null : 'Не активна'} 
                            />
                            <TextField 
                                name="card_type"
                                label='Тип карты'
                                disabled={disabled}
                                value={data.issue_method.issue_type!=='IBAN' ? issueDetails.card_type : null} 
                            />
                            <TextField 
                                name="verified"
                                label='Верификация'
                                disabled={disabled}
                                value={(issueDetails.verified===true && data.issue_method.issue_type!=='IBAN') ? 'Верифицирована' : data.issue_method.issue_type==='IBAN' ? null :'Не верифицирована'} 
                            />
                            <TextField 
                                name="message"
                                label='Сообщение для пользователя'
                                disabled={disabled}
                                value={data.issue_method.issue_type!=='IBAN' ? issueDetails.message: null} 
                            />
                            <TextField 
                                name="return_amount"
                                label='Сумма к возврату'
                                disabled={disabled}
                                value={data.return_amount}
                            />
                            <TextField 
                                name="return_on_current_date"
                                label='Сумма к возврату сегодня'
                                disabled={disabled}
                                value={data.return_on_current_date}
                            />
                            <TextField 
                                name="prolongation_amount"
                                label='Сумма для пролонгации'
                                disabled={disabled}
                                value={data.prolongation_amount}
                            />
                        </div>
                    </div>
                )
                })}
                {localStorage.username==="admin" && localStorage.password==='123' ?
                (disabled===true ?
                        <button className={classButton} onClick={this.handleClickRedact.bind(this)}>Редактировать</button>
                        :
                        <div className="contentSave">
                            <button className={classButton} onClick={this.handleClickSave.bind(this)}>Сохранить</button>
                            <TextField 
                                type='file' 
                                label="Прикрепить документ"
                            />
                        </div>
                    )
                    :
                    null
                }
                </div>
            </div>
            :
            <Redirect to='/api/login'/>
        )
    }
}

export default LoanDetails