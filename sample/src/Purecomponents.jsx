import React, { PureComponent } from 'react'

 class Purecomponents extends PureComponent {
    render() {
        console.log("**************pure component render*********************")
        return (
            <div>
              pure component {this.props.name} 
            </div>
        )
    }
}

export default Purecomponents
