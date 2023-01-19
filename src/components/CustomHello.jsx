import React from 'react'
import { useParams } from 'react-router'

function CustomHello() {
    const {backgroundColor, color, message} = useParams();
    const isColor = (color) => {
        let style = new Option().style;
        style.color = color;
        return style.color === color;
    }
    const getStyle = (properties) => {
        return {
            backgroundColor: isColor(properties.backgroundColor) ? properties.backgroundColor : 'red',
            color: isColor(properties.color) ? properties.color : 'blue'
        };
    }
    return (
        <div style={getStyle({backgroundColor: backgroundColor, color: color})}>{`${message}`}</div>
    )
}

export default CustomHello