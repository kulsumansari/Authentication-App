import { FooterData } from '../../data/data'
import styles from './Footer.module.css'

function Footer(){
    let {footerLinkHead , footerLinks}= FooterData
    return(
    <footer className={styles.footer}>   
        <h3 className={styles.footerLinkHeader}>{footerLinkHead} </h3>
        {footerLinks.map((link)=>{
            return <i className={`${styles.footerLink} ${link.iconClass}`} key={link.linkId}></i>
        })}  
    </footer>
    )
}

export default Footer;