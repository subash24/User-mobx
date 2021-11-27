import { Observer } from 'mobx-react'
import React,{useState,useEffect} from 'react'
import { useUserContext } from './UserContext'
import { UserList } from './UserList';




const App = () => {
    const userStore = useUserContext();
    const [newUser, setnewUser] = useState({});
    useEffect(()=>{
        // userStore.addUser(newUser);
        if(Object.entries(newUser).length !== 0){
           console.log(newUser);
           userStore.addUser(newUser); 
        }
    },[newUser]) 

    const fetchUser = async()=>{
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        setnewUser(data.results[0]);
    }
    return (
    <Observer>
        {()=>(
            <section>
            <h1>{userStore.text}</h1>
            <button onClick={fetchUser}>Load user</button> 
            <UserList/>
            </section>
        )
        }
    </Observer>)
}

export default App
