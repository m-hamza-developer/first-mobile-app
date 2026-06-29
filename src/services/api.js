const API_URL =
"https://jsonplaceholder.typicode.com/users";


export const getUsers = async()=>{

const response = await fetch(API_URL);


if(!response.ok){
throw new Error("Failed to fetch users");
}


return await response.json();

}



export const getUserById = async(id)=>{

const response = await fetch(
`${API_URL}/${id}`
);


if(!response.ok){
throw new Error("User not found");
}


return await response.json();

}