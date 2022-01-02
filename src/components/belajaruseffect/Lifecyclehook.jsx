import React,{useState,useEffect } from 'react'

const Lifecyclehook = () => {
    const [name, setName] = useState("");
    const [update, setUpdate] = useState(false);

    //componentdidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((json) => {
            console.log ("componentDidmount")
            setName (json.name)
        });
    },[])

        const hendleSubmit = (event) =>{
            event.preventDefault();

            fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'PUT',
            body: JSON.stringify({
              id: 1,
              name:name
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) =>{
                setUpdate (true)
            });
        };
      //componentdidupdate
      useEffect(() => {
        if (setUpdate) {
            alert('nama berhasil diupdate');
        } 
            },[setUpdate])

       //componentWillUnmount
       useEffect(() => {

           return() => {
            console.log('component dicopot');
        } 
         },[])
    
    return (
        <div>
        <h3>Name : {name}</h3>
        <h3> update name :</h3>
                <form onSubmit={(event)=> hendleSubmit(event)}>
                    <input type="text" placeholder="change name" name="name" 
                    onChange={(event) => setName(event.target.value)}
                />
                <button type="submit">submit</button>
                </form>
        </div>
    )
}

export default Lifecyclehook
