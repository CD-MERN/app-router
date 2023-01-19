import React from 'react'
import { useParams } from 'react-router'

function Number() {
    const {number} = useParams();
    return (
        <div>{`Number is ${isNaN(number) ? 'Not Number' : number}`}</div>
    )
}

export default Number