
import React ,{useContext} from 'react';
import {Redirect} from 'react-router-dom'
import  Form from "../../Components/form/Form";
import LoginContext from '../../utils/LoginContext'

function Login(props){
    const {isLoggedIn} = useContext(LoginContext)
    return(
        isLoggedIn ? 
            <Redirect to='/home' />
            :
            <Form type='Login' />
    )
}

export default Login;