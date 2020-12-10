import React from 'react'

function Image(props){


    return (
        <img onClick={props.clickHandler} alt="drake" src={props.image}/>
        )
}

export default Image