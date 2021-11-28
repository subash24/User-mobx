
const userStore = ()=>{

    return {
        users:[],
        text : "hola amigos",
        isLoading:false,

        async loadUser(){
            this.isLoading = true
            const res = await fetch("https://randomuser.me/api/");
            const data = await res.json();
            this.setUser(data.results[0]);
            this.isLoading = false;
        },
        setUser(newUser){
            this.users.push(newUser);
            console.log(newUser);
            console.log(this.users);
        },
        deleteUser(key){
           const filtered = this.users.filter(user=>user.email!==key);
           this.users = filtered;
        },
    }
}

const profileStore = ()=>{
    return {
        text:"Wondeer"
    }
}


const stores = { userStore, profileStore};

export default stores