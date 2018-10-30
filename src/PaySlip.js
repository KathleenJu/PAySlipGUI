import React, {Component} from 'react';
import {Card, Columns} from '@myob/myob-widgets';

class PaySlip extends Component {
    constructor(props) {
        super(props);
    }
    state = {
      test: this.props
    };

    render() {
        return (
            <div>
                <Card
                    header={<h3 className="text-left"> Your payslip has been generated!</h3>}
                    body={
                        <div>
                            <Columns type="two">
                                <div>
                                    Name:
                                </div>
                                <div>
                                    {}
                                </div>
                                <div>
                                    Pay Period:
                                </div>
                                <div>
                                    {}

                        </div>
                            </Columns>
                        </div>
                    }
                />
            </div>
        );
    }
}

export default PaySlip;
