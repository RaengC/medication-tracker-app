import React, { useState } from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addMedication } from '../Api'

const MedicationNew = (props) => {

    const [name, setName] = useState('')
    const [totalQuantity, setTotalQuantity] = useState('')
    const [dosage, setDosage] = useState('')
    const [frequency, setFrequency] = useState('')
    const [time, setTime] = useState([])
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
            frequency: frequency,
            time: time,
            notes: notes,
            fiveMin: fiveMin,
            fifteenMin: fifteenMin,
            noReminder: noReminder
        })

        setName('')
        setTotalQuantity('')
        setDosage('')
        setFrequency('')
        setTime([])
        setNotes('')
        setFiveMin(5)
        setFifteenMin(15)
        setNoReminder(null)
    }

    function addSelectedTimes(event) {
        console.log(event.target.value)
        const selectedOptions = [...event.target.selectedOptions].map(o => o.value)
        setTime(selectedOptions)
        console.log(selectedOptions)
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
                        onChange={(e) => setFrequency(e.currentTarget.value)}
                        defaultValue={{ label: "Daily", value: 0 }}
                    >
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
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
                        multiple={true}
                        onChange={(event) => {
                            addSelectedTimes(event)
                        }}
                    >
                        <option value="07:00">7am</option>
                        <option value="08:00">8am</option>
                        <option value="09:00">9am</option>
                        <option value="10:00">10am</option>
                        <option value="11:00">11am</option>
                        <option value="12:00">12pm</option>
                        <option value="13:00">1pm</option>
                        <option value="14:00">2pm</option>
                        <option value="15:00">3pm</option>
                        <option value="16:00">4pm</option>
                        <option value="17:00">5pm</option>
                        <option value="18:00">6pm</option>
                        <option value="19:00">7pm</option>
                        <option value="20:00">8pm</option>
                        <option value="21:00">9pm</option>
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
                    <Button input type="submit">Submit</Button>
                </Col>
            </FormGroup>
        </Form >
    );
}

export default MedicationNew;