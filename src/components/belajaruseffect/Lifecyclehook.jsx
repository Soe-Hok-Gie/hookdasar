import React,{useState,useEffect } from 'react'

const Lifecyclehook = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((json) => {
            setName (json.name)
        });
    },[])

    return (
        <div>
        <h3>Name : {name}</h3>
        </div>
    )
}

export default Lifecyclehook
