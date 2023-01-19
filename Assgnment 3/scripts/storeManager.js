
function saveUser(user){
    let oldUsers = readUsers();
    console.log(user); // this is obj
    oldUsers.push(user);
    let val = JSON.stringify(oldUsers);// parse the obj into string
    console.log(val);//this is string
    localStorage.setItem("users",val);
}

function readUsers(){
   let users = localStorage.getItem("users"); //get users from local storage
   console.log(users);

   if(!users){
    //Not users

        return [];//creating the empty array
   }else{
        let listUsers = JSON.parse(users);//parse the users back into the array
        console.log(listUsers);
        return listUsers;
   }
}

