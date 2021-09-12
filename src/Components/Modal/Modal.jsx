import styles from './modal.module.css'

export default function Modal(props){
    return(<>
    <div className={styles.modalOverlay}> </div>
     <div className={styles.modal}>
        <h2>
            <i className='fa fa-close' style={{color:'red'}}></i>
            {props.message}
        </h2>
    </div>
    </>)
}