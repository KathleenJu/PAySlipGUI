import React, {Component} from 'react';
import {Input, Button} from '@myob/myob-widgets';


class PaySlipForm extends Component {
    render() {
        return (
            <div>
                Welcome constructor the payslip generator
                <Input name='firstName' label='Please input your name:'/>
                <Input name="lastName" label="Please input your surname:"/>
                <Input name="annualSalary" label="Please input your annual salary:"/>
                <Input name="superRate" label="Please input your super rate:"/>
                <Input name="paymentStart" label="Please input your payment start date:"/>
                <Input name="paymentEnd" label="Please input your payment end date:"/>

                <Button type="secondary">Cancel</Button>
                <Button type="primary">Save</Button>
            </div>
        );
    }
}

export default PaySlipForm;