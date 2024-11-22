import {useEffect, useState} from "react"
import Person from "./Person"


function App() {

    const [users, setUsers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/search/person?query=spielberg&api_key=8de78cefdabf3358c01b68d636068b18")
        .then(res => res.json())
        .then(data => setUsers(data.results));
    },[]);

    return (
        <div>
            <p>Search result: </p>
            {users.length > 0 && < Person person = {users[currentIndex]} />}
            <div>
                {users.map((_,index) =>(
                    <button key={index} onClick = {() => setCurrentIndex(index)}> 
                        {index + 1}
                    </button>
                ))}
           </div>
        </div>
    );
}

export default App;
