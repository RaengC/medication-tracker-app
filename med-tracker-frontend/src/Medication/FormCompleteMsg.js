import React from 'react'
import { Redirect } from 'react-router-dom'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

function FormCompleteMsg(props) {

    return (
        <React.Fragment>
            {
                props.submitMsg.msg.length > 0 &&
                <React.Fragment>
                    <Label >{props.submitMsg.msg}</Label>
                    {
                        props.submitMsg.state &&
                        <Button onClick={() => props.setRedirectHome(true)}>
                            View Medication List
                        </Button>
                    }
                </React.Fragment>
            }
            {
                props.redirectHome && <Redirect to='/profile' />
            }
        </React.Fragment>
    )
}
export default FormCompleteMsg