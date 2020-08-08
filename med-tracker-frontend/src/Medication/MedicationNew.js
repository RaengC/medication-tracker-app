import React, { useState } from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addMedication } from '../Api'

const MedicationNew = (props) => {

    const [name, setName] = useState('')
    const [totalQuantity, setTotalQuantity] = useState('')
    const [dosage, setDosage] = useState('')

    const [notes, setNotes] = useState('')
    const [fiveMin, setFiveMin] = useState('')
    const [fifteenMin, setFifteenMin] = useState('')
    const [noReminder, setNoReminder] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        addMedication({
            name: name,
            totalQuantity: totalQuantity,
            dosage: dosage,
            notes: notes,
            fiveMin: fiveMin,
            fifteenMin: fifteenMin,
            noReminder: noReminder
        })
        setName('')
        setTotalQuantity('')
        setDosage('')
        setNotes('')
        setFiveMin(5)
        setFifteenMin(15)
        setNoReminder(null)
    }



    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for="name" sm={2}>Name</Label>
                <Col sm={10}>
                    <Input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Add Medication/Suppliment name"
                        onChange={(e) => setName(e.currentTarget.value)}
                        value={name}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="totalQuantity" sm={2}>Total Quantity</Label>
                <Col sm={10}>
                    <Input
                        type="totalQuantity"
                        name="totalQuantity"
                        id="totalQuantity"
                        placeholder="Add Total quantity of medication in bottle"
                        onChange={(e) => setTotalQuantity(e.currentTarget.value)}
                        value={totalQuantity}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="dosage" sm={2}>Dosage</Label>
                <Col sm={10}>
                    <Input
                        type="dosage"
                        name="dosage"
                        id="dosage"
                        placeholder="Add Dosage taken in (ie 1 pill)"
                        onChange={(e) => setDosage(e.currentTarget.value)}
                        value={dosage}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="frequency" sm={2}>Frequency Taken</Label>
                <Col sm={10}>
                    <Input
                        type="select"
                        name="select"
                        id="exampleSelect"
                    >
                        <option>Daily</option>
                        <option>Weekly</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="selectMulti" sm={2}>Time Taken</Label>
                <Col sm={10}>
                    <Input
                        type="select"
                        name="selectMulti"
                        id="selectMulti"
                        multiple
                    >
                        <option>8am</option>
                        <option>9am</option>
                        <option>10am</option>
                        <option>11am</option>
                        <option>12pm</option>
                        <option>1pm</option>
                        <option>2pm</option>
                        <option>3pm</option>
                        <option>4pm</option>
                        <option>5pm</option>
                        <option>6pm</option>
                        <option>7pm</option>
                        <option>8pm</option>
                        <option>9pm</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleText" sm={2}>Personal Notes</Label>
                <Col sm={10}>
                    <Input
                        type="textarea"
                        name="text"
                        id="exampleText"
                        onChange={(e) => setNotes(e.currentTarget.value)}
                        value={notes}
                    />
                </Col>
            </FormGroup>

            <FormGroup tag="fieldset" row>
                <legend className="col-form-label col-sm-2">Set Reminder Alert</legend>
                <Col sm={10}>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="radio2"
                                value={5}
                            />{' '}
              Set reminder to take medication at 5 minuites
            </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="radio2"
                                value={15}
                            />{' '}
                Set reminder to take medication at 15 minuites
            </Label>
                    </FormGroup>
                    <FormGroup check >
                        <Label check>
                            <Input
                                type="radio"
                                name="radio2"
                                value={null}
                            />{' '}
              Disable reminders
            </Label>
                    </FormGroup>
                </Col>
            </FormGroup>

            <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                </Col>
            </FormGroup>
        </Form>
    );
}

export default MedicationNew;