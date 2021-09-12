import { useEffect , useContext} from 'react';
import { Redirect } from 'react-router-dom';
import LoginContext from '../../utils/LoginContext';

function Logout(){
    let {setLogin} = useContext(LoginContext)
    
    useEffect(()=>{
        setLogin(false)
    })

    return(
        <Redirect to='/'/>
    )
}
export default Logout