import React from 'react'
import { Row } from 'react-bootstrap';
import Interval from '../components/Interval'

const Intervals = (props) => {
    return (
        <Row>
            {props.intervals.map((intervalData,index) => (
                <Interval 
                key={index}
                intervalData={intervalData}/>
            ))}
        </Row>
    )
}

export default Intervals;