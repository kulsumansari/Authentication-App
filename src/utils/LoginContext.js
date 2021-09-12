import React, { useState } from 'react';

const LoginContext = React.createContext(false);

export function LoginContextProvider(props){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const setLogin = (value) => {
        setIsLoggedIn(value);
    } 

    return (
        <LoginContext.Provider value={{isLoggedIn, setLogin}}>
            { props.children } 
        </LoginContext.Provider>
    )
}

export default LoginContext;