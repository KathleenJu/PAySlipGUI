import React, {Component} from 'react';
import {Input, Button, Card} from '@myob/myob-widgets';

class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        annualSalary: 0,
        superRate: 0,
        paymentStartDate: "",
        paymentEndDate: ""
    };

    handleFirstNameChange = (event) => {
        this.setState({firstName: event.target.name});
    };

    handleLastNameChange = (event) => {
        this.setState({lastName: event.target.name});
    };

    handleAnnualSalaryChange = (event) => {
        this.setState({annualSalary: event.target.name});
    };

    handleSuperRateChange = (event) => {
        this.setState({superRate: event.target.name});
    };

    handlePaymentStartChange = (event) => {
        this.setState({paymentStartDate: event.target.name});
    };

    handlePaymentEndChange = (event) => {
        this.setState({paymentEndDate: event.target.name});
    };

    handleClick = (event) => {

    };

    render() {
        return (
            <div>
                <Card onSubmit={(e) => {this.handleClick(e)}}
                    header={<h3 className="text-left">Welcome to the payslip generator!</h3>}
                    body={
                        <div>
                            <Input name="firstName" label="Please input your name:" onChange={(event) => this.handleFirstNameChange(event)}/>
                            <Input name="lastName" label="Please input your surname:" onChange={(event) => this.handleLastNameChange(event)}/>
                            <Input name="annualSalary" label="Please input your annual salary:" onChange={(event) => this.handleAnnualSalaryChange(event)}/>
                            <Input name="superRate" label="Please input your super rate:" onChange={(event) => this.handleSuperRateChange(event)}/>
                            <Input name="paymentStart" label="Please input your payment start date:" onChange={(event) => this.handlePaymentStartChange(event)}/>
                            <Input name="paymentEnd" label="Please input your payment end date:" onChange={(event) => this.handlePaymentEndChange(event)}/>
                        </div>
                    }
                    footer={
                        <div className="bottom-right">
                            <Button type="secondary">Cancel</Button>
                            <Button id="get-payslip-button" type="primary" onClick={(e) => this.handleClick(e)}>Get Payslip</Button>
                        </div>
                    }
                />
            </div>
        );
    }
}

export default Form;