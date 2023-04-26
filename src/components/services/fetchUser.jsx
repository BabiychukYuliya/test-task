import axios from "axios";

axios.defaults.baseURL = "https://642c6569208dfe25472f2492.mockapi.io/";

export async function fetchUsers() {
  const response = await axios.get('users');
    return response.data;
}



export const updateUserData = async(id,data)=>{
 
   const response =  await axios.put(`users/${id}`, data ) 
     return response.data;
}
  

