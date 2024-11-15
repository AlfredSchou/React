import {useEffect, useState} from "react"

function App() {
    const[users, setUsers] = useState([])

    useEffect(() => {
        fetch ("https://randomuser.me/api/?results=5")
            .then (res => res.json())
            .then(data => setUsers(data.results))
    },[])
 
    return (
        <div>
            <p>
                {users.map( u=> <p>{u.name.first }, age {u.dob.age}</p>)}.

            </p>
        </div>
             
    );
}

export default App;
