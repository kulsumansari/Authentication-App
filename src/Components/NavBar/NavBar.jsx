import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { navData } from '../../data/data'
import LoginContext from '../../utils/LoginContext';
import styles from'./NavBar.module.css'

function NavBar(props){
    let {navLinks} = navData;
    let {isLoggedIn} =useContext(LoginContext)
    return(
         <div className={styles.navigation}>
            <div className={styles.companyLogo}>
                <h1>Pass.me</h1>
            </div>
            <ul className={styles.navContainer}> 
                {
                    navLinks.map((link)=>{
                        return <li key={link.linkId} className={styles.navItem}>
                            { 
                                !isLoggedIn ?
                                !link.isProtected && <Link to={link.redirectTo} className={styles.navLink} > {link.link} </Link>
                                :
                                link.isProtected && <Link to={link.redirectTo} className={styles.navLink} > {link.link} </Link>
                            }
                        </li>
                    })
                }
        </ul>
      </div>
    )
}
export default NavBar;