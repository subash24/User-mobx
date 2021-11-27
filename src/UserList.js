import React from "react";
import { useUserContext } from "./UserContext";
import { Observer } from "mobx-react";


export const UserList = () => {
  const userStore = useUserContext();
  return (
    <Observer>
      {() =>(
            <div>
            <ul>
              {(userStore.users.length !== 0) ? userStore.users.map((user) => (
                <li key={user.email}>{`${user.name.title} ${user.name.first} ${user.name.last}`}</li>
              )):<h5>No Users</h5>}
            </ul>
          </div>
      )}
    </Observer>
  );
};
