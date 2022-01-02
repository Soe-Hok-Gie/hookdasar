import React, { Component } from 'react'
import Lifecycle from './Lifecycle'

export default class index extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isHide : false
        }
    }
    
    render() {

        const {isHide} = this.state

        return (
            <div>
                <h1>perbedaan lifeCycle & hook </h1>
                <hr/>
                <Lifecycle/>
            </div>
        )
    }
}
