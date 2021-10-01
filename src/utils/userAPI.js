const baseUrl = 'https://user-backend-server.herokuapp.com/users'

export const userLogin= async (email , password)=>{
    try{

        let response = await fetch(`${baseUrl}/login`,{
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },

                withCredentials: true,
                body: JSON.stringify({
                    "email" : email,
                    "password" : password
                })
        }) 
        let userData = await response.json();
        return userData.data;
        
    }
    catch(err){
        console.log(err)
    }
}

export const userRegistration= async (formData)=>{
    try{
        let response = await fetch(`${baseUrl}/register`,{
                method: 'POST', 
                body: formData
        }) 
        
        let userData = await response.json()
        return userData.data;
    }
    catch(err){
        console.log(err)
    }
}
