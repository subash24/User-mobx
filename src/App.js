import { Observer } from 'mobx-react'
import React,{useState,useEffect} from 'react'
import { useUserContext } from './UserContext'
import { UserList } from './UserList';
import style from '../styles/Home.module.css'



const App = () => {
    const userStore = useUserContext();
    const [newUser, setnewUser] = useState({});
    const [isLoading, setisLoading] = useState(false);
    useEffect(()=>{
        // userStore.addUser(newUser);
        if(Object.entries(newUser).length !== 0){
           console.log(newUser);
           userStore.addUser(newUser); 
        }
    },[newUser]) 

    const fetchUser = async()=>{
        setisLoading(true);
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        setnewUser(data.results[0]);
        setisLoading(false);
    }
    return (
    <Observer>
        {()=>(
            <section className={style.container}>
            <h1>{userStore.text}</h1>
            <button onClick={fetchUser} className={style.btn}>
                {isLoading ? (
                   <div className={style.loading}></div>
                ):(<p>Load user</p>)}
            </button> 
            <UserList/>
            </section>
        )
        }
    </Observer>)
}

export default App
