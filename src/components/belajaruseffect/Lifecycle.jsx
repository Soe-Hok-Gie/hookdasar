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
    
    hendleSubmit = (event) =>{
        event.preventDefault();

            fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'PUT',
            body: JSON.stringify({
              id: 1,
              name:this.state.name
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) =>{
                console.log(json)
            });
    }

    render() {
        return (
            <div>
                <h3>Name : {this.state.name}</h3>
                <hr/>
                <h3> update name :</h3>
                <form onSubmit={(event)=> this.hendleSubmit(event)}>
                    <input type="text" placeholder="change name" name="name" 
                    onChange={(event) => this.setState({name : event.target.value})}
                />
                <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
