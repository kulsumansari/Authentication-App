
import { useState, useContext ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Form.module.css'
import { userLogin , userRegistration } from '../../utils/userAPI';
import Modal from '../Modal/Modal'
import LoginContext from '../../utils/LoginContext';

function Form(props){

    const [firstName ,setFirstName]=useState('');
    const [lastName ,setLastName]=useState('');
    const [email ,setEmail]=useState('');
    const [password, setPassword]=useState('')
    const [confirmPass, setConfirmPass]=useState('')
    const [Err , setErr] = useState('')

    const { setLogin} = useContext(LoginContext);

    useEffect(() => {
        if(Err){
          setTimeout(()=>{
            setErr('')
          }, 2000)
        } 
      }, [Err])

    const submitHandler= async(event)=>{
        event.preventDefault();
        switch(props.type){
            case 'Login':
                let data = await userLogin(email , password)
                if(data && data.token){
                    setLogin(true);
                    return;
                }
                setErr('Invalid Credentials')
                return;

            case 'Registration':
                let formData = new FormData();
                formData.append('firstname', firstName)
                formData.append('lastname', lastName)
                formData.append('email', email)
                formData.append('password', password)
                formData.append('confirmPassword', confirmPass)
                let regData = await userRegistration(formData)
                if(regData){
                    alert('Registration successful now you can login')
                    return;
                }
                setErr('Registration Failed')
                return;

            default:
                return;
        }
        
    }

    const handleChange=(event)=>{
        if(event.target.name === 'firstname'){
            setFirstName(event.target.value)
        }
        if(event.target.name === 'lastname'){
            setLastName(event.target.value)
        }
        if(event.target.name === 'email'){
            setEmail(event.target.value)
        }
        if(event.target.name === 'password'){
            setPassword(event.target.value)
        }
        if(event.target.name === 'confirmPassword'){
            setConfirmPass(event.target.value)
        }
    }
    
    return(
    <>
    {Err!=='' && <Modal message={Err}/>}

    <div className={styles.formContainer}>
        <h1 className={styles.formHeader}> {props.type} </h1>
    {       
            props.type === 'Login'?
            <>
                <form onSubmit={submitHandler}>
                    <input type='text' name='email' value={email} onChange={handleChange} placeholder="Email"/>
                    <input type='password'name='password' value={password} onChange={handleChange} placeholder='Password'/>
                    <p>Don't have an account? <Link to='/register'>Register Here</Link></p>
                    <Button label='Login'/>
                </form>
            </>
            :
            <>
                <form onSubmit={submitHandler} encType='multipart/form-data'>
                    <input type='text' name='firstname' value={firstName} onChange={handleChange} placeholder='First Name'/>
                    <input type='text' name='lastname' value={lastName} onChange={handleChange} placeholder='Last Name'/>
                    <input type='text' name='email' value={email} onChange={handleChange} placeholder='Email'/>
                    <input type='password' name='password' value={password} onChange={handleChange} placeholder='Password'/>
                    <input type='password' name='confirmPassword' value={confirmPass} onChange={handleChange} placeholder='Confirm Password'/>
                    <p>Already have an account? <Link to='/'>Login Here</Link></p>
                    <Button label='Register'/>
                </form>
            </>
    }
    
    </div>
    </>
    )
    
}

export default Form;