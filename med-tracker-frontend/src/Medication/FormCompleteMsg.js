import React from 'react'
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap'

function FormCompleteMsg(props) {

    return (
        <React.Fragment>
            {
                props.submitMsg.msg.length > 0 &&
                <React.Fragment>
                    <h1>{props.submitMsg.msg}</h1>
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