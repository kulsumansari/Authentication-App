import {Route , Switch} from 'react-router-dom';
import Login from '../pages/login/login';
import Registration from '../pages/Registration/registration';
import ProtectedRoute from './ProtectedRoute';
import Logout from '../Components/Logout/logout';
import LandingPage from '../pages/LandingPage/LandingPage';
import Home from '../pages/Home/Home';

function AppRouter(){
   
    return(
        <div>
        <Switch>
            <ProtectedRoute path='/home' component={Home} exact>
                {/* <Home /> */}
            </ProtectedRoute>                  
            <Route path='/' exact>
                <LandingPage />
            </Route>
            <Route path='/register' exact>
                <Registration />
            </Route>
            <Route path='/login' exact>
                <Login/>
            </Route>
            <Route path='/logout' exact>
                <Logout/> 
            </Route>
        </Switch>
        </div>
        
    )
}
export default AppRouter;


