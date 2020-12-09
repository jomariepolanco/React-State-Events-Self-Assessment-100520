import React from 'react'
import Statement from '../Components/Statement'
import {yes} from '../objects.js'

class Image extends React.Component {
    constructor(props) {
        super()
        this.state = {
            image: props.noImage,
            statement: props.noStatement
        }
    }

    handleSwitch = () => {
        if (this.state.image === this.props.noImage) {
            this.setState({
                image: this.props.yesImage,
                statement: this.props.yesStatement
            })
        } else {
                this.setState({
                    image: this.props.noImage,
                    statement: this.props.noStatement
                })
        }
    }


    render() {
        console.log(this.props)
        return(
            <>
                <Statement statement={this.state.statement} />
                <img onClick={this.handleSwitch} alt="drake" src={this.state.image} />
            </>
        )
    }
}

export default Image