
//Creating a global data store


export const createUserStore = ()=>{
    return {
        text:"User List",
        users : [{gender:"male"}],

        addUser(user){
            this.users.push(user);
        }
    }
}