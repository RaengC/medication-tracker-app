import React from 'react'
import { Container, Row, ListGroup, ListGroupItem } from 'reactstrap';

const MedicationDisplay = (props) => {


    return (
        <Row>
            <ListGroup>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
        </Row>
    );
}

export default MedicationDisplay;