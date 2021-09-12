import React from 'react'
import styles from './Button.module.css'

function Button(props){
    return(
        <button className={styles.button} onClick={props.onClick} name={props.name} > {props.label} </button>
    )
}

export default Button;