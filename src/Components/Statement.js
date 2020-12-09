import React from 'react'

class Statement extends React.Component {
    
    render(props) {
        console.log(this.props.statement)
        return(
            <h1>{this.props.statement}</h1>
        )
    }
}

export default Statement