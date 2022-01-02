import React,{useState,useEffect } from 'react'

const Lifecyclehook = () => {
    const [name, setName] = useState("");
    const [isUpdate, setIsupdate] = useState(false);

    //componentdidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((json) => {
            console.log ("componentDidmount")
            setName (json.name)
        });
    },[])

    // hendleSubmit = (event) =>{
    //     event.preventDefault();
    // }
    
    return (
        <div>
        <h3>Name : {name}</h3>
        <h3> update name :</h3>
                {/* <form onSubmit={(event)=> hendleSubmit(event)}> */}
                <form>
                    <input type="text" placeholder="change name" name="name" 
                    onChange={(event) => setIsupdate(event.target.value)}
                />
                <button type="submit">submit</button>
                </form>
        </div>
    )
}

export default Lifecyclehook
