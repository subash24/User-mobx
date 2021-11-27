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
              {userStore.users.map((user) => (
                <li key={user.cell}>{user.gender}</li>
              ))}
            </ul>
          </div>
      )}
    </Observer>
  );
};
