import { observer } from 'mobx-react-lite';
import React from 'react'
import { useStore } from '../context/StoreContext'
import style from './style.module.css'

const UserList = () => {
    const [userStore] = useStore();
    const {users,deleteUser} = userStore;
    return (
        <ul className={style.grid}>
            {
                users.length!==0?users
                .map(user=>(
                    <div className={style.card} key={user.email}>
                        <img className={style.image} src={user.picture.medium}/>
                        <div className={style.title}>
                        <h5>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h5>
                        <button className={style.del} onClick={()=>{deleteUser(user.email)}}>Delete</button>
                        </div>
                        </div>
                )
                )
                
                :<h3>No Users yet</h3>
            }
        </ul>
    )
}

export default observer(UserList);
