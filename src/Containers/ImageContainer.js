import React from 'react'
import {yes, no} from '../objects.js'
import Image from '../Components/Image'
import Statement from '../Components/Statement'

class ImageContainer extends React.Component {
    state = {
            statement: no['no-statement'],
            image: no['no-image']
        }

        clickHandler = () => {
            // console.log("in image container clicked")
            if (this.state.statement === no['no-statement'] && this.state.image === no['no-image']) {
                this.setState({
                        statement: yes['yes-statement'],
                        image: yes['yes-image']
                    })
                } else {
                    this.setState({
                        statement: no['no-statement'],
                        image: no['no-image']
                    })
            }
            }
            
    render() {
        console.log(this.state)
        return (
            <>
                <Statement statement={this.state.statement}/>
                <Image image={this.state.image} clickHandler={this.clickHandler}/>
            </>
            )
    }
}

export default ImageContainer