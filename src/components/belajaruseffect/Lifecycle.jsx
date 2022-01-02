import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:""
             
        }
    }
    
    componentDidMount (){
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                name:json.name
            })
        });
    }

    render() {
        return (
            <div>
                <h3>Name : {this.state.name}</h3>
                <hr/>
                <h3> update name :</h3>
                <form>
                    <input type="text" placeholder="change name" name="name" />
                </form>
            </div>
        )
    }
}
