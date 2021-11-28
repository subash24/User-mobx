import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../context/StoreContext'
import UserList  from './UserList';
import style from './style.module.css';


const App = () => {
   const [userStore] = useStore();
   const {isLoading,loadUser} = userStore;
    return (
        <div className={style.container}>
            {isLoading&&<p>Loading....</p>}
            {!isLoading&&<p>RESULTS</p>}
            <button className={style.btn} onClick={()=>loadUser()}>
                {isLoading ? (<div className={style.loading}></div>):(<p>Load user</p>)}
            </button>
            <UserList/>
        </div>
    )
}

export default observer(App)
