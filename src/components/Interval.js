import { Button, Col, Row } from 'react-bootstrap';
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'

const Interval = (props) => {

    const [motoReserved, setMotoReserved] = useState(0);
    const [cardBg, setcardBg] = useState("light");
    const [cardTextColor, setcardTextColor] = useState("dark");

    const reserveMoto = () => {
        let currentMotoReserved = motoReserved;
        if (currentMotoReserved < 8){
            currentMotoReserved += 1;
            if(currentMotoReserved === 8){
                setcardBg("danger");
                setcardTextColor("light");
            }
        }

        return setMotoReserved(currentMotoReserved);
    };

    const freeMoto = () => {
        let currentMotoReserved = motoReserved;
        if (currentMotoReserved > 0){
            currentMotoReserved -= 1;
            if(currentMotoReserved < 8){
                setcardBg("light");
                setcardTextColor("dark");
            }
        }
        return setMotoReserved(currentMotoReserved);
    };

    return (
        <Card 
            style={{ width: '14rem', margin: '4px' }}
            bg={cardBg}
            text={cardTextColor}>
            <Card.Body>
                <Card.Title>{props.intervalData.begin + ' - ' + props.intervalData.end}</Card.Title>
                <Card.Subtitle className="mb-2">Horario</Card.Subtitle>
                <Card.Text>
                    Reserve un motociclista o bien libere uno con el link correspondiente.
                </Card.Text>
                <Row>
                <Col xs={6}>
                    <Button 
                        variant="primary"
                        onClick={reserveMoto}>Reservar</Button>
                </Col>
                <Col xs={6}>
                    <Button 
                        variant="dark"
                        onClick={freeMoto}>Liberar</Button>
                </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                Motociclistas reservados: {motoReserved}/8
            </Card.Footer>
        </Card>
    )
}

export default Interval;