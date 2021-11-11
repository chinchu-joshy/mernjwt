import React, { Component } from 'react'
import Purecomponents from './Purecomponents'
import RegularCOmponent from './RegularCOmponent'

export class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"chinchu"
        }
        
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name :"chinchu"
            })
        },2000)
    }
    
    render() {
        console.log("************************parent******************************")
        return (
            <div>
                Parent component
                <RegularCOmponent name={this.state.name}></RegularCOmponent>
                <Purecomponents name={this.state.name}></Purecomponents>
            </div>
        )
    }
}

export default Parent
