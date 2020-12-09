import React from 'react'
import Image from '../Components/Image'
import {yes, no} from '../objects'
// import {no} from '../objects'

class ImageContainer extends React.Component{

    renderImage = () => {
        return <Image noImage={no['no-image']} yesImage={yes['yes-image']} noStatement={no['no-statement']} yesStatement={yes['yes-statement']} />
    }

    handleSwitch = (event) => {
        console.log(event)
    }

    render() {
        return(
            <>
                {this.renderImage()}
            </>
        )
    }
}

export default ImageContainer;